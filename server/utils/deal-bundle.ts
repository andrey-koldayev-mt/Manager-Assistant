import type { DealBundle } from '../domain/deal-analysis';

const VIBE_BASE_URL = 'https://vibecode.bitrix24.tech/v1';

type RequestOptions = {
  method?: string;
  headers: Record<string, string>;
  body?: unknown;
};

export async function loadDealBundle({ dealId, headers }: { dealId: number; headers: Record<string, string> }): Promise<DealBundle> {
  const deal = await requestVibe(`/deals/${dealId}`, { headers });
  const contactId = positiveId(deal?.contactId ?? deal?.CONTACT_ID ?? deal?.contactIds?.[0] ?? deal?.CONTACT_IDS?.[0]);
  const leadId = positiveId(deal?.leadId ?? deal?.LEAD_ID);
  const [dealHistory, lead, contact] = await Promise.all([
    loadEntityHistory({ entityType: 'deal', entityId: dealId, ownerTypeId: 2, headers }),
    leadId ? safeRequestVibe(`/leads/${leadId}`, { headers }) : Promise.resolve(null),
    contactId ? safeRequestVibe(`/contacts/${contactId}`, { headers }) : Promise.resolve(null)
  ]);
  const leadHistory = leadId
    ? await loadEntityHistory({ entityType: 'lead', entityId: leadId, ownerTypeId: 1, headers })
    : emptyHistory();

  return {
    deal,
    linkedLead: lead && typeof lead === 'object' && !Array.isArray(lead) ? lead : null,
    timelines: [...dealHistory.timelines, ...leadHistory.timelines],
    activities: [...dealHistory.activities, ...leadHistory.activities],
    messages: [...dealHistory.messages, ...leadHistory.messages],
    contact: contact && typeof contact === 'object' && !Array.isArray(contact) ? contact : null
  };
}

async function loadEntityHistory({ entityType, entityId, ownerTypeId, headers }: {
  entityType: 'deal' | 'lead';
  entityId: number;
  ownerTypeId: 1 | 2;
  headers: Record<string, string>;
}) {
  const [timelines, activities, messages] = await Promise.all([
    safeRequestVibe(`/timelines?entityType=${entityType}&entityId=${entityId}`, { headers }),
    safeRequestVibe('/activities/search', {
      headers,
      method: 'POST',
      body: {
        filter: { ownerTypeId, ownerId: entityId },
        sort: 'createdAt',
        limit: 200,
        select: ['id', 'subject', 'description', 'typeId', 'activityType', 'createdAt', 'deadline', 'communications', 'files', 'webdavElements']
      }
    }),
    loadCrmMessages({ entityType, entityId, headers })
  ]);

  return {
    timelines: markSource(toItems(timelines), entityType, entityId),
    activities: markSource(toItems(activities), entityType, entityId),
    messages: markSource(toItems(messages), entityType, entityId)
  };
}

export async function requestVibe(path: string, options: RequestOptions) {
  return requestVibeRaw(`${VIBE_BASE_URL}${path}`, {
    method: options.method || 'GET',
    headers: options.headers,
    body: options.body ? JSON.stringify(options.body) : undefined
  });
}

export async function requestVibeRaw(url: string, options: RequestInit) {
  const response = await fetch(url, options);
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok || data?.success === false || data?.error) {
    const message = data?.error?.userMessage ?? data?.error?.message ?? data?.error_description ?? response.statusText;
    const error: any = new Error(message);
    error.statusCode = response.status;
    throw error;
  }

  return data?.data ?? data?.result ?? data;
}

async function loadCrmMessages({ entityType, entityId, headers }: {
  entityType: 'deal' | 'lead';
  entityId: number;
  headers: Record<string, string>;
}) {
  try {
    const chat = await requestVibe(`/chats/find?entityType=CRM&entityId=${entityType.toUpperCase()}|${entityId}`, { headers });
    const dialogId = chat?.dialogId ?? chat?.id ?? chat?.chatId;
    return dialogId
      ? await requestVibe(`/chats/${encodeURIComponent(String(dialogId))}/messages?limit=100`, { headers })
      : [];
  } catch {
    return [];
  }
}

async function safeRequestVibe(path: string, options: RequestOptions) {
  try {
    return await requestVibe(path, options);
  } catch {
    return [];
  }
}

function toItems(value: unknown): Record<string, any>[] {
  if (Array.isArray(value)) return value;
  if (value && typeof value === 'object') {
    const record = value as Record<string, unknown>;
    const items = record.items ?? record.results ?? record.data;
    return Array.isArray(items) ? items as Record<string, any>[] : [];
  }
  return [];
}

function markSource(items: Record<string, any>[], entityType: 'deal' | 'lead', entityId: number) {
  return items.map((item) => ({ ...item, sourceEntityType: entityType, sourceEntityId: entityId }));
}

function emptyHistory() {
  return { timelines: [] as Record<string, any>[], activities: [] as Record<string, any>[], messages: [] as Record<string, any>[] };
}

function positiveId(value: unknown): number | null {
  const rawValue = value && typeof value === 'object'
    ? (value as Record<string, unknown>).id ?? (value as Record<string, unknown>).ID ?? (value as Record<string, unknown>).value
    : value;
  const id = Number(typeof rawValue === 'string' ? rawValue.replace(/^L_/, '') : rawValue);
  return Number.isInteger(id) && id > 0 ? id : null;
}
