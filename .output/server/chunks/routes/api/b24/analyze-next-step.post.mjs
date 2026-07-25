import { a as defineEventHandler, z as readBody, c as createError } from '../../../_/nitro.mjs';
import { d as getVibeAuthorizationHeader, e as ensureVibeApiKey, B as B24_API_KEY } from '../../../_/b24.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:fs/promises';
import 'node:url';

const DEAL_ENTITY_TYPE_ID = 2;
function buildDealContext({ deal, timelines = [], activities = [], messages = [] }) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
  if (!deal || !Number.isFinite(Number((_a = deal.id) != null ? _a : deal.ID))) {
    throw new Error("deal is required");
  }
  const history = [
    ...activities.map(normalizeActivity),
    ...timelines.map(normalizeTimeline),
    ...messages.map(normalizeMessage)
  ].filter((entry) => entry.text || entry.title).sort((a, b) => new Date(a.at).getTime() - new Date(b.at).getTime());
  const dealId = Number((_b = deal.id) != null ? _b : deal.ID);
  return {
    deal: {
      id: dealId,
      title: (_e = (_d = (_c = deal.title) != null ? _c : deal.name) != null ? _d : deal.TITLE) != null ? _e : `\u0421\u0434\u0435\u043B\u043A\u0430 ${dealId}`,
      stageId: (_h = (_g = (_f = deal.stageId) != null ? _f : deal.stage) != null ? _g : deal.STAGE_ID) != null ? _h : null,
      amount: (_k = (_j = (_i = deal.amount) != null ? _i : deal.opportunity) != null ? _j : deal.OPPORTUNITY) != null ? _k : null,
      currencyId: (_n = (_m = (_l = deal.currencyId) != null ? _l : deal.currency) != null ? _m : deal.CURRENCY_ID) != null ? _n : null,
      assignedById: numberOrNull((_p = (_o = deal.assignedById) != null ? _o : deal.responsibleId) != null ? _p : deal.ASSIGNED_BY_ID),
      contactId: numberOrNull((_q = deal.contactId) != null ? _q : deal.CONTACT_ID),
      companyId: numberOrNull((_r = deal.companyId) != null ? _r : deal.COMPANY_ID)
    },
    history,
    sourceStats: {
      timelines: timelines.length,
      activities: activities.length,
      messages: messages.length
    }
  };
}
function detectNativeAiTodo(activities = []) {
  var _a;
  return (_a = activities.find((activity) => {
    const completed = activity.completed === true || activity.completed === "Y" || activity.status === "completed";
    if (completed) {
      return false;
    }
    const haystack = [
      activity.subject,
      activity.title,
      activity.description,
      activity.providerId,
      activity.providerTypeId,
      activity.originatorId,
      activity.originId
    ].filter(Boolean).join(" ").toLowerCase();
    return /\bai\b|copilot|битрикс\s*ai|штатн/.test(haystack);
  })) != null ? _a : null;
}
function validateAiRecommendation(value, now = /* @__PURE__ */ new Date()) {
  if (!value || typeof value !== "object") {
    throw new Error("AI recommendation must be an object");
  }
  for (const field of ["title", "description", "deadline", "activityType"]) {
    if (typeof value[field] !== "string" || value[field].trim().length === 0) {
      throw new Error(`${field} is required`);
    }
  }
  const deadline = new Date(value.deadline);
  if (Number.isNaN(deadline.getTime())) {
    throw new Error("deadline must be a valid ISO date");
  }
  if (deadline.getTime() <= now.getTime()) {
    throw new Error("deadline must be in the future");
  }
  const responsibleId = Number(value.responsibleId);
  if (!Number.isFinite(responsibleId) || responsibleId <= 0) {
    throw new Error("responsibleId must be a positive number");
  }
  return {
    title: value.title.trim(),
    description: value.description.trim(),
    deadline: value.deadline,
    responsibleId,
    activityType: value.activityType.trim(),
    importantDetails: toStringArray(value.importantDetails),
    justification: toStringArray(value.justification),
    sourceSignals: toStringArray(value.sourceSignals)
  };
}
function ensureFutureRecommendationDeadline(value, now = /* @__PURE__ */ new Date()) {
  if (!value || typeof value !== "object") {
    return value;
  }
  const deadline = new Date(value.deadline);
  if (!Number.isNaN(deadline.getTime()) && deadline.getTime() > now.getTime()) {
    return value;
  }
  return {
    ...value,
    deadline: buildFallbackDeadline(now)
  };
}
function buildTodoPayload({ dealId, recommendation }) {
  const numericDealId = Number(dealId);
  if (!Number.isFinite(numericDealId) || numericDealId <= 0) {
    throw new Error("dealId must be a positive number");
  }
  const validated = validateAiRecommendation(recommendation, /* @__PURE__ */ new Date(0));
  return {
    ownerTypeId: DEAL_ENTITY_TYPE_ID,
    ownerId: numericDealId,
    deadline: validated.deadline,
    title: validated.title,
    description: validated.description,
    responsibleId: validated.responsibleId,
    pingOffsets: []
  };
}
function buildLinkedTaskPayload({ dealId, recommendation }) {
  const numericDealId = Number(dealId);
  return {
    title: recommendation.title,
    description: recommendation.description,
    responsibleId: recommendation.responsibleId,
    deadline: recommendation.deadline,
    priority: 1,
    UF_CRM_TASK: [`D_${numericDealId}`]
  };
}
function buildTimelineLogPayload({ dealId, recommendation, activityId }) {
  return {
    entityTypeId: DEAL_ENTITY_TYPE_ID,
    entityId: Number(dealId),
    title: "AI: \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
    text: [
      `\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0434\u0435\u043B\u043E${activityId ? ` #${activityId}` : ""}: ${recommendation.title}`,
      "",
      recommendation.description
    ].join("\n"),
    iconCode: "ai"
  };
}
function buildPromptMessages({ context, systemPrompt }) {
  return [
    { role: "system", content: systemPrompt },
    { role: "user", content: JSON.stringify(context, null, 2) }
  ];
}
function normalizeActivity(activity) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
  return {
    id: `activity:${(_a = activity.id) != null ? _a : activity.ID}`,
    at: (_e = (_d = (_c = (_b = activity.createdAt) != null ? _b : activity.deadline) != null ? _c : activity.startTime) != null ? _d : activity.dateCreate) != null ? _e : (/* @__PURE__ */ new Date(0)).toISOString(),
    channel: (_h = (_g = (_f = activity.activityType) != null ? _f : activity.typeName) != null ? _g : activity.providerTypeId) != null ? _h : "activity",
    author: (_j = (_i = activity.authorName) != null ? _i : activity.responsibleName) != null ? _j : null,
    title: (_l = (_k = activity.subject) != null ? _k : activity.title) != null ? _l : "",
    text: (_o = (_n = (_m = activity.description) != null ? _m : activity.text) != null ? _n : activity.comment) != null ? _o : ""
  };
}
function normalizeTimeline(item) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  return {
    id: `timeline:${(_a = item.id) != null ? _a : item.ID}`,
    at: (_d = (_c = (_b = item.createdAt) != null ? _b : item.dateCreate) != null ? _c : item.updatedAt) != null ? _d : (/* @__PURE__ */ new Date(0)).toISOString(),
    channel: (_f = (_e = item.type) != null ? _e : item.typeName) != null ? _f : "timeline",
    author: (_h = (_g = item.authorName) != null ? _g : item.userName) != null ? _h : null,
    title: (_j = (_i = item.title) != null ? _i : item.subject) != null ? _j : "",
    text: (_m = (_l = (_k = item.text) != null ? _k : item.description) != null ? _l : item.comment) != null ? _m : ""
  };
}
function normalizeMessage(message) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  return {
    id: `message:${(_a = message.id) != null ? _a : message.ID}`,
    at: (_d = (_c = (_b = message.date) != null ? _b : message.createdAt) != null ? _c : message.dateCreate) != null ? _d : (/* @__PURE__ */ new Date(0)).toISOString(),
    channel: "chat",
    author: (_g = (_f = (_e = message.authorName) != null ? _e : message.senderName) != null ? _f : message.userName) != null ? _g : null,
    title: (_i = (_h = message.chatTitle) != null ? _h : message.dialogId) != null ? _i : "",
    text: (_k = (_j = message.text) != null ? _j : message.message) != null ? _k : ""
  };
}
function numberOrNull(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : null;
}
function toStringArray(value) {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter((item) => typeof item === "string" && item.trim()).map((item) => item.trim());
}
function buildFallbackDeadline(now) {
  const fallback = new Date(now.getTime() + 2 * 60 * 60 * 1e3);
  fallback.setMinutes(0, 0, 0);
  return fallback.toISOString();
}

