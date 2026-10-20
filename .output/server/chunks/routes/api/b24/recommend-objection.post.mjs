import { a as defineEventHandler, y as readBody, c as createError } from '../../../_/nitro.mjs';
import { g as getScenario, a as OBJECTION_SCENARIOS, b as getScenarioChannels } from '../../../_/objection-navigator.mjs';
import { l as loadDealBundle, b as buildDealContext, f as requestVibeRaw, c as buildPromptMessages } from '../../../_/deal-bundle.mjs';
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

const OBJECTION_RECOMMENDATION_TOOL = {
  type: "function",
  function: {
    name: "recommend_objection_response",
    description: "\u0424\u043E\u0440\u043C\u0438\u0440\u0443\u0435\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0443\u044E \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u044E \u0434\u043B\u044F \u043E\u0442\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0432\u043E\u0437\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043F\u043E \u0444\u0430\u043A\u0442\u0430\u043C \u0441\u0434\u0435\u043B\u043A\u0438.",
    parameters: {
      type: "object",
      additionalProperties: false,
      required: ["scenarioId", "channel", "situation", "recommendedAction", "responseText", "rationale", "sourceSignals"],
      properties: {
        scenarioId: { type: "string" },
        channel: { type: "string", enum: ["call", "remote", "message"] },
        situation: { type: "string" },
        recommendedAction: { type: "string" },
        responseText: { type: "string" },
        rationale: { type: "array", items: { type: "string" } },
        sourceSignals: { type: "array", items: { type: "string" } }
      }
    }
  }
};
const OBJECTION_SYSTEM_PROMPT = `\u0422\u044B \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0448\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0443 \u043F\u043E \u043F\u0440\u043E\u0434\u0430\u0436\u0430\u043C \u0442\u0443\u0440\u043E\u0432 \u043E\u0442\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u0435 \u0432\u043E\u0437\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430.

\u0420\u0430\u0431\u043E\u0442\u0430\u0439 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E \u0444\u0430\u043A\u0442\u0430\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0435\u0441\u0442\u044C \u0432 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u0435 \u0441\u0434\u0435\u043B\u043A\u0438: \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430, \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438, \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 \u0442\u0430\u0439\u043C\u043B\u0430\u0439\u043D\u0430, \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440\u043E\u0432 \u0438 email, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0442\u0440\u0430\u043D\u0441\u043A\u0440\u0438\u043F\u0446\u0438\u0438 \u0437\u0432\u043E\u043D\u043A\u043E\u0432. \u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043E\u0442\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0430 \u043F\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438; \u043F\u0440\u0438 \u043F\u0440\u043E\u0442\u0438\u0432\u043E\u0440\u0435\u0447\u0438\u044F\u0445 \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0439 \u0431\u043E\u043B\u0435\u0435 \u0441\u0432\u0435\u0436\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C. \u041D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0435 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u044B \u0441\u0442\u0430\u0434\u0438\u0439 \u0438 \u043D\u0435 \u043D\u0430\u0437\u044B\u0432\u0430\u0439 \u0441\u0442\u0430\u0434\u0438\u0438 \u0438\u043D\u0430\u0447\u0435, \u0447\u0435\u043C \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u043E\u0447\u0438\u0442\u0430\u0435\u043C\u044B\u043C \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\u043C \u0438\u0437 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u0430.

\u041F\u0440\u0430\u0432\u0438\u043B\u0430:
- \u0412\u044B\u0431\u0435\u0440\u0438 \u043E\u0434\u0438\u043D \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0438 \u043E\u0434\u0438\u043D \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0439 \u0434\u043B\u044F \u043D\u0435\u0433\u043E \u043A\u0430\u043D\u0430\u043B \u0438\u0437 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430, \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0432 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u0435.
- \u041E\u0431\u044A\u044F\u0441\u043D\u0438 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044E \u0447\u0435\u0440\u0435\u0437 1-3 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0445 \u0441\u0438\u0433\u043D\u0430\u043B\u0430 \u0438\u0437 \u0438\u0441\u0442\u043E\u0440\u0438\u0438. \u0412 sourceSignals \u0443\u043A\u0430\u0436\u0438 \u043A\u0440\u0430\u0442\u043A\u0438\u0435 \u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 \u0437\u0430\u043F\u0438\u0441\u0438: \u043A\u0430\u043D\u0430\u043B, \u0434\u0430\u0442\u0430 \u0438 \u0441\u0443\u0442\u044C. \u041D\u0435 \u0432\u044B\u0434\u0443\u043C\u044B\u0432\u0430\u0439 \u0441\u0438\u0433\u043D\u0430\u043B\u044B.
- \u0421\u0444\u043E\u0440\u043C\u0443\u043B\u0438\u0440\u0443\u0439 responseText \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u044D\u0442\u043E\u0439 \u0441\u0434\u0435\u043B\u043A\u0438. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439 \u0438\u043C\u044F, \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435, \u043E\u0442\u0435\u043B\u044C, \u0431\u044E\u0434\u0436\u0435\u0442, \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0438\u043B\u0438 \u0432\u043E\u043F\u0440\u043E\u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u043E\u0433\u0434\u0430 \u043E\u043D\u0438 \u044F\u0432\u043D\u043E \u0435\u0441\u0442\u044C \u0432 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u0435.
- \u041D\u0435 \u043A\u043E\u043F\u0438\u0440\u0443\u0439 \u0448\u0430\u0431\u043B\u043E\u043D \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430 \u0438 \u043D\u0435 \u0432\u044B\u0434\u0430\u0432\u0430\u0439 \u043E\u0431\u0449\u0443\u044E \u0437\u0430\u0433\u043E\u0442\u043E\u0432\u043A\u0443. \u0415\u0441\u043B\u0438 \u0444\u0430\u043A\u0442\u043E\u0432 \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E, \u043F\u0440\u044F\u043C\u043E \u0443\u043A\u0430\u0436\u0438 \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u044E\u0449\u0438\u0439 \u0444\u0430\u043A\u0442 \u0438 \u0441\u0444\u043E\u0440\u043C\u0443\u043B\u0438\u0440\u0443\u0439 \u043E\u0434\u0438\u043D \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0449\u0438\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u0432\u043C\u0435\u0441\u0442\u043E \u043F\u0440\u0435\u0434\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0439.
- \u041D\u0435 \u043E\u0431\u0435\u0449\u0430\u0439 \u0441\u043A\u0438\u0434\u043A\u0443, \u043D\u0430\u043B\u0438\u0447\u0438\u0435, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0446\u0435\u043D\u044B, \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u043E\u043F\u043B\u0430\u0442\u044B, \u043B\u0438\u0447\u043D\u044B\u0439 \u043E\u043F\u044B\u0442, \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0438 \u0438\u043B\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0442\u0440\u0435\u0442\u044C\u0438\u0445 \u043B\u0438\u0446, \u0435\u0441\u043B\u0438 \u044D\u0442\u043E\u0433\u043E \u043D\u0435\u0442 \u0432 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u0434\u0435\u043B\u043A\u0438.
- \u041D\u0435 \u0434\u0430\u0432\u0438 \u043D\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0430, \u043D\u0435 \u0441\u043F\u043E\u0440\u044C \u0438 \u043D\u0435 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0439 CRM-\u0441\u0443\u0449\u043D\u043E\u0441\u0442\u0438. \u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u044F \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0440\u0443\u0447\u043D\u043E\u0439 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u043C.
- responseText \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u043C: \u0434\u043B\u044F \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440\u0430 2-3 \u0430\u0431\u0437\u0430\u0446\u0430, \u0434\u043B\u044F \u0437\u0432\u043E\u043D\u043A\u0430 \u0438\u043B\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u043D\u043E\u0439 \u043F\u0440\u043E\u0434\u0430\u0436\u0438 - \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0440\u0435\u043F\u043B\u0438\u043A\u0430 \u0438 \u043E\u0434\u0438\u043D \u0432\u043E\u043F\u0440\u043E\u0441 \u0432 \u043A\u043E\u043D\u0446\u0435.
`;
function validateObjectionRecommendation(value, allowedScenarioIds) {
  if (!value || typeof value !== "object") throw new Error("AI recommendation must be an object");
  const record = value;
  const scenarioId = stringValue(record.scenarioId);
  const channel = stringValue(record.channel);
  const situation = stringValue(record.situation);
  const recommendedAction = stringValue(record.recommendedAction);
  const responseText = stringValue(record.responseText);
  if (!allowedScenarioIds.has(scenarioId)) throw new Error("AI returned an unknown objection scenario");
  if (!["call", "remote", "message"].includes(channel)) throw new Error("AI returned an unknown communication channel");
  if (!situation || !recommendedAction || !responseText) throw new Error("AI recommendation is incomplete");
  return {
    scenarioId,
    channel,
    situation,
    recommendedAction,
    responseText,
    rationale: stringArray(record.rationale),
    sourceSignals: stringArray(record.sourceSignals)
  };
}
function stringValue(value) {
  return typeof value === "string" ? value.trim() : "";
}
function stringArray(value) {
  return Array.isArray(value) ? value.filter((item) => typeof item === "string" && Boolean(item.trim())).map((item) => item.trim()) : [];
}

