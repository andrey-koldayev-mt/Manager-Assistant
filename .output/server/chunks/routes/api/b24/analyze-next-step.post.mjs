import { a as defineEventHandler, y as readBody, c as createError } from '../../../_/nitro.mjs';
import { l as loadDealBundle, b as buildDealContext, e as ensureFutureRecommendationDeadline, v as validateAiRecommendation, d as buildTimelineLogPayload, a as buildLinkedTaskPayload, f as requestVibeRaw, C as CRM_ACTIVITY_RECOMMENDATION_TOOL, c as buildPromptMessages, r as requestVibe } from '../../../_/deal-bundle.mjs';
import { e as enrichCallTranscripts } from '../../../_/call-transcripts.mjs';
import { d as getVibeAuthorizationHeader, e as ensureVibeApiKey, B as B24_API_KEY } from '../../../_/b24.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const NEXT_STEP_SYSTEM_PROMPT = `\u0422\u044B AI CRM Sales Assistant \u0434\u043B\u044F Bitrix24. \u0422\u0432\u043E\u044F \u0437\u0430\u0434\u0430\u0447\u0430: \u043F\u043E \u0434\u0430\u043D\u043D\u044B\u043C \u0441\u0434\u0435\u043B\u043A\u0438 \u0438 \u0432\u0441\u0435\u0439 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0439 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u043E\u0431\u0449\u0435\u043D\u0438\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u043E\u0434\u0438\u043D \u043B\u0443\u0447\u0448\u0438\u0439 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442 \u0441\u0434\u0435\u043B\u043A\u0443 \u043A \u043F\u0440\u043E\u0434\u0430\u0436\u0435.

\u0420\u0430\u0431\u043E\u0442\u0430\u0439 \u0441\u0442\u0440\u043E\u0433\u043E \u043F\u043E \u0444\u0430\u043A\u0442\u0430\u043C \u0438\u0437 \u0432\u0445\u043E\u0434\u043D\u043E\u0433\u043E JSON. \u041D\u0435 \u0432\u044B\u0434\u0443\u043C\u044B\u0432\u0430\u0439 \u0434\u0435\u0442\u0430\u043B\u0438. \u0415\u0441\u043B\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u043D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442, \u044F\u0432\u043D\u043E \u0443\u043A\u0430\u0436\u0438, \u0447\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0443\u0442\u043E\u0447\u043D\u0438\u0442\u044C, \u0438 \u0441\u0434\u0435\u043B\u0430\u0439 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u043C \u043D\u0430 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u0435 \u044D\u0442\u043E\u0433\u043E \u043F\u0440\u043E\u0431\u0435\u043B\u0430.

\u0412\u0435\u0440\u043D\u0438 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u044E \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u044B\u0437\u043E\u0432\u043E\u043C \u0444\u0443\u043D\u043A\u0446\u0438\u0438 recommend_crm_activity. \u041D\u0435 \u043F\u0438\u0448\u0438 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u0432\u043C\u0435\u0441\u0442\u043E \u0432\u044B\u0437\u043E\u0432\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0438.

