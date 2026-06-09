import type { NextStepLogRow, NextStepStatus, VibeActivity, VibeDeal, VibeUser, ViolationFlag } from './types';

export const NEXT_STEP_CATEGORY_ID = 14;
export const NEXT_STEP_STAGE_NAMES: Record<string, string> = {
  'C14:EXECUTING': 'Предложение получено',
  'C14:FINAL_INVOICE': 'Ожидание'
};
export const NEXT_STEP_STAGE_IDS = Object.keys(NEXT_STEP_STAGE_NAMES);

const ACTION_WORDS = [
  'позвон',
  'напиш',
  'отправ',
  'соглас',
  'уточн',
  'обсуд',
  'предлож',
  'прод',
  'закры',
  'встреч',
  'связ'
];
const CHANNEL_WORDS = [
  'телефон',
  'звон',
  'whatsapp',
  'ватсап',
  'wazzup',
  'telegram',
  'телеграм',
  'почт',
  'email',
  'e-mail',
  'мессендж',
  'чат',
  'смс',
  'sms'
];
const TIME_WORDS = ['сегодня', 'завтра', 'послезавтра', 'утром', 'днем', 'днём', 'вечером', 'час', 'минут', 'недел'];
const PLANNING_PROVIDER_IDS = new Set(['crm_todo', 'crm_tasks_task']);
const PLANNING_PROVIDER_TYPE_IDS = new Set(['todo', 'tasks_task']);

function normalizeText(value: string): string {
  return value
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeId(value: number | string | null | undefined): number | null {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string' && value.trim()) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

function parseDateTime(value: string | null | undefined): number {
  if (!value) return Number.NaN;
  const direct = new Date(value).getTime();
  if (Number.isFinite(direct)) return direct;
  const match = value.trim().match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?$/);
  if (!match) return Number.NaN;
  const [, day, month, year, hour = '0', minute = '0', second = '0'] = match;
  return new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute),
    Number(second)
  ).getTime();
}

function toIsoOrRaw(value: string | null | undefined, fallback: string): string {
  const time = parseDateTime(value);
  return Number.isFinite(time) ? new Date(time).toISOString() : value || fallback;
}

function isCompletedValue(value: VibeActivity['completed']): boolean {
  if (value === true) return true;
  if (typeof value === 'number') return value === 1;
  if (typeof value !== 'string') return false;
  return ['1', 'true', 'y', 'yes'].includes(value.trim().toLowerCase());
}

function isCompletedStatus(value: VibeActivity['STATUS']): boolean {
  return String(value ?? '').trim() === '2';
}

function isOpenDealActivity(activity: VibeActivity): boolean {
  return normalizeId(activity.ownerTypeId) === 2 && !isCompletedValue(activity.completed) && !isCompletedStatus(activity.STATUS) && !isCompletedStatus(activity.status);
}

export function isNextStepPlanningActivity(activity: VibeActivity): boolean {
  const providerId = String(activity.PROVIDER_ID ?? activity.providerId ?? '').trim().toLowerCase();
  const providerTypeId = String(activity.PROVIDER_TYPE_ID ?? activity.providerTypeId ?? '').trim().toLowerCase();
  return isOpenDealActivity(activity) && (PLANNING_PROVIDER_IDS.has(providerId) || PLANNING_PROVIDER_TYPE_IDS.has(providerTypeId));
}

function getActivityDeadline(activity: VibeActivity): string | null | undefined {
  return activity.deadline ?? activity.endTime ?? activity.END_TIME;
}

function hasAnyWord(text: string, words: string[]): boolean {
  return words.some((word) => text.includes(word));
}

function hasDateOrTimeMarker(text: string): boolean {
  return /\b\d{1,2}[:.]\d{2}\b/.test(text) || /\b\d{1,2}[./-]\d{1,2}\b/.test(text) || hasAnyWord(text, TIME_WORDS);
}

function hasQualityDescription(description: string): boolean {
  const text = normalizeText(description).toLowerCase();
  if (text.length < 20) return false;
  return hasAnyWord(text, ACTION_WORDS) && hasAnyWord(text, CHANNEL_WORDS) && hasDateOrTimeMarker(text);
}

