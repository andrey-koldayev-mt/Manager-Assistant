import type { H3Event } from 'h3';
import { createError } from 'h3';
import { B24_API_KEY, getVibeAuthorizationHeader, toRecord } from './b24';

export type DashboardModule =
  | 'manager-assistant'
  | 'sla-first-contact'
  | 'data-quality'
  | 'reactivation'
  | 'next-step-control';

export interface DashboardAccess {
  isAuthenticated: boolean;
  isAdmin: boolean;
  portal: string | null;
  user: {
    id: number | null;
    name: string;
  };
  allowedModules: DashboardModule[];
}

const EMPLOYEE_MODULES: DashboardModule[] = [
  'manager-assistant',
  'data-quality',
  'reactivation',
  'next-step-control'
];
const ADMIN_MODULES: DashboardModule[] = [
  'manager-assistant',
  'sla-first-contact',
  'data-quality',
  'reactivation',
  'next-step-control'
];

function firstBoolean(...values: unknown[]): boolean {
  for (const value of values) {
    if (typeof value === 'boolean') {
      return value;
    }
    if (typeof value === 'string') {
      const normalized = value.trim().toLowerCase();
      if (['true', 'y', 'yes', '1', 'admin'].includes(normalized)) {
        return true;
      }
      if (['false', 'n', 'no', '0', 'user'].includes(normalized)) {
        return false;
      }
    }
    if (typeof value === 'number' && Number.isFinite(value)) {
      return value === 1;
    }
  }

  return false;
}

function firstNumber(...values: unknown[]): number | null {
  for (const value of values) {
    const parsed = typeof value === 'number' ? value : typeof value === 'string' ? Number(value) : Number.NaN;
    if (Number.isFinite(parsed) && parsed > 0) {
      return parsed;
    }
  }

  return null;
}

function firstString(...values: unknown[]): string {
  for (const value of values) {
    if (typeof value === 'string' && value.trim()) {
      return value.trim();
    }
  }

  return '';
}

function bearerToken(authHeader: string): string {
  const trimmed = authHeader.trim();
  return trimmed.replace(/^Bearer\s+/i, '').trim();
}

