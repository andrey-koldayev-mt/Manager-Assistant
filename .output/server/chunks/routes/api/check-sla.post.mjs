import { a as defineEventHandler, z as readBody, w as parseMoscowDateRange, I as setResponseStatus, N as startSlaJob } from '../../_/nitro.mjs';
import { r as requireAdmin } from '../../_/access.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:fs/promises';
import 'node:url';
import '../../_/b24.mjs';

const checkSla_post = defineEventHandler(async (event) => {
  await requireAdmin(event);
  const body = await readBody(event).catch(() => ({}));
  const dateRange = parseMoscowDateRange(body);
  setResponseStatus(event, 202);
  return startSlaJob({
    dateRange,
    updateCrm: Boolean(body.updateCrm),
    source: "manual"
  });
});

export { checkSla_post as default };
//# sourceMappingURL=check-sla.post.mjs.map