function getResponsibleId(deal: VibeDeal): number | null {
  return normalizeId(deal.assignedById);
}

function getResponsibleName(deal: VibeDeal, users: Map<number, VibeUser>): string {
  const id = getResponsibleId(deal);
  if (id == null) return 'Не указан';
  const user = users.get(id);
  if (!user) return `ID ${id}`;
  return [user.name, user.lastName].filter(Boolean).join(' ').trim() || `ID ${id}`;
}

export function shouldAnalyzeNextStepDeal(deal: VibeDeal): boolean {
  return normalizeId(deal.categoryId) === NEXT_STEP_CATEGORY_ID && Boolean(deal.stageId && NEXT_STEP_STAGE_NAMES[deal.stageId]);
}

export function evaluateNextStepActivity(activity: VibeActivity, checkedAt: string): string[] {
  const errors: string[] = [];
  const deadline = parseDateTime(getActivityDeadline(activity));
  const checkedTime = parseDateTime(checkedAt);

  if (!Number.isFinite(deadline)) {
    errors.push('Не указана дата дела');
  } else if (!Number.isFinite(checkedTime) || deadline <= checkedTime) {
    errors.push('Дата дела не в будущем');
  }

  if (!hasQualityDescription(activity.description ?? '')) {
    errors.push('В описании не указано что, где и когда менеджер планирует сделать для продажи');
  }

  return errors;
}

function statusByErrors(errors: string[], hasActivity: boolean): NextStepStatus {
  if (!hasActivity || errors.length >= 2) return 'ERROR';
  if (errors.length === 1) return 'WARNING';
  return 'OK';
}

export function buildNextStepRow(params: {
  deal: VibeDeal;
  activities: VibeActivity[];
  users: Map<number, VibeUser>;
  checkedAt: string;
}): NextStepLogRow {
  const { deal, activities, users, checkedAt } = params;
  const openActivities = activities.filter(isNextStepPlanningActivity);
  const bestActivity = openActivities
    .map((activity) => ({ activity, errors: evaluateNextStepActivity(activity, checkedAt) }))
    .sort((left, right) => left.errors.length - right.errors.length)[0];
  const errors = bestActivity?.errors ?? ['Нет запланированного дела'];
  const status = statusByErrors(errors, Boolean(bestActivity));
  const violationFlag: ViolationFlag = status === 'OK' ? 'Нет' : 'Да';

  return {
    id: `${deal.id}-${checkedAt}`,
    dealId: deal.id,
    dealTitle: deal.title?.trim() || `Сделка ${deal.id}`,
    checkedAt,
    dealCreatedAt: toIsoOrRaw(deal.createdAt, checkedAt),
    dealUpdatedAt: toIsoOrRaw(deal.updatedAt, checkedAt),
    stageId: deal.stageId ?? null,
    stageName: deal.stageId ? NEXT_STEP_STAGE_NAMES[deal.stageId] ?? deal.stageId : 'Не указана',
    activityId: bestActivity?.activity.id ?? null,
    activityDeadline: bestActivity ? toIsoOrRaw(getActivityDeadline(bestActivity.activity), checkedAt) : null,
    activityDescription: bestActivity ? normalizeText(bestActivity.activity.description ?? '') || null : null,
    nextStepErrors: errors,
    status,
    responsibleId: getResponsibleId(deal),
    responsibleName: getResponsibleName(deal, users),
    violationFlag
  };
}

export function buildNextStepRows(params: {
  deals: VibeDeal[];
  activitiesByDeal: Map<number, VibeActivity[]>;
  users: Map<number, VibeUser>;
  checkedAt: string;
}): NextStepLogRow[] {
  const { deals, activitiesByDeal, users, checkedAt } = params;
  return deals
    .filter(shouldAnalyzeNextStepDeal)
    .map((deal) => buildNextStepRow({ deal, activities: activitiesByDeal.get(deal.id) ?? [], users, checkedAt }))
    .sort((left, right) => {
      const statusOrder = { ERROR: 0, WARNING: 1, OK: 2 } as Record<NextStepStatus, number>;
      return statusOrder[left.status] - statusOrder[right.status] || parseDateTime(right.dealUpdatedAt) - parseDateTime(left.dealUpdatedAt);
    });
}
