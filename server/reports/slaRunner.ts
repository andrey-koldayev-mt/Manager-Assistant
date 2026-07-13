import { writeSlaLog } from './logStore';
import { buildSlaRowFromCrmFields, getMissingSlaCrmUpdateFields } from './slaCrmFields';
import {
  buildSlaRow,
  getLeadContactIds,
  getTransferredToMptAt,
  hasMissedCallStage,
  hasNeedsIdentificationStage,
  isEarlyWorkdayUser,
  isTransferredToMptLead,
  isReturnOrRepeatLead,
  shouldExcludeLeadBySource,
  shouldExcludeRejectedLeadByReason,
  shouldAnalyzeLead
} from './sla';
import type { SlaLogPayload, SlaLogRow, VibeActivity, VibeLead, VibeUser } from './types';
import { VibeCodeClient } from './vibecode';

export type SlaProgressStage =
  | 'starting'
  | 'loading_leads'
  | 'loading_contacts'
  | 'loading_history'
  | 'calculating'
  | 'updating_crm'
  | 'done';

export interface SlaProgress {
  stage: SlaProgressStage;
  message: string;
  current: number;
  total: number;
}

export interface SlaCheckDateRange {
  createdFrom: string;
  createdTo: string;
}

function isCreatedAtInRange(value: string | null | undefined, range: SlaCheckDateRange): boolean {
  const valueTime = value ? new Date(value).getTime() : Number.NaN;
  const minTime = new Date(range.createdFrom).getTime();
  const maxTime = new Date(range.createdTo).getTime();
  return (
    Number.isFinite(valueTime) &&
    Number.isFinite(minTime) &&
    Number.isFinite(maxTime) &&
    valueTime >= minTime &&
    valueTime <= maxTime
  );
}

