import type {
  SlaLogRow,
  SlaStatus,
  VibeAbsenceInterval,
  VibeActivity,
  VibeLead,
  VibeTimelineComment,
  VibeUser,
  ViolationFlag
} from './types';

const SLA_LIMIT_MINUTES = 15;
const MISSED_CALL_STATUS_ID = '15';
const NEEDS_IDENTIFICATION_STATUS_ID = '13';
const TRANSFERRED_TO_MPT_STATUS_ID = '12';
const CALL_LEAD_CREATION_GRACE_MINUTES = SLA_LIMIT_MINUTES;
const EXCLUDED_SOURCE_NAMES = new Set(['русский экспресс']);
const NON_ERROR_REJECTION_REASONS = new Set([
  'обращение по существующей сделке (для существующих контактов)',
  'внутренний звонок или переписка',
  'дубликат',
  'организация',
  'реклама'
]);
const SUCCESS_STATUSES = new Set(['2']);
const FINISHED_STATUSES = new Set(['2', '3']);
const MOSCOW_OFFSET_MINUTES = 3 * 60;
const MINUTE_MS = 60 * 1000;
const DAY_MS = 24 * 60 * MINUTE_MS;
const TIMEZONE_DRIFT_TOLERANCE_MS = MINUTE_MS;
const AUTO_WAZZUP_MESSAGE_PHRASES = [
  'спасибо, что написали',
  'благодарим вас за обращение в русский экспресс',
  'спасибо, что обратились в русский экспресс',
  'спасибо за обращение в русский экспресс',
  'к сожалению, мы не смогли принять ваш звонок',
  'к сожалению, мы не успели ответить на ваш звонок'
];
const OUTGOING_LEAD_TITLE_WORD = 'исходящий';
const SYNC_ERROR_REJECTION_REASON_ID = '1140';
const IT_DEPARTMENT_NAME = 'отдел ит';
const DEFAULT_MANUAL_REVIEW_TITLE_PATTERN = /^лид_№\s*\d+/i;
const RETURN_CUSTOMER_PHRASES = ['постоянный клиент', 'повторный лид'];
const EXCLUDED_REJECTION_REASONS = new Set(['агентство', 'клиент агентства']);
const EARLY_WORKDAY_USER_NAMES = new Set(['елизавета копейкина', 'евгения вернер']);
const RU_MONTHS: Record<string, number> = {
  января: 1,
  февраля: 2,
  марта: 3,
  апреля: 4,
  мая: 5,
  июня: 6,
  июля: 7,
  августа: 8,
  сентября: 9,
  октября: 10,
  ноября: 11,
  декабря: 12
};
const EN_MONTHS: Record<string, number> = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12
};

export function getLeadCreatedAt(lead: VibeLead): string | null {
  return lead.createdAt ?? lead.createdTime ?? null;
}

export function isExcludedValue(value: unknown): boolean {
  if (value === false) return true;
  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase();
    return normalized === 'n' || normalized === 'нет' || normalized === 'false' || normalized === '0';
  }
  if (value === 0) return true;
  return value == null;
}

export function isLeadMarkedAsMissedCall(lead: VibeLead): boolean {
  const value = lead.ufCrm_1724510334936;
  if (value === true || value === 1) return true;
  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase();
    return normalized === '1' || normalized === 'y' || normalized === 'yes' || normalized === 'true';
  }
  return false;
}

export function shouldAnalyzeLead(lead: VibeLead): boolean {
  return isExcludedValue(lead.ufCrm_1717431064812) && !hasOutgoingInTitle(lead) && !hasDefaultNumberedLeadTitle(lead);
}

export function getLeadContactIds(lead: VibeLead): number[] {
  const ids = new Set<number>();
  for (const value of [...(Array.isArray(lead.contactIds) ? lead.contactIds : []), lead.contactId]) {
    const id = toNumber(value);
    if (id && id > 0) ids.add(id);
  }
  return [...ids];
}

function toNumber(value: unknown): number | null {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string' && value.trim() !== '') {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

function normalizeProvider(activity: VibeActivity): string {
  return [
    activity.PROVIDER_ID,
    activity.PROVIDER_TYPE_ID,
    activity.PROVIDER_GROUP_ID,
    activity.providerId,
    activity.providerTypeId,
    activity.subject,
    activity.description
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}

function getActivityDateRaw(activity: VibeActivity): string | null {
  return activity.startTime ?? activity.START_TIME ?? activity.createdAt ?? activity.CREATED ?? activity.endTime ?? activity.END_TIME ?? null;
}

function getWallClockMs(value: string): number | null {
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2})(?:\.\d{1,3})?)?/);
  if (!match) return null;
  const [, year, month, day, hour, minute, second = '0'] = match;
  return Date.UTC(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(second));
}

