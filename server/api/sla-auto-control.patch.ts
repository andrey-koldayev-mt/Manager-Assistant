import { updateSlaAutoControlConfig } from '../reports/jobs';
import { requireAdmin } from '../utils/access';

export default defineEventHandler(async (event) => {
  await requireAdmin(event);
  const body = await readBody(event).catch(() => ({}));
  return updateSlaAutoControlConfig(body);
});
