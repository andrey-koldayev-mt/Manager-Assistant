import { describe, expect, it } from 'vitest';
import { getDayBeforePreviousMoscowDayRange, getNextSlaAutoRunAt } from '../../server/reports/slaAutoControlStore';

describe('SLA auto control schedule', () => {
  it('uses the day before yesterday as the automatic SLA control range', () => {
    expect(getDayBeforePreviousMoscowDayRange(new Date('2026-06-05T21:00:00.000Z'))).toEqual({
      createdFrom: '2026-06-03T21:00:00.000Z',
      createdTo: '2026-06-04T20:59:59.999Z'
    });
  });

  it('keeps the first default run at midnight Moscow time on 2026-06-06', () => {
    expect(
      getNextSlaAutoRunAt(
        { enabled: true, startDate: '2026-06-06', time: '00:00', intervalDays: 1, lastRunAt: null },
        new Date('2026-06-05T20:00:00.000Z')
      )
    ).toBe('2026-06-05T21:00:00.000Z');
  });
});