function retagUtcAsMoscow(value: string): string {
  return value.replace(/Z$/i, '+03:00');
}

function normalizeActivityDate(activityDate: string, leadCreatedAt: string): string {
  if (!/Z$/i.test(activityDate)) return activityDate;

  const activityTime = new Date(activityDate).getTime();
  const leadTime = new Date(leadCreatedAt).getTime();
  const activityWallTime = getWallClockMs(activityDate);
  const leadWallTime = getWallClockMs(leadCreatedAt);
  if (
    !Number.isFinite(activityTime) ||
    !Number.isFinite(leadTime) ||
    activityWallTime == null ||
    leadWallTime == null
  ) {
    return activityDate;
  }

  const absoluteDiff = activityTime - leadTime;
  const wallClockDiff = activityWallTime - leadWallTime;
  const timezoneDrift = absoluteDiff - wallClockDiff;
  if (
    (wallClockDiff >= 0 && Math.abs(timezoneDrift - MOSCOW_OFFSET_MINUTES * MINUTE_MS) <= TIMEZONE_DRIFT_TOLERANCE_MS) ||
    (absoluteDiff < 0 &&
      Math.abs(absoluteDiff + MOSCOW_OFFSET_MINUTES * MINUTE_MS) <= TIMEZONE_DRIFT_TOLERANCE_MS &&
      Math.abs(wallClockDiff) <= TIMEZONE_DRIFT_TOLERANCE_MS)
  ) {
    return retagUtcAsMoscow(activityDate);
  }

  return activityDate;
}

function getActivityDate(activity: VibeActivity, leadCreatedAt?: string): string | null {
  const activityDate = getActivityDateRaw(activity);
  return activityDate && leadCreatedAt ? normalizeActivityDate(activityDate, leadCreatedAt) : activityDate;
}

function compareIsoDates(a: string, b: string): number {
  return new Date(a).getTime() - new Date(b).getTime();
}

function getEarliestDate(dates: string[]): string | null {
  return dates
    .filter((date) => Number.isFinite(new Date(date).getTime()))
    .sort(compareIsoDates)[0] ?? null;
}

function getEffectiveLeadCreatedAt(lead: VibeLead, activities: VibeActivity[], fallback: string): string {
  const leadCreatedAt = getLeadCreatedAt(lead) ?? fallback;
  if (getLeadSourceId(lead) !== 'EMAIL') return leadCreatedAt;

  const firstIncomingEmailAt = getEarliestDate(
    activities
      .filter((activity) => isEmail(activity) && isIncoming(activity))
      .map((activity) => getActivityDate(activity, leadCreatedAt))
      .filter((date): date is string => Boolean(date))
  );
  if (!firstIncomingEmailAt) return leadCreatedAt;

  return compareIsoDates(firstIncomingEmailAt, leadCreatedAt) < 0 ? firstIncomingEmailAt : leadCreatedAt;
}

function stripHtml(value: string): string {
  return value
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&quot;/gi, '"')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function toOffsetIso(params: {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  offset: string;
}): string | null {
  const { year, month, day, hour, minute, offset } = params;
  if (month < 1 || month > 12 || day < 1 || day > 31 || hour > 23 || minute > 59) return null;
  const pad = (value: number) => String(value).padStart(2, '0');
  const iso = `${year}-${pad(month)}-${pad(day)}T${pad(hour)}:${pad(minute)}:00${offset}`;
  return Number.isFinite(new Date(iso).getTime()) ? iso : null;
}

function toUtcIsoFromEnglishAmPm(params: {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  meridiem: string;
}): string | null {
  const { year, month, day, minute, meridiem } = params;
  let hour = params.hour;
  if (month < 1 || month > 12 || day < 1 || day > 31 || hour < 1 || hour > 12 || minute > 59) return null;
  const marker = meridiem.toLowerCase();
  if (marker === 'pm' && hour !== 12) hour += 12;
  if (marker === 'am' && hour === 12) hour = 0;
  const iso = new Date(Date.UTC(year, month - 1, day, hour, minute, 0)).toISOString();
  return Number.isFinite(new Date(iso).getTime()) ? iso : null;
}

