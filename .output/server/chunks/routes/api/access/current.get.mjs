import { a as defineEventHandler } from '../../../_/nitro.mjs';
import { g as getCurrentAccess } from '../../../_/access.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:fs/promises';
import 'node:url';
import '../../../_/b24.mjs';

const current_get = defineEventHandler(async (event) => ({
  success: true,
  data: await getCurrentAccess(event)
}));

export { current_get as default };
//# sourceMappingURL=current.get.mjs.map
