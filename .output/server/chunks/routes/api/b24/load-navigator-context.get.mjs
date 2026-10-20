import { a as defineEventHandler, k as getQuery, c as createError } from '../../../_/nitro.mjs';
import { a as buildDealContext, l as loadDealBundle } from '../../../_/deal-bundle.mjs';
import { f as firstString, d as getVibeAuthorizationHeader, e as ensureVibeApiKey, B as B24_API_KEY, c as getDisplayName, t as toRecord } from '../../../_/b24.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

function buildNavigatorContext(bundle) {
  var _a, _b;
  const context = buildDealContext(bundle);
  const history = context.history.map((entry, index) => ({
    id: entry.id || `history-${index}`,
    at: validDate(entry.at),
    channel: String(entry.channel || "CRM"),
    direction: inferDirection(entry),
    title: textValue(entry.title),
    preview: textValue(entry.text).slice(0, 280)
  })).filter((entry) => entry.title || entry.preview).sort((left, right) => new Date(right.at).getTime() - new Date(left.at).getTime()).slice(0, 10);
  const deal = bundle.deal;
  const contact = bundle.contact || {};
  const destination = firstString(
    deal.destination,
    deal.DESTINATION,
    deal.ufCrm1604438175,
    deal.UF_CRM_1604438175
  );
  const hotel = firstString(deal.hotel, deal.hotelName, deal.HOTEL, deal.UF_CRM_HOTEL);
  const selectionLink = findSelectionLink(context.history);
  return {
    deal: {
      id: context.deal.id,
      title: context.deal.title,
      stage: firstString(
        context.deal.stageName,
        deal.stageName,
        deal.STAGE_NAME,
        objectName(deal.stage)
      ) || "\u041D\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0430",
      contactName: firstString(contact.name, contact.NAME, contact.fullName, contact.FULL_NAME),
      responsibleName: "",
      lastActivityAt: ((_a = history[0]) == null ? void 0 : _a.at) || null,
      variables: {
        dealTitle: context.deal.title,
        destination,
        hotel,
        budget: context.deal.amount ? `${context.deal.amount}${context.deal.currencyId ? ` ${context.deal.currencyId}` : ""}` : "",
        phone: ((_b = context.deal.communications.find((item) => item.type === "PHONE")) == null ? void 0 : _b.value) || "",
        selectionLink
      }
    },
    communications: history,
    recommendation: recommendScenario(history)
  };
}
function recommendScenario(communications) {
  const latest = communications[0];
  if (!latest) {
    return null;
  }
  if (isSelectionSignal(latest)) {
    return { scenarioId: "think", reason: "\u0412 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0439 \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0438 \u043D\u0430\u0439\u0434\u0435\u043D\u0430 \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0430 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430: \u0441\u0442\u043E\u0438\u0442 \u0432\u044B\u044F\u0441\u043D\u0438\u0442\u044C, \u0447\u0442\u043E \u043C\u0435\u0448\u0430\u0435\u0442 \u0432\u044B\u0431\u043E\u0440\u0443." };
  }
  if (latest.direction === "manager") {
    return { scenarioId: "client-will-call", reason: "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u044F \u0431\u044B\u043B\u0430 \u0438\u0441\u0445\u043E\u0434\u044F\u0449\u0435\u0439 \u043E\u0442 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430: \u0441\u043E\u0433\u043B\u0430\u0441\u0443\u0439\u0442\u0435 \u0434\u0435\u043B\u0438\u043A\u0430\u0442\u043D\u044B\u0439 \u043F\u043E\u0432\u043E\u0434 \u0434\u043B\u044F \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430." };
  }
  return null;
}
function inferDirection(entry) {
  const signal = [entry.direction, entry.directionName, entry.incoming, entry.outgoing, entry.channel, entry.title].filter((value) => value !== void 0 && value !== null).join(" ").toLowerCase();
  if (/incoming|inbound|входящ|client|клиент/.test(signal)) return "client";
  if (/outgoing|outbound|исходящ|manager|менеджер/.test(signal)) return "manager";
  return "unknown";
}
function isSelectionSignal(entry) {
  return /https?:\/\/|подборк|вариант|отел/.test(`${entry.title} ${entry.preview}`.toLowerCase());
}
function findSelectionLink(history) {
  for (const entry of history) {
    const match = `${entry.title || ""} ${entry.text || ""}`.match(/https?:\/\/[^\s<>"]+/i);
    if (match) return match[0];
  }
  return "";
}
function objectName(value) {
  if (!value || typeof value !== "object") return "";
  const record = value;
  return firstString(record.name, record.NAME, record.title, record.TITLE);
}
function textValue(value) {
  return String(value || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}
function validDate(value) {
  const date = new Date(String(value || ""));
  return Number.isNaN(date.getTime()) ? (/* @__PURE__ */ new Date(0)).toISOString() : date.toISOString();
}

const loadNavigatorContext_get = defineEventHandler(async (event) => {
  var _a;
  const dealId = Number(firstString(getQuery(event).dealId));
  const authHeader = getVibeAuthorizationHeader(event);
  if (!Number.isInteger(dealId) || dealId <= 0) {
    throw createError({ statusCode: 400, statusMessage: "Deal ID \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0447\u0438\u0441\u043B\u043E\u043C." });
  }
  if (!authHeader) {
    throw createError({ statusCode: 401, statusMessage: "Vibe Gateway session is missing. Reopen the widget from the deal card." });
  }
  ensureVibeApiKey();
  const headers = {
    "X-Api-Key": B24_API_KEY,
    Authorization: authHeader,
    "Content-Type": "application/json"
  };
  try {
    const bundle = await loadDealBundle({ dealId, headers });
    const context = buildNavigatorContext(bundle);
    const assignedById = Number((_a = bundle.deal.assignedById) != null ? _a : bundle.deal.ASSIGNED_BY_ID);
    if (Number.isInteger(assignedById) && assignedById > 0) {
      const response = await fetch(`https://vibecode.bitrix24.tech/v1/users/${assignedById}`, { headers });
      const payload = await response.json().catch(() => null);
      if (response.ok && (payload == null ? void 0 : payload.success) && payload.data) {
        context.deal.responsibleName = getDisplayName(toRecord(payload.data), "\u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D");
      }
    }
    return { success: true, data: context };
  } catch (error) {
    throw createError({
      statusCode: (error == null ? void 0 : error.statusCode) || 500,
      statusMessage: (error == null ? void 0 : error.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0435\u0432."
    });
  }
});

export { loadNavigatorContext_get as default };
//# sourceMappingURL=load-navigator-context.get.mjs.map
