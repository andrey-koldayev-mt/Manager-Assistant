import { a as defineEventHandler, z as readBody, w as parseMoscowDateRange, I as setResponseStatus, K as startDataQualityJob } from '../../_/nitro.mjs';
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

const checkDataQuality_post = defineEventHandler(async (event) => {
  await requireAdmin(event);
  const body = await readBody(event).catch(() => ({}));
  const dateRange = parseMoscowDateRange(body);
  setResponseStatus(event, 202);
  return startDataQualityJob(dateRange);
});

export { checkDataQuality_post as default };
//# sourceMappingURL=check-data-quality.post.mjs.map
