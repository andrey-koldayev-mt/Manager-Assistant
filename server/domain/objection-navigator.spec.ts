import { describe, expect, it } from 'vitest';
import { buildNavigatorContext, recommendScenario } from './objection-navigator';
import { OBJECTION_SCENARIOS } from '../../shared/objection-navigator';

describe('objection navigator', () => {
  it('recommends a sent selection when the latest communication contains a link', () => {
    expect(recommendScenario([{
      id: '1',
      at: '2026-09-23T08:00:00.000Z',
      channel: 'wazzup',
      direction: 'manager',
      title: 'Подборка',
      preview: 'https://example.com/selection'
    }])).toMatchObject({ scenarioId: 'selection-sent' });
  });

  it('recommends a no-response scenario after an outgoing communication', () => {
    expect(recommendScenario([{
      id: '1',
      at: '2026-09-23T08:00:00.000Z',
      channel: 'chat',
      direction: 'manager',
      title: '',
      preview: 'Написали клиенту'
    }])).toMatchObject({ scenarioId: 'no-response' });
  });

  it('does not make a recommendation for an ambiguous context', () => {
    expect(recommendScenario([{
      id: '1',
      at: '2026-09-23T08:00:00.000Z',
      channel: 'timeline',
      direction: 'unknown',
      title: 'Изменена стадия',
      preview: ''
    }])).toBeNull();
  });

  it('does not include a first-touch scenario', () => {
    expect(OBJECTION_SCENARIOS.some((scenario) => /первое касание|визитка/i.test(scenario.title))).toBe(false);
    expect(OBJECTION_SCENARIOS).toHaveLength(11);
  });

  it('normalizes and limits communications before returning them to the client', () => {
    const context = buildNavigatorContext({
      deal: { id: 42, title: 'Тур в Италию', stageId: 'NEW', assignedById: 7 },
      contact: { name: 'Мария', phone: [{ value: '+79990000000' }] },
      activities: Array.from({ length: 12 }, (_, index) => ({
        id: index + 1,
        subject: `Сообщение ${index + 1}`,
        description: '<b>Подборка</b> https://example.com/selection',
        createdAt: `2026-09-${String(index + 1).padStart(2, '0')}T10:00:00.000Z`,
        direction: 'outgoing'
      }))
    });

    expect(context.communications).toHaveLength(10);
    expect(context.communications[0]).toMatchObject({
      direction: 'manager',
      preview: 'Подборка https://example.com/selection'
    });
    expect(context.recommendation).toMatchObject({ scenarioId: 'selection-sent' });
  });
});
