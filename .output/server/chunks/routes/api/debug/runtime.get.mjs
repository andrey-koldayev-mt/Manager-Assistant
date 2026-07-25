import { a as defineEventHandler, j as getHeader, k as getQuery } from '../../../_/nitro.mjs';
import { d as getVibeAuthorizationHeader, B as B24_API_KEY } from '../../../_/b24.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:fs/promises';
import 'node:url';

const runtime_get = defineEventHandler(async (event) => {
  var _a;
  const authHeader = getVibeAuthorizationHeader(event);
  let me = null;
  if (authHeader && B24_API_KEY) {
    try {
      const response = await fetch("https://vibecode.bitrix24.tech/v1/me", {
        headers: {
          "X-Api-Key": B24_API_KEY,
          Authorization: authHeader
        }
      });
      const data = await response.json();
      me = (data == null ? void 0 : data.success) && (data == null ? void 0 : data.data) ? {
        portal: data.data.portal || data.data.portalDomain,
        userId: data.data.userId || ((_a = data.data.currentUser) == null ? void 0 : _a.bitrixUserId),
        keys: Object.keys(data.data)
      } : data;
    } catch (error) {
      me = { error: error instanceof Error ? error.message : String(error) };
    }
  }
  return {
    success: true,
    data: {
      path: event.path,
      query: getQuery(event),
      hasVibeAuthorization: Boolean(authHeader),
      hasApiKey: Boolean(B24_API_KEY),
      headers: {
        host: getHeader(event, "host"),
        referer: getHeader(event, "referer"),
        origin: getHeader(event, "origin"),
        xForwardedHost: getHeader(event, "x-forwarded-host"),
        xForwardedProto: getHeader(event, "x-forwarded-proto")
      },
      me
    }
  };
});

export { runtime_get as default };
//# sourceMappingURL=runtime.get.mjs.map
