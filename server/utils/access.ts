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
    root?.isAdministrator,
    root?.IS_ADMIN,
    permissions?.isAdmin,
    permissions?.is_admin,
    permissions?.admin,
    rights?.isAdmin,
    rights?.is_admin,
    rights?.admin,
    currentUser?.isAdmin,
    currentUser?.is_admin,
    currentUser?.admin,
    currentUser?.ADMIN,
    currentUser?.isAdministrator,
    currentUser?.IS_ADMIN,
    snakeCurrentUser?.isAdmin,
    snakeCurrentUser?.is_admin,
    snakeCurrentUser?.admin,
    snakeCurrentUser?.ADMIN,
    snakeCurrentUser?.isAdministrator,
    snakeCurrentUser?.IS_ADMIN,
    user?.isAdmin,
    user?.is_admin,
    user?.admin,
    user?.ADMIN,
    user?.isAdministrator,
    user?.IS_ADMIN
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

  return deriveAccessFromVibeMe(payload?.data ?? payload);
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
