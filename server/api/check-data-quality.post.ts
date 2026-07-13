import { parseMoscowDateRange, startDataQualityJob, type ReportDateRangeRequest } from '../reports/jobs';
import { requireAuthenticated } from '../utils/access';
import { getVibeAuthorizationHeader } from '../utils/b24';

export default defineEventHandler(async (event) => {
  await requireAuthenticated(event);
  const body = (await readBody(event).catch(() => ({}))) as ReportDateRangeRequest;
  const dateRange = parseMoscowDateRange(body);

  setResponseStatus(event, 202);
  return startDataQualityJob(dateRange, getVibeAuthorizationHeader(event) || null);
});
