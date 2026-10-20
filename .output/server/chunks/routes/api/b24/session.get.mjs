import { a as defineEventHandler, c as createError } from '../../../_/nitro.mjs';
import { d as getVibeAuthorizationHeader } from '../../../_/b24.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const session_get = defineEventHandler((event) => {
  if (!getVibeAuthorizationHeader(event)) {
    throw createError({
      statusCode: 401,
      statusMessage: "Vibe Gateway session is missing. Reopen the widget from the deal card."
    });
  }
  return { success: true, data: { authenticated: true } };
});

export { session_get as default };
//# sourceMappingURL=session.get.mjs.map