function getEmbeddedOutgoingEmailDates(activity: VibeActivity): string[] {
  if (!isEmail(activity)) return [];
  const text = stripHtml(activity.description ?? '');
  if (!text) return [];

  const dates: string[] = [];
  const replyDatePattern =
    /(\d{1,2})\s+(января|февраля|марта|апреля|мая|июня|июля|августа|сентября|октября|ноября|декабря)\s+(\d{4})\s*г?\.?,?\s+(\d{1,2}):(\d{2})\s*([+-]\d{2}:\d{2})\s+от\s+Русский\s+Экспресс/giu;

  for (const match of text.matchAll(replyDatePattern)) {
    const [, day, monthName, year, hour, minute, offset] = match;
    const month = monthName ? RU_MONTHS[monthName.toLowerCase()] : undefined;
    if (!day || !year || !hour || !minute || !offset || month == null) continue;
    const iso = toOffsetIso({
      year: Number(year),
      month,
      day: Number(day),
      hour: Number(hour),
      minute: Number(minute),
      offset
    });
    if (iso) dates.push(iso);
  }

  const englishReplyDatePattern =
    /From:\s*Русский\s+Экспресс[\s\S]{0,800}?Sent:\s*(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday),?\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),\s+(\d{4})\s+(\d{1,2}):(\d{2})\s*(AM|PM)/giu;

  for (const match of text.matchAll(englishReplyDatePattern)) {
    const [, monthName, day, year, hour, minute, meridiem] = match;
    const month = monthName ? EN_MONTHS[monthName.toLowerCase()] : undefined;
    if (!day || !year || !hour || !minute || !meridiem || month == null) continue;
    const iso = toUtcIsoFromEnglishAmPm({
      year: Number(year),
      month,
      day: Number(day),
      hour: Number(hour),
      minute: Number(minute),
      meridiem
    });
    if (iso) dates.push(iso);
  }

  return dates;
}

function getIncomingCallContactDate(activity: VibeActivity, leadCreatedAt: string): string | null {
  const startDate = getActivityDate(activity, leadCreatedAt);
  if (!isProcessedIncomingCallContact(activity)) return startDate;

  const leadTime = new Date(leadCreatedAt).getTime();
  const startTime = startDate ? new Date(startDate).getTime() : Number.NaN;
  if (Number.isFinite(startTime) && Number.isFinite(leadTime) && startTime >= leadTime) return startDate;

  const endDateRaw = activity.endTime ?? activity.END_TIME ?? activity.updatedAt ?? activity.LAST_UPDATED ?? null;
  const endDate = endDateRaw ? normalizeActivityDate(endDateRaw, leadCreatedAt) : null;
  const endTime = endDate ? new Date(endDate).getTime() : Number.NaN;
  if (Number.isFinite(endTime) && Number.isFinite(leadTime) && endTime >= leadTime) return endDate;

  return startDate;
}

function isActivityAtOrAfter(activity: VibeActivity, leadCreatedAt: string): boolean {
  const activityDate = getActivityDate(activity, leadCreatedAt);
  if (!activityDate) return false;
  const activityTime = new Date(activityDate).getTime();
  const leadTime = new Date(leadCreatedAt).getTime();
  return Number.isFinite(activityTime) && Number.isFinite(leadTime) && activityTime >= leadTime;
}

function isCompleted(activity: VibeActivity): boolean {
  return activity.completed === true || activity.completed === 'Y' || FINISHED_STATUSES.has(String(activity.STATUS ?? activity.status ?? ''));
}

function isSuccessful(activity: VibeActivity): boolean {
  const status = String(activity.STATUS ?? activity.status ?? '');
  if (SUCCESS_STATUSES.has(status)) return true;
  const providerText = normalizeProvider(activity);
  if (providerText.includes('crm_email') || providerText.includes('imol') || providerText.includes('openline')) {
    return isCompleted(activity);
  }
  return isCompleted(activity) && !['4', '5', '6'].includes(status);
}

function isCall(activity: VibeActivity): boolean {
  const typeId = toNumber(activity.typeId ?? activity.TYPE_ID);
  return typeId === 2 || normalizeProvider(activity).includes('call');
}

function isSuccessfulCall(activity: VibeActivity): boolean {
  return String(activity.STATUS ?? activity.status ?? '') === '2';
}

function isMissedCallActivity(activity: VibeActivity): boolean {
  const settings = activity.SETTINGS ?? activity.settings;
  const missedBySettings = Boolean(settings && !Array.isArray(settings) && settings.MISSED_CALL === true);
  return missedBySettings || String(activity.RESULT_STREAM ?? activity.resultStream ?? '') === '4';
}

function isEmail(activity: VibeActivity): boolean {
  const typeId = toNumber(activity.typeId ?? activity.TYPE_ID);
  const providerText = normalizeProvider(activity);
  return typeId === 4 || providerText.includes('email') || providerText.includes('mail');
}

function isAutomaticRegistrationEmail(activity: VibeActivity): boolean {
  if (!isEmail(activity)) return false;
  return normalizeProvider(activity).includes('обращение зарегистрировано');
}

function isOpenLine(activity: VibeActivity): boolean {
  const providerText = normalizeProvider(activity);
  return providerText.includes('imol') || providerText.includes('openline') || providerText.includes('open line') || providerText.includes('ol_');
}