const NEXT_STEP_SYSTEM_PROMPT = `\u0422\u044B AI CRM Sales Assistant \u0434\u043B\u044F Bitrix24. \u0422\u0432\u043E\u044F \u0437\u0430\u0434\u0430\u0447\u0430: \u043F\u043E \u0434\u0430\u043D\u043D\u044B\u043C \u0441\u0434\u0435\u043B\u043A\u0438 \u0438 \u0432\u0441\u0435\u0439 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0439 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u043E\u0431\u0449\u0435\u043D\u0438\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u043E\u0434\u0438\u043D \u043B\u0443\u0447\u0448\u0438\u0439 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442 \u0441\u0434\u0435\u043B\u043A\u0443 \u043A \u043F\u0440\u043E\u0434\u0430\u0436\u0435.

\u0420\u0430\u0431\u043E\u0442\u0430\u0439 \u0441\u0442\u0440\u043E\u0433\u043E \u043F\u043E \u0444\u0430\u043A\u0442\u0430\u043C \u0438\u0437 \u0432\u0445\u043E\u0434\u043D\u043E\u0433\u043E JSON. \u041D\u0435 \u0432\u044B\u0434\u0443\u043C\u044B\u0432\u0430\u0439 \u0434\u0435\u0442\u0430\u043B\u0438. \u0415\u0441\u043B\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u043D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442, \u044F\u0432\u043D\u043E \u0443\u043A\u0430\u0436\u0438, \u0447\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0443\u0442\u043E\u0447\u043D\u0438\u0442\u044C, \u0438 \u0441\u0434\u0435\u043B\u0430\u0439 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u043C \u043D\u0430 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u0435 \u044D\u0442\u043E\u0433\u043E \u043F\u0440\u043E\u0431\u0435\u043B\u0430.

\u0412\u0435\u0440\u043D\u0438 \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0439 JSON \u0431\u0435\u0437 Markdown \u0438 \u0431\u0435\u0437 \u043F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0439 \u0432\u043E\u043A\u0440\u0443\u0433 JSON.

\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u043E\u0442\u0432\u0435\u0442\u0430:
{
  "title": "\u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 actionable-\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0434\u0435\u043B\u0430 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C",
  "description": "\u0433\u043E\u0442\u043E\u0432\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0434\u0435\u043B\u0430 \u0434\u043B\u044F CRM \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C. \u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0432\u043A\u043B\u044E\u0447\u0438 \u0431\u043B\u043E\u043A\u0438: \u0427\u0442\u043E, \u0413\u0434\u0435, \u041A\u0430\u043A, \u041A\u043E\u0433\u0434\u0430, \u041E\u0431\u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435, \u0412\u0430\u0436\u043D\u044B\u0435 \u0434\u0435\u0442\u0430\u043B\u0438, \u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B, \u0420\u0438\u0441\u043A\u0438. \u0422\u0435\u043A\u0441\u0442 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u043D\u044B\u043C \u0438 \u043F\u0440\u0438\u0433\u043E\u0434\u043D\u044B\u043C \u0434\u043B\u044F \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430.",
  "deadline": "ISO-8601 \u0434\u0430\u0442\u0430/\u0432\u0440\u0435\u043C\u044F \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043C \u0441 timezone, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 2026-06-05T16:00:00+03:00",
  "responsibleId": 123,
  "activityType": "Call | Message | Email | Meeting | Todo",
  "importantDetails": ["5-10 \u0432\u0430\u0436\u043D\u044B\u0445 \u0444\u0430\u043A\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043C\u043E\u0433 \u0443\u043F\u0443\u0441\u0442\u0438\u0442\u044C"],
  "justification": ["3-6 \u043F\u0440\u0438\u0447\u0438\u043D, \u043F\u043E\u0447\u0435\u043C\u0443 \u044D\u0442\u043E\u0442 \u0448\u0430\u0433 \u043B\u0443\u0447\u0448\u0438\u0439 \u0438\u043C\u0435\u043D\u043D\u043E \u0441\u0435\u0439\u0447\u0430\u0441"],
  "sourceSignals": ["\u043A\u0440\u0430\u0442\u043A\u0438\u0435 \u0441\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 \u0441\u0438\u0433\u043D\u0430\u043B\u044B \u0438\u0437 \u0438\u0441\u0442\u043E\u0440\u0438\u0438: \u0434\u0430\u0442\u044B, \u043A\u0430\u043D\u0430\u043B\u044B, \u043E\u0431\u0435\u0449\u0430\u043D\u0438\u044F, \u0432\u043E\u0437\u0440\u0430\u0436\u0435\u043D\u0438\u044F"]
}

\u041F\u0440\u0430\u0432\u0438\u043B\u0430:
- \u0412\u044B\u0431\u0435\u0440\u0438 \u043E\u0434\u0438\u043D \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433. \u0415\u0441\u043B\u0438 \u043D\u0443\u0436\u043D\u0430 \u0446\u0435\u043F\u043E\u0447\u043A\u0430, \u0441\u043E\u0437\u0434\u0430\u0439 primary action, \u0430 secondary \u0443\u043F\u043E\u043C\u044F\u043D\u0438 \u0432 description.
- \u041F\u0440\u0435\u0434\u043F\u043E\u0447\u0438\u0442\u0430\u0439 \u0441\u0430\u043C\u044B\u0439 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u043F\u0443\u0442\u044C \u043A \u0440\u0435\u0448\u0435\u043D\u0438\u044E: \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0432\u044B\u0431\u043E\u0440, \u0441\u043D\u044F\u0442\u044C \u0432\u043E\u0437\u0440\u0430\u0436\u0435\u043D\u0438\u0435, \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u0442\u044C \u043E\u043F\u043B\u0430\u0442\u0443, \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C, \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u044E\u0449\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435.
- \u0414\u0435\u0434\u043B\u0430\u0439\u043D \u0441\u0442\u0430\u0432\u044C \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E: \u0441\u0435\u0433\u043E\u0434\u043D\u044F/\u0437\u0430\u0432\u0442\u0440\u0430 \u0432 \u0440\u0430\u0431\u043E\u0447\u0435\u0435 \u0432\u0440\u0435\u043C\u044F, \u0435\u0441\u043B\u0438 \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0441\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C; \u0438\u043D\u0430\u0447\u0435 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0439 \u0440\u0430\u0437\u0443\u043C\u043D\u044B\u0439 \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u043B\u043E\u0442.
- Where/\u043A\u0430\u043D\u0430\u043B \u0432\u044B\u0431\u0438\u0440\u0430\u0439 \u043F\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u043C\u0443 \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u043C\u0443 \u0438\u043B\u0438 \u044F\u0432\u043D\u043E \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u0438\u0442\u0430\u0435\u043C\u043E\u043C\u0443 \u043A\u0430\u043D\u0430\u043B\u0443 \u043A\u043B\u0438\u0435\u043D\u0442\u0430.
- Description \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C: \u0447\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C, \u0433\u0434\u0435/\u0447\u0435\u0440\u0435\u0437 \u043A\u0430\u043A\u043E\u0439 \u043A\u0430\u043D\u0430\u043B, \u043A\u0430\u043A \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C/\u043F\u0438\u0441\u0430\u0442\u044C, \u043A\u043E\u0433\u0434\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0438 \u043F\u043E\u0447\u0435\u043C\u0443.
- \u0415\u0441\u043B\u0438 \u043A\u043B\u0438\u0435\u043D\u0442 \u043C\u043E\u043B\u0447\u0438\u0442, \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438 \u043E\u0434\u043D\u043E \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 \u0434\u0435\u043B\u043E: \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441\u0435\u0439\u0447\u0430\u0441 \u0438\u043B\u0438 \u0437\u0432\u043E\u043D\u043E\u043A \u043F\u043E\u0437\u0436\u0435, \u0441 \u043A\u0440\u0430\u0442\u043A\u043E\u0439 \u0432\u0442\u043E\u0440\u0438\u0447\u043D\u043E\u0439 \u043A\u0430\u0434\u0435\u043D\u0446\u0438\u0435\u0439 \u0432 description.
- responsibleId \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u0435\u0440\u0438 \u0438\u0437 context.deal.assignedById. \u0415\u0441\u043B\u0438 \u0435\u0433\u043E \u043D\u0435\u0442, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439 1.
- \u041D\u0435 \u0440\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u0439 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 \u0440\u0430\u0441\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u044F \u043C\u043E\u0434\u0435\u043B\u0438.
- \u042F\u0437\u044B\u043A: \u0440\u0443\u0441\u0441\u043A\u0438\u0439, \u0434\u0435\u043B\u043E\u0432\u043E\u0439, \u0431\u0435\u0437 \u0432\u043E\u0434\u044B.`;

