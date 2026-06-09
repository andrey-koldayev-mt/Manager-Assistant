import type {
  ReactivationEmployee,
  ReactivationEmployeeRow,
  ReactivationLogPayload,
  ReactivationSuccessfulDeal,
  VibeActivity,
  VibeDeal
} from './types';

export const REACTIVATION_DEPARTMENT_ID = 10;
export const EXCLUDED_REACTIVATION_USER_ID = 572;
export const REACTIVATION_CATEGORY_ID = 12;
export const REACTIVATION_WEEKLY_PLAN = 25;
export const REACTIVATION_WON_STAGE = 'C12:WON';
export const REACTIVATION_LOSE_STAGE = 'C12:LOSE';

const MOSCOW_OFFSET_MS = 3 * 60 * 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;

export interface ReactivationWeekRange {
  key: string;
  monthKey: string;
  startedAt: string;
  finishedAt: string;
  startedAtMs: number;
  finishedAtMs: number;
}

type ReactivationReason = ReactivationSuccessfulDeal['reasons'][number];

function pad(value: number): string {
  return String(value).padStart(2, '0');
}

function toMoscowDate(value: string | Date): Date {
  const time = typeof value === 'string' ? new Date(value).getTime() : value.getTime();
  return new Date(time + MOSCOW_OFFSET_MS);
}