function normalizePortalDomain(value: string | null): string {
  if (!value) return '';
  return value
    .replace(/^https?:\/\//i, '')
    .replace(/\/.*$/, '')
    .trim()
    .toLowerCase();
}

function bitrixRestUrl(portal: string | null, method: string, authHeader: string): string {
  const domain = normalizePortalDomain(portal);
  const token = bearerToken(authHeader);
  if (!domain || !token || !/^[a-z0-9.-]+$/i.test(domain)) {
    return '';
  }

  const params = new URLSearchParams({ auth: token });
  return `https://${domain}/rest/${method}.json?${params.toString()}`;
}

export function deriveAccessFromVibeMe(raw: unknown): DashboardAccess {
  const root = toRecord(raw);
  const snakeCurrentUser = toRecord(root?.current_user);
  const currentUser = toRecord(root?.currentUser);
  const user = toRecord(root?.user) ?? currentUser ?? snakeCurrentUser;
  const permissions = toRecord(root?.permissions);
  const rights = toRecord(root?.rights);
  const isAuthenticated = Boolean(root && (user || currentUser || snakeCurrentUser || root.userId || root.bitrixUserId));
  const isAdmin = firstBoolean(
    root?.isAdmin,
    root?.is_admin,
    root?.admin,
    root?.ADMIN,
    root?.isBitrixAdmin,
    root?.is_bitrix_admin,
    root?.bitrixAdmin,
    root?.bitrix_admin,
    root?.isAdministrator,
    root?.IS_ADMIN,
    root?.IS_ADMINISTRATOR,
    permissions?.isAdmin,
    permissions?.is_admin,
    permissions?.admin,
    permissions?.ADMIN,
    permissions?.isBitrixAdmin,
    permissions?.is_bitrix_admin,
    permissions?.IS_ADMIN,
    rights?.isAdmin,
    rights?.is_admin,
    rights?.admin,
    rights?.ADMIN,
    rights?.isBitrixAdmin,
    rights?.is_bitrix_admin,
    rights?.IS_ADMIN,
    currentUser?.isAdmin,
    currentUser?.is_admin,
    currentUser?.admin,
    currentUser?.ADMIN,
    currentUser?.isBitrixAdmin,
    currentUser?.is_bitrix_admin,
    currentUser?.isAdministrator,
    currentUser?.IS_ADMIN,
    currentUser?.IS_ADMINISTRATOR,
    snakeCurrentUser?.isAdmin,
    snakeCurrentUser?.is_admin,
    snakeCurrentUser?.admin,
    snakeCurrentUser?.ADMIN,
    snakeCurrentUser?.isBitrixAdmin,
    snakeCurrentUser?.is_bitrix_admin,
    snakeCurrentUser?.isAdministrator,
    snakeCurrentUser?.IS_ADMIN,
    snakeCurrentUser?.IS_ADMINISTRATOR,
    user?.isAdmin,
    user?.is_admin,
    user?.admin,
    user?.ADMIN,
    user?.isBitrixAdmin,
    user?.is_bitrix_admin,
    user?.isAdministrator,
    user?.IS_ADMIN,
    user?.IS_ADMINISTRATOR
  );

  return {
    isAuthenticated,
    isAdmin,
    portal: firstString(root?.portal, root?.portalDomain, root?.domain) || null,
    user: {
      id: firstNumber(
        root?.userId,
        root?.user_id,
        root?.bitrixUserId,
        root?.bitrix_user_id,
        currentUser?.bitrixUserId,
        currentUser?.bitrix_user_id,
        currentUser?.id,
        currentUser?.ID,
        snakeCurrentUser?.bitrixUserId,
        snakeCurrentUser?.bitrix_user_id,
        snakeCurrentUser?.id,
        snakeCurrentUser?.ID,
        user?.id,
        user?.ID
      ),
      name: firstString(
        currentUser?.name,
        currentUser?.fullName,
        currentUser?.full_name,
        currentUser?.FULL_NAME,
        currentUser?.NAME,
        snakeCurrentUser?.name,
        snakeCurrentUser?.fullName,
        snakeCurrentUser?.full_name,
        snakeCurrentUser?.FULL_NAME,
        snakeCurrentUser?.NAME,
        user?.name,
        user?.fullName,
        user?.full_name,
        user?.FULL_NAME,
        user?.NAME
      )
    },
    allowedModules: !isAuthenticated ? ['manager-assistant'] : isAdmin ? ADMIN_MODULES : EMPLOYEE_MODULES
  };
}

export function deriveAccessWithBitrixCurrentUser(raw: unknown, bitrixCurrentUser: unknown): DashboardAccess {
  const root = toRecord(raw) ?? {};
  const currentUser = toRecord(bitrixCurrentUser);
  if (!currentUser) {
    return deriveAccessFromVibeMe(raw);
  }

  return deriveAccessFromVibeMe({
    ...root,
    currentUser: {
      ...(toRecord(root.currentUser) ?? {}),
      ...currentUser
    },
    current_user: {
      ...(toRecord(root.current_user) ?? {}),
      ...currentUser
    }
  });
}

async function loadBitrixCurrentUser(raw: unknown, authHeader: string): Promise<unknown> {
  const root = toRecord(raw);
  const portal = firstString(root?.portal, root?.portalDomain, root?.domain) || null;
  const url = bitrixRestUrl(portal, 'user.current', authHeader);
  if (!url) return null;

  const response = await fetch(url, {
    signal: AbortSignal.timeout(5000)
  }).catch(() => null);
  if (!response?.ok) return null;

  const payload = await response.json().catch(() => null);
  return toRecord(payload)?.result ?? null;
}

export async function getCurrentAccess(event: H3Event): Promise<DashboardAccess> {
  const authHeader = getVibeAuthorizationHeader(event);
  if (!authHeader || !B24_API_KEY) {
    return deriveAccessFromVibeMe(null);
  }

  const response = await fetch('https://vibecode.bitrix24.tech/v1/me', {
    headers: {
      'X-Api-Key': B24_API_KEY,
      Authorization: authHeader
    }
  });
  const payload = await response.json().catch(() => null);
  if (!response.ok || payload?.success === false) {
    return deriveAccessFromVibeMe(null);
  }

  const raw = payload?.data ?? payload;
  const access = deriveAccessFromVibeMe(raw);
  if (access.isAdmin) {
    return access;
  }

  const bitrixCurrentUser = await loadBitrixCurrentUser(raw, authHeader);
  return deriveAccessWithBitrixCurrentUser(raw, bitrixCurrentUser);
}

export async function requireAdmin(event: H3Event): Promise<DashboardAccess> {
  const access = await getCurrentAccess(event);
  if (!access.isAuthenticated) {
    throw createError({ statusCode: 401, statusMessage: 'Bitrix24 authorization is required' });
  }
  if (!access.isAdmin) {
    throw createError({ statusCode: 403, statusMessage: 'Bitrix24 administrator access is required' });
  }

  return access;
}

export async function requireAuthenticated(event: H3Event): Promise<DashboardAccess> {
  const access = await getCurrentAccess(event);
  if (!access.isAuthenticated) {
    throw createError({ statusCode: 401, statusMessage: 'Bitrix24 authorization is required' });
  }

  return access;
}
