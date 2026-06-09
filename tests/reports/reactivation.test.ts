import { describe, expect, it } from 'vitest';
import {
  buildReactivationRows,
  getMoscowMonthKey,
  getMoscowWeekRange,
  isSuccessfulPlanningActivity,
  isSuccessfulReactivationDeal,
  rollupPreviousWeekIntoRating
} from '../../server/reports/reactivation';
import type { ReactivationEmployee, ReactivationLogPayload, VibeActivity, VibeDeal } from '../../server/reports/types';

type TestActivity = VibeActivity & { deadline?: string | null };

const checkedAt = '2026-05-20T09:00:00.000Z';
const week = getMoscowWeekRange(checkedAt);
const employees: ReactivationEmployee[] = [
  { id: 16, name: 'Алена', lastName: 'Минченко', photoUrl: 'https://example.com/16.jpg' },
  { id: 3286, name: 'Елизавета', lastName: 'Копейкина', photoUrl: null }
];

function deal(overrides: Partial<VibeDeal> = {}): VibeDeal {
  return {
    id: 100,
    title: 'Иван Иванов - Реактивация',
    categoryId: 12,
    stageId: 'C12:NEW',
    assignedById: 16,
    createdAt: '2024-05-01T10:00:00Z',
    updatedAt: '2026-05-19T10:00:00Z',
    closed: 'N',
    closedAt: '1900-01-01T00:30:00Z',
    ...overrides
  };
}

function activity(overrides: Partial<TestActivity> = {}): TestActivity {
  return {
    id: 500,
    ownerTypeId: 2,
    ownerId: 100,
    completed: false,
    deadline: '2026-05-21T10:00:00Z',
    createdAt: '2026-05-19T11:00:00Z',
    description: 'Позвонить клиенту и уточнить планы',
    ...overrides
  };
}

