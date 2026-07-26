import {
  CRM_ACTIVITY_RECOMMENDATION_TOOL,
  buildActivityPayload,
  buildDealContext,
  buildPromptMessages,
  buildTimelineLogPayload,
  ensureFutureRecommendationDeadline,
  validateAiRecommendation,
  type AiRecommendation
} from '../../domain/deal-analysis';
import { NEXT_STEP_SYSTEM_PROMPT } from '../../domain/next-step-prompt';
import {
  B24_API_KEY,
  ensureVibeApiKey,
  getVibeAuthorizationHeader
} from '../../utils/b24';

const VIBE_BASE_URL = 'https://vibecode.bitrix24.tech/v1';
const DEFAULT_AI_MODEL = 'bitrix/bitrixgpt-5.5';

type AnalyzeMode = 'preview' | 'live';

export default defineEventHandler(async (event) => {
  const authHeader = getVibeAuthorizationHeader(event);
  const body = await readBody<{
    dealId?: number | string;
    mode?: AnalyzeMode;
    recommendation?: AiRecommendation;
  }>(event);

  if (!body?.dealId) {
    throw createError({ statusCode: 400, statusMessage: 'Missing dealId parameter' });
  }
  if (!authHeader) {
    throw createError({ statusCode: 401, statusMessage: 'Missing authorization header' });
  }
  ensureVibeApiKey();

  const dealId = Number(body.dealId);
  if (!Number.isFinite(dealId) || dealId <= 0) {
    throw createError({ statusCode: 400, statusMessage: 'Deal ID должен быть положительным числом.' });
  }

  const headers = {
    'X-Api-Key': B24_API_KEY,
    Authorization: authHeader,
    'Content-Type': 'application/json'
  };

  try {
    const bundle = await loadDealBundle({ dealId, headers });
    const context = buildDealContext(bundle);
    const rawRecommendation = body.recommendation || await getAiRecommendation({ context, headers });

    const recommendation = ensureFutureRecommendationDeadline(rawRecommendation);
    const validated = validateAiRecommendation(recommendation);
    const timelineLogPayload = buildTimelineLogPayload({ dealId, recommendation: validated });

    if (body.mode !== 'live') {
      return {
        success: true,
        data: {
          mode: 'preview',
          context,
          recommendation: validated,
          timelineLogPayload
        }
      };
    }

    const activityPayload = buildActivityPayload({
      dealId,
      recommendation: validated,
      communications: context.deal.communications
    });
    const created = await createCrmActivity({ activityPayload, headers });
    const createdActivityId = created?.id ?? created?.ID ?? created?.activity?.id ?? created?.activityId ?? null;
    const logPayload = buildTimelineLogPayload({ dealId, recommendation: validated, activityId: createdActivityId });
    const timelineLog = await safeCreateTimelineLog({ payload: logPayload, headers });

    return {
      success: true,
      data: {
        mode: 'live',
        context,
        recommendation: validated,
        activityPayload,
        timelineLogPayload: logPayload,
        createdActivityId,
        pinnedTimelineLogId: timelineLog?.id ?? timelineLog?.ID ?? null
      }
    };
  } catch (error: any) {
    throw createError({
      statusCode: error?.statusCode || 500,
      statusMessage: error?.message || 'Не удалось выполнить AI-анализ сделки.'
    });
  }
});

async function loadDealBundle({ dealId, headers }: { dealId: number; headers: Record<string, string> }) {
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
        limit: 200
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

async function loadCrmMessages({ dealId, headers }: { dealId: number; headers: Record<string, string> }) {
  try {
    const chat = await requestVibe(`/chats/find?entityType=CRM&entityId=DEAL|${dealId}`, { headers });
    const dialogId = chat?.dialogId ?? chat?.id ?? chat?.chatId;
    if (!dialogId) {
      return [];
    }

    return await requestVibe(`/chats/${encodeURIComponent(String(dialogId))}/messages?limit=100`, { headers });
  } catch {
    return [];
  }
}

async function getAiRecommendation({ context, headers }: { context: unknown; headers: Record<string, string> }) {
  const response = await requestRaw(`${VIBE_BASE_URL}/chat/completions`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      model: process.env.VIBE_AI_MODEL || DEFAULT_AI_MODEL,
      messages: buildPromptMessages({
        context: {
          currentTime: new Date().toISOString(),
          context
        },
        systemPrompt: NEXT_STEP_SYSTEM_PROMPT
      }),
      temperature: 0.2,
      tools: [CRM_ACTIVITY_RECOMMENDATION_TOOL],
      tool_choice: {
        type: 'function',
        function: { name: CRM_ACTIVITY_RECOMMENDATION_TOOL.function.name }
      }
    })
  });

  const message = response?.choices?.[0]?.message ?? response?.message;
  const toolCall = message?.tool_calls?.find((call: any) => call?.function?.name === CRM_ACTIVITY_RECOMMENDATION_TOOL.function.name)
    ?? message?.toolCalls?.find((call: any) => call?.function?.name === CRM_ACTIVITY_RECOMMENDATION_TOOL.function.name);
  const argumentsValue = toolCall?.function?.arguments ?? toolCall?.arguments;
  if (typeof argumentsValue === 'string') {
    return JSON.parse(argumentsValue);
  }
  if (argumentsValue && typeof argumentsValue === 'object') {
    return argumentsValue;
  }
  throw new Error('AI response does not contain a CRM activity recommendation');
}

async function createCrmActivity({ activityPayload, headers }: { activityPayload: Record<string, unknown>; headers: Record<string, string> }) {
  return requestVibe('/activities', {
    method: 'POST',
    headers,
    body: activityPayload
  });
}

async function safeCreateTimelineLog({ payload, headers }: { payload: Record<string, unknown>; headers: Record<string, string> }) {
  try {
    return await requestVibe('/timeline-logs', {
      method: 'POST',
      headers,
      body: payload
    });
  } catch (error) {
    console.warn('AI timeline log creation failed:', error);
    return null;
  }
}

async function safeRequestVibe(path: string, options: RequestOptions) {
  try {
    return await requestVibe(path, options);
  } catch {
    return [];
  }
}

type RequestOptions = {
  method?: string;
  headers: Record<string, string>;
  body?: unknown;
};

async function requestVibe(path: string, options: RequestOptions) {
  return requestRaw(`${VIBE_BASE_URL}${path}`, {
    method: options.method || 'GET',
    headers: options.headers,
    body: options.body ? JSON.stringify(options.body) : undefined
  });
}

async function requestRaw(url: string, options: RequestInit) {
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

function toItems(value: unknown): Record<string, any>[] {
  if (Array.isArray(value)) {
    return value;
  }
  if (value && typeof value === 'object') {
    const record = value as Record<string, unknown>;
    const items = record.items ?? record.results ?? record.data;
    return Array.isArray(items) ? items as Record<string, any>[] : [];
  }
  return [];
}
