import { j as getHeader, c as createError } from './nitro.mjs';

var _a;
const B24_API_KEY = (_a = process.env.VIBE_API_KEY) != null ? _a : "";
function ensureVibeApiKey() {
  if (!B24_API_KEY) {
    throw createError({
      statusCode: 500,
      statusMessage: "VIBE_API_KEY is not configured"
    });
  }
}
function firstString(...values) {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
    if (typeof value === "number" && Number.isFinite(value)) {
      return String(value);
    }
  }
  return "";
}
function getVibeAuthorizationHeader(event) {
  return firstString(
    getHeader(event, "x-vibe-authorization"),
    getHeader(event, "authorization")
  );
}
function buildActivityDeadline(dateValue) {
  const trimmed = dateValue.trim();
  if (!trimmed) {
    throw createError({ statusCode: 400, statusMessage: "Missing nextContactDate parameter" });
  }
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    return `${trimmed}T10:00:00+03:00`;
  }
  const parsed = new Date(trimmed);
  if (Number.isNaN(parsed.getTime())) {
    throw createError({ statusCode: 400, statusMessage: "Invalid nextContactDate parameter" });
  }
  return parsed.toISOString();
}
function getDisplayName(person, fallback) {
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
  const combined = [firstName, lastName].filter(Boolean).join(" ").trim();
  return combined || fallback;
}
function toRecord(value) {
  return value && typeof value === "object" ? value : null;
}
function getDealField(deal, fieldId) {
  if (!deal) {
    return "";
  }
  return String(
    deal[`ufCrm_${fieldId}`] || deal[`ufCrm${fieldId}`] || deal[`UF_CRM_${fieldId}`] || ""
  );
}
function parseBitrixDate(value) {
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
  "\u044F\u043D\u0432\u0430\u0440\u0435",
  "\u0444\u0435\u0432\u0440\u0430\u043B\u0435",
  "\u043C\u0430\u0440\u0442\u0435",
  "\u0430\u043F\u0440\u0435\u043B\u0435",
  "\u043C\u0430\u0435",
  "\u0438\u044E\u043D\u0435",
  "\u0438\u044E\u043B\u0435",
  "\u0430\u0432\u0433\u0443\u0441\u0442\u0435",
  "\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u0435",
  "\u043E\u043A\u0442\u044F\u0431\u0440\u0435",
  "\u043D\u043E\u044F\u0431\u0440\u0435",
  "\u0434\u0435\u043A\u0430\u0431\u0440\u0435"
];
function getYearPhrase(year) {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  if (year === currentYear) {
    return "\u044D\u0442\u043E\u0433\u043E \u0433\u043E\u0434\u0430";
  }
  if (year === currentYear - 1) {
    return "\u043F\u0440\u043E\u0448\u043B\u043E\u0433\u043E \u0433\u043E\u0434\u0430";
  }
  return `${year} \u0433\u043E\u0434\u0430`;
}
function formatTripDatePhrase(startDateValue, endDateValue) {
  const startDate = parseBitrixDate(startDateValue);
  const endDate = parseBitrixDate(endDateValue);
  if (!startDate && !endDate) {
    return "";
  }
  const primaryDate = startDate || endDate;
  if (!primaryDate) {
    return "";
  }
  const primaryMonth = RU_MONTHS_PREPOSITIONAL[primaryDate.getMonth()];
  const primaryYearPhrase = getYearPhrase(primaryDate.getFullYear());
  if (!startDate || !endDate) {
    return `\u0432 ${primaryMonth} ${primaryYearPhrase}`;
  }
  const sameMonth = startDate.getMonth() === endDate.getMonth();
  const sameYear = startDate.getFullYear() === endDate.getFullYear();
  if (sameMonth && sameYear) {
    return `\u0432 ${primaryMonth} ${primaryYearPhrase}`;
  }
  const endMonth = RU_MONTHS_PREPOSITIONAL[endDate.getMonth()];
  const endYearPhrase = getYearPhrase(endDate.getFullYear());
  if (sameYear) {
    return `\u0441 ${primaryMonth} \u043F\u043E ${endMonth} ${primaryYearPhrase}`;
  }
  return `\u0441 ${primaryMonth} ${primaryYearPhrase} \u043F\u043E ${endMonth} ${endYearPhrase}`;
}

export { B24_API_KEY as B, formatTripDatePhrase as a, buildActivityDeadline as b, getDisplayName as c, getVibeAuthorizationHeader as d, ensureVibeApiKey as e, firstString as f, getDealField as g, toRecord as t };
//# sourceMappingURL=b24.mjs.map
