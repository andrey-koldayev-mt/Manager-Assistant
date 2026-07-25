import { a as defineEventHandler, z as readBody, S as updateSlaAutoControlConfig } from '../../_/nitro.mjs';
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

const slaAutoControl_patch = defineEventHandler(async (event) => {
  await requireAdmin(event);
  const body = await readBody(event).catch(() => ({}));
  return updateSlaAutoControlConfig(body);
});

export { slaAutoControl_patch as default };
//# sourceMappingURL=sla-auto-control.patch.mjs.map