function isOpenLineLead(lead: VibeLead, activities: VibeActivity[]): boolean {
  const leadText = normalizeText([lead.sourceId, lead.sourceDescription, lead.title].filter(Boolean).join(' '));
  return leadText.includes('telegram') || leadText.includes('openline') || leadText.includes('imol') || activities.some(isOpenLine);
}

function getLeadOnlineChatContactDate(lead: VibeLead, activities: VibeActivity[], leadCreatedAt: string): string | null {
  if (!isOpenLineLead(lead, activities)) return null;
  const date = lead.ufCrm_1716370242690 ?? lead.ufCrm_1715933850 ?? null;
  return date ? normalizeActivityDate(date, leadCreatedAt) : null;
}

function normalizeText(value: string): string {
  return value
    .replace(/\[img\][\s\S]*?\[\/img\]/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&quot;/gi, '"')
    .replace(/&amp;/gi, '&')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function hasOutgoingInTitle(lead: VibeLead): boolean {
  return normalizeText(lead.title ?? '').includes(OUTGOING_LEAD_TITLE_WORD);
}

function hasIncomingCallInTitle(lead: VibeLead): boolean {
  return normalizeText(lead.title ?? '').includes('входящий звонок');
}

function hasDefaultNumberedLeadTitle(lead: VibeLead): boolean {
  return DEFAULT_MANUAL_REVIEW_TITLE_PATTERN.test(normalizeText(lead.title ?? ''));
}

export function isReturnOrRepeatLead(lead: VibeLead): boolean {
  const returnCustomer = String(lead.isReturnCustomer ?? '').trim().toUpperCase();
  if (returnCustomer === 'Y' || returnCustomer === 'YES' || returnCustomer === 'TRUE' || returnCustomer === '1') return true;

  const text = normalizeText(
    [lead.title, lead.sourceDescription, lead.comments, lead.searchContent].filter(Boolean).join(' ')
  );
  return RETURN_CUSTOMER_PHRASES.some((phrase) => text.includes(phrase));
}

function getTimelineCommentText(comment: VibeTimelineComment): string {
  return comment.comment ?? comment.COMMENT ?? '';
}

function getTimelineCommentDate(comment: VibeTimelineComment, leadCreatedAt: string): string | null {
  const date = comment.createdAt ?? comment.CREATED ?? null;
  return date ?? null;
}

function isWazzupComment(comment: VibeTimelineComment): boolean {
  return getTimelineCommentText(comment).toLowerCase().includes('wazzup24.com');
}

function isAutomaticWazzupMessage(comment: VibeTimelineComment): boolean {
  const text = normalizeText(getTimelineCommentText(comment));
  return AUTO_WAZZUP_MESSAGE_PHRASES.some((phrase) => text.includes(phrase));
}

function getWazzupSenderName(comment: VibeTimelineComment): string | null {
  const text = getTimelineCommentText(comment)
    .replace(/\[img\][\s\S]*?\[\/img\]/gi, ' ')
    .replace(/&nbsp;/gi, ' ')
    .trim();
  const firstLine = text.split(/\r?\n/, 1)[0] ?? '';
  const sender = firstLine.split(':', 1)[0]?.replace(/\s+/g, ' ').trim();
  return sender || null;
}

function getCrmUserNames(users: Map<number, VibeUser>): Set<string> {
  const names = new Set<string>();
  for (const user of users.values()) {
    const name = user.name?.trim();
    const lastName = user.lastName?.trim();
    const directName = [name, lastName].filter(Boolean).join(' ').trim();
    const reverseName = [lastName, name].filter(Boolean).join(' ').trim();
    if (directName) names.add(normalizeText(directName));
    if (reverseName) names.add(normalizeText(reverseName));
  }
  return names;
}

export function isQualifyingMessengerComment(comment: VibeTimelineComment, crmUserNames: Set<string>): boolean {
  if (!isWazzupComment(comment)) return false;
  if (isAutomaticWazzupMessage(comment)) return false;
  const senderName = getWazzupSenderName(comment);
  return Boolean(senderName && crmUserNames.has(normalizeText(senderName)));
}

function isOutgoing(activity: VibeActivity): boolean {
  return toNumber(activity.direction ?? activity.DIRECTION) === 2;
}

function isIncoming(activity: VibeActivity): boolean {
  return toNumber(activity.direction ?? activity.DIRECTION) === 1;
}

function getLeadSourceId(lead: VibeLead): string {
  return String(lead.sourceId ?? '').trim().toUpperCase();
}

function getIncomingCallEndDate(activity: VibeActivity, leadCreatedAt: string): string | null {
  const endDateRaw = activity.endTime ?? activity.END_TIME ?? activity.updatedAt ?? activity.LAST_UPDATED ?? null;
  return endDateRaw ? normalizeActivityDate(endDateRaw, leadCreatedAt) : null;
}

export function isIncomingCallContact(activity: VibeActivity): boolean {
  const resultStream = String(activity.RESULT_STREAM ?? activity.resultStream ?? '');
  return isCall(activity) && isIncoming(activity) && (isCompleted(activity) || resultStream === '1') && !isMissedCallActivity(activity);
}

function isProcessedIncomingCallContact(activity: VibeActivity): boolean {
  if (!isIncomingCallContact(activity)) return false;
  if (String(activity.RESULT_STREAM ?? activity.resultStream ?? '') === '1') return true;

  const startDate = getActivityDateRaw(activity);
  const endDate = activity.endTime ?? activity.END_TIME ?? activity.updatedAt ?? activity.LAST_UPDATED ?? null;
  if (!startDate || !endDate) return false;

  const startTime = new Date(startDate).getTime();
  const endTime = new Date(endDate).getTime();
  return Number.isFinite(startTime) && Number.isFinite(endTime) && endTime > startTime;
}

function isIncomingCallNearLeadCreation(params: {
  lead: VibeLead;
  activity: VibeActivity;
  contactDate: string;
  processed: boolean;
  leadCreatedAt: string;
}): boolean {
  const { lead, activity, contactDate, processed, leadCreatedAt } = params;
  const contactTime = new Date(contactDate).getTime();
  const leadTime = new Date(leadCreatedAt).getTime();
  if (!Number.isFinite(contactTime) || !Number.isFinite(leadTime)) return false;
  if (contactTime >= leadTime) return true;
  if (!processed || getLeadSourceId(lead) !== 'CALL') return false;

  const callEndDate = getIncomingCallEndDate(activity, leadCreatedAt) ?? contactDate;
  const callEndTime = new Date(callEndDate).getTime();
  if (!Number.isFinite(callEndTime) || callEndTime > leadTime) return false;

  return leadTime - callEndTime <= CALL_LEAD_CREATION_GRACE_MINUTES * MINUTE_MS;
}

export function needsMissedCallStageHistory(lead: VibeLead, activities: VibeActivity[]): boolean {
  const leadCreatedAt = getLeadCreatedAt(lead);
  if (!leadCreatedAt) return false;
  return activities.some((activity) => {
    if (!isIncomingCallContact(activity) || isProcessedIncomingCallContact(activity)) return false;
    const contactDate = getIncomingCallContactDate(activity, leadCreatedAt);
    return Boolean(
      contactDate &&
        isIncomingCallNearLeadCreation({
          lead,
          activity,
          contactDate,
          processed: false,
          leadCreatedAt
        })
    );
  });
}

export function needsIncomingCallStageHistory(lead: VibeLead, activities: VibeActivity[]): boolean {
  return needsMissedCallStageHistory(lead, activities) || (hasIncomingCallInTitle(lead) && hasIncomingCallMarker(lead, activities));
}

export function isQualifyingOutgoingContact(activity: VibeActivity): boolean {
  if (!isOutgoing(activity) || !isCompleted(activity) || !isSuccessful(activity)) return false;
  if (isAutomaticRegistrationEmail(activity)) return false;
  if (isCall(activity) && !isSuccessfulCall(activity)) return false;
  if (isCall(activity) && isMissedCallActivity(activity)) return false;
  return isCall(activity) || isEmail(activity) || isOpenLine(activity);
}

function isQualifyingOutgoingCallAttempt(activity: VibeActivity): boolean {
  if (!isCall(activity) || !isOutgoing(activity) || isMissedCallActivity(activity)) return false;
  return isCompleted(activity) && Boolean(getActivityDateRaw(activity));
}

function hasIncomingCallMarker(lead: VibeLead, activities: VibeActivity[]): boolean {
  if (hasIncomingCallInTitle(lead)) return true;
  const leadText = normalizeText([lead.sourceDescription, lead.searchContent, lead.comments].filter(Boolean).join(' '));
  if (leadText.includes('поступил входящий звонок')) return true;
  return activities.some((activity) => normalizeProvider(activity).includes('поступил входящий звонок'));
}

function toMoscowLocalMs(utcMs: number): number {
  return utcMs + MOSCOW_OFFSET_MINUTES * MINUTE_MS;
}

function fromMoscowLocalMs(localMs: number): number {
  return localMs - MOSCOW_OFFSET_MINUTES * MINUTE_MS;
}

function getMoscowDayStartMs(utcMs: number): number {
  const local = toMoscowLocalMs(utcMs);
  const date = new Date(local);
  return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
}

export function isEarlyWorkdayUser(user: VibeUser | undefined): boolean {
  const fullName = [user?.name, user?.lastName].filter(Boolean).join(' ').trim().toLowerCase();
  return EARLY_WORKDAY_USER_NAMES.has(fullName);
}

function intervalsOverlap(startA: number, endA: number, startB: number, endB: number): boolean {
  return startA < endB && startB < endA;
}

function hasAbsenceDuringInterval(absenceIntervals: VibeAbsenceInterval[], userId: number | null, startMs: number, endMs: number): boolean {
  if (userId == null) return false;
  return absenceIntervals.some((absence) => {
    if (absence.userId !== userId) return false;
    const absenceStart = new Date(absence.start).getTime();
    const absenceEnd = new Date(absence.end).getTime();
    return Number.isFinite(absenceStart) && Number.isFinite(absenceEnd) && intervalsOverlap(startMs, endMs, absenceStart, absenceEnd);
  });
}

function getWorkingIntervalsForMoscowDay(params: {
  dayStartLocalMs: number;
  responsibleId: number | null;
  responsibleUser?: VibeUser;
  absenceIntervals: VibeAbsenceInterval[];
}): Array<{ startMs: number; endMs: number }> {
  const { dayStartLocalMs, responsibleId, responsibleUser, absenceIntervals } = params;
  const dayOfWeek = new Date(dayStartLocalMs).getUTCDay();
  const intervals: Array<{ startMinute: number; endMinute: number }> = [];

  if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    const earlyStartMs = fromMoscowLocalMs(dayStartLocalMs + 8 * 60 * MINUTE_MS);
    const earlyEndMs = fromMoscowLocalMs(dayStartLocalMs + 10 * 60 * MINUTE_MS);
    if (isEarlyWorkdayUser(responsibleUser) && !hasAbsenceDuringInterval(absenceIntervals, responsibleId, earlyStartMs, earlyEndMs)) {
      intervals.push({ startMinute: 8 * 60, endMinute: 10 * 60 });
    }
    intervals.push({ startMinute: 10 * 60, endMinute: 20 * 60 });
  } else if (dayOfWeek === 6) {
    intervals.push({ startMinute: 11 * 60, endMinute: 19 * 60 });
  }

  return intervals.map((interval) => ({
    startMs: fromMoscowLocalMs(dayStartLocalMs + interval.startMinute * MINUTE_MS),
    endMs: fromMoscowLocalMs(dayStartLocalMs + interval.endMinute * MINUTE_MS)
  }));
}

