import { describe, expect, it } from 'vitest';
import { deriveAccessFromVibeMe } from '../../server/utils/access';

describe('dashboard access derivation', () => {
  it('allows all report modules for Bitrix admins', () => {
    const access = deriveAccessFromVibeMe({
      portal: 'crm-re.bitrix24.ru',
      currentUser: {
        bitrixUserId: 7,
        name: 'Admin User',
        isAdmin: true
      }
    });

    expect(access.isAuthenticated).toBe(true);
    expect(access.isAdmin).toBe(true);
    expect(access.allowedModules).toEqual([
      'manager-assistant',
      'sla-first-contact',
      'data-quality',
      'reactivation',
      'next-step-control'
    ]);
  });

  it('allows ordinary users to every module except SLA reports', () => {
    const access = deriveAccessFromVibeMe({
      portalDomain: 'crm-re.bitrix24.ru',
      user: {
        id: 11,
        name: 'Regular User',
        ADMIN: false
      }
    });

    expect(access.isAuthenticated).toBe(true);
    expect(access.isAdmin).toBe(false);
    expect(access.allowedModules).toEqual([
      'manager-assistant',
      'data-quality',
      'reactivation',
      'next-step-control'
    ]);
  });

  it('recognizes snake_case CRM admin flags from current Bitrix user', () => {
    const access = deriveAccessFromVibeMe({
      current_user: {
        ID: '19',
        NAME: 'CRM Admin',
        IS_ADMIN: 'Y'
      },
      responsible: {
        id: 11,
        isAdmin: false
      }
    });

    expect(access.isAuthenticated).toBe(true);
    expect(access.isAdmin).toBe(true);
    expect(access.user.id).toBe(19);
    expect(access.allowedModules).toContain('sla-first-contact');
  });

  it('keeps missing identity employee-safe', () => {
    const access = deriveAccessFromVibeMe(null);

    expect(access.isAuthenticated).toBe(false);
    expect(access.isAdmin).toBe(false);
    expect(access.allowedModules).toEqual(['manager-assistant']);
  });
});