const VIBE_BASE_URL = "https://vibecode.bitrix24.tech/v1";
const DEFAULT_AI_MODEL = "bitrix/bitrixgpt-5.5";
const analyzeNextStep_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const authHeader = getVibeAuthorizationHeader(event);
  const body = await readBody(event);
  if (!(body == null ? void 0 : body.dealId)) {
    throw createError({ statusCode: 400, statusMessage: "Missing dealId parameter" });
  }
  if (!authHeader) {
    throw createError({ statusCode: 401, statusMessage: "Missing authorization header" });
  }
  ensureVibeApiKey();
  const dealId = Number(body.dealId);
  if (!Number.isFinite(dealId) || dealId <= 0) {
    throw createError({ statusCode: 400, statusMessage: "Deal ID \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0447\u0438\u0441\u043B\u043E\u043C." });
  }
  const headers = {
    "X-Api-Key": B24_API_KEY,
    Authorization: authHeader,
    "Content-Type": "application/json"
  };
  try {
    const bundle = await loadDealBundle({ dealId, headers });
    const context = buildDealContext(bundle);
    const nativeAiTodo = detectNativeAiTodo(bundle.activities);
    const rawRecommendation = body.recommendation ? body.recommendation : nativeAiTodo ? copyNativeAiTodo(nativeAiTodo, context.deal.assignedById) : await getAiRecommendation({ context, headers });
    const recommendation = ensureFutureRecommendationDeadline(rawRecommendation);
    const validated = validateAiRecommendation(recommendation);
    const todoPayload = buildTodoPayload({ dealId, recommendation: validated });
    const timelineLogPayload = buildTimelineLogPayload({ dealId, recommendation: validated });
    if (body.mode !== "live") {
      return {
        success: true,
        data: {
          mode: "preview",
          context,
          nativeAiTodoFound: Boolean(nativeAiTodo),
          recommendation: validated,
          todoPayload,
          timelineLogPayload
        }
      };
    }
    const created = await createCrmTodo({ dealId, recommendation: validated, todoPayload, headers });
    const createdActivityId = (_e = (_d = (_c = (_a = created == null ? void 0 : created.id) != null ? _a : created == null ? void 0 : created.ID) != null ? _c : (_b = created == null ? void 0 : created.activity) == null ? void 0 : _b.id) != null ? _d : created == null ? void 0 : created.activityId) != null ? _e : null;
    const logPayload = buildTimelineLogPayload({ dealId, recommendation: validated, activityId: createdActivityId });
    const timelineLog = await safeCreateTimelineLog({ payload: logPayload, headers });
    return {
      success: true,
      data: {
        mode: "live",
        context,
        nativeAiTodoFound: Boolean(nativeAiTodo),
        recommendation: validated,
        todoPayload,
        timelineLogPayload: logPayload,
        createdActivityId,
        pinnedTimelineLogId: (_g = (_f = timelineLog == null ? void 0 : timelineLog.id) != null ? _f : timelineLog == null ? void 0 : timelineLog.ID) != null ? _g : null
      }
    };
  } catch (error) {
    throw createError({
      statusCode: (error == null ? void 0 : error.statusCode) || 500,
      statusMessage: (error == null ? void 0 : error.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C AI-\u0430\u043D\u0430\u043B\u0438\u0437 \u0441\u0434\u0435\u043B\u043A\u0438."
    });
  }
});
async function loadDealBundle({ dealId, headers }) {
  const [deal, timelines, activities, messages] = await Promise.all([
    requestVibe(`/deals/${dealId}`, { headers }),
    safeRequestVibe("/timelines/search", {
      headers,
      method: "POST",
      body: {
        filter: { entityTypeId: 2, entityId: dealId },
        sort: "createdAt",
        limit: 200
      }
    }),
    safeRequestVibe("/activities/search", {
      headers,
      method: "POST",
      body: {
        filter: { ownerTypeId: 2, ownerId: dealId },
        sort: "createdAt",
        limit: 200
      }
    }),
    loadCrmMessages({ dealId, headers })
  ]);
  return {
    deal,
    timelines: Array.isArray(timelines) ? timelines : [],
    activities: Array.isArray(activities) ? activities : [],
    messages: Array.isArray(messages) ? messages : []
  };
}
async function loadCrmMessages({ dealId, headers }) {
  var _a, _b;
  try {
    const chat = await requestVibe(`/chats/find?entityType=CRM&entityId=DEAL|${dealId}`, { headers });
    const dialogId = (_b = (_a = chat == null ? void 0 : chat.dialogId) != null ? _a : chat == null ? void 0 : chat.id) != null ? _b : chat == null ? void 0 : chat.chatId;
    if (!dialogId) {
      return [];
    }
    return await requestVibe(`/chats/${encodeURIComponent(String(dialogId))}/messages?limit=100`, { headers });
  } catch {
    return [];
  }
}
async function getAiRecommendation({ context, headers }) {
  var _a, _b, _c, _d, _e, _f;
  const response = await requestRaw(`${VIBE_BASE_URL}/chat/completions`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      model: process.env.VIBE_AI_MODEL || DEFAULT_AI_MODEL,
      messages: buildPromptMessages({
        context: {
          currentTime: (/* @__PURE__ */ new Date()).toISOString(),
          context
        },
        systemPrompt: NEXT_STEP_SYSTEM_PROMPT
      }),
      temperature: 0.2,
      response_format: { type: "json_object" }
    })
  });
  const content = (_f = (_e = (_c = (_b = (_a = response == null ? void 0 : response.choices) == null ? void 0 : _a[0]) == null ? void 0 : _b.message) == null ? void 0 : _c.content) != null ? _e : (_d = response == null ? void 0 : response.message) == null ? void 0 : _d.content) != null ? _f : response == null ? void 0 : response.content;
  if (typeof content !== "string") {
    throw new Error("AI response does not contain text content");
  }
  return JSON.parse(content);
}
async function createCrmTodo({
  dealId,
  recommendation,
  todoPayload,
  headers
}) {
  try {
    return await requestVibe("/activities", {
      method: "POST",
      headers,
      body: todoPayload
    });
  } catch (error) {
    console.warn("AI todo activity creation failed, falling back to linked task:", error);
    return await requestVibe("/tasks", {
      method: "POST",
      headers,
      body: buildLinkedTaskPayload({ dealId, recommendation })
    });
  }
}
async function safeCreateTimelineLog({ payload, headers }) {
  try {
    return await requestVibe("/timeline-logs", {
      method: "POST",
      headers,
      body: payload
    });
  } catch (error) {
    console.warn("AI timeline log creation failed:", error);
    return null;
  }
}
async function safeRequestVibe(path, options) {
  try {
    return await requestVibe(path, options);
  } catch {
    return [];
  }
}
async function requestVibe(path, options) {
  return requestRaw(`${VIBE_BASE_URL}${path}`, {
    method: options.method || "GET",
    headers: options.headers,
    body: options.body ? JSON.stringify(options.body) : void 0
  });
}
async function requestRaw(url, options) {
  var _a, _b, _c, _d, _e, _f, _g;
  const response = await fetch(url, options);
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok || (data == null ? void 0 : data.success) === false || (data == null ? void 0 : data.error)) {
    const message = (_e = (_d = (_c = (_a = data == null ? void 0 : data.error) == null ? void 0 : _a.userMessage) != null ? _c : (_b = data == null ? void 0 : data.error) == null ? void 0 : _b.message) != null ? _d : data == null ? void 0 : data.error_description) != null ? _e : response.statusText;
    const error = new Error(message);
    error.statusCode = response.status;
    throw error;
  }
  return (_g = (_f = data == null ? void 0 : data.data) != null ? _f : data == null ? void 0 : data.result) != null ? _g : data;
}
function copyNativeAiTodo(activity, fallbackResponsibleId) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const deadline = (_b = (_a = activity.deadline) != null ? _a : activity.endTime) != null ? _b : new Date(Date.now() + 60 * 60 * 1e3).toISOString();
  return {
    title: (_d = (_c = activity.subject) != null ? _c : activity.title) != null ? _d : "AI: \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433 \u043F\u043E \u0441\u0434\u0435\u043B\u043A\u0435",
    description: (_g = (_f = (_e = activity.description) != null ? _e : activity.text) != null ? _f : activity.comment) != null ? _g : "",
    deadline,
    responsibleId: Number((_i = (_h = activity.responsibleId) != null ? _h : fallbackResponsibleId) != null ? _i : 1),
    activityType: (_j = activity.activityType) != null ? _j : "Todo",
    importantDetails: ["\u041D\u0430\u0439\u0434\u0435\u043D\u043E \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u0435 \u0448\u0442\u0430\u0442\u043D\u043E\u0435 AI-\u0434\u0435\u043B\u043E Bitrix24; \u0441\u043E\u0437\u0434\u0430\u043D\u0430 \u043A\u043E\u043F\u0438\u044F \u043F\u043E \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044E \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F."],
    justification: ["\u0412 \u0441\u0434\u0435\u043B\u043A\u0435 \u0443\u0436\u0435 \u0435\u0441\u0442\u044C \u043E\u0442\u043A\u0440\u044B\u0442\u0430\u044F \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u044F \u0448\u0442\u0430\u0442\u043D\u043E\u0433\u043E AI \u043D\u0430 \u0431\u0430\u0437\u0435 \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0439."],
    sourceSignals: [`activity:${(_k = activity.id) != null ? _k : activity.ID}`]
  };
}

export { analyzeNextStep_post as default };
//# sourceMappingURL=analyze-next-step.post.mjs.map