function workingMinutesBetween(params: {
  startIso: string;
  endIso: string;
  responsibleId: number | null;
  responsibleUser?: VibeUser;
  absenceIntervals: VibeAbsenceInterval[];
}): number {
  const startMs = new Date(params.startIso).getTime();
  const endMs = new Date(params.endIso).getTime();
  if (!Number.isFinite(startMs) || !Number.isFinite(endMs) || endMs <= startMs) return 0;

  let totalMs = 0;
  for (let dayStartLocalMs = getMoscowDayStartMs(startMs); dayStartLocalMs <= getMoscowDayStartMs(endMs); dayStartLocalMs += DAY_MS) {
    for (const interval of getWorkingIntervalsForMoscowDay({ ...params, dayStartLocalMs })) {
      const overlapStart = Math.max(startMs, interval.startMs);
      const overlapEnd = Math.min(endMs, interval.endMs);
      if (overlapEnd > overlapStart) totalMs += overlapEnd - overlapStart;
    }
  }

  return Math.floor(totalMs / MINUTE_MS);
}

function getResponsibleName(lead: VibeLead, users: Map<number, VibeUser>): string {
  const id = toNumber(lead.assignedById);
  if (id == null) return 'Не указан';
  const user = users.get(id);
  if (!user) return `ID ${id}`;
  return [user.name, user.lastName].filter(Boolean).join(' ').trim() || `ID ${id}`;
}

