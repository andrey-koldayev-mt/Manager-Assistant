import { parseMoscowDateRange, startSlaJob, type ReportDateRangeRequest } from '../reports/jobs';
import { requireAdmin } from '../utils/access';

export default defineEventHandler(async (event) => {
  await requireAdmin(event);
  const body = (await readBody(event).catch(() => ({}))) as ReportDateRangeRequest;
  const dateRange = parseMoscowDateRange(body);

  setResponseStatus(event, 202);
  return startSlaJob({
    dateRange,
    updateCrm: Boolean(body.updateCrm),
    source: 'manual'
  });
});