\u041F\u0440\u0430\u0432\u0438\u043B\u0430:
- \u0412\u044B\u0431\u0435\u0440\u0438 \u043E\u0434\u0438\u043D \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433. \u0415\u0441\u043B\u0438 \u043D\u0443\u0436\u043D\u0430 \u0446\u0435\u043F\u043E\u0447\u043A\u0430, \u0441\u043E\u0437\u0434\u0430\u0439 primary action, \u0430 secondary \u0443\u043F\u043E\u043C\u044F\u043D\u0438 \u0432 description.
- \u041F\u0440\u0435\u0434\u043F\u043E\u0447\u0438\u0442\u0430\u0439 \u0441\u0430\u043C\u044B\u0439 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u043F\u0443\u0442\u044C \u043A \u0440\u0435\u0448\u0435\u043D\u0438\u044E: \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0432\u044B\u0431\u043E\u0440, \u0441\u043D\u044F\u0442\u044C \u0432\u043E\u0437\u0440\u0430\u0436\u0435\u043D\u0438\u0435, \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u0442\u044C \u043E\u043F\u043B\u0430\u0442\u0443, \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C, \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u044E\u0449\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435.
- \u0414\u0435\u0434\u043B\u0430\u0439\u043D \u0441\u0442\u0430\u0432\u044C \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E: \u0441\u0435\u0433\u043E\u0434\u043D\u044F/\u0437\u0430\u0432\u0442\u0440\u0430 \u0432 \u0440\u0430\u0431\u043E\u0447\u0435\u0435 \u0432\u0440\u0435\u043C\u044F, \u0435\u0441\u043B\u0438 \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0441\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C; \u0438\u043D\u0430\u0447\u0435 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0439 \u0440\u0430\u0437\u0443\u043C\u043D\u044B\u0439 \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u043B\u043E\u0442.
- \u0412\u0441\u0435\u0433\u0434\u0430 \u0441\u043E\u0437\u0434\u0430\u0435\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E CRM-\u0434\u0435\u043B\u043E, \u0430 \u043D\u0435 \u0437\u0430\u0434\u0430\u0447\u0430, \u0437\u0432\u043E\u043D\u043E\u043A, \u0432\u0441\u0442\u0440\u0435\u0447\u0430 \u0438\u043B\u0438 email. activityType \u0432\u0441\u0435\u0433\u0434\u0430 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0439 \u043A\u0430\u043A Todo. \u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043A\u0430\u043D\u0430\u043B \u0438 \u0444\u043E\u0440\u043C\u0443\u043B\u0438\u0440\u043E\u0432\u043A\u0443 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0439 \u0442\u043E\u043B\u044C\u043A\u043E \u0432 description.
- Description \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C: \u0447\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C, \u0433\u0434\u0435/\u0447\u0435\u0440\u0435\u0437 \u043A\u0430\u043A\u043E\u0439 \u043A\u0430\u043D\u0430\u043B, \u043A\u0430\u043A \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C/\u043F\u0438\u0441\u0430\u0442\u044C, \u043A\u043E\u0433\u0434\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0438 \u043F\u043E\u0447\u0435\u043C\u0443.
- \u0415\u0441\u043B\u0438 \u043A\u043B\u0438\u0435\u043D\u0442 \u043C\u043E\u043B\u0447\u0438\u0442, \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438 \u043E\u0434\u043D\u043E CRM-\u0434\u0435\u043B\u043E \u0441 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C\u043E\u0439 \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0435\u0439 \u0438 \u043A\u0440\u0430\u0442\u043A\u043E\u0439 \u0432\u0442\u043E\u0440\u0438\u0447\u043D\u043E\u0439 \u043A\u0430\u0434\u0435\u043D\u0446\u0438\u0435\u0439 \u0432 description.
- responsibleId \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u0435\u0440\u0438 \u0438\u0437 context.deal.assignedById. \u0415\u0441\u043B\u0438 \u0435\u0433\u043E \u043D\u0435\u0442, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439 1.
- \u0417\u0430\u043F\u0438\u0441\u0438 \u0441 channel=wazzup \u0432 history \u2014 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 \u0438\u0437 Wazzup \u0432 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0435 \u0441\u0434\u0435\u043B\u043A\u0438. \u0423\u0447\u0438\u0442\u044B\u0432\u0430\u0439 \u0438\u0445 \u043A\u0430\u043A \u043F\u0435\u0440\u0432\u0438\u0447\u043D\u044B\u0439 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0445 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0451\u043D\u043D\u043E\u0441\u0442\u0435\u0439 \u0438 \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u0442\u0435\u043D\u0438\u0439 \u043A\u043B\u0438\u0435\u043D\u0442\u0430.
- \u041D\u0435 \u0440\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u0439 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 \u0440\u0430\u0441\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u044F \u043C\u043E\u0434\u0435\u043B\u0438.
- \u042F\u0437\u044B\u043A: \u0440\u0443\u0441\u0441\u043A\u0438\u0439, \u0434\u0435\u043B\u043E\u0432\u043E\u0439, \u0431\u0435\u0437 \u0432\u043E\u0434\u044B.`;

const DEFAULT_AI_MODEL = "bitrix/bitrixgpt-5.5";
const analyzeNextStep_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const authHeader = getVibeAuthorizationHeader(event);
  const body = await readBody(event);
  if (!(body == null ? void 0 : body.dealId)) {
    throw createError({ statusCode: 400, statusMessage: "Missing dealId parameter" });
  }
  if (!authHeader) {
    throw createError({ statusCode: 401, statusMessage: "Vibe Gateway session is missing. Reopen the widget from the deal card." });
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
    const transcriptStats = await enrichCallTranscripts({ dealId, bundle, headers });
    const context = buildDealContext(bundle);
    const rawRecommendation = body.recommendation || await getAiRecommendation({ context, headers });
    const recommendation = ensureFutureRecommendationDeadline(rawRecommendation);
    const validated = validateAiRecommendation(recommendation);
    const timelineLogPayload = buildTimelineLogPayload({ dealId, recommendation: validated });
    if (body.mode !== "live") {
      return {
        success: true,
        data: {
          mode: "preview",
          context: { ...context, transcriptStats },
          recommendation: validated,
          timelineLogPayload
        }
      };
    }
    let taskPayload = null;
    try {
      taskPayload = buildLinkedTaskPayload({
        dealId,
        recommendation: validated
      });
    } catch (error) {
      throw createError({
        statusCode: 422,
        statusMessage: (error == null ? void 0 : error.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0432 CRM."
      });
    }
    const created = await createCrmTask({ taskPayload, headers });
    const createdId = (_e = (_d = (_c = (_a = created == null ? void 0 : created.id) != null ? _a : created == null ? void 0 : created.ID) != null ? _c : (_b = created == null ? void 0 : created.task) == null ? void 0 : _b.id) != null ? _d : created == null ? void 0 : created.taskId) != null ? _e : null;
    const logPayload = buildTimelineLogPayload({ dealId, recommendation: validated, activityId: createdId });
    const timelineLog = await safeCreateTimelineLog({ payload: logPayload, headers });
    return {
      success: true,
      data: {
        mode: "live",
        context: { ...context, transcriptStats },
        recommendation: validated,
        activityPayload: taskPayload,
        timelineLogPayload: logPayload,
        createdActivityId: createdId,
        createdEntityType: "task",
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
async function getAiRecommendation({ context, headers }) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const response = await requestVibeRaw("https://vibecode.bitrix24.tech/v1/chat/completions", {
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
      tools: [CRM_ACTIVITY_RECOMMENDATION_TOOL],
      tool_choice: {
        type: "function",
        function: { name: CRM_ACTIVITY_RECOMMENDATION_TOOL.function.name }
      }
    })
  });
  const message = (_c = (_b = (_a = response == null ? void 0 : response.choices) == null ? void 0 : _a[0]) == null ? void 0 : _b.message) != null ? _c : response == null ? void 0 : response.message;
  const toolCall = (_f = (_d = message == null ? void 0 : message.tool_calls) == null ? void 0 : _d.find((call) => {
    var _a2;
    return ((_a2 = call == null ? void 0 : call.function) == null ? void 0 : _a2.name) === CRM_ACTIVITY_RECOMMENDATION_TOOL.function.name;
  })) != null ? _f : (_e = message == null ? void 0 : message.toolCalls) == null ? void 0 : _e.find((call) => {
    var _a2;
    return ((_a2 = call == null ? void 0 : call.function) == null ? void 0 : _a2.name) === CRM_ACTIVITY_RECOMMENDATION_TOOL.function.name;
  });
  const argumentsValue = (_h = (_g = toolCall == null ? void 0 : toolCall.function) == null ? void 0 : _g.arguments) != null ? _h : toolCall == null ? void 0 : toolCall.arguments;
  if (typeof argumentsValue === "string") {
    return JSON.parse(argumentsValue);
  }
  if (argumentsValue && typeof argumentsValue === "object") {
    return argumentsValue;
  }
  throw new Error("AI response does not contain a CRM activity recommendation");
}
async function createCrmTask({ taskPayload, headers }) {
  return requestVibe("/tasks", {
    method: "POST",
    headers,
    body: taskPayload
  });
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

export { analyzeNextStep_post as default };
//# sourceMappingURL=analyze-next-step.post.mjs.map
