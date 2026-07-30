import { describe, expect, it } from 'vitest';
import { getB24AuthorizationHeaders, getCurrentB24AuthorizationHeaders } from './b24-client-auth';

describe('getB24AuthorizationHeaders', () => {
  it('uses the current SDK token before the launch-url token', () => {
    expect(getB24AuthorizationHeaders(
      { access_token: 'fresh-session-token' },
      'expired-launch-token'
    )).toEqual({ Authorization: 'Bearer fresh-session-token' });
  });

  it('falls back to the launch-url token and never doubles the Bearer prefix', () => {
    expect(getB24AuthorizationHeaders(null, 'Bearer launch-token'))
      .toEqual({ Authorization: 'Bearer launch-token' });
  });

  it('does not create an Authorization header without a token', () => {
    expect(getB24AuthorizationHeaders(null)).toEqual({});
  });

  it('refreshes the iframe SDK session when getAuth reports an expired token', async () => {
    const headers = await getCurrentB24AuthorizationHeaders({
      getAuth: () => false,
      refreshAuth: (callback) => callback({ access_token: 'refreshed-token' })
    }, 'expired-launch-token');

    expect(headers).toEqual({ Authorization: 'Bearer refreshed-token' });
  });
  it('keeps the last valid SDK token during a transient empty auth response', async () => {
    let token = 'fresh-session-token';
    const sdk = {
      getAuth: () => token ? { access_token: token } : false,
      refreshAuth: (callback: (auth: any) => void) => callback(false)
    };

    await getCurrentB24AuthorizationHeaders(sdk);
    token = '';

    await expect(getCurrentB24AuthorizationHeaders(sdk)).resolves.toEqual({
      Authorization: 'Bearer fresh-session-token'
    });
  });
});
