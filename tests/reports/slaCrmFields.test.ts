import { describe, expect, it } from 'vitest';
import {
  buildSlaRowFromCrmFields,
  getMissingSlaCrmUpdateFields,
  getSlaCrmUpdateFields
} from '../../server/reports/slaCrmFields';
import type { SlaLogRow, VibeLead, VibeUser } from '../../server/reports/types';

const checkedAt = '2026-06-12T09:00:00.000Z';
const users = new Map<number, VibeUser>([[7, { id: 7, name: 'Иван', lastName: 'Петров' }]]);
const leadStatusNames = new Map([['NEW', 'Новый']]);
const rejectionReasonNames = new Map<string, string>();

function makeLead(overrides: Partial<VibeLead> = {}): VibeLead {
  return {
    id: 42,
    title: 'Тестовый лид',
    createdAt: '2026-06-12T08:00:00+03:00',
    stageId: 'NEW',
    statusId: 'NEW',
    assignedById: 7,
    ufCrm_1717431064812: null,
    ...overrides
  };
}

function makeRow(overrides: Partial<SlaLogRow> = {}): SlaLogRow {
  return {
    id: `42-${checkedAt}`,
    leadId: 42,
    leadTitle: 'Тестовый лид',
    leadStageName: 'Новый',
    rejectionReason: null,
    checkedAt,
    leadCreatedAt: '2026-06-12T08:00:00+03:00',
    firstContactAt: '2026-06-12T08:20:00+03:00',
    minutesToFirstContact: 20,
    slaOverrunMinutes: 5,
    status: 'Более 15 минут',
    responsibleId: 7,
    responsibleName: 'Иван Петров',
    violationFlag: 'Да',
    ...overrides
  };
}

describe('SLA CRM fields', () => {
  it('builds a log row from complete CRM SLA fields', () => {
    const row = buildSlaRowFromCrmFields({
      lead: makeLead({
        ufCrm_1715933850: '2026-06-12T08:20:00+03:00',
        ufCrm_1716566007: 20,
        ufCrm_1716369534832: 3008,
        ufCrm_1777686837399: 1,
        ufCrm_1777370132452: 5
      }),
      users,
      checkedAt,
      leadStatusNames,
      rejectionReasonNames
    });

    expect(row).toMatchObject({
      leadId: 42,
      leadTitle: 'Тестовый лид',
      leadStageName: 'Новый',
      firstContactAt: '2026-06-12T08:20:00+03:00',
      minutesToFirstContact: 20,
      slaOverrunMinutes: 5,
      status: 'Более 15 минут',
      responsibleId: 7,
      responsibleName: 'Иван Петров',
      violationFlag: 'Да'
    });
  });

  it('treats no-contact CRM state as complete without first contact date', () => {
    const row = buildSlaRowFromCrmFields({
      lead: makeLead({
        ufCrm_1715933850: null,
        ufCrm_1716566007: null,
        ufCrm_1716369534832: 3010,
        ufCrm_1777686837399: '1',
        ufCrm_1777370132452: '31'
      }),
      users,
      checkedAt,
      leadStatusNames,
      rejectionReasonNames
    });

    expect(row).toMatchObject({
      firstContactAt: null,
      minutesToFirstContact: null,
      slaOverrunMinutes: 31,
      status: 'Контакта не было',
      violationFlag: 'Да'
    });
  });

  it('returns only missing CRM fields for partially populated leads', () => {
    const update = getMissingSlaCrmUpdateFields(
      makeRow(),
      makeLead({
        ufCrm_1715933850: '2026-06-12T08:20:00+03:00',
        ufCrm_1716369534832: 3008
      })
    );

    expect(update).toEqual({
      leadId: 42,
      fields: {
        ufCrm_1716566007: 20,
        ufCrm_1777686837399: 1,
        ufCrm_1777370132452: 5
      }
    });
  });

  it('keeps violation CRM value as 1 or 0 while log rows display Да or Нет', () => {
    const crmRow = buildSlaRowFromCrmFields({
      lead: makeLead({
        ufCrm_1715933850: '2026-06-12T08:05:00+03:00',
        ufCrm_1716566007: '5',
        ufCrm_1716369534832: '3006',
        ufCrm_1777686837399: 0,
        ufCrm_1777370132452: 0
      }),
      users,
      checkedAt,
      leadStatusNames,
      rejectionReasonNames
    });

    expect(crmRow?.violationFlag).toBe('Нет');
    expect(getSlaCrmUpdateFields(makeRow({ violationFlag: 'Нет' })).fields.ufCrm_1777686837399).toBe(0);
    expect(getSlaCrmUpdateFields(makeRow({ violationFlag: 'Да' })).fields.ufCrm_1777686837399).toBe(1);
  });
});
