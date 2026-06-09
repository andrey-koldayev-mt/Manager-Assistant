import type { SlaLogRow, SlaStatus } from './types';

const SLA_STATUS_FIELD_VALUES: Record<SlaStatus, number> = {
  'В пределах 15 минут': 3006,
  'Более 15 минут': 3008,
  'Контакта не было': 3010,
  'Входящий звонок': 3140,
  'Требуется ручная проверка': 3146
};

export interface SlaCrmUpdate {
  leadId: number;
  fields: Record<string, string | number | null>;
}

export function getSlaCrmUpdateFields(row: SlaLogRow): SlaCrmUpdate {
  return {
    leadId: row.leadId,
    fields: {
      ufCrm_1715933850: row.firstContactAt,
      ufCrm_1716566007: row.minutesToFirstContact,
      ufCrm_1716369534832: SLA_STATUS_FIELD_VALUES[row.status],
      ufCrm_1777686837399: row.violationFlag === 'Да' ? 1 : 0,
      ufCrm_1777370132452: row.slaOverrunMinutes
    }
  };
}
