import { a as defineEventHandler, y as readBody, c as createError } from '../../../_/nitro.mjs';
import { d as getVibeAuthorizationHeader, e as ensureVibeApiKey, b as buildActivityDeadline, B as B24_API_KEY } from '../../../_/b24.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const createCallActivity_post = defineEventHandler(async (event) => {
  var _a;
  const authHeader = getVibeAuthorizationHeader(event);
  const body = await readBody(event);
  if (!(body == null ? void 0 : body.dealId)) {
    throw createError({ statusCode: 400, statusMessage: "Missing dealId parameter" });
  }
  if (!authHeader) {
    throw createError({ statusCode: 401, statusMessage: "Missing authorization header" });
  }
  ensureVibeApiKey();
  const notes = typeof body.crmNotes === "string" ? body.crmNotes.trim() : "";
  if (!body.nextContactDate) {
    throw createError({ statusCode: 400, statusMessage: "Missing nextContactDate parameter" });
  }
  if (!notes) {
    throw createError({ statusCode: 400, statusMessage: "Missing crmNotes parameter" });
  }
  const deadline = buildActivityDeadline(String(body.nextContactDate));
  const description = [
    "\u0417\u0430\u043C\u0435\u0442\u043A\u0438 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430:",
    notes,
    "",
    `\u0414\u0430\u0442\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F: ${body.nextContactDate}`,
    "\u0421\u043E\u0437\u0434\u0430\u043D\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0438\u0437 \u0432\u0438\u0434\u0436\u0435\u0442\u0430 \u0440\u0435\u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u0437\u0432\u043E\u043D\u043A\u0430."
  ].join("\n");
  const activityBody = {
    typeId: 2,
    ownerTypeId: 2,
    ownerId: Number(body.dealId),
    subject: "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043A\u043E\u043D\u0442\u0430\u043A\u0442 \u043F\u043E \u0440\u0435\u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438",
    description,
    responsibleId: body.assignedById ? Number(body.assignedById) : 1,
    completed: false,
    deadline,
    direction: 2,
    startTime: deadline,
    endTime: deadline
  };
  const response = await fetch("https://vibecode.bitrix24.tech/v1/activities", {
    method: "POST",
    headers: {
      "X-Api-Key": B24_API_KEY,
      Authorization: authHeader,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(activityBody)
  });
  const result = await response.json();
  if (!response.ok || !result.success) {
    throw createError({
      statusCode: response.status || 500,
      statusMessage: ((_a = result.error) == null ? void 0 : _a.message) || result.error || "Unable to create CRM activity",
      data: result
    });
  }
  return result;
});

export { createCallActivity_post as default };
//# sourceMappingURL=create-call-activity.post.mjs.map
