import { startReactivationJob } from '../reports/jobs';
import { requireAuthenticated } from '../utils/access';

export default defineEventHandler(async (event) => {
  await requireAuthenticated(event);

  setResponseStatus(event, 202);
  return startReactivationJob();
});
