import { readDataQualityLog } from '../reports/logStore';
import { requireAuthenticated } from '../utils/access';

export default defineEventHandler(async (event) => {
  await requireAuthenticated(event);
  return readDataQualityLog();
});
