import { describe, expect, it } from 'vitest';
import {
  buildSlaRow,
  getLeadContactIds,
  getTransferredToMptAt,
  hasNeedsIdentificationStage,
  isLeadMarkedAsMissedCall,
  isReturnOrRepeatLead,
  isTransferredToMptLead,
  needsMissedCallStageHistory,
  shouldExcludeLeadBySource,
  shouldExcludeRejectedLeadByReason,
  shouldAnalyzeLead
} from '../../server/reports/sla';
import { getSlaCrmUpdateFields } from '../../server/reports/slaCrmFields';
import { isLeadAssignedToActiveUser } from '../../server/reports/slaRunner';
import type { VibeActivity, VibeLead, VibeTimelineComment, VibeUser } from '../../server/reports/types';

const checkedAt = '2026-05-12T12:00:00.000Z';
const users = new Map<number, VibeUser>([
  [7, { id: 7, name: 'Анна', lastName: 'Петрова' }],
  [8, { id: 8, name: 'Елизавета', lastName: 'Копейкина' }],
  [9, { id: 9, name: 'Отдел', lastName: 'ИТ' }],
  [11, { id: 11, name: 'Евгения', lastName: 'Вернер' }]
]);

function lead(overrides: Partial<VibeLead> = {}): VibeLead {
  return {
    id: 100,
    title: 'Тестовый лид',
    createdTime: '2026-05-12T09:00:00.000Z',
    stageId: 'NEW',
    stageSemanticId: 'P',
    assignedById: 7,
    sourceId: 'WEBFORM',
    ufCrm_1717431064812: 'N',
    ...overrides
  };
}

function outgoingActivity(minutesAfterCreate: number, overrides: Partial<VibeActivity> = {}): VibeActivity {
  return {
    id: 500,
    typeId: 2,
    direction: 2,
    completed: true,
    STATUS: '2',
    startTime: new Date(new Date('2026-05-12T09:00:00.000Z').getTime() + minutesAfterCreate * 60000).toISOString(),
    PROVIDER_ID: 'VOXIMPLANT_CALL',
    PROVIDER_TYPE_ID: 'CALL',
    ...overrides
  };
}

function outgoingActivityAt(startTime: string, overrides: Partial<VibeActivity> = {}): VibeActivity {
  return {
    id: 501,
    typeId: 2,
    direction: 2,
    completed: true,
    STATUS: '2',
    startTime,
    PROVIDER_ID: 'VOXIMPLANT_CALL',
    PROVIDER_TYPE_ID: 'CALL',
    ...overrides
  };
}

function wazzupComment(minutesAfterCreate: number, sender = 'Анна Петрова', text = 'Добрый день', overrides: Partial<VibeTimelineComment> = {}): VibeTimelineComment {
  return {
    id: 700,
    entityId: 100,
    entityType: 'lead',
    createdAt: new Date(new Date('2026-05-12T09:00:00.000Z').getTime() + minutesAfterCreate * 60000).toISOString(),
    comment: `[img]https://static.wazzup24.com/images/bitrix/whatsapp.png[/img]&nbsp;  ${sender}:\n${text}`,
    authorId: 6,
    ...overrides
  };
}

function openLineActivity(overrides: Partial<VibeActivity> = {}): VibeActivity {
  return {
    id: 800,
    typeId: 6,
    direction: 1,
    completed: true,
    STATUS: '3',
    startTime: '2026-05-12T09:00:00.000Z',
    createdAt: '2026-05-12T09:00:00.000Z',
    PROVIDER_ID: 'IMOPENLINES_SESSION',
    PROVIDER_TYPE_ID: '6',
    ...overrides
  };
}

