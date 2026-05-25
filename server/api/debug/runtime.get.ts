import { getHeader } from 'h3';
import {
  B24_API_KEY,
  getVibeAuthorizationHeader
} from '../../utils/b24';

export default defineEventHandler(async (event) => {
  const authHeader = getVibeAuthorizationHeader(event);
  let me: unknown = null;

  if (authHeader && B24_API_KEY) {
    try {
      const response = await fetch('https://vibecode.bitrix24.tech/v1/me', {
        headers: {
          'X-Api-Key': B24_API_KEY,
          Authorization: authHeader
        }
      });
      const data = await response.json();
      me = data?.success && data?.data
        ? {
            portal: data.data.portal || data.data.portalDomain,
            userId: data.data.userId || data.data.currentUser?.bitrixUserId,
            keys: Object.keys(data.data)
          }
        : data;
    } catch (error) {
      me = { error: error instanceof Error ? error.message : String(error) };
    }
  }

  return {
    success: true,
    data: {
      path: event.path,
      query: getQuery(event),
      hasVibeAuthorization: Boolean(authHeader),
      hasApiKey: Boolean(B24_API_KEY),
      headers: {
        host: getHeader(event, 'host'),
        referer: getHeader(event, 'referer'),
        origin: getHeader(event, 'origin'),
        xForwardedHost: getHeader(event, 'x-forwarded-host'),
        xForwardedProto: getHeader(event, 'x-forwarded-proto')
      },
      me
    }
  };
});
