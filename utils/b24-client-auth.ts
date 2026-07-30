type B24Auth = {
  access_token?: unknown;
  AUTH_ID?: unknown;
  auth_id?: unknown;
};

type B24Sdk = {
  getAuth?: () => B24Auth | false | null | undefined;
  refreshAuth?: (callback: (auth: B24Auth | false | null | undefined) => void) => unknown;
};

function firstToken(...values: unknown[]): string {
  for (const value of values) {
    if (typeof value === 'string' && value.trim()) {
      return value.trim().replace(/^Bearer\s+/i, '');
    }
  }
  return '';
}

/**
 * The Bitrix24 SDK can refresh the user session while the placement is open.
 * Always prefer its current token to the token present in the launch URL.
 */
export function getB24AuthorizationHeaders(sdkAuth: B24Auth | null | undefined, launchToken?: string): Record<string, string> {
  const token = firstToken(
    sdkAuth?.access_token,
    sdkAuth?.AUTH_ID,
    sdkAuth?.auth_id,
    launchToken
  );

  return token ? { Authorization: `Bearer ${token}` } : {};
}

/**
 * BX24.getAuth() returns false after expiry. Refresh via the iframe SDK before
 * falling back to the launch token, which may itself already be expired.
 */
export async function getCurrentB24AuthorizationHeaders(sdk: B24Sdk | null | undefined, launchToken?: string): Promise<Record<string, string>> {
  const currentAuth = sdk?.getAuth?.();
  const currentHeaders = getB24AuthorizationHeaders(currentAuth || null);
  if (currentHeaders.Authorization) {
    return currentHeaders;
  }

  const refreshedAuth = await refreshB24Auth(sdk);
  return getB24AuthorizationHeaders(refreshedAuth, launchToken);
}

function refreshB24Auth(sdk: B24Sdk | null | undefined): Promise<B24Auth | null> {
  if (!sdk?.refreshAuth) {
    return Promise.resolve(null);
  }

  return new Promise((resolve) => {
    const timeout = setTimeout(() => resolve(null), 5_000);
    try {
      sdk.refreshAuth?.((auth) => {
        clearTimeout(timeout);
        resolve(auth || null);
      });
    } catch {
      clearTimeout(timeout);
      resolve(null);
    }
  });
}
