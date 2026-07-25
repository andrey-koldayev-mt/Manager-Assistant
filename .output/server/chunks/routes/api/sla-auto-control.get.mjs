import { a as defineEventHandler, D as readSlaAutoControlState } from '../../_/nitro.mjs';
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

const slaAutoControl_get = defineEventHandler(async (event) => {
  await requireAdmin(event);
  return readSlaAutoControlState();
});

export { slaAutoControl_get as default };
//# sourceMappingURL=sla-auto-control.get.mjs.map
