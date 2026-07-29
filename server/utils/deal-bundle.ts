import type { DealBundle } from '../domain/deal-analysis';

const VIBE_BASE_URL = 'https://vibecode.bitrix24.tech/v1';

type RequestOptions = {
  method?: string;
  headers: Record<string, string>;
  body?: unknown;
};

export async function loadDealBundle({ dealId, headers }: { dealId: number; headers: Record<string, string> }): Promise<DealBundle> {
  const deal = await requestVibe(`/deals/${dealId}`, { headers });
  const contactId = deal?.contactId ?? deal?.CONTACT_ID ?? deal?.contactIds?.[0] ?? deal?.CONTACT_IDS?.[0];
  const [timelines, activities, messages, contact] = await Promise.all([
    safeRequestVibe(`/timelines?entityType=deal&entityId=${dealId}`, { headers }),
    safeRequestVibe('/activities/search', {
      headers,
      method: 'POST',
      body: {
        filter: { ownerTypeId: 2, ownerId: dealId },
        sort: 'createdAt',
        limit: 200,
        select: ['id', 'subject', 'description', 'typeId', 'activityType', 'createdAt', 'deadline', 'communications', 'files', 'webdavElements']
      }
    }),
    loadCrmMessages({ dealId, headers }),
    contactId ? safeRequestVibe(`/contacts/${contactId}`, { headers }) : Promise.resolve(null)
  ]);

  return {
    deal,
    timelines: toItems(timelines),
    activities: toItems(activities),
    messages: toItems(messages),
    contact: contact && typeof contact === 'object' && !Array.isArray(contact) ? contact : null
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

async function loadCrmMessages({ dealId, headers }: { dealId: number; headers: Record<string, string> }) {
  try {
    const chat = await requestVibe(`/chats/find?entityType=CRM&entityId=DEAL|${dealId}`, { headers });
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
