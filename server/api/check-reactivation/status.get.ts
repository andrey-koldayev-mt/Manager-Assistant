import { reportJobs } from '../../reports/jobs';
import { requireAdmin } from '../../utils/access';

export default defineEventHandler(async (event) => {
  await requireAdmin(event);
  return reportJobs.reactivation;
});
