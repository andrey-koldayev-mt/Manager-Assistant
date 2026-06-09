import { startNextStepJob } from '../reports/jobs';
import { requireAdmin } from '../utils/access';

export default defineEventHandler(async (event) => {
  await requireAdmin(event);

  setResponseStatus(event, 202);
  return startNextStepJob();
});
