import { a as defineEventHandler, A as readDataQualityLog } from '../../_/nitro.mjs';
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

const dataQualityLog_get = defineEventHandler(async (event) => {
  await requireAdmin(event);
  return readDataQualityLog();
});

export { dataQualityLog_get as default };
//# sourceMappingURL=data-quality-log.get.mjs.map