describe('reactivation calculation', () => {
  it('builds Moscow week and month keys from checked time', () => {
    expect(week).toMatchObject({
      key: '2026-05-18',
      monthKey: '2026-05',
      startedAt: '2026-05-18T00:00:00.000+03:00',
      finishedAt: '2026-05-24T23:59:59.999+03:00'
    });
    expect(week.startedAtMs).toBe(new Date('2026-05-18T00:00:00.000+03:00').getTime());
    expect(week.finishedAtMs).toBe(new Date('2026-05-24T23:59:59.999+03:00').getTime());
    expect(getMoscowMonthKey('2026-05-31T21:30:00.000Z')).toBe('2026-06');
  });

  it('counts one deal once even when multiple success criteria match', () => {
    const result = isSuccessfulReactivationDeal({
      deal: deal({ stageId: 'C12:WON' }),
      activities: [activity()],
      week,
      checkedAt
    });

    expect(result.success).toBe(true);
    expect(result.reasons).toEqual(['activity', 'won']);
  });

  it('counts open future described activity created inside current week', () => {
    const result = isSuccessfulPlanningActivity(activity({ completed: 'N', description: '<p>&nbsp;Позвонить&nbsp;</p>' }), week, checkedAt);

    expect(result).toBe(true);
  });

  it('rejects old, completed, overdue and empty-description activities', () => {
    for (const invalidActivity of [
      activity({ createdAt: '2026-05-17T20:59:59.999Z' }),
      activity({ completed: true }),
      activity({ completed: 'Y' }),
      activity({ deadline: '2026-05-19T10:00:00Z' }),
      activity({ description: '<p>&nbsp;</p>' })
    ]) {
      const result = isSuccessfulReactivationDeal({
        deal: deal(),
        activities: [invalidActivity],
        week,
        checkedAt
      });
      expect(result.success).toBe(false);
    }
  });

  it('rejects otherwise-valid planning activity for non-deal owner type', () => {
    const result = isSuccessfulPlanningActivity(activity({ ownerTypeId: 1 }), week, checkedAt);

    expect(result).toBe(false);
  });

  it('rejects otherwise-valid planning activity with completed CRM status', () => {
    const result = isSuccessfulPlanningActivity(activity({ completed: false, STATUS: '2' }), week, checkedAt);

    expect(result).toBe(false);
  });

  it('uses endTime fallback when activity deadline is absent', () => {
    const result = isSuccessfulPlanningActivity(activity({ deadline: null, endTime: '2026-05-21T10:00:00Z' }), week, checkedAt);

    expect(result).toBe(true);
  });

  it('counts C12:WON and C12:LOSE by updatedAt in current week', () => {
    expect(isSuccessfulReactivationDeal({ deal: deal({ stageId: 'C12:WON' }), activities: [], week, checkedAt }).success).toBe(true);
    expect(isSuccessfulReactivationDeal({ deal: deal({ stageId: 'C12:LOSE' }), activities: [], week, checkedAt }).success).toBe(true);
    expect(
      isSuccessfulReactivationDeal({
        deal: deal({ stageId: 'C12:WON', updatedAt: '2026-05-17T20:59:59.999Z' }),
        activities: [],
        week,
        checkedAt
      }).success
    ).toBe(false);
  });

  it('builds employee rows using deal assignedById, successful deal contents, weekly plan and sorting', () => {
    const sortedEmployees: ReactivationEmployee[] = [
      ...employees,
      { id: 77, name: 'Анна', lastName: 'Абрамова', photoUrl: null },
      { id: 900, name: 'Мария', lastName: 'Яковлева', photoUrl: null }
    ];
    const rows = buildReactivationRows({
      employees: sortedEmployees,
      deals: [
        deal({ id: 101, assignedById: 3286, stageId: 'C12:LOSE', title: ' Реактивация 101 ' }),
        deal({ id: 102, assignedById: 900, stageId: 'C12:WON' })
      ],
      activitiesByDeal: new Map(),
      previousMonthlyRating: { '3286': 4, '900': 1 },
      week,
      checkedAt
    });

    expect(rows.map((row) => row.employeeId)).toEqual([3286, 900, 77, 16]);

    const kopeikina = rows.find((row) => row.employeeId === 3286);
    expect(kopeikina?.weeklyCount).toBe(1);
    expect(kopeikina?.weeklyPlan).toBe(25);
    expect(kopeikina?.monthlyRating).toBe(4);
    expect(kopeikina?.successfulDeals).toEqual([
      {
        dealId: 101,
        title: 'Реактивация 101',
        stageId: 'C12:LOSE',
        responsibleId: 3286,
        reasons: ['lose'],
        updatedAt: '2026-05-19T10:00:00Z'
      }
    ]);
    expect(rows.find((row) => row.employeeId === 16)?.weeklyCount).toBe(0);
  });

  it('counts one employee row deal once when multiple success reasons match', () => {
    const rows = buildReactivationRows({
      employees,
      deals: [deal({ id: 101, stageId: 'C12:WON' })],
      activitiesByDeal: new Map([[101, [activity()]]]),
      previousMonthlyRating: {},
      week,
      checkedAt
    });

    const row = rows.find((item) => item.employeeId === 16);
    expect(row?.weeklyCount).toBe(1);
    expect(row?.successfulDeals).toHaveLength(1);
    expect(row?.successfulDeals[0].reasons).toEqual(['activity', 'won']);
  });

  it('does not include deals outside category or current week in employee rows', () => {
    const rows = buildReactivationRows({
      employees,
      deals: [
        deal({ id: 101, categoryId: 11, stageId: 'C12:LOSE' }),
        deal({ id: 102, stageId: 'C12:WON', updatedAt: '2026-05-17T20:59:59.999Z' })
      ],
      activitiesByDeal: new Map([[102, [activity()]]]),
      previousMonthlyRating: {},
      week,
      checkedAt
    });

    expect(rows.every((row) => row.weeklyCount === 0)).toBe(true);
  });

  it('does not include category-12 current-week deal assigned outside employee set', () => {
    const rows = buildReactivationRows({
      employees,
      deals: [deal({ id: 101, assignedById: 9999, stageId: 'C12:LOSE' })],
      activitiesByDeal: new Map(),
      previousMonthlyRating: {},
      week,
      checkedAt
    });

    expect(rows.every((row) => row.weeklyCount === 0)).toBe(true);
  });

  it('rolls previous completed week into monthly rating once', () => {
    const saved: ReactivationLogPayload = {
      generatedAt: '2026-05-18T01:00:00.000Z',
      weekKey: '2026-05-11',
      monthKey: '2026-05',
      weekStartedAt: '2026-05-11T00:00:00.000+03:00',
      weekFinishedAt: '2026-05-17T23:59:59.999+03:00',
      monthlyRating: { '16': 3 },
      finalizedWeeks: [],
      rows: [
        {
          employeeId: 16,
          name: 'Алена',
          lastName: 'Минченко',
          photoUrl: null,
          weeklyCount: 5,
          weeklyPlan: 25,
          monthlyRating: 3,
          successfulDeals: []
        }
      ]
    };

    const first = rollupPreviousWeekIntoRating(saved, getMoscowMonthKey(checkedAt), checkedAt);
    const second = rollupPreviousWeekIntoRating(first, getMoscowMonthKey(checkedAt), checkedAt);

    expect(first.monthlyRating['16']).toBe(8);
    expect(second.monthlyRating['16']).toBe(8);
    expect(second.finalizedWeeks).toHaveLength(1);
  });

  it('resets monthly rating when month changes', () => {
    const saved: ReactivationLogPayload = {
      generatedAt: '2026-05-31T20:00:00.000Z',
      weekKey: '2026-05-25',
      monthKey: '2026-05',
      weekStartedAt: '2026-05-25T00:00:00.000+03:00',
      weekFinishedAt: '2026-05-31T23:59:59.999+03:00',
      monthlyRating: { '16': 9 },
      finalizedWeeks: [{ weekKey: '2026-05-18', monthKey: '2026-05', finalizedAt: checkedAt, employeeResults: { '16': 9 } }],
      rows: []
    };

    const result = rollupPreviousWeekIntoRating(saved, '2026-06', '2026-06-01T08:00:00.000Z');

    expect(result.monthlyRating).toEqual({});
    expect(result.finalizedWeeks).toEqual([]);
  });
});