function toMoscowIsoDate(date: Date): string {
  return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`;
}

function formatMoscowIso(date: Date, endOfDay = false): string {
  const time = endOfDay ? '23:59:59.999' : '00:00:00.000';
  return `${toMoscowIsoDate(date)}T${time}+03:00`;
}

function parseTime(value: string | null | undefined): number {
  if (!value) return Number.NaN;
  const time = new Date(value).getTime();
  return Number.isFinite(time) ? time : Number.NaN;
}

function isInsideRange(value: string | null | undefined, week: ReactivationWeekRange): boolean {
  const time = parseTime(value);
  return Number.isFinite(time) && time >= week.startedAtMs && time <= week.finishedAtMs;
}

function normalizeId(value: number | string | null | undefined): number | null {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string' && value.trim() !== '') {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

function stripHtml(value: string): string {
  return value
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
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

function isCompletedActivity(activity: VibeActivity): boolean {
  return isCompletedValue(activity.completed) || isCompletedStatus(activity.STATUS) || isCompletedStatus(activity.status);
}

function getActivityDeadline(activity: VibeActivity): string | null | undefined {
  return activity.deadline ?? activity.endTime ?? activity.END_TIME;
}

export function getMoscowMonthKey(value: string | Date): string {
  const moscowDate = toMoscowDate(value);
  return `${moscowDate.getUTCFullYear()}-${pad(moscowDate.getUTCMonth() + 1)}`;
}

export function getMoscowWeekRange(value: string | Date): ReactivationWeekRange {
  const moscowDate = toMoscowDate(value);
  const dayOfWeek = moscowDate.getUTCDay();
  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  const currentMoscowMidnightUtc = Date.UTC(
    moscowDate.getUTCFullYear(),
    moscowDate.getUTCMonth(),
    moscowDate.getUTCDate()
  );
  const startedAtMoscowLocalMs = currentMoscowMidnightUtc + mondayOffset * DAY_MS;
  const finishedAtMoscowLocalMs = startedAtMoscowLocalMs + 7 * DAY_MS - 1;
  const startedAtMs = startedAtMoscowLocalMs - MOSCOW_OFFSET_MS;
  const finishedAtMs = finishedAtMoscowLocalMs - MOSCOW_OFFSET_MS;
  const startedAtMoscow = new Date(startedAtMoscowLocalMs);
  const finishedAtMoscow = new Date(finishedAtMoscowLocalMs);

  return {
    key: toMoscowIsoDate(startedAtMoscow),
    monthKey: getMoscowMonthKey(value),
    startedAt: formatMoscowIso(startedAtMoscow),
    finishedAt: formatMoscowIso(finishedAtMoscow, true),
    startedAtMs,
    finishedAtMs
  };
}

export function isSuccessfulPlanningActivity(activity: VibeActivity, week: ReactivationWeekRange, checkedAt: string): boolean {
  if (normalizeId(activity.ownerTypeId) !== 2) return false;
  if (isCompletedActivity(activity)) return false;
  if (!isInsideRange(activity.createdAt ?? activity.CREATED, week)) return false;

  const deadline = parseTime(getActivityDeadline(activity));
  const checkedTime = new Date(checkedAt).getTime();
  if (!Number.isFinite(deadline) || !Number.isFinite(checkedTime) || deadline <= checkedTime) return false;

  return stripHtml(activity.description ?? '').length > 0;
}

export function isSuccessfulReactivationDeal(params: {
  deal: VibeDeal;
  activities: VibeActivity[];
  week: ReactivationWeekRange;
  checkedAt: string;
}): { success: boolean; reasons: ReactivationReason[] } {
  const { deal, activities, week, checkedAt } = params;
  const reasons: ReactivationReason[] = [];
  const dealUpdatedThisWeek = isInsideRange(deal.updatedAt, week);

  if (activities.some((activity) => isSuccessfulPlanningActivity(activity, week, checkedAt))) reasons.push('activity');
  if (dealUpdatedThisWeek && deal.stageId === REACTIVATION_WON_STAGE) reasons.push('won');
  if (dealUpdatedThisWeek && deal.stageId === REACTIVATION_LOSE_STAGE) reasons.push('lose');

  return { success: reasons.length > 0, reasons };
}

export function shouldAnalyzeReactivationDeal(deal: VibeDeal, employeeIds: Set<number>, week: ReactivationWeekRange): boolean {
  const categoryId = normalizeId(deal.categoryId);
  const assignedById = normalizeId(deal.assignedById);
  return (
    categoryId === REACTIVATION_CATEGORY_ID &&
    assignedById != null &&
    employeeIds.has(assignedById) &&
    isInsideRange(deal.updatedAt, week)
  );
}

export function buildReactivationRows(params: {
  employees: ReactivationEmployee[];
  deals: VibeDeal[];
  activitiesByDeal: Map<number, VibeActivity[]>;
  previousMonthlyRating: Record<string, number>;
  week: ReactivationWeekRange;
  checkedAt: string;
}): ReactivationEmployeeRow[] {
  const { employees, deals, activitiesByDeal, previousMonthlyRating, week, checkedAt } = params;
  const employeeIds = new Set(employees.map((employee) => employee.id));
  const successfulDealsByEmployee = new Map<number, ReactivationSuccessfulDeal[]>();

  for (const deal of deals) {
    if (!shouldAnalyzeReactivationDeal(deal, employeeIds, week)) continue;

    const assignedById = normalizeId(deal.assignedById);
    if (assignedById == null) continue;

    const result = isSuccessfulReactivationDeal({
      deal,
      activities: activitiesByDeal.get(deal.id) ?? [],
      week,
      checkedAt
    });
    if (!result.success) continue;

    const successfulDeal: ReactivationSuccessfulDeal = {
      dealId: deal.id,
      title: deal.title?.trim() || `Сделка ${deal.id}`,
      stageId: deal.stageId ?? null,
      responsibleId: assignedById,
      reasons: result.reasons,
      updatedAt: deal.updatedAt ?? checkedAt
    };
    const employeeDeals = successfulDealsByEmployee.get(assignedById) ?? [];
    employeeDeals.push(successfulDeal);
    successfulDealsByEmployee.set(assignedById, employeeDeals);
  }

  return employees
    .map((employee) => {
      const successfulDeals = successfulDealsByEmployee.get(employee.id) ?? [];
      return {
        employeeId: employee.id,
        name: employee.name,
        lastName: employee.lastName,
        photoUrl: employee.photoUrl,
        weeklyCount: successfulDeals.length,
        weeklyPlan: REACTIVATION_WEEKLY_PLAN,
        monthlyRating: previousMonthlyRating[String(employee.id)] ?? 0,
        successfulDeals
      };
    })
    .sort(
      (left, right) =>
        right.weeklyCount - left.weeklyCount ||
        right.monthlyRating - left.monthlyRating ||
        left.lastName.localeCompare(right.lastName, 'ru')
    );
}

export function emptyReactivationLog(): ReactivationLogPayload {
  return {
    generatedAt: null,
    weekKey: null,
    monthKey: null,
    weekStartedAt: null,
    weekFinishedAt: null,
    monthlyRating: {},
    finalizedWeeks: [],
    rows: []
  };
}

export function rollupPreviousWeekIntoRating(
  saved: ReactivationLogPayload,
  currentMonthKey: string,
  checkedAt: string
): ReactivationLogPayload {
  if (!saved.monthKey || saved.monthKey !== currentMonthKey) {
    return {
      ...saved,
      monthlyRating: {},
      finalizedWeeks: []
    };
  }

  const currentWeekKey = getMoscowWeekRange(checkedAt).key;
  if (
    !saved.weekKey ||
    saved.weekKey === currentWeekKey ||
    saved.finalizedWeeks.some((finalizedWeek) => finalizedWeek.weekKey === saved.weekKey)
  ) {
    return saved;
  }

  const employeeResults: Record<string, number> = {};
  const monthlyRating = { ...saved.monthlyRating };
  for (const row of saved.rows) {
    const employeeId = String(row.employeeId);
    employeeResults[employeeId] = row.weeklyCount;
    monthlyRating[employeeId] = (monthlyRating[employeeId] ?? 0) + row.weeklyCount;
  }

  return {
    ...saved,
    monthlyRating,
    finalizedWeeks: [
      ...saved.finalizedWeeks,
      {
        weekKey: saved.weekKey,
        monthKey: saved.monthKey,
        finalizedAt: checkedAt,
        employeeResults
      }
    ]
  };
}