function isItDepartmentResponsible(lead: VibeLead, users: Map<number, VibeUser>): boolean {
  return normalizeText(getResponsibleName(lead, users)) === IT_DEPARTMENT_NAME;
}

function getResponsibleId(lead: VibeLead): number | null {
  return toNumber(lead.assignedById);
}

function getLeadStatusId(lead: VibeLead): string {
  return String(lead.statusId ?? lead.stageId ?? '').trim();
}

function getLeadStageName(lead: VibeLead, leadStatusNames: Map<string, string>): string {
  const statusId = getLeadStatusId(lead);
  return leadStatusNames.get(statusId) ?? (statusId || 'Не указан');
}

function getPrintableFieldValue(value: unknown, dictionary: Map<string, string>): string | null {
  if (Array.isArray(value)) {
    const values = value
      .map((item) => getPrintableFieldValue(item, dictionary))
      .filter((item): item is string => Boolean(item));
    return values.length > 0 ? values.join(', ') : null;
  }
  if (value == null || value === '') return null;
  const key = String(value).trim();
  return dictionary.get(key) ?? key;
}

function getLeadRejectionReason(lead: VibeLead, rejectionReasonNames: Map<string, string>): string | null {
  if (getLeadStatusId(lead) !== 'JUNK') return null;
  return getPrintableFieldValue(lead.ufCrm_1638180783 ?? lead.UF_CRM_1638180783, rejectionReasonNames);
}

