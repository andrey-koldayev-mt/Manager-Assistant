import { getLeadCreatedAt } from './sla';
import type { SlaLogRow, SlaStatus, VibeLead, VibeUser, ViolationFlag } from './types';

const SLA_STATUS_FIELD_VALUES: Record<SlaStatus, number> = {
  'В пределах 15 минут': 3006,
  'Более 15 минут': 3008,
  'Контакта не было': 3010,
  'Входящий звонок': 3140,
  'Требуется ручная проверка': 3146
};

const SLA_STATUS_BY_FIELD_VALUE = new Map<string, SlaStatus>(
  Object.entries(SLA_STATUS_FIELD_VALUES).map(([status, value]) => [String(value), status as SlaStatus])
);

const STATUS_WITHOUT_FIRST_CONTACT = new Set<SlaStatus>(['Контакта не было', 'Требуется ручная проверка']);

export interface SlaCrmUpdate {
  leadId: number;
  fields: Record<string, string | number | null>;
}

function toNumber(value: unknown): number | null {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string' && value.trim() !== '') {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

function toNonEmptyString(value: unknown): string | null {
  return typeof value === 'string' && value.trim() !== '' ? value.trim() : null;
}

function isValidDate(value: unknown): value is string {
  return typeof value === 'string' && value.trim() !== '' && Number.isFinite(new Date(value).getTime());
}

function isValueFilled(value: unknown): boolean {
  return value !== null && value !== undefined && String(value).trim() !== '';
}

function getResponsibleId(lead: VibeLead): number | null {
  return toNumber(lead.assignedById);
}

function getResponsibleName(lead: VibeLead, users: Map<number, VibeUser>): string {
  const id = getResponsibleId(lead);
  if (id == null) return 'Не указан';
  const user = users.get(id);
  if (!user) return `ID ${id}`;
  return [user.name, user.lastName].filter(Boolean).join(' ').trim() || `ID ${id}`;
}

function getLeadStatusId(lead: VibeLead): string {
  return String(lead.statusId ?? lead.stageId ?? '').trim();
}

function getLeadStageName(lead: VibeLead, leadStatusNames: Map<string, string>): string {
  const statusId = getLeadStatusId(lead);
  return leadStatusNames.get(statusId) ?? (statusId || 'Не указан');
}

function getPrintableFieldValue(value: unknown, dictionary: Map<string, string>): string | null {
  if (Array.isArray(value)) {
    const values = value
      .map((item) => getPrintableFieldValue(item, dictionary))
      .filter((item): item is string => Boolean(item));
    return values.length > 0 ? values.join(', ') : null;
  }
  if (!isValueFilled(value)) return null;
  const key = String(value).trim();
  return dictionary.get(key) ?? key;
}

function getLeadRejectionReason(lead: VibeLead, rejectionReasonNames: Map<string, string>): string | null {
  if (getLeadStatusId(lead) !== 'JUNK') return null;
  return getPrintableFieldValue(lead.ufCrm_1638180783 ?? lead.UF_CRM_1638180783, rejectionReasonNames);
}

export function getSlaStatusFromCrmField(value: unknown): SlaStatus | null {
  return SLA_STATUS_BY_FIELD_VALUE.get(String(value ?? '').trim()) ?? null;
}

function getViolationFlagFromCrmField(value: unknown): ViolationFlag | null {
  if (value === true || value === 1) return 'Да';
  if (value === false || value === 0) return 'Нет';
  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase();
    if (['1', 'y', 'yes', 'true', 'да'].includes(normalized)) return 'Да';
    if (['0', 'n', 'no', 'false', 'нет'].includes(normalized)) return 'Нет';
  }
  return null;
}

function hasCompleteContactFields(lead: VibeLead, status: SlaStatus): boolean {
  if (STATUS_WITHOUT_FIRST_CONTACT.has(status)) return true;
  return isValidDate(lead.ufCrm_1715933850) && toNumber(lead.ufCrm_1716566007) != null;
}

export function buildSlaRowFromCrmFields(params: {
  lead: VibeLead;
  users: Map<number, VibeUser>;
  checkedAt: string;
  leadStatusNames?: Map<string, string>;
  rejectionReasonNames?: Map<string, string>;
}): SlaLogRow | null {
  const { lead, users, checkedAt, leadStatusNames = new Map(), rejectionReasonNames = new Map() } = params;
  const status = getSlaStatusFromCrmField(lead.ufCrm_1716369534832);
  const violationFlag = getViolationFlagFromCrmField(lead.ufCrm_1777686837399);
  const slaOverrunMinutes = toNumber(lead.ufCrm_1777370132452);
  const leadCreatedAt = getLeadCreatedAt(lead);

  if (!status || !violationFlag || slaOverrunMinutes == null || !leadCreatedAt || !hasCompleteContactFields(lead, status)) {
    return null;
  }

  return {
    id: `${lead.id}-${checkedAt}`,
    leadId: lead.id,
    leadTitle: lead.title?.trim() || `Лид ${lead.id}`,
    leadStageName: getLeadStageName(lead, leadStatusNames),
    rejectionReason: getLeadRejectionReason(lead, rejectionReasonNames),
    checkedAt,
    leadCreatedAt,
    firstContactAt: STATUS_WITHOUT_FIRST_CONTACT.has(status) ? null : toNonEmptyString(lead.ufCrm_1715933850),
    minutesToFirstContact: STATUS_WITHOUT_FIRST_CONTACT.has(status) ? null : toNumber(lead.ufCrm_1716566007),
    slaOverrunMinutes,
    status,
    responsibleId: getResponsibleId(lead),
    responsibleName: getResponsibleName(lead, users),
    violationFlag
  };
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

export function getMissingSlaCrmUpdateFields(row: SlaLogRow, lead?: VibeLead | null): SlaCrmUpdate {
  const update = getSlaCrmUpdateFields(row);
  if (!lead) return update;

  const fields: SlaCrmUpdate['fields'] = {};

  if (row.firstContactAt != null && !isValidDate(lead.ufCrm_1715933850)) {
    fields.ufCrm_1715933850 = row.firstContactAt;
  }
  if (row.minutesToFirstContact != null && toNumber(lead.ufCrm_1716566007) == null) {
    fields.ufCrm_1716566007 = row.minutesToFirstContact;
  }
  if (!getSlaStatusFromCrmField(lead.ufCrm_1716369534832)) {
    fields.ufCrm_1716369534832 = SLA_STATUS_FIELD_VALUES[row.status];
  }
  if (!getViolationFlagFromCrmField(lead.ufCrm_1777686837399)) {
    fields.ufCrm_1777686837399 = row.violationFlag === 'Да' ? 1 : 0;
  }
  if (toNumber(lead.ufCrm_1777370132452) == null) {
    fields.ufCrm_1777370132452 = row.slaOverrunMinutes;
  }

  return { leadId: row.leadId, fields };
}
