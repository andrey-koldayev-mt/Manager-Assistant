import { startNextStepJob } from '../reports/jobs';
import { requireAuthenticated } from '../utils/access';
import { getVibeAuthorizationHeader } from '../utils/b24';

export default defineEventHandler(async (event) => {
  await requireAuthenticated(event);

  setResponseStatus(event, 202);
  return startNextStepJob(getVibeAuthorizationHeader(event) || null);
});