function hasRejectionReasonId(lead: VibeLead, reasonId: string): boolean {
  const value = lead.ufCrm_1638180783 ?? lead.UF_CRM_1638180783;
  if (Array.isArray(value)) return value.some((item) => String(item).trim() === reasonId);
  return String(value ?? '').trim() === reasonId;
}

export function shouldExcludeRejectedLeadByReason(lead: VibeLead, rejectionReasonNames: Map<string, string>): boolean {
  const reason = getLeadRejectionReason(lead, rejectionReasonNames);
  return Boolean(
    (reason && EXCLUDED_REJECTION_REASONS.has(normalizeText(reason))) ||
      (getLeadStatusId(lead) === 'JUNK' && hasIncomingCallInTitle(lead) && hasRejectionReasonId(lead, SYNC_ERROR_REJECTION_REASON_ID))
  );
}

export function shouldExcludeLeadBySource(lead: VibeLead, leadSourceNames: Map<string, string>): boolean {
  const sourceId = String(lead.sourceId ?? '').trim();
  const sourceName = leadSourceNames.get(sourceId) ?? sourceId;
  return EXCLUDED_SOURCE_NAMES.has(normalizeText(sourceName));
}

function hasNonErrorRejectionReason(rejectionReason: string | null): boolean {
  return Boolean(rejectionReason && NON_ERROR_REJECTION_REASONS.has(normalizeText(rejectionReason)));
}

function getViolationFlag(status: SlaStatus, slaOverrunMinutes: number): ViolationFlag {
  if (status === 'Требуется ручная проверка') return 'Нет';
  return slaOverrunMinutes > 0 ? 'Да' : 'Нет';
}

