import type {
  VibeAbsenceInterval,
  VibeActivity,
  VibeCalendarEvent,
  VibeContact,
  VibeDeal,
  VibeEnumerationItem,
  VibeLeadFieldsResponse,
  VibeLead,
  ReactivationEmployee,
  VibeStageHistory,
  VibeStatus,
  VibeTimelineComment,
  VibeUser
} from './types';
import { NEXT_STEP_CATEGORY_ID, NEXT_STEP_STAGE_IDS } from './nextStep';

const API_BASE = 'https://vibecode.bitrix24.tech/v1';
const RETRY_DELAYS_MS = [600, 1400, 3000];
const LEAD_PAGE_SIZE = 50;
const CONTACT_PAGE_SIZE = 50;
const DEAL_PAGE_SIZE = 50;
const SLA_LEAD_REJECTION_FIELD = 'ufCrm_1638180783';
const SLA_LEAD_FIRST_REACTION_FIELD = 'ufCrm_1715933850';
const SLA_LEAD_FIRST_REACTION_MINUTES_FIELD = 'ufCrm_1716566007';
const SLA_LEAD_STATUS_FIELD = 'ufCrm_1716369534832';
const SLA_LEAD_VIOLATION_FIELD = 'ufCrm_1777686837399';
const SLA_LEAD_OVERRUN_FIELD = 'ufCrm_1777370132452';
const SLA_LEAD_ONLINE_CHAT_OUTGOING_FIELD = 'ufCrm_1716370242690';
const SLA_LEAD_MISSED_CALL_FIELD = 'ufCrm_1724510334936';
const SLA_LEAD_SELECT = [
  'id',
  'title',
  'createdAt',
  'createdTime',
  'stageId',
  'statusId',
  'stageSemanticId',
  'assignedById',
  'contactId',
  'contactIds',
  'sourceId',
  'sourceDescription',
  'comments',
  'isReturnCustomer',
  'searchContent',
  'ufCrm_1717431064812',
  SLA_LEAD_FIRST_REACTION_FIELD,
  SLA_LEAD_FIRST_REACTION_MINUTES_FIELD,
  SLA_LEAD_STATUS_FIELD,
  SLA_LEAD_VIOLATION_FIELD,
  SLA_LEAD_OVERRUN_FIELD,
  SLA_LEAD_ONLINE_CHAT_OUTGOING_FIELD,
  SLA_LEAD_MISSED_CALL_FIELD,
  SLA_LEAD_REJECTION_FIELD,
  'UF_CRM_1638180783'
];
const SLA_ACTIVITY_SELECT = [
  'ID',
  'TYPE_ID',
  'OWNER_TYPE_ID',
  'OWNER_ID',
  'SUBJECT',
  'DIRECTION',
  'COMPLETED',
  'STATUS',
  'START_TIME',
  'END_TIME',
  'CREATED',
  'LAST_UPDATED',
  'RESPONSIBLE_ID',
  'PROVIDER_ID',
  'PROVIDER_TYPE_ID',
  'PROVIDER_GROUP_ID',
  'RESULT_STATUS',
  'RESULT_MARK',
  'RESULT_STREAM',
  'SETTINGS',
  'DESCRIPTION'
];
const SLA_TIMELINE_SELECT = ['ID', 'ENTITY_ID', 'ENTITY_TYPE', 'CREATED', 'AUTHOR_ID', 'COMMENT'];

interface VibeResponse<T> {
  success?: boolean;
  data?: T;
  meta?: {
    total?: number;
    hasMore?: boolean;
  };
  error?: {
    code?: string;
    message?: string;
  };
}

interface VibeDepartmentUser {
  id: number;
  name?: string | null;
  lastName?: string | null;
  active?: boolean;
  personalPhoto?: string | null;
  PERSONAL_PHOTO?: string | null;
}

export class VibeCodeClient {
  constructor(
    private readonly apiKey: string,
    private readonly authorization: string | null = null
  ) {}

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  private isRetryableError(error: unknown): boolean {
    const message = error instanceof Error ? error.message.toLowerCase() : String(error).toLowerCase();
    return (
      message.includes('too many requests') ||
      message.includes('internal server error') ||
      message.includes('overload') ||
      message.includes('queue_timeout') ||
      message.includes('queue timeout') ||
      message.includes('504')
    );
  }

