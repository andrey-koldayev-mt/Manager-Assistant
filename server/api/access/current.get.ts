import { getCurrentAccess } from '../../utils/access';

export default defineEventHandler(async (event) => ({
  success: true,
  data: await getCurrentAccess(event)
}));
