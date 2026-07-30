import { getVibeAuthorizationHeader } from '../../utils/b24';

export default defineEventHandler((event) => {
  if (!getVibeAuthorizationHeader(event)) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Vibe Gateway session is missing. Reopen the widget from the deal card.'
    });
  }

  return { success: true, data: { authenticated: true } };
});