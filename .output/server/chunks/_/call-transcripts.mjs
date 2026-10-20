import { r as requestVibe } from './deal-bundle.mjs';
import { B as B24_API_KEY } from './b24.mjs';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, key + "" , value);
const DEFAULT_AUDIO_MODEL = "bitrix/bitrixgpt-5.6-transcribe";
const DEFAULT_RECORDINGS_FOLDER_ID = 259146;
const MAX_ALLOWED_AUDIO_BYTES = 25 * 1024 * 1024;
const TRANSCRIPT_MARKER = "AI_CALL_TRANSCRIPT";
const AUDIO_EXTENSIONS = /\.(mp3|mp4|mpeg|mpga|m4a|wav|webm|flac|ogg)(?:$|[?#])/i;
async function enrichCallTranscripts({ dealId, bundle, headers }) {
  var _a;
  const stats = { calls: 0, native: 0, cached: 0, transcribed: 0, unavailable: 0 };
  const config = getTranscriptConfig();
  const calls = (bundle.activities || []).filter(isCallActivity);
  stats.calls = calls.length;
  if (!calls.length) return stats;
  let recordingFolders = null;
  for (const activity of calls) {
    const activityId = Number((_a = activity.id) != null ? _a : activity.ID);
    if (!Number.isFinite(activityId) || activityId <= 0) continue;
    const native = await getNativeTranscript(activityId, headers);
    if (native) {
      attachTranscript(activity, native, "bitrix");
      stats.native += 1;
      continue;
    }
    const cached = findCachedTranscript(activityId, bundle.timelines || []);
    if (cached) {
      attachTranscript(activity, cached, "cache");
      stats.cached += 1;
      continue;
    }
    recordingFolders != null ? recordingFolders : recordingFolders = await loadRecordingFolders(headers, config.folderId);
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
      attachTranscript(activity, transcript, "ai-router");
      stats.transcribed += 1;
      await saveTranscript({ dealId, activityId, transcript, headers });
    } catch (error) {
      console.warn(`Call transcription failed for activity ${activityId}:`, error);
      stats.unavailable += 1;
    }
  }
  return stats;
}
function isCallActivity(activity) {
  var _a, _b, _c, _d;
  const type = String((_d = (_c = (_b = (_a = activity.typeId) != null ? _a : activity.TYPE_ID) != null ? _b : activity.activityType) != null ? _c : activity.typeName) != null ? _d : "").toLowerCase();
  return type === "2" || type === "call" || type.includes("\u0437\u0432\u043E\u043D");
}
async function getNativeTranscript(activityId, headers) {
  try {
    const response = await requestVibe(`/activities/${activityId}/transcript`, { headers });
    return firstText(response == null ? void 0 : response.transcription);
  } catch {
    return "";
  }
}
function findCachedTranscript(activityId, timelines) {
  var _a, _b, _c;
  const marker = `[${TRANSCRIPT_MARKER}:${activityId}]`;
  for (const item of timelines) {
    const text = firstText(item.text, item.description, item.comment);
    if (text.includes(marker)) return text.slice(text.indexOf(marker) + marker.length).trim();
    const title = firstText(item.title, item.subject).toLowerCase();
    const linkedActivityId = String((_c = (_b = (_a = item.activityId) != null ? _a : item.associatedActivityId) != null ? _b : item.relatedActivityId) != null ? _c : "");
    if ((linkedActivityId === String(activityId) || title.includes(`#${activityId}`)) && /(расшифровк|транскрипц|transcript)/i.test(`${title}
${text}`)) {
      return text;
    }
  }
  return "";
}
async function loadRecordingFolders(headers, folderId) {
  try {
    const response = await requestVibe(`/folders?filter[parentId]=${folderId}&limit=100`, { headers });
    return toItems(response).filter((folder) => /^\d{4}-\d{2}$/.test(firstText(folder.name)));
  } catch (error) {
    console.warn("Call recordings folder is unavailable:", error);
    return [];
  }
}
async function selectRecording(activity, recordingFolders, headers) {
  var _a, _b, _c, _d, _e, _f;
  const attached = flattenFiles((_c = (_b = (_a = activity.files) != null ? _a : activity.FILES) != null ? _b : activity.webdavElements) != null ? _c : activity.WEBDAV_ELEMENTS);
  const direct = attached.find(isAudioFile);
  if (direct) return direct;
  const activityTime = toTimestamp((_e = (_d = activity.createdAt) != null ? _d : activity.startTime) != null ? _e : activity.deadline);
  const phoneTerms = getPhoneSearchTerms((_f = activity.communications) != null ? _f : activity.COMMUNICATIONS);
  if (!phoneTerms.length || !Number.isFinite(activityTime)) return null;
  const folderIds = recordingFolders.filter((folder) => folderMatchesActivityMonth(folder, activityTime)).map((folder) => {
    var _a2;
    return Number((_a2 = folder.id) != null ? _a2 : folder.ID);
  }).filter((id) => Number.isFinite(id) && id > 0);
  if (!folderIds.length) return null;
  const recordings = await findRecordingsByPhone({ folderIds, phoneTerms, headers });
  return chooseClosestRecording(recordings, activityTime);
}
async function findRecordingsByPhone({ folderIds, phoneTerms, headers }) {
  var _a, _b, _c;
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
  const unique = /* @__PURE__ */ new Map();
  for (const recording of results.flat()) {
    const id = String((_c = (_b = (_a = recording.id) != null ? _a : recording.ID) != null ? _b : recording.fileId) != null ? _c : recording.name);
    unique.set(id, recording);
  }
  return [...unique.values()];
}
function folderMatchesActivityMonth(folder, activityTime) {
  const folderMonth = firstText(folder.name);
  const current = new Date(activityTime);
  const previous = new Date(activityTime);
  previous.setMonth(previous.getMonth() - 1);
  const next = new Date(activityTime);
  next.setMonth(next.getMonth() + 1);
  return [monthKey(current), monthKey(previous), monthKey(next)].includes(folderMonth);
}
function chooseClosestRecording(recordings, activityTime) {
  const candidates = recordings.map((file) => ({ file, distance: Math.abs(recordingTimestamp(file) - activityTime) })).filter(({ distance }) => Number.isFinite(distance)).sort((left, right) => left.distance - right.distance);
  if (!candidates.length || candidates[0].distance > 60 * 60 * 1e3) return null;
  if (candidates.length > 1 && candidates[1].distance === candidates[0].distance) return null;
  return candidates[0].file;
}
async function transcribeRecording(file, headers, config = getTranscriptConfig()) {
  var _a, _b;
  const url = firstText(file.downloadUrlMachine, file.downloadUrl, file.url, file.urlDownload, file.download);
  if (!isAllowedAudioUrl(url)) return "";
  const response = await fetch(url, { headers: buildAuthorizationHeaders(headers) });
  if (!response.ok) throw new CallTranscriptionError("download_failed", `\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C \u0437\u0432\u043E\u043D\u043A\u0430: ${response.status}`);
  const size = Number(response.headers.get("content-length"));
  if (Number.isFinite(size) && size > config.maxAudioBytes) throw new CallTranscriptionError("file_too_large", "\u0417\u0430\u043F\u0438\u0441\u044C \u0437\u0432\u043E\u043D\u043A\u0430 \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440.");
  const audio = await response.blob();
  if (!audio.size || audio.size > config.maxAudioBytes) throw new CallTranscriptionError("file_too_large", "\u0417\u0430\u043F\u0438\u0441\u044C \u0437\u0432\u043E\u043D\u043A\u0430 \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440.");
  const form = new FormData();
  form.append("file", audio, firstText(file.name, file.title, file.filename) || "call-recording.mp3");
  form.append("model", config.model);
  form.append("language", config.language);
  form.append("response_format", "json");
  form.append("vad_filter", "true");
  if (config.prompt) form.append("prompt", config.prompt);
  const transcription = await fetch("https://vibecode.bitrix24.tech/v1/audio/transcriptions", {
    method: "POST",
    headers: { "X-Api-Key": B24_API_KEY, ...buildAuthorizationHeaders(headers) },
    body: form
  });
  const payload = await transcription.json().catch(() => null);
  if (!transcription.ok || (payload == null ? void 0 : payload.error)) {
    throw new CallTranscriptionError(((_a = payload == null ? void 0 : payload.error) == null ? void 0 : _a.code) || "transcription_failed", ((_b = payload == null ? void 0 : payload.error) == null ? void 0 : _b.message) || `AI Router \u0432\u0435\u0440\u043D\u0443\u043B \u043E\u0448\u0438\u0431\u043A\u0443 ${transcription.status}`);
  }
  return firstText(payload == null ? void 0 : payload.text);
}
async function saveTranscript({ dealId, activityId, transcript, headers }) {
  try {
    await requestVibe("/timeline-logs", {
      method: "POST",
      headers,
      body: {
        entityTypeId: 2,
        entityId: dealId,
        title: `AI: \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043E\u0432\u043A\u0430 \u0437\u0432\u043E\u043D\u043A\u0430 #${activityId}`,
        text: `[${TRANSCRIPT_MARKER}:${activityId}]
${transcript}`,
        iconCode: "ai"
      }
    });
  } catch (error) {
    console.warn(`Could not cache transcript for activity ${activityId}:`, error);
  }
}
function attachTranscript(activity, transcript, source) {
  activity.transcript = transcript;
  activity.transcriptionSource = source;
}
function flattenFiles(value) {
  if (Array.isArray(value)) return value.filter(isRecord);
  if (isRecord(value)) return isAudioFile(value) ? [value] : Object.values(value).flatMap(flattenFiles);
  return [];
}
function toItems(value) {
  var _a, _b;
  if (Array.isArray(value)) return value.filter(isRecord);
  if (isRecord(value)) {
    const items = (_b = (_a = value.items) != null ? _a : value.results) != null ? _b : value.data;
    return Array.isArray(items) ? items.filter(isRecord) : [];
  }
  return [];
}
function isRecord(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}
function isAudioFile(file) {
  const name = firstText(file.name, file.title, file.filename, file.downloadUrl, file.url);
  const type = firstText(file.mimeType, file.contentType, file.type);
  return AUDIO_EXTENSIONS.test(name) || type.startsWith("audio/");
}
function isAllowedAudioUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && (url.hostname.endsWith(".bitrix24.ru") || url.hostname.endsWith(".bitrix24.tech"));
  } catch {
    return false;
  }
}
function firstText(...values) {
  var _a;
  return ((_a = values.find((value) => typeof value === "string" && value.trim().length > 0)) == null ? void 0 : _a.trim()) || "";
}
function collectDigits(value) {
  var _a;
  if (typeof value === "string") return (_a = value.match(/\d{7,}/g)) != null ? _a : [];
  if (Array.isArray(value)) return value.flatMap(collectDigits);
  if (isRecord(value)) return Object.values(value).flatMap(collectDigits);
  return [];
}
function getPhoneSearchTerms(value) {
  const terms = /* @__PURE__ */ new Set();
  for (const source of collectDigits(value)) {
    const digits = source.replace(/\D/g, "");
    if (digits.length < 10) continue;
    terms.add(digits);
    terms.add(digits.slice(-10));
    if (digits.length === 11 && digits.startsWith("8")) terms.add(`7${digits.slice(1)}`);
    if (digits.length === 10) terms.add(`7${digits}`);
  }
  return [...terms].filter((value2) => value2.length >= 10);
}
function monthKey(value) {
  return `${value.getUTCFullYear()}-${String(value.getUTCMonth() + 1).padStart(2, "0")}`;
}
function recordingTimestamp(file) {
  var _a, _b;
  const storedTimestamp = toTimestamp((_b = (_a = file.createdAt) != null ? _a : file.updateTime) != null ? _b : file.dateCreate);
  if (Number.isFinite(storedTimestamp)) return storedTimestamp;
  const name = firstText(file.name, file.title, file.filename);
  const match = name.match(/-(\d{8})-(\d{6})-/);
  if (match) {
    const date = match[1];
    const time = match[2];
    const moscowTimestamp = Date.UTC(
      Number(date.slice(0, 4)),
      Number(date.slice(4, 6)) - 1,
      Number(date.slice(6, 8)),
      Number(time.slice(0, 2)),
      Number(time.slice(2, 4)),
      Number(time.slice(4, 6))
    ) - 3 * 60 * 60 * 1e3;
    if (Number.isFinite(moscowTimestamp)) return moscowTimestamp;
  }
  return Number.NaN;
}
function toTimestamp(value) {
  const timestamp = new Date(String(value || "")).getTime();
  return Number.isFinite(timestamp) ? timestamp : Number.NaN;
}
function buildAuthorizationHeaders(headers) {
  return headers.Authorization ? { Authorization: headers.Authorization } : {};
}
class CallTranscriptionError extends Error {
  constructor(code, message) {
    super(message);
    __publicField(this, "code", code);
    this.name = "CallTranscriptionError";
  }
}
function getTranscriptConfig(env = process.env) {
  var _a, _b, _c;
  const folderId = positiveInteger(env.B24_CALL_RECORDINGS_FOLDER_ID, DEFAULT_RECORDINGS_FOLDER_ID);
  const requestedSize = positiveInteger(env.VIBE_TRANSCRIPTION_MAX_BYTES, MAX_ALLOWED_AUDIO_BYTES);
  return {
    folderId,
    model: ((_a = env.VIBE_TRANSCRIPTION_MODEL) == null ? void 0 : _a.trim()) || DEFAULT_AUDIO_MODEL,
    language: ((_b = env.VIBE_TRANSCRIPTION_LANGUAGE) == null ? void 0 : _b.trim()) || "ru",
    maxAudioBytes: Math.min(requestedSize, MAX_ALLOWED_AUDIO_BYTES),
    prompt: ((_c = env.VIBE_TRANSCRIPTION_PROMPT) == null ? void 0 : _c.trim()) || ""
  };
}
function positiveInteger(value, fallback) {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
}

export { enrichCallTranscripts as e };
//# sourceMappingURL=call-transcripts.mjs.map