const DEFAULT_AI_MODEL = "bitrix/bitrixgpt-5.5";
const recommendObjection_post = defineEventHandler(async (event) => {
  const authHeader = getVibeAuthorizationHeader(event);
  const body = await readBody(event);
  const dealId = Number(body == null ? void 0 : body.dealId);
  if (!Number.isInteger(dealId) || dealId <= 0) {
    throw createError({ statusCode: 400, statusMessage: "Deal ID \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0447\u0438\u0441\u043B\u043E\u043C." });
  }
  if (!authHeader) {
    throw createError({ statusCode: 401, statusMessage: "Vibe Gateway session is missing. Reopen the widget from the deal card." });
  }
  ensureVibeApiKey();
  const requestedScenario = (body == null ? void 0 : body.scenarioId) ? getScenario(body.scenarioId) : null;
  if ((body == null ? void 0 : body.scenarioId) && !requestedScenario) {
    throw createError({ statusCode: 400, statusMessage: "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D." });
  }
  const headers = {
    "X-Api-Key": B24_API_KEY,
    Authorization: authHeader,
    "Content-Type": "application/json"
  };
  try {
    const bundle = await loadDealBundle({ dealId, headers });
    const transcriptStats = await enrichCallTranscripts({ dealId, bundle, headers });
    const dealContext = buildDealContext(bundle);
    const { stageId: _stageId, stageName, ...dealWithoutSystemStage } = dealContext.deal;
    const aiDealContext = {
      ...dealContext,
      deal: {
        ...dealWithoutSystemStage,
        stage: stageName || "\u041D\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0430"
      }
    };
    const catalogue = (requestedScenario ? [requestedScenario] : OBJECTION_SCENARIOS).map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      channels: getScenarioChannels(item)
    }));
    const response = await requestVibeRaw("https://vibecode.bitrix24.tech/v1/chat/completions", {
      method: "POST",
      headers,
      body: JSON.stringify({
        model: process.env.VIBE_AI_MODEL || DEFAULT_AI_MODEL,
        messages: buildPromptMessages({
          systemPrompt: OBJECTION_SYSTEM_PROMPT,
          context: {
            currentTime: (/* @__PURE__ */ new Date()).toISOString(),
            selectedScenario: (requestedScenario == null ? void 0 : requestedScenario.id) || null,
            catalogue,
            deal: aiDealContext
          }
        }),
        temperature: 0.15,
        tools: [OBJECTION_RECOMMENDATION_TOOL],
        tool_choice: { type: "function", function: { name: OBJECTION_RECOMMENDATION_TOOL.function.name } }
      })
    });
    const rawRecommendation = toolArguments(response);
    const recommendation = validateObjectionRecommendation(
      rawRecommendation,
      new Set(catalogue.map((item) => item.id))
    );
    const selected = getScenario(recommendation.scenarioId);
    if (!selected || !getScenarioChannels(selected).includes(recommendation.channel)) {
      throw new Error("AI returned a channel that is unavailable for the selected scenario");
    }
    return {
      success: true,
      data: { recommendation, transcriptStats }
    };
  } catch (error) {
    throw createError({
      statusCode: (error == null ? void 0 : error.statusCode) || 500,
      statusMessage: (error == null ? void 0 : error.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u044E \u043F\u043E \u0432\u043E\u0437\u0440\u0430\u0436\u0435\u043D\u0438\u044E."
    });
  }
});
function toolArguments(response) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const message = (_c = (_b = (_a = response == null ? void 0 : response.choices) == null ? void 0 : _a[0]) == null ? void 0 : _b.message) != null ? _c : response == null ? void 0 : response.message;
  const toolCall = (_f = (_d = message == null ? void 0 : message.tool_calls) == null ? void 0 : _d.find((call) => {
    var _a2;
    return ((_a2 = call == null ? void 0 : call.function) == null ? void 0 : _a2.name) === OBJECTION_RECOMMENDATION_TOOL.function.name;
  })) != null ? _f : (_e = message == null ? void 0 : message.toolCalls) == null ? void 0 : _e.find((call) => {
    var _a2;
    return ((_a2 = call == null ? void 0 : call.function) == null ? void 0 : _a2.name) === OBJECTION_RECOMMENDATION_TOOL.function.name;
  });
  const value = (_h = (_g = toolCall == null ? void 0 : toolCall.function) == null ? void 0 : _g.arguments) != null ? _h : toolCall == null ? void 0 : toolCall.arguments;
  if (typeof value === "string") return JSON.parse(value);
  if (value && typeof value === "object") return value;
  throw new Error("AI response does not contain an objection recommendation");
}

export { recommendObjection_post as default };
//# sourceMappingURL=recommend-objection.post.mjs.map
