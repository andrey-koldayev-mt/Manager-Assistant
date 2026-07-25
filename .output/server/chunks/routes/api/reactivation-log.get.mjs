import { a as defineEventHandler, C as readReactivationLog } from '../../_/nitro.mjs';
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

const reactivationLog_get = defineEventHandler(async (event) => {
  await requireAdmin(event);
  return readReactivationLog();
});

export { reactivationLog_get as default };
//# sourceMappingURL=reactivation-log.get.mjs.map