  private async request<T>(path: string, init: RequestInit = {}): Promise<T> {
    const response = await fetch(`${API_BASE}${path}`, {
      ...init,
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': this.apiKey,
          ...(this.authorization ? { Authorization: this.authorization } : {}),
          ...init.headers
        }
    });
    const payload = (await response.json().catch(() => ({}))) as VibeResponse<T>;
    if (!response.ok || payload.success === false) {
      throw new Error(payload.error?.message || `VibeCode request failed: ${response.status} ${response.statusText}`);
    }
    return payload.data as T;
  }

  private async requestWithRetry<T>(path: string, init: RequestInit = {}): Promise<T> {
    let lastError: unknown;
    for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt += 1) {
      try {
        return await this.request<T>(path, init);
      } catch (error) {
        lastError = error;
        if (!this.isRetryableError(error) || attempt === RETRY_DELAYS_MS.length) break;
        await this.delay(RETRY_DELAYS_MS[attempt] ?? RETRY_DELAYS_MS[RETRY_DELAYS_MS.length - 1] ?? 1000);
      }
    }
    throw lastError;
  }

  async searchLeads(createdFromIso: string, createdToIso: string): Promise<VibeLead[]> {
    const createdFromTime = new Date(createdFromIso).getTime();
    const createdToTime = new Date(createdToIso).getTime();
    const result: VibeLead[] = [];
    const seenIds = new Set<number>();
    const seenPageIds = new Set<number>();
    let offset = 0;

    while (true) {
      const data = await this.requestWithRetry<VibeLead[]>('/leads/search', {
        method: 'POST',
        body: JSON.stringify({
          filter: {
            createdAt: {
              $gte: createdFromIso,
              $lte: createdToIso
            }
          },
          autoWindow: false,
          select: SLA_LEAD_SELECT,
          limit: LEAD_PAGE_SIZE,
          offset
        })
      });
      const leads = Array.isArray(data) ? data : [];
      if (leads.length === 0) break;

      let inRangeCount = 0;
      let olderThanRangeCount = 0;
      let newerThanRangeCount = 0;
      let newPageIdCount = 0;
      for (const lead of leads) {
        if (!seenPageIds.has(lead.id)) {
          seenPageIds.add(lead.id);
          newPageIdCount += 1;
        }
        const createdAt = lead.createdAt ?? lead.createdTime ?? null;
        const createdTime = createdAt ? new Date(createdAt).getTime() : Number.NaN;
        if (!Number.isFinite(createdTime)) continue;
        if (createdTime > createdToTime) {
          newerThanRangeCount += 1;
          continue;
        }
        if (createdTime < createdFromTime) {
          olderThanRangeCount += 1;
          continue;
        }
        inRangeCount += 1;
        if (!seenIds.has(lead.id)) {
          seenIds.add(lead.id);
          result.push(lead);
        }
      }

      if (leads.length < LEAD_PAGE_SIZE || newPageIdCount === 0) break;
      if (inRangeCount === 0 && olderThanRangeCount > 0 && newerThanRangeCount === 0) break;
      offset += LEAD_PAGE_SIZE;
    }

    return result;
  }

  async listUsers(): Promise<VibeUser[]> {
    const data = await this.requestWithRetry<VibeUser[]>('/users?limit=5000&select=id,name,lastName,active,email');
    return Array.isArray(data) ? data : [];
  }

  async listLeadStatusNames(): Promise<Map<string, string>> {
    const data = await this.requestWithRetry<VibeStatus[]>('/statuses?limit=5000');
    const result = new Map<string, string>();
    for (const status of Array.isArray(data) ? data : []) {
      if (String(status.entityId ?? '').toUpperCase() !== 'STATUS') continue;
      const id = String(status.statusId ?? '').trim();
      const name = (status.name ?? status.nameInit ?? '').trim();
      if (id && name) result.set(id, name);
    }
    return result;
  }

  async listLeadSourceNames(): Promise<Map<string, string>> {
    const data = await this.requestWithRetry<VibeStatus[]>('/statuses?limit=5000');
    const result = new Map<string, string>();
    for (const status of Array.isArray(data) ? data : []) {
      if (String(status.entityId ?? '').toUpperCase() !== 'SOURCE') continue;
      const id = String(status.statusId ?? '').trim();
      const name = (status.name ?? status.nameInit ?? '').trim();
      if (id && name) result.set(id, name);
    }
    return result;
  }

  async listLeadRejectionReasonNames(): Promise<Map<string, string>> {
    const data = await this.requestWithRetry<VibeLeadFieldsResponse>('/leads/fields');
    const field = data?.fields?.[SLA_LEAD_REJECTION_FIELD] ?? data?.fields?.UF_CRM_1638180783;
    const result = new Map<string, string>();
    for (const item of field?.items ?? []) {
      const id = String(item.ID ?? item.id ?? '').trim();
      const value = String(item.VALUE ?? item.value ?? '').trim();
      if (id && value) result.set(id, value);
    }
    return result;
  }

  async updateLeadsSlaFields(updates: Array<{ leadId: number; fields: Record<string, string | number | null> }>): Promise<void> {
    for (const update of updates) {
      await this.requestWithRetry<VibeLead>(`/leads/${update.leadId}`, {
        method: 'PATCH',
        body: JSON.stringify(update.fields)
      });
    }
  }

  async listDepartmentUsers(
    departmentId: number,
    excludedUserIds = new Set<number>()
  ): Promise<ReactivationEmployee[]> {
    const data = await this.requestWithRetry<VibeDepartmentUser[]>('/users/search', {
      method: 'POST',
      body: JSON.stringify({
        filter: {
          departmentId,
          active: true
        },
        select: ['id', 'name', 'lastName', 'active', 'personalPhoto', 'PERSONAL_PHOTO'],
        limit: 500
      })
    });

    return (Array.isArray(data) ? data : [])
      .map((user) => ({
        id: user.id,
        name: user.name?.trim() ?? '',
        lastName: user.lastName?.trim() ?? '',
        photoUrl: user.personalPhoto ?? user.PERSONAL_PHOTO ?? null
      }))
      .filter((user) => !excludedUserIds.has(user.id) && `${user.lastName}${user.name}`.trim().length > 0)
      .sort(
        (left, right) =>
          left.lastName.localeCompare(right.lastName, 'ru') || left.name.localeCompare(right.name, 'ru')
      );
  }

  async searchContacts(createdFromIso: string, createdToIso: string, onProgress?: (processed: number) => void): Promise<VibeContact[]> {
    const createdFromTime = new Date(createdFromIso).getTime();
    const createdToTime = new Date(createdToIso).getTime();
    const result: VibeContact[] = [];
    const seenIds = new Set<number>();
    const seenPageIds = new Set<number>();
    let offset = 0;

    while (true) {
      const data = await this.requestWithRetry<VibeContact[]>('/contacts/search', {
        method: 'POST',
        body: JSON.stringify({
          filter: {
            createdAt: {
              $gte: createdFromIso,
              $lte: createdToIso
            }
          },
          autoWindow: false,
          limit: CONTACT_PAGE_SIZE,
          offset
        })
      });
      const contacts = Array.isArray(data) ? data : [];
      if (contacts.length === 0) break;

      let inRangeCount = 0;
      let olderThanRangeCount = 0;
      let newerThanRangeCount = 0;
      let newPageIdCount = 0;
      for (const contact of contacts) {
        if (!seenPageIds.has(contact.id)) {
          seenPageIds.add(contact.id);
          newPageIdCount += 1;
        }
        const createdAt = contact.createdAt ?? contact.createdTime ?? null;
        const createdTime = createdAt ? new Date(createdAt).getTime() : Number.NaN;
        if (!Number.isFinite(createdTime)) continue;
        if (createdTime > createdToTime) {
          newerThanRangeCount += 1;
          continue;
        }
        if (createdTime < createdFromTime) {
          olderThanRangeCount += 1;
          continue;
        }
        inRangeCount += 1;
        if (!seenIds.has(contact.id)) {
          seenIds.add(contact.id);
          result.push(contact);
        }
      }

      onProgress?.(contacts.length);
      if (contacts.length < CONTACT_PAGE_SIZE || newPageIdCount === 0) break;
      if (inRangeCount === 0 && olderThanRangeCount > 0 && newerThanRangeCount === 0) break;
      offset += CONTACT_PAGE_SIZE;
    }

    return result;
  }

  async searchReactivationDeals(
    updatedFromIso: string,
    updatedToIso: string,
    onProgress?: (processed: number) => void
  ): Promise<VibeDeal[]> {
    const result: VibeDeal[] = [];
    const seenIds = new Set<number>();
    const seenPageIds = new Set<number>();
    let offset = 0;

    while (true) {
      const data = await this.requestWithRetry<VibeDeal[]>('/deals/search', {
        method: 'POST',
        body: JSON.stringify({
          filter: {
            categoryId: 12,
            updatedAt: {
              $gte: updatedFromIso,
              $lte: updatedToIso
            }
          },
          autoWindow: false,
          select: ['id', 'title', 'categoryId', 'stageId', 'assignedById', 'createdAt', 'updatedAt', 'closed', 'closedAt'],
          limit: DEAL_PAGE_SIZE,
          offset
        })
      });
      const deals = Array.isArray(data) ? data : [];
      if (deals.length === 0) break;

      let newPageIdCount = 0;
      for (const deal of deals) {
        if (!seenPageIds.has(deal.id)) {
          seenPageIds.add(deal.id);
          newPageIdCount += 1;
        }
        if (seenIds.has(deal.id)) continue;
        seenIds.add(deal.id);
        result.push(deal);
      }

      onProgress?.(deals.length);
      if (deals.length < DEAL_PAGE_SIZE || newPageIdCount === 0) break;
      offset += DEAL_PAGE_SIZE;
    }

    return result;
  }

  async searchNextStepDeals(onProgress?: (processed: number) => void): Promise<VibeDeal[]> {
    const result: VibeDeal[] = [];
    const seenIds = new Set<number>();
    const seenPageIds = new Set<number>();
    let offset = 0;

    while (true) {
      const data = await this.requestWithRetry<VibeDeal[]>('/deals/search', {
        method: 'POST',
        body: JSON.stringify({
          filter: {
            categoryId: NEXT_STEP_CATEGORY_ID,
            stageId: NEXT_STEP_STAGE_IDS
          },
          autoWindow: false,
          select: ['id', 'title', 'categoryId', 'stageId', 'assignedById', 'createdAt', 'updatedAt', 'closed', 'closedAt'],
          limit: DEAL_PAGE_SIZE,
          offset
        })
      });
      const deals = Array.isArray(data) ? data : [];
      if (deals.length === 0) break;

      let newPageIdCount = 0;
      for (const deal of deals) {
        if (!seenPageIds.has(deal.id)) {
          seenPageIds.add(deal.id);
          newPageIdCount += 1;
        }
        if (seenIds.has(deal.id)) continue;
        seenIds.add(deal.id);
        result.push(deal);
      }

      onProgress?.(deals.length);
      if (deals.length < DEAL_PAGE_SIZE || newPageIdCount === 0) break;
      offset += DEAL_PAGE_SIZE;
    }

    return result;
  }

  async listAbsenceIntervalsForUser(userId: number, fromIso: string, toIso: string): Promise<VibeAbsenceInterval[]> {
    const params = new URLSearchParams({
      type: 'user',
      ownerId: String(userId),
      from: fromIso,
      to: toIso
    });
    const data = await this.requestWithRetry<VibeCalendarEvent[]>(`/calendar-events?${params.toString()}`);
    return (Array.isArray(data) ? data : [])
      .map((event) => {
        const accessibility = String(event.accessibility ?? event.ACCESSIBILITY ?? '').toLowerCase();
        const start = event.dateFrom ?? event.DATE_FROM ?? event.from ?? event.start ?? null;
        const end = event.dateTo ?? event.DATE_TO ?? event.to ?? event.end ?? null;
        return { accessibility, start, end };
      })
      .filter((event): event is { accessibility: string; start: string; end: string } =>
        event.accessibility === 'absent' && Boolean(event.start) && Boolean(event.end)
      )
      .map((event) => ({ userId, start: event.start, end: event.end }));
  }

  async listActivitiesForLeads(leadIds: number[], onProgress?: (processed: number) => void): Promise<Map<number, VibeActivity[]>> {
    const result = new Map<number, VibeActivity[]>();
    for (let index = 0; index < leadIds.length; index += 50) {
      const chunk = leadIds.slice(index, index + 50);
      const batch = await this.requestWithRetry<{
        results?: Record<string, VibeActivity[]>;
        errors?: Record<string, unknown>;
      }>('/batch', {
        method: 'POST',
        body: JSON.stringify({
          calls: chunk.map((leadId) => ({
            id: `lead_${leadId}`,
            entity: 'activities',
            action: 'list',
            params: {
              filter: {
                ownerTypeId: 1,
                ownerId: leadId
              },
              select: SLA_ACTIVITY_SELECT,
              limit: 200
            }
          }))
        })
      });

      for (const leadId of chunk) {
        result.set(leadId, batch.results?.[`lead_${leadId}`] ?? []);
      }
      onProgress?.(chunk.length);
    }
    return result;
  }

  async listActivitiesForContacts(contactIds: number[], onProgress?: (processed: number) => void): Promise<Map<number, VibeActivity[]>> {
    const result = new Map<number, VibeActivity[]>();
    for (let index = 0; index < contactIds.length; index += 50) {
      const chunk = contactIds.slice(index, index + 50);
      const batch = await this.requestWithRetry<{
        results?: Record<string, VibeActivity[]>;
        errors?: Record<string, { message?: string }>;
      }>('/batch', {
        method: 'POST',
        body: JSON.stringify({
          calls: chunk.map((contactId) => ({
            id: `contact_${contactId}`,
            entity: 'activities',
            action: 'list',
            params: {
              filter: {
                ownerTypeId: 3,
                ownerId: contactId
              },
              select: SLA_ACTIVITY_SELECT,
              limit: 200
            }
          }))
        })
      });

      for (const contactId of chunk) {
        const key = `contact_${contactId}`;
        const error = batch.errors?.[key];
        if (error) {
          console.warn(`Could not load activities for contact ${contactId}:`, error.message ?? error);
        }
        result.set(contactId, batch.results?.[key] ?? []);
      }
      onProgress?.(chunk.length);
    }
    return result;
  }

  async listActivitiesForDeals(dealIds: number[], onProgress?: (processed: number) => void): Promise<Map<number, VibeActivity[]>> {
    const result = new Map<number, VibeActivity[]>();
    for (let index = 0; index < dealIds.length; index += 50) {
      const chunk = dealIds.slice(index, index + 50);
      const batch = await this.requestWithRetry<{
        results?: Record<string, VibeActivity[]>;
        errors?: Record<string, { message?: string }>;
      }>('/batch', {
        method: 'POST',
        body: JSON.stringify({
          calls: chunk.map((dealId) => ({
            id: `deal_${dealId}`,
            entity: 'activities',
            action: 'list',
            params: {
              filter: {
                ownerTypeId: 2,
                ownerId: dealId
              },
              limit: 200
            }
          }))
        })
      });

      for (const dealId of chunk) {
        const key = `deal_${dealId}`;
        const error = batch.errors?.[key];
        if (error) {
          console.warn(`Could not load activities for deal ${dealId}:`, error.message ?? error);
        }
        result.set(dealId, batch.results?.[key] ?? []);
      }
      onProgress?.(chunk.length);
    }
    return result;
  }

  async listStageHistoryForLeads(leadIds: number[], onProgress?: (processed: number) => void): Promise<Map<number, VibeStageHistory[]>> {
    const result = new Map<number, VibeStageHistory[]>();
    for (const leadId of leadIds) {
      const params = new URLSearchParams({
        entityType: 'lead',
        ownerId: String(leadId),
        limit: '200'
      });
      try {
        const data = await this.requestWithRetry<VibeStageHistory[]>(`/stage-history?${params.toString()}`);
        result.set(leadId, Array.isArray(data) ? data : []);
      } catch (error) {
        console.warn(`Could not load stage history for lead ${leadId}:`, error instanceof Error ? error.message : error);
        result.set(leadId, []);
      }
      onProgress?.(1);
    }
    return result;
  }

  private async listTimelineCommentsForEntities(params: {
    entityType: 'lead' | 'contact';
    entityIds: number[];
    sort: string;
    onProgress?: (processed: number) => void;
  }): Promise<Map<number, VibeTimelineComment[]>> {
    const { entityType, entityIds, sort, onProgress } = params;
    const result = new Map<number, VibeTimelineComment[]>();
    for (let index = 0; index < entityIds.length; index += 50) {
      const chunk = entityIds.slice(index, index + 50);
      const batch = await this.requestWithRetry<{
        results?: Record<string, VibeTimelineComment[]>;
        errors?: Record<string, { message?: string }>;
      }>('/batch', {
        method: 'POST',
        body: JSON.stringify({
          calls: chunk.map((entityId) => ({
            id: `timeline_${entityType}_${entityId}`,
            entity: 'timelines',
            action: 'list',
            params: {
              filter: {
                entityType,
                entityId
              },
              select: SLA_TIMELINE_SELECT,
              sort,
              limit: 200
            }
          }))
        })
      });

      for (const entityId of chunk) {
        const key = `timeline_${entityType}_${entityId}`;
        const error = batch.errors?.[key];
        if (error) {
          console.warn(`Could not load timeline comments for ${entityType} ${entityId}:`, error.message ?? error);
        }
        result.set(entityId, batch.results?.[key] ?? []);
      }
      onProgress?.(chunk.length);
    }
    return result;
  }

  async listTimelineCommentsForLeads(leadIds: number[], onProgress?: (processed: number) => void): Promise<Map<number, VibeTimelineComment[]>> {
    return this.listTimelineCommentsForEntities({
      entityType: 'lead',
      entityIds: leadIds,
      sort: 'createdAt',
      onProgress
    });
  }

  async listTimelineCommentsForContacts(
    contactIds: number[],
    onProgress?: (processed: number) => void
  ): Promise<Map<number, VibeTimelineComment[]>> {
    return this.listTimelineCommentsForEntities({
      entityType: 'contact',
      entityIds: contactIds,
      sort: '-createdAt',
      onProgress
    });
  }
}
