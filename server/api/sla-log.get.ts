import { readSlaLog } from '../reports/logStore';
import { requireAdmin } from '../utils/access';

export default defineEventHandler(async (event) => {
  await requireAdmin(event);
  return readSlaLog();
});
