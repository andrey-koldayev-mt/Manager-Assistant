import { describe, expect, it } from 'vitest';
import {
  buildActivityPayload,
  buildDealContext,
  type AiRecommendation
} from './deal-analysis';

const recommendation = (activityType: AiRecommendation['activityType']): AiRecommendation => ({
  title: 'Связаться с клиентом',
  description: 'Уточнить удобное время и подтвердить следующий шаг.',
  deadline: '2026-07-27T12:00:00+03:00',
  responsibleId: 42,
  activityType,
  importantDetails: ['Клиент просил вернуться с предложением завтра.'],
  justification: ['Последняя договорённость требует ответа менеджера.'],
  sourceSignals: ['wazzup:2026-07-26']
});

describe('buildActivityPayload', () => {
  it('always builds a CRM todo activity without requiring a communication channel', () => {
    const payload = buildActivityPayload({
      dealId: 123,
      recommendation: recommendation('Todo')
    });

    expect(payload).toMatchObject({
      ownerTypeId: 2,
      ownerId: 123,
      subject: 'Связаться с клиентом',
      typeId: 3,
      completed: false
    });
    expect(payload).not.toHaveProperty('communications');
    expect(payload.startTime).toBe('2026-07-27T08:30:00.000Z');
    expect(payload.endTime).toBe('2026-07-27T09:00:00.000Z');
    expect(payload.deadline).toBe('2026-07-27T09:00:00.000Z');
  });

  it('normalizes a stale recommendation to a CRM todo activity', () => {
    const staleRecommendation = { ...recommendation('Todo'), activityType: 'Call' };
    const payload = buildActivityPayload({
      dealId: 123,
      recommendation: staleRecommendation as AiRecommendation
    });

    expect(payload.typeId).toBe(3);
  });
});

describe('buildDealContext', () => {
  it('includes Wazzup comments in the ordered AI history', () => {
    const context = buildDealContext({
      deal: { id: 123, title: 'Тур в Турцию', assignedById: 42 },
      timelines: [{
        id: 11,
        createdAt: '2026-07-26T09:00:00+03:00',
        providerId: 'wazzup',
        comment: 'Клиент попросил написать после обеда.'
      }],
      contact: { phone: [{ value: '+79990000000' }] }
    });

    expect(context.sourceStats).toMatchObject({ comments: 1, wazzupComments: 1 });
    expect(context.history).toEqual(expect.arrayContaining([
      expect.objectContaining({ channel: 'wazzup', text: 'Клиент попросил написать после обеда.' })
    ]));
    expect(context.deal.communications).toEqual([{ type: 'PHONE', value: '+79990000000' }]);
  });

  it('includes communications inherited from the linked lead in the AI history', () => {
    const context = buildDealContext({
      deal: { id: 123, leadId: 456, assignedById: 42 },
      linkedLead: { id: 456, title: 'Первичный лид' },
      activities: [{
        id: 77,
        typeId: 2,
        sourceEntityType: 'lead',
        subject: 'Звонок с клиентом',
        transcript: 'Клиент попросил подготовить варианты на октябрь.'
      }]
    });

    expect(context.deal.linkedLeadId).toBe(456);
    expect(context.sourceStats).toMatchObject({ activities: 1, leadActivities: 1 });
    expect(context.history).toEqual(expect.arrayContaining([
      expect.objectContaining({ channel: 'lead:2', text: 'Клиент попросил подготовить варианты на октябрь.' })
    ]));
  });
});