describe('SLA calculation', () => {
  it('marks outgoing first contact within 15 minutes as successful', () => {
    const row = buildSlaRow({ lead: lead(), activities: [outgoingActivity(14)], users, checkedAt });

    expect(row.status).toBe('В пределах 15 минут');
    expect(row.minutesToFirstContact).toBe(14);
    expect(row.slaOverrunMinutes).toBe(0);
    expect(row.violationFlag).toBe('Нет');
  });

  it('counts an outgoing call attempt within 15 minutes even when the call was not connected', () => {
    const row = buildSlaRow({
      lead: lead(),
      activities: [outgoingActivity(10, { completed: true, STATUS: '5', RESULT_STREAM: '2' })],
      users,
      checkedAt
    });

    expect(row.firstContactAt).toBe('2026-05-12T09:10:00.000Z');
    expect(row.minutesToFirstContact).toBe(10);
    expect(row.slaOverrunMinutes).toBe(0);
    expect(row.violationFlag).toBe('Нет');
  });

  it('counts the first outgoing online chat message as first contact for open line leads', () => {
    const row = buildSlaRow({
      lead: lead({
        sourceId: '6|TELEGRAM_UNLIM',
        title: 'Maksim Egorov - Telegram',
        ufCrm_1716370242690: '2026-05-12T09:10:00.000Z'
      }),
      activities: [openLineActivity()],
      users,
      checkedAt
    });

    expect(row.status).toBe('В пределах 15 минут');
    expect(row.firstContactAt).toBe('2026-05-12T09:10:00.000Z');
    expect(row.minutesToFirstContact).toBe(10);
    expect(row.violationFlag).toBe('Нет');
  });

  it('adds printable lead stage and rejection reason to SLA log rows', () => {
    const row = buildSlaRow({
      lead: lead({ statusId: 'JUNK', stageId: 'JUNK', ufCrm_1638180783: '898' }),
      activities: [outgoingActivity(14)],
      users,
      checkedAt,
      leadStatusNames: new Map([['JUNK', 'Забракован']]),
      rejectionReasonNames: new Map([['898', 'Не обработан вовремя']])
    });

    expect(row.leadStageName).toBe('Забракован');
    expect(row.rejectionReason).toBe('Не обработан вовремя');
  });

  it('excludes JUNK leads rejected because of agencies from SLA runner selection', () => {
    const rejectionReasonNames = new Map([
      ['910', 'Агентство'],
      ['1146', 'Клиент агентства'],
      ['898', 'Не обработан вовремя']
    ]);

    expect(shouldExcludeRejectedLeadByReason(lead({ statusId: 'JUNK', ufCrm_1638180783: '910' }), rejectionReasonNames)).toBe(true);
    expect(shouldExcludeRejectedLeadByReason(lead({ statusId: 'JUNK', ufCrm_1638180783: '1146' }), rejectionReasonNames)).toBe(true);
    expect(shouldExcludeRejectedLeadByReason(lead({ statusId: 'JUNK', ufCrm_1638180783: '898' }), rejectionReasonNames)).toBe(false);
    expect(shouldExcludeRejectedLeadByReason(lead({ statusId: 'NEW', ufCrm_1638180783: '910' }), rejectionReasonNames)).toBe(false);
  });

  it('excludes incoming-call JUNK leads rejected because of sync errors from SLA runner selection', () => {
    const rejectionReasonNames = new Map([['898', 'Не обработан вовремя']]);

    expect(
      shouldExcludeRejectedLeadByReason(
        lead({
          statusId: 'JUNK',
          stageId: 'JUNK',
          title: '8 (999) 111-22-33 - Входящий звонок',
          ufCrm_1638180783: '1140'
        }),
        rejectionReasonNames
      )
    ).toBe(true);
    expect(
      shouldExcludeRejectedLeadByReason(
        lead({
          statusId: 'JUNK',
          stageId: 'JUNK',
          title: 'Заявка с сайта',
          ufCrm_1638180783: '1140'
        }),
        rejectionReasonNames
      )
    ).toBe(false);
    expect(
      shouldExcludeRejectedLeadByReason(
        lead({
          statusId: 'NEW',
          stageId: 'NEW',
          title: '8 (999) 111-22-33 - Входящий звонок',
          ufCrm_1638180783: '1140'
        }),
        rejectionReasonNames
      )
    ).toBe(false);
  });

  it('excludes leads from Russian Express source from SLA runner selection', () => {
    const sourceNames = new Map([
      ['WEBFORM', 'CRM-форма'],
      ['REXPRESS', 'Русский Экспресс']
    ]);

    expect(shouldExcludeLeadBySource(lead({ sourceId: 'REXPRESS' }), sourceNames)).toBe(true);
    expect(shouldExcludeLeadBySource(lead({ sourceId: 'Русский Экспресс' }), new Map())).toBe(true);
    expect(shouldExcludeLeadBySource(lead({ sourceId: 'WEBFORM' }), sourceNames)).toBe(false);
  });

  it('does not count selected rejection reasons as SLA errors', () => {
    const row = buildSlaRow({
      lead: lead({ statusId: 'JUNK', stageId: 'JUNK', ufCrm_1638180783: '1200' }),
      activities: [],
      users,
      checkedAt,
      rejectionReasonNames: new Map([['1200', 'Дубликат']])
    });

    expect(row.status).toBe('Контакта не было');
    expect(row.violationFlag).toBe('Нет');
  });

  it('keeps rejection reason empty for non-JUNK leads', () => {
    const row = buildSlaRow({
      lead: lead({ statusId: 'NEW', stageId: 'NEW', ufCrm_1638180783: '898' }),
      activities: [outgoingActivity(14)],
      users,
      checkedAt,
      leadStatusNames: new Map([['NEW', 'Не обработан']]),
      rejectionReasonNames: new Map([['898', 'Не обработан вовремя']])
    });

    expect(row.leadStageName).toBe('Не обработан');
    expect(row.rejectionReason).toBeNull();
  });

  it('marks outgoing first contact after 15 minutes as over SLA', () => {
    const row = buildSlaRow({ lead: lead(), activities: [outgoingActivity(16)], users, checkedAt });

    expect(row.status).toBe('Более 15 минут');
    expect(row.minutesToFirstContact).toBe(16);
    expect(row.slaOverrunMinutes).toBe(1);
    expect(row.violationFlag).toBe('Да');
  });

  it('marks lead with no qualifying contact as no contact', () => {
    const row = buildSlaRow({ lead: lead(), activities: [], users, checkedAt });

    expect(row.status).toBe('Контакта не было');
    expect(row.firstContactAt).toBeNull();
    expect(row.violationFlag).toBe('Да');
  });

  it('detects missed call leads from UF_CRM_1724510334936', () => {
    expect(isLeadMarkedAsMissedCall(lead({ ufCrm_1724510334936: 1 }))).toBe(true);
    expect(isLeadMarkedAsMissedCall(lead({ ufCrm_1724510334936: '1' }))).toBe(true);
    expect(isLeadMarkedAsMissedCall(lead({ ufCrm_1724510334936: 0 }))).toBe(false);
  });

  it('does not use incoming call fallback when UF_CRM_1724510334936 marks the lead as missed', () => {
    const row = buildSlaRow({
      lead: lead({
        sourceId: 'CALL',
        title: '8 (495) 000-00-00 - Входящий звонок',
        sourceDescription: 'Поступил входящий звонок',
        ufCrm_1724510334936: 1
      }),
      activities: [],
      users,
      checkedAt
    });

    expect(row.status).toBe('Контакта не было');
    expect(row.violationFlag).toBe('Да');
  });

  it('maps SLA rows to CRM first-contact fields', () => {
    const row = buildSlaRow({ lead: lead(), activities: [outgoingActivity(16)], users, checkedAt });

    expect(getSlaCrmUpdateFields(row)).toEqual({
      leadId: 100,
      fields: {
        ufCrm_1715933850: '2026-05-12T09:16:00.000Z',
        ufCrm_1716566007: 16,
        ufCrm_1716369534832: 3008,
        ufCrm_1777686837399: 1,
        ufCrm_1777370132452: 1
      }
    });
  });

  it('does not count off-hours wait before the next workday contact', () => {
    const row = buildSlaRow({
      lead: lead({ createdTime: '2026-05-12T20:30:00+03:00' }),
      activities: [outgoingActivityAt('2026-05-13T10:10:00+03:00')],
      users,
      checkedAt: '2026-05-13T10:20:00+03:00'
    });

    expect(row.status).toBe('В пределах 15 минут');
    expect(row.minutesToFirstContact).toBe(10);
    expect(row.slaOverrunMinutes).toBe(0);
    expect(row.violationFlag).toBe('Нет');
  });

  it('starts weekday SLA at 10:00 for regular employees', () => {
    const row = buildSlaRow({
      lead: lead({ createdTime: '2026-05-12T08:30:00+03:00', assignedById: 7 }),
      activities: [outgoingActivityAt('2026-05-12T10:10:00+03:00')],
      users,
      checkedAt
    });

    expect(row.status).toBe('В пределах 15 минут');
    expect(row.minutesToFirstContact).toBe(10);
    expect(row.violationFlag).toBe('Нет');
  });

  it('counts the 08:00-10:00 weekday window for Elizabeth Kopeikina when she is not absent', () => {
    const row = buildSlaRow({
      lead: lead({ createdTime: '2026-05-12T08:30:00+03:00', assignedById: 8 }),
      activities: [outgoingActivityAt('2026-05-12T08:50:00+03:00')],
      users,
      checkedAt
    });

    expect(row.status).toBe('Более 15 минут');
    expect(row.minutesToFirstContact).toBe(20);
    expect(row.slaOverrunMinutes).toBe(5);
    expect(row.violationFlag).toBe('Да');
  });

  it('skips Elizabeth Kopeikina early weekday window when she has an absence record', () => {
    const row = buildSlaRow({
      lead: lead({ createdTime: '2026-05-12T08:30:00+03:00', assignedById: 8 }),
      activities: [outgoingActivityAt('2026-05-12T10:10:00+03:00')],
      users,
      checkedAt,
      absenceIntervals: [
        {
          userId: 8,
          start: '2026-05-12T08:00:00+03:00',
          end: '2026-05-12T10:00:00+03:00'
        }
      ]
    });

    expect(row.status).toBe('В пределах 15 минут');
    expect(row.minutesToFirstContact).toBe(10);
    expect(row.violationFlag).toBe('Нет');
  });

  it('counts the weekday 08:00 Moscow early window for Evgeniya Verner', () => {
    const row = buildSlaRow({
      lead: lead({ id: 194870, createdTime: '2026-04-12T17:45:32+03:00', assignedById: 11 }),
      activities: [],
      timelineComments: [
        {
          id: 9538404,
          entityId: 194870,
          entityType: 'lead',
          createdAt: '2026-04-13T05:16:30Z',
          comment: '[img]wazzup24.com[/img]&nbsp;  Елизавета Копейкина:\nДобрый день.',
          authorId: 6
        }
      ],
      users,
      checkedAt: '2026-04-13T06:00:00Z'
    });

    expect(row.firstContactAt).toBe('2026-04-13T05:16:30Z');
    expect(row.status).toBe('Более 15 минут');
    expect(row.minutesToFirstContact).toBe(16);
    expect(row.slaOverrunMinutes).toBe(1);
    expect(row.violationFlag).toBe('Да');
  });

  it('counts Saturday work time from 11:00 to 19:00', () => {
    const row = buildSlaRow({
      lead: lead({ createdTime: '2026-05-16T11:05:00+03:00' }),
      activities: [outgoingActivityAt('2026-05-16T11:19:00+03:00')],
      users,
      checkedAt
    });

    expect(row.status).toBe('В пределах 15 минут');
    expect(row.minutesToFirstContact).toBe(14);
    expect(row.violationFlag).toBe('Нет');
  });

  it('does not flag a no-contact lead before 15 working minutes have elapsed', () => {
    const row = buildSlaRow({
      lead: lead({ createdTime: '2026-05-12T20:30:00+03:00' }),
      activities: [],
      users,
      checkedAt: '2026-05-13T10:10:00+03:00'
    });

    expect(row.status).toBe('Контакта не было');
    expect(row.slaOverrunMinutes).toBe(0);
    expect(row.violationFlag).toBe('Нет');
  });

  it('uses incoming call status for call-source leads with successful incoming call', () => {
    const row = buildSlaRow({
      lead: lead({ sourceId: 'CALL' }),
      activities: [outgoingActivity(4, { direction: 1, subject: 'Входящий звонок' })],
      users,
      checkedAt
    });

    expect(row.status).toBe('Входящий звонок');
    expect(row.violationFlag).toBe('Нет');
  });

  it('uses incoming call status for non-missed incoming calls with non-success call status', () => {
    const row = buildSlaRow({
      lead: lead({ sourceId: 'CALL' }),
      activities: [
        outgoingActivity(4, {
          direction: 1,
          subject: 'Incoming call',
          STATUS: '3',
          RESULT_STREAM: '1',
          SETTINGS: {}
        })
      ],
      users,
      checkedAt,
      hadMissedCallStage: false
    });

    expect(row.status).toBe('Входящий звонок');
    expect(row.violationFlag).toBe('Нет');
  });

  it('counts description-only incoming calls with result stream success as incoming contact', () => {
    const row = buildSlaRow({
      lead: lead({
        sourceId: 'CALL',
        title: '8 (916) 524-80-90 - Входящий звонок',
        createdTime: '2026-04-07T16:40:24+03:00'
      }),
      activities: [
        outgoingActivityAt('2026-04-07T16:40:58.000Z', {
          direction: 1,
          completed: false,
          status: 1,
          subject: 'Входящий от 8 (916) 524-80-90',
          resultStream: 1,
          settings: { IS_DESCRIPTION_ONLY: true }
        })
      ],
      users,
      checkedAt,
      hadMissedCallStage: false,
      hadNeedsIdentificationStage: false
    });

    expect(row.status).toBe('Входящий звонок');
    expect(row.firstContactAt).toBe('2026-04-07T16:40:58.000+03:00');
    expect(row.minutesToFirstContact).toBe(0);
    expect(row.violationFlag).toBe('Нет');
  });

  it('normalizes incoming call timestamps that are Moscow local time incorrectly tagged as UTC', () => {
    const row = buildSlaRow({
      lead: lead({ sourceId: 'CALL', createdTime: '2026-05-12T10:57:45+03:00' }),
      activities: [
        outgoingActivityAt('2026-05-12T10:57:45.000Z', {
          direction: 1,
          subject: 'Incoming call',
          STATUS: '3',
          RESULT_STREAM: '1',
          SETTINGS: {}
        })
      ],
      users,
      checkedAt
    });

    expect(row.status).toBe('Входящий звонок');
    expect(row.firstContactAt).toBe('2026-05-12T10:57:45.000+03:00');
    expect(row.minutesToFirstContact).toBe(0);
    expect(row.violationFlag).toBe('Нет');
  });

  it('keeps real UTC incoming call timestamps when they match the lead instant', () => {
    const row = buildSlaRow({
      lead: lead({ sourceId: 'CALL', createdTime: '2026-05-12T10:14:38+03:00' }),
      activities: [
        outgoingActivityAt('2026-05-12T07:14:38.000Z', {
          direction: 1,
          subject: 'Incoming call',
          STATUS: '3',
          RESULT_STREAM: '1',
          SETTINGS: {}
        })
      ],
      users,
      checkedAt
    });

    expect(row.status).toBe('Входящий звонок');
    expect(row.firstContactAt).toBe('2026-05-12T07:14:38.000Z');
    expect(row.minutesToFirstContact).toBe(0);
  });

  it('checks first outgoing contact for call-source leads that had missed call stage', () => {
    const row = buildSlaRow({
      lead: lead({ sourceId: 'CALL' }),
      activities: [outgoingActivity(1, { direction: 1, subject: 'Incoming call', RESULT_STREAM: '0' }), outgoingActivity(18)],
      users,
      checkedAt,
      hadMissedCallStage: true
    });

    expect(row.status).toBe('\u0411\u043e\u043b\u0435\u0435 15 \u043c\u0438\u043d\u0443\u0442');
    expect(row.minutesToFirstContact).toBe(18);
  });

  it('does not count incoming call as contact for missed call leads without outgoing contact', () => {
    const row = buildSlaRow({
      lead: lead({ sourceId: 'CALL' }),
      activities: [outgoingActivity(1, { direction: 1, subject: 'Incoming call' })],
      users,
      checkedAt,
      hadMissedCallStage: true
    });

    expect(row.status).toBe('\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0430 \u043d\u0435 \u0431\u044b\u043b\u043e');
    expect(row.firstContactAt).toBeNull();
  });

  it('does not count incoming calls before lead creation', () => {
    const row = buildSlaRow({
      lead: lead({ sourceId: 'CALL' }),
      activities: [
        outgoingActivity(-25, {
          direction: 1,
          subject: 'Incoming call before lead creation'
        })
      ],
      users,
      checkedAt
    });

    expect(row.status).toBe('\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0430 \u043d\u0435 \u0431\u044b\u043b\u043e');
    expect(row.firstContactAt).toBeNull();
  });

  it('counts the accepted incoming call that created the lead shortly after the call ended', () => {
    const row = buildSlaRow({
      lead: lead({ id: 196324, sourceId: 'CALL', createdTime: '2026-04-30T17:56:55+03:00' }),
      activities: [
        {
          id: 751600,
          ownerId: 196324,
          ownerTypeId: 1,
          typeId: 2,
          providerId: 'VOXIMPLANT_CALL',
          providerTypeId: 'CALL',
          subject: 'Входящий от 8 (495) 846-96-36',
          createdAt: '2026-04-30T14:54:10.000Z',
          updatedAt: '2026-04-30T14:54:39.000Z',
          startTime: '2026-04-30T14:54:10.000Z',
          endTime: '2026-04-30T14:54:18.000Z',
          completed: true,
          status: 3,
          direction: 1,
          settings: { IS_DESCRIPTION_ONLY: true },
          resultStream: 1
        }
      ],
      users,
      checkedAt,
      hadMissedCallStage: false
    });

    expect(row.status).toBe('Входящий звонок');
    expect(row.firstContactAt).toBe('2026-04-30T14:54:10.000Z');
    expect(row.minutesToFirstContact).toBe(0);
    expect(row.violationFlag).toBe('Нет');
  });

  it('does not count missed incoming calls as successful incoming contacts', () => {
    const row = buildSlaRow({
      lead: lead({ sourceId: 'CALL' }),
      activities: [
        outgoingActivity(1, {
          direction: 1,
          subject: 'Missed incoming call',
          STATUS: '3',
          RESULT_STREAM: '4',
          SETTINGS: { MISSED_CALL: true }
        })
      ],
      users,
      checkedAt
    });

    expect(row.status).toBe('\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0430 \u043d\u0435 \u0431\u044b\u043b\u043e');
    expect(row.firstContactAt).toBeNull();
  });

  it('does not count outgoing contacts before lead creation', () => {
    const row = buildSlaRow({
      lead: lead(),
      activities: [outgoingActivity(-3), outgoingActivity(20)],
      users,
      checkedAt
    });

    expect(row.status).toBe('\u0411\u043e\u043b\u0435\u0435 15 \u043c\u0438\u043d\u0443\u0442');
    expect(row.minutesToFirstContact).toBe(20);
  });

  it('does not treat unfinished outgoing activity as first contact', () => {
    const row = buildSlaRow({
      lead: lead(),
      activities: [outgoingActivity(3, { completed: false, STATUS: '1' })],
      users,
      checkedAt
    });

    expect(row.status).toBe('Контакта не было');
    expect(row.violationFlag).toBe('Да');
  });

  it('ignores automatic registration email as first contact', () => {
    const row = buildSlaRow({
      lead: lead(),
      activities: [
        outgoingActivity(1, {
          typeId: 4,
          PROVIDER_ID: 'CRM_EMAIL',
          PROVIDER_TYPE_ID: 'EMAIL',
          subject: 'Обращение зарегистрировано'
        }),
        outgoingActivity(18)
      ],
      users,
      checkedAt
    });

    expect(row.status).toBe('\u0411\u043e\u043b\u0435\u0435 15 \u043c\u0438\u043d\u0443\u0442');
    expect(row.minutesToFirstContact).toBe(18);
  });

  it('uses the original incoming email time and quoted manager reply for email-thread SLA', () => {
    const row = buildSlaRow({
      lead: lead({
        id: 194630,
        sourceId: 'EMAIL',
        createdTime: '2026-04-08T13:41:48+03:00',
        assignedById: 7
      }),
      activities: [
        {
          id: 741562,
          typeId: 4,
          direction: 1,
          completed: true,
          status: 2,
          startTime: '2026-04-08T10:32:12.000Z',
          providerId: 'CRM_EMAIL',
          providerTypeId: 'EMAIL_COMPRESSED',
          subject: 'Вопрос по туру',
          description: 'Добрый день! Мы приобрели у Вас тур на Бали.'
        },
        {
          id: 741632,
          typeId: 4,
          direction: 1,
          completed: true,
          status: 3,
          startTime: '2026-04-08T11:17:32.000Z',
          providerId: 'CRM_EMAIL',
          providerTypeId: 'EMAIL_COMPRESSED',
          subject: 'Re: RE: Вопрос по туру',
          description:
            '<div>среда, 08 апреля 2026г., 13:59 +03:00 от Русский Экспресс <a href="mailto:client@r-express.ru">client@r-express.ru</a>:</div>'
        },
        {
          id: 742004,
          typeId: 4,
          direction: 2,
          completed: true,
          status: 2,
          startTime: '2026-04-09T05:05:28.000Z',
          providerId: 'CRM_EMAIL',
          providerTypeId: 'EMAIL_COMPRESSED',
          subject: 'Re: RE: Вопрос по туру'
        }
      ],
      users,
      checkedAt
    });

    expect(row.leadCreatedAt).toBe('2026-04-08T10:32:12.000Z');
    expect(row.firstContactAt).toBe('2026-04-08T13:59:00+03:00');
    expect(row.status).toBe('Более 15 минут');
    expect(row.minutesToFirstContact).toBe(26);
    expect(row.violationFlag).toBe('Да');
  });

  it('uses English Outlook Sent header from Russian Express email thread as manager reply time', () => {
    const row = buildSlaRow({
      lead: lead({
        id: 195738,
        sourceId: 'EMAIL',
        createdTime: '2026-04-22T16:31:29+03:00',
        assignedById: 7
      }),
      activities: [
        {
          id: 747786,
          typeId: 4,
          direction: 1,
          completed: true,
          status: 3,
          startTime: '2026-04-22T13:25:50.000Z',
          providerId: 'CRM_EMAIL',
          providerTypeId: 'EMAIL_COMPRESSED',
          subject: 'Организация групповой поездки',
          description: `
            <p><b>From:</b> Русский Экспресс &lt;client@r-express.ru&gt;<br>
            <b>Sent:</b> Wednesday, April 22, 2026 1:43 PM<br>
            <b>To:</b> Александра Евтропова &lt;evtropova.hr@outlook.com&gt;<br>
            <b>Subject:</b> RE: Организация групповой поездки</p>
            <p>Александра, добрый день!</p>
            <hr>
            <p><b>From:</b> Александра Евтропова &lt;evtropova.hr@outlook.com&gt;<br>
            <b>Sent:</b> Wednesday, April 22, 2026 4:26 PM<br>
            <b>To:</b> Русский Экспресс &lt;client@r-express.ru&gt;</p>
          `
        }
      ],
      users,
      checkedAt
    });

    expect(row.leadCreatedAt).toBe('2026-04-22T13:25:50.000Z');
    expect(row.firstContactAt).toBe('2026-04-22T13:43:00.000Z');
    expect(row.minutesToFirstContact).toBe(17);
    expect(row.status).toBe('Более 15 минут');
    expect(row.violationFlag).toBe('Да');
  });

  it('counts a processed incoming call even when an earlier missed-call stage exists', () => {
    const row = buildSlaRow({
      lead: lead({ sourceId: 'CALL', createdTime: '2026-05-13T13:01:07+03:00' }),
      activities: [
        outgoingActivityAt('2026-05-13T10:01:05.000Z', {
          direction: 1,
          STATUS: '3',
          RESULT_STREAM: '1',
          subject: 'Входящий от 8 (903) 257-43-30',
          endTime: '2026-05-13T10:05:03.000Z'
        })
      ],
      users,
      checkedAt,
      hadMissedCallStage: true
    });

    expect(row.status).toBe('Входящий звонок');
    expect(row.firstContactAt).toBe('2026-05-13T10:05:03.000Z');
    expect(row.minutesToFirstContact).toBe(3);
    expect(row.violationFlag).toBe('Нет');
  });

  it('counts connected incoming calls with neutral result stream even when missed-call stage history exists', () => {
    const row = buildSlaRow({
      lead: lead({ sourceId: 'CALL', createdTime: '2026-05-13T13:01:07+03:00' }),
      activities: [
        outgoingActivityAt('2026-05-13T10:01:05.000Z', {
          direction: 1,
          STATUS: '3',
          RESULT_STREAM: '0',
          subject: 'Входящий от 8 (903) 257-43-30',
          endTime: '2026-05-13T10:05:03.000Z',
          SETTINGS: {}
        })
      ],
      users,
      checkedAt,
      hadMissedCallStage: true
    });

    expect(row.status).toBe('Входящий звонок');
    expect(row.firstContactAt).toBe('2026-05-13T10:05:03.000Z');
    expect(row.minutesToFirstContact).toBe(3);
    expect(row.violationFlag).toBe('Нет');
  });

  it('counts the first manual Wazzup messenger reply as first contact', () => {
    const row = buildSlaRow({
      lead: lead(),
      activities: [],
      timelineComments: [wazzupComment(8, 'Анна Петрова', 'Добрый день, уже смотрю заявку')],
      users,
      checkedAt
    });

    expect(row.status).toBe('В пределах 15 минут');
    expect(row.minutesToFirstContact).toBe(8);
    expect(row.violationFlag).toBe('Нет');
  });

  it('uses transfer to MPT within 15 minutes as successful first-contact SLA for status 12 leads', () => {
    const row = buildSlaRow({
      lead: lead({ statusId: '12', stageId: '12', createdTime: '2026-05-12T10:00:00+03:00' }),
      activities: [],
      users,
      checkedAt,
      transferredToMptAt: '2026-05-12T10:14:00+03:00'
    });

    expect(row.firstContactAt).toBe('2026-05-12T10:14:00+03:00');
    expect(row.minutesToFirstContact).toBe(14);
    expect(row.slaOverrunMinutes).toBe(0);
    expect(row.status).toBe('В пределах 15 минут');
    expect(row.violationFlag).toBe('Нет');
  });

  it('marks transfer to MPT after 15 minutes as SLA violation for status 12 leads', () => {
    const row = buildSlaRow({
      lead: lead({ statusId: '12', stageId: '12', createdTime: '2026-05-12T10:00:00+03:00' }),
      activities: [outgoingActivity(3)],
      users,
      checkedAt,
      transferredToMptAt: '2026-05-12T10:16:00+03:00'
    });

    expect(row.firstContactAt).toBe('2026-05-12T10:16:00+03:00');
    expect(row.minutesToFirstContact).toBe(16);
    expect(row.slaOverrunMinutes).toBe(1);
    expect(row.status).toBe('Более 15 минут');
    expect(row.violationFlag).toBe('Да');
  });

  it('keeps Wazzup timeline UTC timestamps and calculates SLA in Moscow time', () => {
    const row = buildSlaRow({
      lead: lead({
        id: 195299,
        createdTime: '2026-04-19T13:07:54+03:00',
        assignedById: 7
      }),
      activities: [],
      timelineComments: [
        wazzupComment(0, 'Алена Минченко', 'Дина, добрый день. Благодарю за обращение!', {
          createdAt: '2026-04-20T07:21:52Z'
        })
      ],
      users: new Map([...users, [10, { id: 10, name: 'Алена', lastName: 'Минченко' }]]),
      checkedAt: '2026-04-20T08:00:00Z'
    });

    expect(row.firstContactAt).toBe('2026-04-20T07:21:52Z');
    expect(row.minutesToFirstContact).toBe(21);
    expect(row.slaOverrunMinutes).toBe(6);
    expect(row.status).toBe('Более 15 минут');
    expect(row.violationFlag).toBe('Да');
  });

  it('ignores incoming Wazzup client messages before the first manager reply', () => {
    const row = buildSlaRow({
      lead: lead(),
      activities: [],
      timelineComments: [
        wazzupComment(3, 'Иван Клиент', 'Здравствуйте'),
        wazzupComment(17, 'Анна Петрова', 'Добрый день, сейчас помогу')
      ],
      users,
      checkedAt
    });

    expect(row.status).toBe('Более 15 минут');
    expect(row.minutesToFirstContact).toBe(17);
    expect(row.violationFlag).toBe('Да');
  });

  it('ignores automatic Wazzup messenger replies as first contact', () => {
    const row = buildSlaRow({
      lead: lead(),
      activities: [],
      timelineComments: [
        wazzupComment(1, 'Телефон', 'Спасибо, что написали нам! Мы скоро ответим'),
        wazzupComment(12, 'Телефон', 'К сожалению, мы не успели ответить на ваш звонок'),
        wazzupComment(19, 'Анна Петрова', 'Добрый день, я на связи')
      ],
      users,
      checkedAt
    });

    expect(row.status).toBe('Более 15 минут');
    expect(row.minutesToFirstContact).toBe(19);
  });

  it('keeps final and non-final leads when the custom field value is no/excluded', () => {
    expect(shouldAnalyzeLead(lead({ stageId: 'NEW', ufCrm_1717431064812: 'N' }))).toBe(true);
    expect(shouldAnalyzeLead(lead({ stageId: 'CONVERTED', stageSemanticId: 'S', ufCrm_1717431064812: 'N' }))).toBe(true);
    expect(shouldAnalyzeLead(lead({ stageId: 'NEW', ufCrm_1717431064812: 'Y' }))).toBe(false);
  });

  it('excludes leads assigned to inactive users from SLA runner selection', () => {
    const usersById = new Map<number, VibeUser>([
      [7, { id: 7, name: 'Анна', lastName: 'Петрова', active: true }],
      [10, { id: 10, name: 'Уволенный', lastName: 'Сотрудник', active: false }],
      [11, { id: 11, name: 'Архивный', lastName: 'Сотрудник', active: 'N' }]
    ]);

    expect(isLeadAssignedToActiveUser(lead({ assignedById: 7 }), usersById)).toBe(true);
    expect(isLeadAssignedToActiveUser(lead({ assignedById: 10 }), usersById)).toBe(false);
    expect(isLeadAssignedToActiveUser(lead({ assignedById: 11 }), usersById)).toBe(false);
    expect(isLeadAssignedToActiveUser(lead({ assignedById: 999 }), usersById)).toBe(true);
  });

  it('excludes leads with outgoing in the title from SLA analysis', () => {
    expect(shouldAnalyzeLead(lead({ title: 'Исходящий звонок туристу', ufCrm_1717431064812: 'N' }))).toBe(false);
    expect(shouldAnalyzeLead(lead({ title: 'исходящий запрос с сайта', ufCrm_1717431064812: 'N' }))).toBe(false);
  });

  it('excludes default numbered lead titles from SLA analysis', () => {
    expect(shouldAnalyzeLead(lead({ title: 'Лид_№194572 - новая заявка', ufCrm_1717431064812: 'N' }))).toBe(false);
    expect(shouldAnalyzeLead(lead({ title: 'Лид_№ 194572 - новая заявка', ufCrm_1717431064812: 'N' }))).toBe(false);
    expect(shouldAnalyzeLead(lead({ title: 'Новая заявка Лид_№194572', ufCrm_1717431064812: 'N' }))).toBe(true);
  });

  it('marks non-outgoing leads assigned to IT department for manual review', () => {
    const row = buildSlaRow({
      lead: lead({ title: 'Заявка с сайта', assignedById: 9 }),
      activities: [outgoingActivity(4)],
      users,
      checkedAt
    });

    expect(row.status).toBe('Требуется ручная проверка');
    expect(row.firstContactAt).toBeNull();
    expect(row.minutesToFirstContact).toBeNull();
    expect(row.slaOverrunMinutes).toBe(0);
    expect(row.violationFlag).toBe('Нет');
  });

  it('does not mark ordinary lead titles for manual review by the default numbered rule', () => {
    const row = buildSlaRow({
      lead: lead({ title: 'Заявка с сайта' }),
      activities: [outgoingActivity(4)],
      users,
      checkedAt
    });

    expect(row.status).toBe('В пределах 15 минут');
    expect(row.firstContactAt).toBe('2026-05-12T09:04:00.000Z');
    expect(row.violationFlag).toBe('Нет');
  });

  it('detects repeat leads and exposes linked contact ids for contact-card activity loading', () => {
    const repeatLead = lead({
      isReturnCustomer: 'Y',
      contactId: 15,
      contactIds: [15, '16', 0],
      searchContent: 'Повторный лид'
    });

    expect(isReturnOrRepeatLead(repeatLead)).toBe(true);
    expect(getLeadContactIds(repeatLead)).toEqual([15, 16]);
  });

  it('counts a first contact loaded from a linked contact card for repeat leads', () => {
    const row = buildSlaRow({
      lead: lead({ isReturnCustomer: 'Y', contactId: 15 }),
      activities: [outgoingActivity(9, { ownerTypeId: 3, ownerId: 15 })],
      users,
      checkedAt
    });

    expect(row.status).toBe('В пределах 15 минут');
    expect(row.minutesToFirstContact).toBe(9);
    expect(row.violationFlag).toBe('Нет');
  });

  it('counts a Wazzup first contact loaded from a linked contact card for repeat leads', () => {
    const row = buildSlaRow({
      lead: lead({ isReturnCustomer: 'Y', contactId: 15 }),
      activities: [],
      timelineComments: [
        wazzupComment(8, 'Анна Петрова', 'Добрый день, уже смотрю заявку', {
          entityId: 15,
          entityType: 'contact'
        })
      ],
      users,
      checkedAt
    });

    expect(row.status).toBe('В пределах 15 минут');
    expect(row.minutesToFirstContact).toBe(8);
    expect(row.violationFlag).toBe('Нет');
  });

  it('matches Wazzup manager names regardless of first-name and last-name order', () => {
    const reversedUsers = new Map<number, VibeUser>([[7, { id: 7, name: 'Петрова', lastName: 'Анна' }]]);
    const row = buildSlaRow({
      lead: lead(),
      activities: [],
      timelineComments: [wazzupComment(8, 'Анна Петрова', 'Добрый день, уже смотрю заявку')],
      users: reversedUsers,
      checkedAt
    });

    expect(row.status).toBe('В пределах 15 минут');
    expect(row.minutesToFirstContact).toBe(8);
  });

  it('treats incoming call marker leads without call activity as incoming when no missed-call stage exists', () => {
    const row = buildSlaRow({
      lead: lead({
        title: '8 (495) 423-28-06 - Входящий звонок',
        sourceId: 'CALL',
        searchContent: '01.04.2026 16:20:00 Входящий звонок'
      }),
      activities: [],
      users,
      checkedAt,
      hadMissedCallStage: false
    });

    expect(row.status).toBe('Входящий звонок');
    expect(row.firstContactAt).toBe(row.leadCreatedAt);
    expect(row.minutesToFirstContact).toBe(0);
    expect(row.violationFlag).toBe('Нет');
  });

  it('treats unresolved incoming call leads as no SLA violation when they reached needs identification without missed calls', () => {
    const row = buildSlaRow({
      lead: lead({ title: '8 (495) 000-00-00 - Входящий звонок', sourceDescription: 'Поступил входящий звонок' }),
      activities: [
        outgoingActivity(2, {
          direction: 1,
          completed: false,
          STATUS: '1',
          resultStream: 0,
          subject: 'Поступил входящий звонок'
        })
      ],
      users,
      checkedAt,
      hadMissedCallStage: false,
      hadNeedsIdentificationStage: true
    });

    expect(row.status).toBe('Входящий звонок');
    expect(row.minutesToFirstContact).toBe(0);
    expect(row.violationFlag).toBe('Нет');
  });

  it('detects needs identification stage from history', () => {
    expect(hasNeedsIdentificationStage([{ statusId: '13' }])).toBe(true);
    expect(hasNeedsIdentificationStage([{ statusId: 'Выявление потребностей' }])).toBe(true);
  });

  it('extracts the first transfer to MPT date from stage history', () => {
    expect(isTransferredToMptLead(lead({ statusId: '12' }))).toBe(true);
    expect(isTransferredToMptLead(lead({ statusId: 'NEW' }))).toBe(false);
    expect(
      getTransferredToMptAt([
        { statusId: 'NEW', createdAt: '2026-05-12T10:00:00+03:00' },
        { statusId: '12', createdAt: '2026-05-12T10:16:00+03:00' },
        { statusId: '12', createdAt: '2026-05-12T10:20:00+03:00' }
      ])
    ).toBe('2026-05-12T10:16:00+03:00');
  });

  it('requests missed-call stage history only for unresolved incoming calls', () => {
    expect(needsMissedCallStageHistory(lead({ sourceId: 'CALL' }), [])).toBe(false);
    expect(needsMissedCallStageHistory(lead({ sourceId: 'CALL' }), [outgoingActivity(2)])).toBe(false);
    expect(
      needsMissedCallStageHistory(lead({ sourceId: 'CALL' }), [
        outgoingActivity(2, {
          direction: 1,
          STATUS: '3',
          RESULT_STREAM: '1'
        })
      ])
    ).toBe(false);
    expect(
      needsMissedCallStageHistory(lead({ sourceId: 'CALL' }), [
        outgoingActivity(2, {
          direction: 1,
          STATUS: '3',
          RESULT_STREAM: '0'
        })
      ])
    ).toBe(true);
    expect(
      needsMissedCallStageHistory(lead({ sourceId: 'CALL' }), [
        outgoingActivityAt('2026-05-12T09:02:00.000Z', {
          direction: 1,
          STATUS: '3',
          RESULT_STREAM: '0',
          endTime: '2026-05-12T09:04:00.000Z'
        })
      ])
    ).toBe(false);
  });
});
