const DEAL_ENTITY_TYPE_ID = 2;
const AI_ACTIVITY_TYPES = ["Todo"];
function buildDealContext({ deal, linkedLead = null, timelines = [], activities = [], messages = [], contact = null }) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E;
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
      stageName: (_n = (_m = (_k = (_i = deal.stageName) != null ? _i : deal.STAGE_NAME) != null ? _k : (_j = deal.stage) == null ? void 0 : _j.name) != null ? _m : (_l = deal.STAGE) == null ? void 0 : _l.NAME) != null ? _n : null,
      amount: (_q = (_p = (_o = deal.amount) != null ? _o : deal.opportunity) != null ? _p : deal.OPPORTUNITY) != null ? _q : null,
      currencyId: (_t = (_s = (_r = deal.currencyId) != null ? _r : deal.currency) != null ? _s : deal.CURRENCY_ID) != null ? _t : null,
      assignedById: numberOrNull((_v = (_u = deal.assignedById) != null ? _u : deal.responsibleId) != null ? _v : deal.ASSIGNED_BY_ID),
      contactId: numberOrNull((_A = (_y = (_w = deal.contactId) != null ? _w : deal.CONTACT_ID) != null ? _y : (_x = deal.contactIds) == null ? void 0 : _x[0]) != null ? _A : (_z = deal.CONTACT_IDS) == null ? void 0 : _z[0]),
      companyId: numberOrNull((_B = deal.companyId) != null ? _B : deal.COMPANY_ID),
      linkedLeadId: numberOrNull((_E = (_D = (_C = linkedLead == null ? void 0 : linkedLead.id) != null ? _C : linkedLead == null ? void 0 : linkedLead.ID) != null ? _D : deal.leadId) != null ? _E : deal.LEAD_ID),
      communications: extractContactCommunications(contact)
    },
    history,
    sourceStats: {
      comments: timelines.length,
      wazzupComments: timelines.filter(isWazzupComment).length,
      activities: activities.length,
      messages: messages.length,
      leadActivities: activities.filter((item) => item.sourceEntityType === "lead").length,
      leadMessages: messages.filter((item) => item.sourceEntityType === "lead").length
    }
  };
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
    // The AI module creates only a CRM deal, never a task, call, meeting, or email.
    activityType: "Todo",
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
function buildActivityPayload({ dealId, contactId, recommendation, communications }) {
  var _a;
  const numericDealId = Number(dealId);
  if (!Number.isFinite(numericDealId) || numericDealId <= 0) {
    throw new Error("dealId must be a positive number");
  }
  const validated = validateAiRecommendation(recommendation, /* @__PURE__ */ new Date(0));
  const endTime = new Date(validated.deadline);
  const startTime = new Date(endTime.getTime() - 30 * 60 * 1e3);
  const numericContactId = Number(contactId);
  const communication = (_a = communications.find((item) => item.type === "PHONE")) != null ? _a : communications[0];
  const activityCommunications = communication && Number.isFinite(numericContactId) && numericContactId > 0 ? [{
    VALUE: communication.value,
    ENTITY_TYPE_ID: 3,
    ENTITY_ID: numericContactId
  }] : [];
  return {
    ownerTypeId: DEAL_ENTITY_TYPE_ID,
    ownerId: numericDealId,
    subject: validated.title,
    // typeId 3 is a Bitrix24 Task and cannot be created through the CRM
    // activities endpoint. Type 5 is a generic CRM action, so it appears as
    // a linked activity in the deal timeline with the AI text as its body.
    typeId: activityTypeId(),
    startTime: startTime.toISOString(),
    endTime: endTime.toISOString(),
    deadline: endTime.toISOString(),
    description: validated.description,
    responsibleId: validated.responsibleId,
    completed: false,
    // VibeCode requires the field even for a generic CRM activity.
    communications: activityCommunications
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
const CRM_ACTIVITY_RECOMMENDATION_TOOL = {
  type: "function",
  function: {
    name: "recommend_crm_activity",
    description: "\u0412\u044B\u0431\u0438\u0440\u0430\u0435\u0442 \u043E\u0434\u043D\u043E CRM-\u0434\u0435\u043B\u043E, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0441\u043E\u0437\u0434\u0430\u0441\u0442 \u043F\u043E\u0441\u043B\u0435 \u0440\u0443\u0447\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F.",
    parameters: {
      type: "object",
      additionalProperties: false,
      required: ["title", "description", "deadline", "responsibleId", "activityType", "importantDetails", "justification", "sourceSignals"],
      properties: {
        title: { type: "string", description: "\u041A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C." },
        description: { type: "string", description: "\u0413\u043E\u0442\u043E\u0432\u044B\u0439 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430." },
        deadline: { type: "string", description: "\u0411\u0443\u0434\u0443\u0449\u0430\u044F \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F \u0432 ISO-8601 \u0441 timezone." },
        responsibleId: { type: "number", description: "ID \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430." },
        activityType: { type: "string", enum: AI_ACTIVITY_TYPES, description: "\u0412\u0441\u0435\u0433\u0434\u0430 Todo: \u0441\u043E\u0437\u0434\u0430\u0435\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E CRM-\u0434\u0435\u043B\u043E." },
        importantDetails: { type: "array", items: { type: "string" } },
        justification: { type: "array", items: { type: "string" } },
        sourceSignals: { type: "array", items: { type: "string" } }
      }
    }
  }
};
function normalizeActivity(activity) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
  return {
    id: `${(_a = activity.sourceEntityType) != null ? _a : "deal"}:activity:${(_b = activity.id) != null ? _b : activity.ID}`,
    at: (_f = (_e = (_d = (_c = activity.createdAt) != null ? _c : activity.deadline) != null ? _d : activity.startTime) != null ? _e : activity.dateCreate) != null ? _f : (/* @__PURE__ */ new Date(0)).toISOString(),
    channel: sourceLabel(activity, (_k = (_j = (_i = (_h = (_g = activity.activityType) != null ? _g : activity.typeName) != null ? _h : activity.providerTypeId) != null ? _i : activity.typeId) != null ? _j : activity.TYPE_ID) != null ? _k : "activity"),
    author: (_m = (_l = activity.authorName) != null ? _l : activity.responsibleName) != null ? _m : null,
    direction: (_q = (_p = (_o = (_n = activity.direction) != null ? _n : activity.directionName) != null ? _o : activity.incoming) != null ? _p : activity.outgoing) != null ? _q : null,
    title: (_s = (_r = activity.subject) != null ? _r : activity.title) != null ? _s : "",
    text: (_x = (_w = (_v = (_u = (_t = activity.transcript) != null ? _t : activity.transcription) != null ? _u : activity.description) != null ? _v : activity.text) != null ? _w : activity.comment) != null ? _x : ""
  };
}
function normalizeTimeline(item) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
  return {
    id: `${(_a = item.sourceEntityType) != null ? _a : "deal"}:timeline:${(_b = item.id) != null ? _b : item.ID}`,
    at: (_e = (_d = (_c = item.createdAt) != null ? _c : item.dateCreate) != null ? _d : item.updatedAt) != null ? _e : (/* @__PURE__ */ new Date(0)).toISOString(),
    channel: sourceLabel(item, isWazzupComment(item) ? "wazzup" : (_g = (_f = item.type) != null ? _f : item.typeName) != null ? _g : "timeline"),
    author: (_i = (_h = item.authorName) != null ? _h : item.userName) != null ? _i : null,
    direction: (_m = (_l = (_k = (_j = item.direction) != null ? _j : item.directionName) != null ? _k : item.incoming) != null ? _l : item.outgoing) != null ? _m : null,
    title: (_o = (_n = item.title) != null ? _n : item.subject) != null ? _o : "",
    text: (_r = (_q = (_p = item.text) != null ? _p : item.description) != null ? _q : item.comment) != null ? _r : ""
  };
}
function extractContactCommunications(contact) {
  var _a, _b, _c, _d, _e, _f, _g;
  if (!contact) {
    return [];
  }
  return [
    ...extractCommunicationValues((_c = (_b = (_a = contact.phone) != null ? _a : contact.PHONE) != null ? _b : contact.phones) != null ? _c : contact.PHONES, "PHONE"),
    ...extractCommunicationValues((_f = (_e = (_d = contact.email) != null ? _d : contact.EMAIL) != null ? _e : contact.emails) != null ? _f : contact.EMAILS, "EMAIL"),
    ...extractFmCommunications((_g = contact.fm) != null ? _g : contact.FM)
  ].filter((communication, index, all) => all.findIndex((item) => item.type === communication.type && item.value === communication.value) === index);
}
function extractFmCommunications(value) {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.flatMap((item) => {
    var _a, _b, _c;
    if (!item || typeof item !== "object") {
      return [];
    }
    const record = item;
    const typeId = String((_b = (_a = record.typeId) != null ? _a : record.TYPE_ID) != null ? _b : "").toUpperCase();
    const type = typeId === "PHONE" || typeId === "EMAIL" ? typeId : null;
    const value2 = (_c = record.value) != null ? _c : record.VALUE;
    return type && typeof value2 === "string" && value2.trim() ? [{ type, value: value2.trim() }] : [];
  });
}
function extractCommunicationValues(value, type) {
  const values = Array.isArray(value) ? value : [value];
  return values.map((item) => {
    var _a;
    return typeof item === "object" && item ? (_a = item.value) != null ? _a : item.VALUE : item;
  }).filter((item) => typeof item === "string" && item.trim().length > 0).map((item) => ({ type, value: item.trim() }));
}
function activityTypeId() {
  return 5;
}
function isWazzupComment(item) {
  return [item.providerId, item.providerTypeId, item.originatorId, item.originId, item.title, item.text, item.comment].filter(Boolean).join(" ").toLowerCase().includes("wazzup");
}
function normalizeMessage(message) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  return {
    id: `${(_a = message.sourceEntityType) != null ? _a : "deal"}:message:${(_b = message.id) != null ? _b : message.ID}`,
    at: (_e = (_d = (_c = message.date) != null ? _c : message.createdAt) != null ? _d : message.dateCreate) != null ? _e : (/* @__PURE__ */ new Date(0)).toISOString(),
    channel: sourceLabel(message, "chat"),
    author: (_h = (_g = (_f = message.authorName) != null ? _f : message.senderName) != null ? _g : message.userName) != null ? _h : null,
    direction: (_l = (_k = (_j = (_i = message.direction) != null ? _i : message.directionName) != null ? _j : message.incoming) != null ? _k : message.outgoing) != null ? _l : null,
    title: (_n = (_m = message.chatTitle) != null ? _m : message.dialogId) != null ? _n : "",
    text: (_p = (_o = message.text) != null ? _o : message.message) != null ? _p : ""
  };
}
function sourceLabel(item, channel) {
  return item.sourceEntityType === "lead" ? `lead:${channel}` : channel;
}
function numberOrNull(value) {
  var _a, _b;
  const rawValue = value && typeof value === "object" ? (_b = (_a = value.id) != null ? _a : value.ID) != null ? _b : value.value : value;
  const number = Number(rawValue);
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

const VIBE_BASE_URL = "https://vibecode.bitrix24.tech/v1";
async function loadDealBundle({ dealId, headers }) {
  var _a, _b, _c, _d, _e, _f;
  const deal = await requestVibe(`/deals/${dealId}`, { headers });
  const contactId = positiveId((_e = (_c = (_a = deal == null ? void 0 : deal.contactId) != null ? _a : deal == null ? void 0 : deal.CONTACT_ID) != null ? _c : (_b = deal == null ? void 0 : deal.contactIds) == null ? void 0 : _b[0]) != null ? _e : (_d = deal == null ? void 0 : deal.CONTACT_IDS) == null ? void 0 : _d[0]);
  const leadId = positiveId((_f = deal == null ? void 0 : deal.leadId) != null ? _f : deal == null ? void 0 : deal.LEAD_ID);
  const [dealHistory, lead, contact, stageName] = await Promise.all([
    loadEntityHistory({ entityType: "deal", entityId: dealId, ownerTypeId: 2, headers }),
    leadId ? safeRequestVibe(`/leads/${leadId}`, { headers }) : Promise.resolve(null),
    contactId ? safeRequestVibe(`/contacts/${contactId}`, { headers }) : Promise.resolve(null),
    loadStageName(deal, headers)
  ]);
  const leadHistory = leadId ? await loadEntityHistory({ entityType: "lead", entityId: leadId, ownerTypeId: 1, headers }) : emptyHistory();
  return {
    deal: { ...deal, stageName: stageName || deal.stageName || deal.STAGE_NAME || "" },
    linkedLead: lead && typeof lead === "object" && !Array.isArray(lead) ? lead : null,
    timelines: [...dealHistory.timelines, ...leadHistory.timelines],
    activities: [...dealHistory.activities, ...leadHistory.activities],
    messages: [...dealHistory.messages, ...leadHistory.messages],
    contact: contact && typeof contact === "object" && !Array.isArray(contact) ? contact : null
  };
}
async function loadStageName(deal, headers) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const stageId = String((_b = (_a = deal.stageId) != null ? _a : deal.STAGE_ID) != null ? _b : "").trim();
  if (!stageId) return "";
  const categoryId = Number((_d = (_c = deal.categoryId) != null ? _c : deal.CATEGORY_ID) != null ? _d : 0);
  const entityId = Number.isInteger(categoryId) && categoryId > 0 ? `DEAL_STAGE_${categoryId}` : "DEAL_STAGE";
  const statuses = await safeRequestVibe(`/statuses?filter[entityId]=${encodeURIComponent(entityId)}`, { headers });
  const items = toItems(statuses);
  const match = items.find((item) => {
    var _a2, _b2, _c2;
    return String((_c2 = (_b2 = (_a2 = item.statusId) != null ? _a2 : item.STATUS_ID) != null ? _b2 : item.id) != null ? _c2 : item.ID) === stageId;
  });
  return String((_h = (_g = (_f = (_e = match == null ? void 0 : match.name) != null ? _e : match == null ? void 0 : match.NAME) != null ? _f : match == null ? void 0 : match.title) != null ? _g : match == null ? void 0 : match.TITLE) != null ? _h : "").trim();
}
async function loadEntityHistory({ entityType, entityId, ownerTypeId, headers }) {
  const [timelines, activities, messages] = await Promise.all([
    safeRequestVibe(`/timelines?entityType=${entityType}&entityId=${entityId}`, { headers }),
    safeRequestVibe("/activities/search", {
      headers,
      method: "POST",
      body: {
        filter: { ownerTypeId, ownerId: entityId },
        sort: "createdAt",
        limit: 200,
        select: ["id", "subject", "description", "typeId", "activityType", "createdAt", "deadline", "communications", "files", "webdavElements"]
      }
    }),
    loadCrmMessages({ entityType, entityId, headers })
  ]);
  return {
    timelines: markSource(toItems(timelines), entityType, entityId),
    activities: markSource(toItems(activities), entityType, entityId),
    messages: markSource(toItems(messages), entityType, entityId)
  };
}
async function requestVibe(path, options) {
  return requestVibeRaw(`${VIBE_BASE_URL}${path}`, {
    method: options.method || "GET",
    headers: options.headers,
    body: options.body ? JSON.stringify(options.body) : void 0
  });
}
async function requestVibeRaw(url, options) {
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
async function loadCrmMessages({ entityType, entityId, headers }) {
  var _a, _b;
  try {
    const chat = await requestVibe(`/chats/find?entityType=CRM&entityId=${entityType.toUpperCase()}|${entityId}`, { headers });
    const dialogId = (_b = (_a = chat == null ? void 0 : chat.dialogId) != null ? _a : chat == null ? void 0 : chat.id) != null ? _b : chat == null ? void 0 : chat.chatId;
    return dialogId ? await requestVibe(`/chats/${encodeURIComponent(String(dialogId))}/messages?limit=100`, { headers }) : [];
  } catch {
    return [];
  }
}
async function safeRequestVibe(path, options) {
  try {
    return await requestVibe(path, options);
  } catch {
    return [];
  }
}
function toItems(value) {
  var _a, _b;
  if (Array.isArray(value)) return value;
  if (value && typeof value === "object") {
    const record = value;
    const items = (_b = (_a = record.items) != null ? _a : record.results) != null ? _b : record.data;
    return Array.isArray(items) ? items : [];
  }
  return [];
}
function markSource(items, entityType, entityId) {
  return items.map((item) => ({ ...item, sourceEntityType: entityType, sourceEntityId: entityId }));
}
function emptyHistory() {
  return { timelines: [], activities: [], messages: [] };
}
function positiveId(value) {
  var _a, _b;
  const rawValue = value && typeof value === "object" ? (_b = (_a = value.id) != null ? _a : value.ID) != null ? _b : value.value : value;
  const id = Number(typeof rawValue === "string" ? rawValue.replace(/^L_/, "") : rawValue);
  return Number.isInteger(id) && id > 0 ? id : null;
}

export { CRM_ACTIVITY_RECOMMENDATION_TOOL as C, buildDealContext as a, buildActivityPayload as b, buildPromptMessages as c, buildTimelineLogPayload as d, ensureFutureRecommendationDeadline as e, requestVibeRaw as f, loadDealBundle as l, requestVibe as r, validateAiRecommendation as v };
//# sourceMappingURL=deal-bundle.mjs.map
