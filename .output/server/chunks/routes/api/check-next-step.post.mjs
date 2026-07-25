import { a as defineEventHandler, I as setResponseStatus, L as startNextStepJob } from '../../_/nitro.mjs';
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

const checkNextStep_post = defineEventHandler(async (event) => {
  await requireAdmin(event);
  setResponseStatus(event, 202);
  return startNextStepJob();
});

export { checkNextStep_post as default };
//# sourceMappingURL=check-next-step.post.mjs.map