function getLeadResponsibleId(lead: { assignedById?: number | string | null }): number | null {
  const value = lead.assignedById;
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string' && value.trim() !== '') {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

function isUserActive(user: VibeUser | undefined): boolean {
  if (!user) return true;
  if (user.active === false) return false;
  if (typeof user.active === 'string') {
    const normalized = user.active.trim().toLowerCase();
    return normalized !== 'n' && normalized !== 'false' && normalized !== '0';
  }
  return true;
}

export function isLeadAssignedToActiveUser(lead: { assignedById?: number | string | null }, users: Map<number, VibeUser>): boolean {
  const responsibleId = getLeadResponsibleId(lead);
  if (responsibleId == null) return true;
  return isUserActive(users.get(responsibleId));
}

export async function runSlaCheckJob(
  apiKey: string,
  dateRange: SlaCheckDateRange,
  reportProgress: (progress: SlaProgress) => void,
  options: { updateCrm?: boolean; authorization?: string | null } = {}
): Promise<SlaLogPayload> {
  reportProgress({ stage: 'starting', message: 'Готовим проверку', current: 0, total: 1 });

  const checkedAt = new Date().toISOString();
  const client = new VibeCodeClient(apiKey, options.authorization ?? null);

  reportProgress({ stage: 'loading_leads', message: 'Загружаем лиды и сотрудников', current: 0, total: 1 });
  const [leads, users, leadStatusNames, rejectionReasonNames, leadSourceNames] = await Promise.all([
    client.searchLeads(dateRange.createdFrom, dateRange.createdTo),
    client.listUsers(),
    client.listLeadStatusNames(),
    client.listLeadRejectionReasonNames(),
    client.listLeadSourceNames()
  ]);
  const usersMap = new Map<number, VibeUser>(users.map((user) => [Number(user.id), user]));
  const filteredLeads = leads.filter(
    (lead) =>
      shouldAnalyzeLead(lead) &&
      isCreatedAtInRange(lead.createdAt ?? lead.createdTime, dateRange) &&
      !shouldExcludeLeadBySource(lead, leadSourceNames) &&
      !shouldExcludeRejectedLeadByReason(lead, rejectionReasonNames) &&
      isLeadAssignedToActiveUser(lead, usersMap)
  );
  const leadById = new Map<number, VibeLead>(filteredLeads.map((lead) => [lead.id, lead]));
  const crmCompleteRows: SlaLogRow[] = [];
  const leadsNeedingCalculation: VibeLead[] = [];
  for (const lead of filteredLeads) {
    const crmRow = buildSlaRowFromCrmFields({
      lead,
      users: usersMap,
      checkedAt,
      leadStatusNames,
      rejectionReasonNames
    });
    if (crmRow) {
      crmCompleteRows.push(crmRow);
    } else {
      leadsNeedingCalculation.push(lead);
    }
  }
  const earlyShiftUsers = users.filter(isEarlyWorkdayUser);
  const leadIds = leadsNeedingCalculation.map((lead) => lead.id);
  let loadedActivityItems = 0;
  const reportLoadedActivities = (processed: number) => {
    loadedActivityItems += processed;
    reportProgress({
      stage: 'loading_contacts',
      message: 'Загружаем активности',
      current: Math.min(loadedActivityItems, Math.max(1, leadIds.length)),
      total: Math.max(1, leadIds.length)
    });
  };

  reportProgress({ stage: 'loading_contacts', message: 'Загружаем активности', current: 0, total: Math.max(1, leadIds.length) });
  const leadActivitiesByLead = await client.listActivitiesForLeads(leadIds, reportLoadedActivities);
  const contactIdsByLead = new Map<number, number[]>();
  const contactIds = new Set<number>();
  for (const lead of leadsNeedingCalculation) {
    const ids = isReturnOrRepeatLead(lead) ? getLeadContactIds(lead) : [];
    contactIdsByLead.set(lead.id, ids);
    for (const id of ids) contactIds.add(id);
  }

  let loadedContactActivityItems = 0;
  const reportLoadedContactActivities = (processed: number) => {
    loadedContactActivityItems += processed;
    reportProgress({
      stage: 'loading_contacts',
      message: 'Загружаем активности связанных контактов',
      current: Math.min(loadedContactActivityItems, Math.max(1, contactIds.size)),
      total: Math.max(1, contactIds.size)
    });
  };
  const contactActivitiesByContact =
    contactIds.size > 0 ? await client.listActivitiesForContacts([...contactIds], reportLoadedContactActivities) : new Map();
  const activitiesByLead = new Map<number, VibeActivity[]>();
  for (const lead of leadsNeedingCalculation) {
    const activities = [...(leadActivitiesByLead.get(lead.id) ?? [])];
    for (const contactId of contactIdsByLead.get(lead.id) ?? []) {
      activities.push(...(contactActivitiesByContact.get(contactId) ?? []));
    }
    activitiesByLead.set(lead.id, activities);
  }

  const stageHistoryLeadIds = [
    ...new Set(
      leadsNeedingCalculation
        .filter((lead) => isTransferredToMptLead(lead))
        .map((lead) => lead.id)
    )
  ];

  reportProgress({
    stage: 'loading_history',
    message: 'Уточняем историю пропущенных звонков',
    current: 0,
    total: Math.max(1, stageHistoryLeadIds.length)
  });
  let loadedHistoryItems = 0;
  const reportLoadedHistory = (processed: number) => {
    loadedHistoryItems += processed;
    reportProgress({
      stage: 'loading_history',
      message: 'Уточняем историю пропущенных звонков',
      current: loadedHistoryItems,
      total: Math.max(1, stageHistoryLeadIds.length)
    });
  };
  const [stageHistoryByLead, earlyShiftAbsenceIntervals] = await Promise.all([
    client.listStageHistoryForLeads(stageHistoryLeadIds, reportLoadedHistory),
    Promise.all(
      earlyShiftUsers.map((user) =>
        client.listAbsenceIntervalsForUser(Number(user.id), dateRange.createdFrom, checkedAt).catch((error: unknown) => {
          console.warn(`Failed to load absence intervals for early-shift user ${user.id}:`, error);
          return [];
        })
      )
    ).then((intervals) => intervals.flat())
  ]);

  const provisionalRows = new Map(
    leadsNeedingCalculation.map((lead) => [
      lead.id,
      buildSlaRow({
        lead,
        activities: activitiesByLead.get(lead.id) ?? [],
        users: usersMap,
        checkedAt,
        hadMissedCallStage: hasMissedCallStage(stageHistoryByLead.get(lead.id) ?? []),
        hadNeedsIdentificationStage: hasNeedsIdentificationStage(stageHistoryByLead.get(lead.id) ?? []),
        transferredToMptAt: getTransferredToMptAt(stageHistoryByLead.get(lead.id) ?? []),
        absenceIntervals: earlyShiftAbsenceIntervals,
        leadStatusNames,
        rejectionReasonNames
      })
    ])
  );
  const timelineLeadIds = leadsNeedingCalculation
    .filter((lead) => {
      const status = provisionalRows.get(lead.id)?.status;
      return status !== 'Входящий звонок' && status !== 'Требуется ручная проверка';
    })
    .map((lead) => lead.id);
  const timelineLeadIdSet = new Set(timelineLeadIds);
  const timelineContactIds = new Set<number>();
  for (const lead of leadsNeedingCalculation) {
    if (!timelineLeadIdSet.has(lead.id)) continue;
    for (const contactId of contactIdsByLead.get(lead.id) ?? []) timelineContactIds.add(contactId);
  }
  let loadedTimelineItems = 0;
  const reportLoadedTimeline = (processed: number) => {
    loadedTimelineItems += processed;
    reportProgress({
      stage: 'loading_contacts',
      message: 'Загружаем сообщения Wazzup',
      current: Math.min(loadedTimelineItems, Math.max(1, timelineLeadIds.length)),
      total: Math.max(1, timelineLeadIds.length)
    });
  };
  let loadedContactTimelineItems = 0;
  const reportLoadedContactTimeline = (processed: number) => {
    loadedContactTimelineItems += processed;
    reportProgress({
      stage: 'loading_contacts',
      message: 'Загружаем сообщения Wazzup связанных контактов',
      current: Math.min(loadedContactTimelineItems, Math.max(1, timelineContactIds.size)),
      total: Math.max(1, timelineContactIds.size)
    });
  };

  reportProgress({
    stage: 'loading_contacts',
    message: timelineLeadIds.length > 0 ? 'Загружаем сообщения Wazzup' : 'Сообщения Wazzup не требуются',
    current: 0,
    total: Math.max(1, timelineLeadIds.length)
  });
  const timelineCommentsByLead =
    timelineLeadIds.length > 0 ? await client.listTimelineCommentsForLeads(timelineLeadIds, reportLoadedTimeline) : new Map();
  reportProgress({
    stage: 'loading_contacts',
    message: timelineContactIds.size > 0 ? 'Загружаем сообщения Wazzup связанных контактов' : 'Сообщения Wazzup контактов не требуются',
    current: 0,
    total: Math.max(1, timelineContactIds.size)
  });
  const timelineCommentsByContact =
    timelineContactIds.size > 0 ? await client.listTimelineCommentsForContacts([...timelineContactIds], reportLoadedContactTimeline) : new Map();

  reportProgress({ stage: 'calculating', message: 'Считаем SLA', current: 0, total: filteredLeads.length });
  const calculatedRows = leadsNeedingCalculation
    .map((lead) =>
      buildSlaRow({
        lead,
        activities: activitiesByLead.get(lead.id) ?? [],
        timelineComments: [
          ...(timelineCommentsByLead.get(lead.id) ?? []),
          ...(contactIdsByLead.get(lead.id) ?? []).flatMap((contactId) => timelineCommentsByContact.get(contactId) ?? [])
        ],
        users: usersMap,
        checkedAt,
        hadMissedCallStage: hasMissedCallStage(stageHistoryByLead.get(lead.id) ?? []),
        hadNeedsIdentificationStage: hasNeedsIdentificationStage(stageHistoryByLead.get(lead.id) ?? []),
        transferredToMptAt: getTransferredToMptAt(stageHistoryByLead.get(lead.id) ?? []),
        absenceIntervals: earlyShiftAbsenceIntervals,
        leadStatusNames,
        rejectionReasonNames
      })
    );
  const rows = [...crmCompleteRows, ...calculatedRows].sort(
    (a, b) => new Date(b.leadCreatedAt).getTime() - new Date(a.leadCreatedAt).getTime()
  );

  if (options.updateCrm) {
    const updates = rows
      .map((row) => getMissingSlaCrmUpdateFields(row, leadById.get(row.leadId)))
      .filter((update) => Object.keys(update.fields).length > 0);
    reportProgress({
      stage: 'updating_crm',
      message: 'Заполняем поля SLA в CRM',
      current: 0,
      total: Math.max(1, updates.length)
    });
    await client.updateLeadsSlaFields(updates);
    reportProgress({
      stage: 'updating_crm',
      message: 'Поля SLA в CRM заполнены',
      current: updates.length,
      total: Math.max(1, updates.length)
    });
  }

  const payload = await writeSlaLog(rows, checkedAt);
  reportProgress({ stage: 'done', message: 'Проверка завершена', current: rows.length, total: rows.length });
  return payload;
}
