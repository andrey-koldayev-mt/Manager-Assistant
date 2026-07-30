import type { DealBundle } from '../domain/deal-analysis';
import { requestVibe } from './deal-bundle';
import { B24_API_KEY } from './b24';

const DEFAULT_AUDIO_MODEL = 'bitrix/deepdml/faster-whisper-large-v3-turbo-ct2';
const DEFAULT_RECORDINGS_FOLDER_ID = 259146;
const MAX_ALLOWED_AUDIO_BYTES = 25 * 1024 * 1024;
const TRANSCRIPT_MARKER = 'AI_CALL_TRANSCRIPT';
const AUDIO_EXTENSIONS = /\.(mp3|mp4|mpeg|mpga|m4a|wav|webm|flac|ogg)(?:$|[?#])/i;

type Headers = Record<string, string>;
type RecordValue = Record<string, any>;

export type TranscriptStats = {
  calls: number;
  native: number;
  cached: number;
  transcribed: number;
  unavailable: number;
};

export type TranscriptConfig = {
  folderId: number;
  model: string;
  language: string;
  maxAudioBytes: number;
  prompt: string;
};

export async function enrichCallTranscripts({ dealId, bundle, headers }: {
  dealId: number;
  bundle: DealBundle;
  headers: Headers;
}): Promise<TranscriptStats> {
  const stats: TranscriptStats = { calls: 0, native: 0, cached: 0, transcribed: 0, unavailable: 0 };
  const config = getTranscriptConfig();
  const calls = (bundle.activities || []).filter(isCallActivity);
  stats.calls = calls.length;
  if (!calls.length) return stats;

  let recordingFolders: RecordValue[] | null = null;
  for (const activity of calls) {
    const activityId = Number(activity.id ?? activity.ID);
    if (!Number.isFinite(activityId) || activityId <= 0) continue;

    const native = await getNativeTranscript(activityId, headers);
    if (native) {
      attachTranscript(activity, native, 'bitrix');
      stats.native += 1;
      continue;
    }

    const cached = findCachedTranscript(activityId, bundle.timelines || []);
    if (cached) {
      attachTranscript(activity, cached, 'cache');
      stats.cached += 1;
      continue;
    }

    recordingFolders ??= await loadRecordingFolders(headers, config.folderId);
    const recording = await selectRecording(activity, recordingFolders, headers);
    if (!recording) {
      stats.unavailable += 1;
      continue;
    }

    try {
      const transcript = await transcribeRecording(recording, headers, config);
      if (!transcript) {
        stats.unavailable += 1;
        continue;
      }
      attachTranscript(activity, transcript, 'whisper');
      stats.transcribed += 1;
      await saveTranscript({ dealId, activityId, transcript, headers });
    } catch (error) {
      console.warn(`Call transcription failed for activity ${activityId}:`, error);
      stats.unavailable += 1;
    }
  }
  return stats;
}

function isCallActivity(activity: RecordValue) {
  const type = String(activity.typeId ?? activity.TYPE_ID ?? activity.activityType ?? activity.typeName ?? '').toLowerCase();
  return type === '2' || type === 'call' || type.includes('звон');
}

async function getNativeTranscript(activityId: number, headers: Headers): Promise<string> {
  try {
    const response = await requestVibe(`/activities/${activityId}/transcript`, { headers });
    return firstText(response?.transcription);
  } catch {
    return '';
  }
}

export function findCachedTranscript(activityId: number, timelines: RecordValue[]): string {
  const marker = `[${TRANSCRIPT_MARKER}:${activityId}]`;
  for (const item of timelines) {
    const text = firstText(item.text, item.description, item.comment);
    if (text.includes(marker)) return text.slice(text.indexOf(marker) + marker.length).trim();

    const title = firstText(item.title, item.subject).toLowerCase();
    const linkedActivityId = String(item.activityId ?? item.associatedActivityId ?? item.relatedActivityId ?? '');
    if ((linkedActivityId === String(activityId) || title.includes(`#${activityId}`))
      && /(расшифровк|транскрипц|transcript)/i.test(`${title}\n${text}`)) {
      return text;
    }
  }
  return '';
}

async function loadRecordingFolders(headers: Headers, folderId: number): Promise<RecordValue[]> {
  try {
    const response = await requestVibe(`/folders?filter[parentId]=${folderId}&limit=100`, { headers });
    return toItems(response).filter((folder) => /^\d{4}-\d{2}$/.test(firstText(folder.name)));
  } catch (error) {
    console.warn('Call recordings folder is unavailable:', error);
    return [];
  }
}

async function selectRecording(activity: RecordValue, recordingFolders: RecordValue[], headers: Headers): Promise<RecordValue | null> {
  const attached = flattenFiles(activity.files ?? activity.FILES ?? activity.webdavElements ?? activity.WEBDAV_ELEMENTS);
  const direct = attached.find(isAudioFile);
  if (direct) return direct;

  const activityTime = toTimestamp(activity.createdAt ?? activity.startTime ?? activity.deadline);
  const phoneTerms = getPhoneSearchTerms(activity.communications ?? activity.COMMUNICATIONS);
  if (!phoneTerms.length || !Number.isFinite(activityTime)) return null;

  const folderIds = recordingFolders
    .filter((folder) => folderMatchesActivityMonth(folder, activityTime))
    .map((folder) => Number(folder.id ?? folder.ID))
    .filter((id) => Number.isFinite(id) && id > 0);
  if (!folderIds.length) return null;

  const recordings = await findRecordingsByPhone({ folderIds, phoneTerms, headers });
  return chooseClosestRecording(recordings, activityTime);
}

async function findRecordingsByPhone({ folderIds, phoneTerms, headers }: {
  folderIds: number[];
  phoneTerms: string[];
  headers: Headers;
}): Promise<RecordValue[]> {
  const requests = folderIds.flatMap((folderId) => phoneTerms.map(async (phone) => {
    try {
      const response = await requestVibe(
        `/files?filter[folderId]=${folderId}&filter[name][$contains]=${encodeURIComponent(phone)}&limit=100`,
        { headers }
      );
      return toItems(response).filter(isAudioFile);
    } catch (error) {
      console.warn(`Could not search call recordings in folder ${folderId}:`, error);
      return [];
    }
  }));

  const results = await Promise.all(requests);
  const unique = new Map<string, RecordValue>();
  for (const recording of results.flat()) {
    const id = String(recording.id ?? recording.ID ?? recording.fileId ?? recording.name);
    unique.set(id, recording);
  }
  return [...unique.values()];
}

function folderMatchesActivityMonth(folder: RecordValue, activityTime: number) {
  const folderMonth = firstText(folder.name);
  const current = new Date(activityTime);
  const previous = new Date(activityTime);
  previous.setMonth(previous.getMonth() - 1);
  const next = new Date(activityTime);
  next.setMonth(next.getMonth() + 1);
  return [monthKey(current), monthKey(previous), monthKey(next)].includes(folderMonth);
}

export function chooseClosestRecording(recordings: RecordValue[], activityTime: number): RecordValue | null {
  const candidates = recordings
    .map((file) => ({ file, distance: Math.abs(recordingTimestamp(file) - activityTime) }))
    .filter(({ distance }) => Number.isFinite(distance))
    .sort((left, right) => left.distance - right.distance);

  if (!candidates.length || candidates[0]!.distance > 60 * 60 * 1000) return null;
  if (candidates.length > 1 && candidates[1]!.distance === candidates[0]!.distance) return null;
  return candidates[0]!.file;
}
export async function transcribeRecording(file: RecordValue, headers: Headers, config = getTranscriptConfig()): Promise<string> {
  const url = firstText(file.downloadUrlMachine, file.downloadUrl, file.url, file.urlDownload, file.download);
  if (!isAllowedAudioUrl(url)) return '';
  const response = await fetch(url, { headers: buildAuthorizationHeaders(headers) });
  if (!response.ok) throw new CallTranscriptionError('download_failed', `Не удалось скачать запись звонка: ${response.status}`);
  const size = Number(response.headers.get('content-length'));
  if (Number.isFinite(size) && size > config.maxAudioBytes) throw new CallTranscriptionError('file_too_large', 'Запись звонка превышает допустимый размер.');
  const audio = await response.blob();
  if (!audio.size || audio.size > config.maxAudioBytes) throw new CallTranscriptionError('file_too_large', 'Запись звонка превышает допустимый размер.');

  const form = new FormData();
  form.append('file', audio, firstText(file.name, file.title, file.filename) || 'call-recording.mp3');
  form.append('model', config.model);
  form.append('language', config.language);
  form.append('response_format', 'json');
  form.append('vad_filter', 'true');
  if (config.prompt) form.append('prompt', config.prompt);

  const transcription = await fetch('https://vibecode.bitrix24.tech/v1/audio/transcriptions', {
    method: 'POST',
    headers: { 'X-Api-Key': B24_API_KEY, ...buildAuthorizationHeaders(headers) },
    body: form
  });
  const payload = await transcription.json().catch(() => null);
  if (!transcription.ok || payload?.error) {
    throw new CallTranscriptionError(payload?.error?.code || 'transcription_failed', payload?.error?.message || `Whisper вернул ошибку ${transcription.status}`);
  }
  return firstText(payload?.text);
}

async function saveTranscript({ dealId, activityId, transcript, headers }: {
  dealId: number;
  activityId: number;
  transcript: string;
  headers: Headers;
}) {
  try {
    await requestVibe('/timeline-logs', {
      method: 'POST',
      headers,
      body: {
        entityTypeId: 2,
        entityId: dealId,
        title: `AI: расшифровка звонка #${activityId}`,
        text: `[${TRANSCRIPT_MARKER}:${activityId}]\n${transcript}`,
        iconCode: 'ai'
      }
    });
  } catch (error) {
    console.warn(`Could not cache transcript for activity ${activityId}:`, error);
  }
}

function attachTranscript(activity: RecordValue, transcript: string, source: string) {
  activity.transcript = transcript;
  activity.transcriptionSource = source;
}

function flattenFiles(value: unknown): RecordValue[] {
  if (Array.isArray(value)) return value.filter(isRecord);
  if (isRecord(value)) return isAudioFile(value) ? [value] : Object.values(value).flatMap(flattenFiles);
  return [];
}

function toItems(value: unknown): RecordValue[] {
  if (Array.isArray(value)) return value.filter(isRecord);
  if (isRecord(value)) {
    const items = value.items ?? value.results ?? value.data;
    return Array.isArray(items) ? items.filter(isRecord) : [];
  }
  return [];
}

function isRecord(value: unknown): value is RecordValue {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function isAudioFile(file: RecordValue) {
  const name = firstText(file.name, file.title, file.filename, file.downloadUrl, file.url);
  const type = firstText(file.mimeType, file.contentType, file.type);
  return AUDIO_EXTENSIONS.test(name) || type.startsWith('audio/');
}

function isAllowedAudioUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && (url.hostname.endsWith('.bitrix24.ru') || url.hostname.endsWith('.bitrix24.tech'));
  } catch {
    return false;
  }
}

function firstText(...values: unknown[]): string {
  return values.find((value): value is string => typeof value === 'string' && value.trim().length > 0)?.trim() || '';
}

function collectDigits(value: unknown): string[] {
  if (typeof value === 'string') return value.match(/\d{7,}/g) ?? [];
  if (Array.isArray(value)) return value.flatMap(collectDigits);
  if (isRecord(value)) return Object.values(value).flatMap(collectDigits);
  return [];
}

function getPhoneSearchTerms(value: unknown): string[] {
  const terms = new Set<string>();
  for (const source of collectDigits(value)) {
    const digits = source.replace(/\D/g, '');
    if (digits.length < 10) continue;
    terms.add(digits);
    terms.add(digits.slice(-10));
    if (digits.length === 11 && digits.startsWith('8')) terms.add(`7${digits.slice(1)}`);
    if (digits.length === 10) terms.add(`7${digits}`);
  }
  return [...terms].filter((value) => value.length >= 10);
}

function monthKey(value: Date) {
  return `${value.getUTCFullYear()}-${String(value.getUTCMonth() + 1).padStart(2, '0')}`;
}

function recordingTimestamp(file: RecordValue): number {
  // Disk returns createdAt in ISO UTC; it is more reliable than a timestamp
  // embedded in a provider-specific file name.
  const storedTimestamp = toTimestamp(file.createdAt ?? file.updateTime ?? file.dateCreate);
  if (Number.isFinite(storedTimestamp)) return storedTimestamp;

  const name = firstText(file.name, file.title, file.filename);
  const match = name.match(/-(\d{8})-(\d{6})-/);
  if (match) {
    const date = match[1]!;
    const time = match[2]!;
    // Call recordings use Moscow local time in their filename, not UTC.
    const moscowTimestamp = Date.UTC(
      Number(date.slice(0, 4)),
      Number(date.slice(4, 6)) - 1,
      Number(date.slice(6, 8)),
      Number(time.slice(0, 2)),
      Number(time.slice(2, 4)),
      Number(time.slice(4, 6))
    ) - 3 * 60 * 60 * 1000;
    if (Number.isFinite(moscowTimestamp)) return moscowTimestamp;
  }
  return Number.NaN;
}
function toTimestamp(value: unknown): number {
  const timestamp = new Date(String(value || '')).getTime();
  return Number.isFinite(timestamp) ? timestamp : Number.NaN;
}

function buildAuthorizationHeaders(headers: Headers): Record<string, string> {
  return headers.Authorization ? { Authorization: headers.Authorization } : {};
}

export class CallTranscriptionError extends Error {
  constructor(public readonly code: string, message: string) {
    super(message);
    this.name = 'CallTranscriptionError';
  }
}

export function getTranscriptConfig(env: NodeJS.ProcessEnv = process.env): TranscriptConfig {
  const folderId = positiveInteger(env.B24_CALL_RECORDINGS_FOLDER_ID, DEFAULT_RECORDINGS_FOLDER_ID);
  const requestedSize = positiveInteger(env.VIBE_TRANSCRIPTION_MAX_BYTES, MAX_ALLOWED_AUDIO_BYTES);
  return {
    folderId,
    model: env.VIBE_TRANSCRIPTION_MODEL?.trim() || DEFAULT_AUDIO_MODEL,
    language: env.VIBE_TRANSCRIPTION_LANGUAGE?.trim() || 'ru',
    maxAudioBytes: Math.min(requestedSize, MAX_ALLOWED_AUDIO_BYTES),
    prompt: env.VIBE_TRANSCRIPTION_PROMPT?.trim() || ''
  };
}

function positiveInteger(value: string | undefined, fallback: number) {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
}
