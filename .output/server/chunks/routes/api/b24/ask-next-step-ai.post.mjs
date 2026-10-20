import { a as defineEventHandler, y as readBody, c as createError } from '../../../_/nitro.mjs';
import { l as loadDealBundle, b as buildDealContext, f as requestVibeRaw } from '../../../_/deal-bundle.mjs';
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

const DEFAULT_AI_MODEL = "bitrix/bitrixgpt-5.5";
const MAX_QUESTION_LENGTH = 4e3;
const askNextStepAi_post = defineEventHandler(async (event) => {
  var _a, _b;
  const authHeader = getVibeAuthorizationHeader(event);
  const body = await readBody(event);
  const question = ((_a = body == null ? void 0 : body.question) == null ? void 0 : _a.trim()) || "";
  const dealId = Number(body == null ? void 0 : body.dealId);
  if (!Number.isFinite(dealId) || dealId <= 0) {
    throw createError({ statusCode: 400, statusMessage: "Deal ID \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0447\u0438\u0441\u043B\u043E\u043C." });
  }
  if (!question || question.length > MAX_QUESTION_LENGTH) {
    throw createError({ statusCode: 400, statusMessage: `\u0412\u043E\u043F\u0440\u043E\u0441 \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043E\u0442 1 \u0434\u043E ${MAX_QUESTION_LENGTH} \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432.` });
  }
  if (!authHeader) {
    throw createError({ statusCode: 401, statusMessage: "Vibe Gateway session is missing. Reopen the widget from the deal card." });
  }
  ensureVibeApiKey();
  const headers = { "X-Api-Key": B24_API_KEY, Authorization: authHeader, "Content-Type": "application/json" };
  try {
    const bundle = await loadDealBundle({ dealId, headers });
    const transcriptStats = await enrichCallTranscripts({ dealId, bundle, headers });
    const context = { ...buildDealContext(bundle), transcriptStats };
    const response = await requestVibeRaw("https://vibecode.bitrix24.tech/v1/chat/completions", {
      method: "POST",
      headers,
      body: JSON.stringify({
        model: process.env.VIBE_AI_MODEL || DEFAULT_AI_MODEL,
        temperature: 0.2,
        messages: [
          {
            role: "system",
            content: "\u0422\u044B AI CRM Sales Assistant \u0434\u043B\u044F Bitrix24. \u041E\u0442\u0432\u0435\u0447\u0430\u0439 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C, \u043A\u043E\u0440\u043E\u0442\u043A\u043E \u0438 \u043F\u043E \u0434\u0435\u043B\u0443. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439 \u0442\u043E\u043B\u044C\u043A\u043E \u0444\u0430\u043A\u0442\u044B \u0438\u0437 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u0430 \u0441\u0434\u0435\u043B\u043A\u0438 \u0438 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438. \u041C\u043E\u0436\u043D\u043E \u043E\u0431\u0441\u0443\u0436\u0434\u0430\u0442\u044C \u0432\u0441\u044E \u0441\u0434\u0435\u043B\u043A\u0443, \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0439 \u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u0435 \u0434\u0435\u043B\u043E. \u041D\u0435 \u0432\u044B\u0434\u0443\u043C\u044B\u0432\u0430\u0439 \u0434\u0435\u0442\u0430\u043B\u0438; \u0435\u0441\u043B\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u043D\u0435\u0442, \u0441\u043A\u0430\u0436\u0438, \u0447\u0442\u043E \u0438\u043C\u0435\u043D\u043D\u043E \u043D\u0443\u0436\u043D\u043E \u0443\u0442\u043E\u0447\u043D\u0438\u0442\u044C. \u041D\u0435 \u0440\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u0439 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 \u0440\u0430\u0441\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u044F \u043C\u043E\u0434\u0435\u043B\u0438 \u0438 \u043D\u0435 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0439 CRM-\u0441\u0443\u0449\u043D\u043E\u0441\u0442\u0438."
          },
          { role: "user", content: `\u041A\u043E\u043D\u0442\u0435\u043A\u0441\u0442 \u0441\u0434\u0435\u043B\u043A\u0438:
${JSON.stringify(context)}

\u0422\u0435\u043A\u0443\u0449\u0430\u044F AI-\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u044F:
${JSON.stringify((_b = body == null ? void 0 : body.recommendation) != null ? _b : null)}` },
          ...normalizeHistory(body == null ? void 0 : body.history),
          { role: "user", content: question }
        ]
      })
    });
    const answer = extractAnswer(response);
    if (!answer) throw new Error("AI \u043D\u0435 \u0432\u0435\u0440\u043D\u0443\u043B \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0439 \u043E\u0442\u0432\u0435\u0442.");
    return { success: true, data: { answer } };
  } catch (error) {
    throw createError({ statusCode: (error == null ? void 0 : error.statusCode) || 500, statusMessage: (error == null ? void 0 : error.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442 AI." });
  }
});
function normalizeHistory(value) {
  if (!Array.isArray(value)) return [];
  return value.slice(-8).flatMap((message) => {
    if (!message || typeof message !== "object") return [];
    const candidate = message;
    return (candidate.role === "user" || candidate.role === "assistant") && typeof candidate.content === "string" && candidate.content.trim() ? [{ role: candidate.role, content: candidate.content.trim().slice(0, MAX_QUESTION_LENGTH) }] : [];
  });
}
function extractAnswer(response) {
  var _a, _b, _c, _d, _e, _f;
  const content = (_f = (_e = (_c = (_b = (_a = response == null ? void 0 : response.choices) == null ? void 0 : _a[0]) == null ? void 0 : _b.message) == null ? void 0 : _c.content) != null ? _e : (_d = response == null ? void 0 : response.message) == null ? void 0 : _d.content) != null ? _f : response == null ? void 0 : response.content;
  if (typeof content === "string") return content.trim();
  if (Array.isArray(content)) return content.map((item) => {
    var _a2;
    return (_a2 = item == null ? void 0 : item.text) != null ? _a2 : "";
  }).join("").trim();
  return "";
}

export { askNextStepAi_post as default };
//# sourceMappingURL=ask-next-step-ai.post.mjs.map
