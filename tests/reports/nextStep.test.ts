import { describe, expect, it } from 'vitest';
import { buildNextStepRow, buildNextStepRows, evaluateNextStepActivity, isNextStepPlanningActivity, shouldAnalyzeNextStepDeal } from '../../server/reports/nextStep';
import type { VibeActivity, VibeDeal, VibeUser } from '../../server/reports/types';

const checkedAt = '2026-05-24T09:00:00.000Z';
const users = new Map<number, VibeUser>([[16, { id: 16, name: 'Иван', lastName: 'Петров' }]]);

function deal(overrides: Partial<VibeDeal> = {}): VibeDeal {
  return {
    id: 100,
    title: 'Запрос на тур',
    categoryId: 14,
    stageId: 'C14:EXECUTING',
    assignedById: 16,
    createdAt: '2026-05-18T08:00:00.000Z',
    updatedAt: '2026-05-24T08:00:00.000Z',
    ...overrides
  };
}

function activity(overrides: Partial<VibeActivity> = {}): VibeActivity {
  return {
    id: 200,
    ownerTypeId: 2,
    ownerId: 100,
    PROVIDER_ID: 'CRM_TODO',
    PROVIDER_TYPE_ID: 'TODO',
    completed: false,
    deadline: '2026-05-25T10:00:00.000Z',
    description: 'Завтра в 10:00 позвонить клиенту по телефону и продать тур по предложению',
    ...overrides
  };
}

describe('next step calculation', () => {
  it('analyzes only category 14 deals in target stages', () => {
    expect(shouldAnalyzeNextStepDeal(deal())).toBe(true);
    expect(shouldAnalyzeNextStepDeal(deal({ stageId: 'C14:FINAL_INVOICE' }))).toBe(true);
    expect(shouldAnalyzeNextStepDeal(deal({ stageId: 'C14:WON' }))).toBe(false);
    expect(shouldAnalyzeNextStepDeal(deal({ categoryId: 12 }))).toBe(false);
  });

  it('marks a deal with future dated quality activity as OK', () => {
    const row = buildNextStepRow({ deal: deal(), activities: [activity()], users, checkedAt });

    expect(row.status).toBe('OK');
    expect(row.violationFlag).toBe('Нет');
    expect(row.nextStepErrors).toEqual([]);
    expect(row.dealCreatedAt).toBe('2026-05-18T08:00:00.000Z');
    expect(row.stageName).toBe('Предложение получено');
  });

  it('marks one activity quality problem as WARNING', () => {
    const row = buildNextStepRow({
      deal: deal(),
      activities: [activity({ description: 'Позвонить клиенту' })],
      users,
      checkedAt
    });

    expect(row.status).toBe('WARNING');
    expect(row.violationFlag).toBe('Да');
    expect(row.nextStepErrors).toEqual(['В описании не указано что, где и когда менеджер планирует сделать для продажи']);
  });

  it('marks missing activity or multiple activity problems as ERROR', () => {
    const withoutActivity = buildNextStepRow({ deal: deal(), activities: [], users, checkedAt });
    const withBadActivity = buildNextStepRow({
      deal: deal(),
      activities: [activity({ deadline: null, description: '<p>&nbsp;</p>' })],
      users,
      checkedAt
    });

    expect(withoutActivity.status).toBe('ERROR');
    expect(withoutActivity.nextStepErrors).toEqual(['Нет запланированного дела']);
    expect(withBadActivity.status).toBe('ERROR');
    expect(withBadActivity.nextStepErrors).toHaveLength(2);
  });

  it('does not use completed activities as a planned next step', () => {
    const row = buildNextStepRow({ deal: deal(), activities: [activity({ completed: true })], users, checkedAt });

    expect(row.status).toBe('ERROR');
    expect(row.activityId).toBeNull();
  });

  it('uses only CRM todo and task activities as next step planning', () => {
    expect(isNextStepPlanningActivity(activity({ PROVIDER_ID: 'CRM_TODO', PROVIDER_TYPE_ID: 'TODO' }))).toBe(true);
    expect(isNextStepPlanningActivity(activity({ PROVIDER_ID: 'CRM_TASKS_TASK', PROVIDER_TYPE_ID: 'TASKS_TASK' }))).toBe(true);
    expect(isNextStepPlanningActivity(activity({ PROVIDER_ID: 'CRM_EMAIL', PROVIDER_TYPE_ID: 'EMAIL_COMPRESSED' }))).toBe(false);
    expect(isNextStepPlanningActivity(activity({ PROVIDER_ID: 'VOXIMPLANT_CALL', PROVIDER_TYPE_ID: 'CALL' }))).toBe(false);
    expect(isNextStepPlanningActivity(activity({ PROVIDER_ID: 'IMOPENLINES_SESSION', PROVIDER_TYPE_ID: '6' }))).toBe(false);
  });

  it('does not count non-planning timeline actions even when they look valid', () => {
    const row = buildNextStepRow({
      deal: deal(),
      activities: [activity({ PROVIDER_ID: 'CRM_EMAIL', PROVIDER_TYPE_ID: 'EMAIL_COMPRESSED' })],
      users,
      checkedAt
    });

    expect(row.status).toBe('ERROR');
    expect(row.activityId).toBeNull();
  });

  it('chooses the best open activity when a deal has several', () => {
    const row = buildNextStepRow({
      deal: deal(),
      activities: [
        activity({ id: 201, deadline: null, description: '' }),
        activity({ id: 202, description: 'Завтра в 12:00 написать клиенту в WhatsApp и согласовать продажу тура' })
      ],
      users,
      checkedAt
    });

    expect(row.status).toBe('OK');
    expect(row.activityId).toBe(202);
  });

  it('builds filtered rows sorted by risk first', () => {
    const rows = buildNextStepRows({
      deals: [deal({ id: 1 }), deal({ id: 2, stageId: 'C14:WON' }), deal({ id: 3, stageId: 'C14:FINAL_INVOICE' })],
      activitiesByDeal: new Map([[1, [activity()]]]),
      users,
      checkedAt
    });

    expect(rows.map((row) => row.dealId)).toEqual([3, 1]);
    expect(rows[0].status).toBe('ERROR');
    expect(rows[1].status).toBe('OK');
  });

  it('accepts Bitrix date format in activity deadline', () => {
    expect(evaluateNextStepActivity(activity({ deadline: '25.05.2026 10:00:00' }), checkedAt)).toEqual([]);
  });
});
