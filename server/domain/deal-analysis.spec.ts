import { describe, expect, it } from 'vitest';
import {
  buildActivityPayload,
  buildDealContext,
  type AiRecommendation,
  type ContactCommunication
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
  const communications: ContactCommunication[] = [
    { type: 'PHONE', value: '+79990000000' },
    { type: 'EMAIL', value: 'client@example.com' }
  ];

  it.each([
    ['Call', 2, 'PHONE'],
    ['Meeting', 1, 'PHONE'],
    ['Todo', 3, 'PHONE'],
    ['Email', 4, 'EMAIL']
  ] as const)('maps %s to the VibeCode activity contract', (activityType, typeId, communicationType) => {
    const payload = buildActivityPayload({
      dealId: 123,
      contactId: 456,
      recommendation: recommendation(activityType),
      communications
    });

    expect(payload).toMatchObject({
      ownerTypeId: 2,
      ownerId: 123,
      subject: 'Связаться с клиентом',
      typeId,
      completed: false,
      communications: [{ VALUE: communicationType === 'PHONE' ? '+79990000000' : 'client@example.com', ENTITY_TYPE_ID: 3, ENTITY_ID: 456 }]
    });
    expect(payload.startTime).toBe('2026-07-27T08:30:00.000Z');
    expect(payload.endTime).toBe('2026-07-27T09:00:00.000Z');
    expect(payload.deadline).toBe('2026-07-27T09:00:00.000Z');
  });

  it('requires a matching communication channel for email', () => {
    expect(() => buildActivityPayload({
      dealId: 123,
      contactId: 456,
      recommendation: recommendation('Email'),
      communications: [{ type: 'PHONE', value: '+79990000000' }]
    })).toThrow('у контакта не найден email');
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
});
