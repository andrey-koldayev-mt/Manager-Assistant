import { reportJobs } from '../../reports/jobs';
import { requireAuthenticated } from '../../utils/access';

export default defineEventHandler(async (event) => {
  await requireAuthenticated(event);
  return reportJobs.reactivation;
});