export function buildSlaRow(params: {
  lead: VibeLead;
  activities: VibeActivity[];
  timelineComments?: VibeTimelineComment[];
  users: Map<number, VibeUser>;
  checkedAt: string;
  hadMissedCallStage?: boolean;
  hadNeedsIdentificationStage?: boolean;
  transferredToMptAt?: string | null;
  absenceIntervals?: VibeAbsenceInterval[];
  leadStatusNames?: Map<string, string>;
  rejectionReasonNames?: Map<string, string>;
}): SlaLogRow {
  const {
    lead,
    activities,
    timelineComments = [],
    users,
    checkedAt,
    hadMissedCallStage = false,
    hadNeedsIdentificationStage = false,
    transferredToMptAt = null,
    absenceIntervals = [],
    leadStatusNames = new Map(),
    rejectionReasonNames = new Map()
  } = params;
  const leadCreatedAt = getEffectiveLeadCreatedAt(lead, activities, checkedAt);
  const responsibleId = getResponsibleId(lead);
  const responsibleUser = responsibleId == null ? undefined : users.get(responsibleId);
  const crmUserNames = getCrmUserNames(users);
  const getSlaMinutes = (endIso: string) =>
    workingMinutesBetween({ startIso: leadCreatedAt, endIso, responsibleId, responsibleUser, absenceIntervals });
  const isMissedCallLead = hadMissedCallStage || isLeadMarkedAsMissedCall(lead);
  const incomingCalls = activities
    .filter(isIncomingCallContact)
    .map((activity) => ({ activity, date: getIncomingCallContactDate(activity, leadCreatedAt), processed: isProcessedIncomingCallContact(activity) }))
    .filter((item): item is { activity: VibeActivity; date: string; processed: boolean } => Boolean(item.date))
    .filter((item) =>
      isIncomingCallNearLeadCreation({
        lead,
        activity: item.activity,
        contactDate: item.date,
        processed: item.processed,
        leadCreatedAt
      })
    )
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const incomingCall = incomingCalls.find((item) => item.processed) ?? (!isMissedCallLead ? incomingCalls[0] : null);

  let firstContactAt: string | null = null;
  let minutesToFirstContact: number | null = null;
  let slaOverrunMinutes = 0;
  let status: SlaStatus;

  if (getLeadStatusId(lead) === TRANSFERRED_TO_MPT_STATUS_ID && transferredToMptAt) {
    firstContactAt = transferredToMptAt;
    minutesToFirstContact = getSlaMinutes(transferredToMptAt);
    slaOverrunMinutes = Math.max(0, minutesToFirstContact - SLA_LIMIT_MINUTES);
    status = minutesToFirstContact <= SLA_LIMIT_MINUTES ? 'В пределах 15 минут' : 'Более 15 минут';
  } else if (isItDepartmentResponsible(lead, users) && !hasOutgoingInTitle(lead)) {
    status = 'Требуется ручная проверка';
  } else if (incomingCall) {
    firstContactAt = incomingCall.date;
    minutesToFirstContact = firstContactAt ? getSlaMinutes(firstContactAt) : null;
    status = 'Входящий звонок';
  } else if (!isMissedCallLead && hasIncomingCallInTitle(lead) && hasIncomingCallMarker(lead, activities)) {
    firstContactAt = leadCreatedAt;
    minutesToFirstContact = 0;
    status = 'Входящий звонок';
  } else {
    const activityContacts = activities
      .flatMap((activity) => {
        const contacts: Array<{ date: string | null }> = [];
        if (isQualifyingOutgoingContact(activity) || isQualifyingOutgoingCallAttempt(activity)) {
          contacts.push({ date: getActivityDate(activity, leadCreatedAt) });
        }
        for (const date of getEmbeddedOutgoingEmailDates(activity)) contacts.push({ date });
        return contacts;
      })
      .filter((item): item is { date: string } => Boolean(item.date))
      .filter((item) => new Date(item.date).getTime() >= new Date(leadCreatedAt).getTime());

    const onlineChatDate = getLeadOnlineChatContactDate(lead, activities, leadCreatedAt);
    const onlineChatContacts = onlineChatDate ? [{ date: onlineChatDate }] : [];

    const messengerContacts = timelineComments
      .filter((comment) => isQualifyingMessengerComment(comment, crmUserNames))
      .map((comment) => ({ date: getTimelineCommentDate(comment, leadCreatedAt) }))
      .filter((item): item is { date: string } => Boolean(item.date))
      .filter((item) => new Date(item.date).getTime() >= new Date(leadCreatedAt).getTime())
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    const contacts = [...activityContacts, ...onlineChatContacts, ...messengerContacts]
      .filter((item) => new Date(item.date).getTime() >= new Date(leadCreatedAt).getTime())
      .sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    if (contacts.length === 0) {
      status = 'Контакта не было';
      const elapsedWorkingMinutes = getSlaMinutes(checkedAt);
      slaOverrunMinutes = Math.max(0, elapsedWorkingMinutes - SLA_LIMIT_MINUTES);
    } else {
      const firstContact = contacts[0];
      if (!firstContact) {
        status = 'Контакта не было';
        const elapsedWorkingMinutes = getSlaMinutes(checkedAt);
        slaOverrunMinutes = Math.max(0, elapsedWorkingMinutes - SLA_LIMIT_MINUTES);
      } else {
      firstContactAt = firstContact.date;
      minutesToFirstContact = getSlaMinutes(firstContactAt);
      slaOverrunMinutes = Math.max(0, minutesToFirstContact - SLA_LIMIT_MINUTES);
      status = minutesToFirstContact <= SLA_LIMIT_MINUTES ? 'В пределах 15 минут' : 'Более 15 минут';
      }
    }
  }

  const rejectionReason = getLeadRejectionReason(lead, rejectionReasonNames);
  const violationFlag = hasNonErrorRejectionReason(rejectionReason) ? 'Нет' : getViolationFlag(status, slaOverrunMinutes);

  return {
    id: `${lead.id}-${checkedAt}`,
    leadId: lead.id,
    leadTitle: lead.title?.trim() || `Лид ${lead.id}`,
    leadStageName: getLeadStageName(lead, leadStatusNames),
    rejectionReason,
    checkedAt,
    leadCreatedAt,
    firstContactAt,
    minutesToFirstContact,
    slaOverrunMinutes,
    status,
    responsibleId,
    responsibleName: getResponsibleName(lead, users),
    violationFlag
  };
}

export function hasMissedCallStage(history: Array<{ statusId?: string | null }>): boolean {
  return history.some((item) => String(item.statusId ?? '') === MISSED_CALL_STATUS_ID);
}

export function hasNeedsIdentificationStage(history: Array<{ statusId?: string | null }>): boolean {
  return history.some((item) => {
    const status = normalizeText(String(item.statusId ?? ''));
    return status === NEEDS_IDENTIFICATION_STATUS_ID || status.includes('выявление потребностей');
  });
}

export function isTransferredToMptLead(lead: VibeLead): boolean {
  return getLeadStatusId(lead) === TRANSFERRED_TO_MPT_STATUS_ID;
}

export function getTransferredToMptAt(history: Array<{ createdAt?: string | null; statusId?: string | null }>): string | null {
  return history
    .filter((item) => String(item.statusId ?? '') === TRANSFERRED_TO_MPT_STATUS_ID)
    .map((item) => item.createdAt ?? null)
    .filter((date): date is string => Boolean(date && Number.isFinite(new Date(date).getTime())))
    .sort(compareIsoDates)[0] ?? null;
}
