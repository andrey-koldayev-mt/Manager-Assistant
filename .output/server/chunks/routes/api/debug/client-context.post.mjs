import { a as defineEventHandler, z as readBody } from '../../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:fs/promises';
import 'node:url';

const clientContext_post = defineEventHandler(async (event) => {
  const body = await readBody(event).catch(() => ({}));
  console.log("Bitrix client context debug:", JSON.stringify(body || {}).slice(0, 4e3));
  return { success: true };
});

export { clientContext_post as default };
//# sourceMappingURL=client-context.post.mjs.map
