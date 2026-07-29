import type { DealBundle } from '../domain/deal-analysis';
import { requestVibe } from './deal-bundle';
import { B24_API_KEY } from './b24';

const AUDIO_MODEL = 'bitrix/deepdml/faster-whisper-large-v3-turbo-ct2';
const RECORDINGS_FOLDER_ID = 259146;
const MAX_AUDIO_BYTES = 25 * 1024 * 1024;
const TRANSCRIPT_MARKER = 'AI_CALL_TRANSCRIPT';
const AUDIO_EXTENSIONS = /\.(mp3|mp4|mpeg|mpga|m4a|wav|webm|flac|ogg)(?:$|[?#])/i;

type Headers = Record<string, string>;
type RecordValue = Record<string, any>;

export type TranscriptStats = {
  native: number;
  cached: number;
  transcribed: number;
  unavailable: number;
};

export async function enrichCallTranscripts({ dealId, bundle, headers }: {
  dealId: number;
  bundle: DealBundle;
  headers: Headers;
}): Promise<TranscriptStats> {
  const stats: TranscriptStats = { native: 0, cached: 0, transcribed: 0, unavailable: 0 };
  const calls = (bundle.activities || []).filter(isCallActivity);
  if (!calls.length) return stats;

  const folderFiles = await loadFolderFiles(headers);
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

    const recording = selectRecording(activity, folderFiles);
    if (!recording) {
      stats.unavailable += 1;
      continue;
    }

    try {
      const transcript = await transcribeRecording(recording, headers);
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

function findCachedTranscript(activityId: number, timelines: RecordValue[]): string {
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

async function loadFolderFiles(headers: Headers): Promise<RecordValue[]> {
  try {
    const response = await requestVibe(`/files?filter[folderId]=${RECORDINGS_FOLDER_ID}&limit=500`, { headers });
    return toItems(response).filter(isAudioFile);
  } catch (error) {
    console.warn('Call recordings folder is unavailable:', error);
    return [];
  }
}

function selectRecording(activity: RecordValue, folderFiles: RecordValue[]): RecordValue | null {
  const attached = flattenFiles(activity.files ?? activity.FILES ?? activity.webdavElements ?? activity.WEBDAV_ELEMENTS);
  const direct = attached.find(isAudioFile);
  if (direct) return direct;

  const activityId = String(activity.id ?? activity.ID ?? '');
  const subject = firstText(activity.subject, activity.title).toLowerCase();
  const byName = folderFiles.find((file) => {
    const name = firstText(file.name, file.title, file.filename).toLowerCase();
    return (activityId && name.includes(activityId)) || (subject.length >= 5 && name.includes(subject));
  });
  if (byName) return byName;

  const phoneDigits = collectDigits(activity.communications ?? activity.COMMUNICATIONS);
  const byPhone = folderFiles.find((file) => phoneDigits.some((digits) => digits.length >= 7
    && collectDigits(file).some((candidate) => candidate.includes(digits) || digits.includes(candidate))));
  if (byPhone) return byPhone;

  const activityTime = toTimestamp(activity.createdAt ?? activity.startTime ?? activity.deadline);
  if (!activityTime) return null;
  const nearby = folderFiles
    .map((file) => ({ file, distance: Math.abs(toTimestamp(file.createdAt ?? file.updateTime ?? file.dateCreate) - activityTime) }))
    .filter(({ distance }) => Number.isFinite(distance) && distance <= 15 * 60 * 1000)
    .sort((a, b) => a.distance - b.distance);
  return nearby.length === 1 ? nearby[0]!.file : null;
}

async function transcribeRecording(file: RecordValue, headers: Headers): Promise<string> {
  const url = firstText(file.downloadUrlMachine, file.downloadUrl, file.url, file.urlDownload, file.download);
  if (!isAllowedAudioUrl(url)) return '';
  const response = await fetch(url, { headers: buildAuthorizationHeaders(headers) });
  if (!response.ok) throw new Error(`Не удалось скачать запись звонка: ${response.status}`);
  const size = Number(response.headers.get('content-length'));
  if (Number.isFinite(size) && size > MAX_AUDIO_BYTES) throw new Error('Запись звонка превышает лимит 25 МБ.');
  const audio = await response.blob();
  if (!audio.size || audio.size > MAX_AUDIO_BYTES) throw new Error('Запись звонка превышает лимит 25 МБ.');

  const form = new FormData();
  form.append('file', audio, firstText(file.name, file.title, file.filename) || 'call-recording.mp3');
  form.append('model', AUDIO_MODEL);
  form.append('language', 'ru');
  form.append('response_format', 'json');
  form.append('vad_filter', 'true');
  form.append('prompt', 'Разговор менеджера туристической компании с клиентом о поездке, бронировании, оплате и условиях тура.');

  const transcription = await fetch('https://vibecode.bitrix24.tech/v1/audio/transcriptions', {
    method: 'POST',
    headers: { 'X-Api-Key': B24_API_KEY, ...buildAuthorizationHeaders(headers) },
    body: form
  });
  const payload = await transcription.json().catch(() => null);
  if (!transcription.ok || payload?.error) throw new Error(payload?.error?.message || `Whisper вернул ошибку ${transcription.status}`);
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

function toTimestamp(value: unknown): number {
  const timestamp = new Date(String(value || '')).getTime();
  return Number.isFinite(timestamp) ? timestamp : Number.NaN;
}

function buildAuthorizationHeaders(headers: Headers): Record<string, string> {
  return headers.Authorization ? { Authorization: headers.Authorization } : {};
}
