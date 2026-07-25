import { a as defineEventHandler, B as readNextStepLog } from '../../_/nitro.mjs';
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

const nextStepLog_get = defineEventHandler(async (event) => {
  await requireAdmin(event);
  return readNextStepLog();
});

export { nextStepLog_get as default };
//# sourceMappingURL=next-step-log.get.mjs.map
