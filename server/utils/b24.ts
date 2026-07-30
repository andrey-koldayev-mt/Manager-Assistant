import type { H3Event } from 'h3';
import { createError, getHeader } from 'h3';

// VIBE_APP_API_KEY is the production OAuth application key. VIBE_API_KEY is
// retained for the existing CI/deploy secret mapping.
export const B24_API_KEY = process.env.VIBE_APP_API_KEY ?? process.env.VIBE_API_KEY ?? '';

export function ensureVibeApiKey() {
  if (!B24_API_KEY) {
    throw createError({
      statusCode: 500,
      statusMessage: 'VIBE_APP_API_KEY is not configured'
    });
  }
}

export function firstString(...values: unknown[]): string {
  for (const value of values) {
    if (typeof value === 'string' && value.trim()) {
      return value.trim();
    }
    if (typeof value === 'number' && Number.isFinite(value)) {
      return String(value);
    }
  }

  return '';
}

export function getVibeAuthorizationHeader(event: H3Event): string {
  return firstString(
    getHeader(event, 'x-vibe-authorization'),
    getHeader(event, 'authorization')
  );
}

export function buildActivityDeadline(dateValue: string): string {
  const trimmed = dateValue.trim();
  if (!trimmed) {
    throw createError({ statusCode: 400, statusMessage: 'Missing nextContactDate parameter' });
  }

  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    return `${trimmed}T10:00:00+03:00`;
  }

  const parsed = new Date(trimmed);
  if (Number.isNaN(parsed.getTime())) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid nextContactDate parameter' });
  }

  return parsed.toISOString();
}

export function getDisplayName(person: Record<string, unknown> | null | undefined, fallback: string): string {
  if (!person) {
    return fallback;
  }

  const directName = firstString(
    person.name,
    person.NAME,
    person.fullName,
    person.FULL_NAME
  );
  if (directName) {
    return directName;
  }

  const firstName = firstString(person.firstName, person.FIRST_NAME);
  const lastName = firstString(person.lastName, person.LAST_NAME);
  const combined = [firstName, lastName].filter(Boolean).join(' ').trim();

  return combined || fallback;
}

export function toRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === 'object' ? value as Record<string, unknown> : null;
}

export function getDealField(deal: Record<string, unknown> | null | undefined, fieldId: string): string {
  if (!deal) {
    return '';
  }

  return String(
    deal[`ufCrm_${fieldId}`] ||
    deal[`ufCrm${fieldId}`] ||
    deal[`UF_CRM_${fieldId}`] ||
    ''
  );
}

export function parseBitrixDate(value: string): Date | null {
  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }

  const ruDate = trimmed.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})/);
  if (ruDate) {
    const [, day, month, year] = ruDate;
    const date = new Date(Number(year), Number(month) - 1, Number(day));
    return Number.isNaN(date.getTime()) ? null : date;
  }

  const parsed = new Date(trimmed);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

const RU_MONTHS_PREPOSITIONAL = [
  'январе',
  'феврале',
  'марте',
  'апреле',
  'мае',
  'июне',
  'июле',
  'августе',
  'сентябре',
  'октябре',
  'ноябре',
  'декабре'
];

function getYearPhrase(year: number): string {
  const currentYear = new Date().getFullYear();
  if (year === currentYear) {
    return 'этого года';
  }
  if (year === currentYear - 1) {
    return 'прошлого года';
  }

  return `${year} года`;
}

export function formatTripDatePhrase(startDateValue: string, endDateValue: string): string {
  const startDate = parseBitrixDate(startDateValue);
  const endDate = parseBitrixDate(endDateValue);

  if (!startDate && !endDate) {
    return '';
  }

  const primaryDate = startDate || endDate;
  if (!primaryDate) {
    return '';
  }

  const primaryMonth = RU_MONTHS_PREPOSITIONAL[primaryDate.getMonth()];
  const primaryYearPhrase = getYearPhrase(primaryDate.getFullYear());

  if (!startDate || !endDate) {
    return `в ${primaryMonth} ${primaryYearPhrase}`;
  }

  const sameMonth = startDate.getMonth() === endDate.getMonth();
  const sameYear = startDate.getFullYear() === endDate.getFullYear();
  if (sameMonth && sameYear) {
    return `в ${primaryMonth} ${primaryYearPhrase}`;
  }

  const endMonth = RU_MONTHS_PREPOSITIONAL[endDate.getMonth()];
  const endYearPhrase = getYearPhrase(endDate.getFullYear());

  if (sameYear) {
    return `с ${primaryMonth} по ${endMonth} ${primaryYearPhrase}`;
  }

  return `с ${primaryMonth} ${primaryYearPhrase} по ${endMonth} ${endYearPhrase}`;
}
