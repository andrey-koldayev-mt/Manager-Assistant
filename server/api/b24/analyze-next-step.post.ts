import {
  buildDealContext,
  buildLinkedTaskPayload,
  buildPromptMessages,
  buildTimelineLogPayload,
  buildTodoPayload,
  detectNativeAiTodo,
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
    const nativeAiTodo = detectNativeAiTodo(bundle.activities);
    const recommendation = body.recommendation
      ? validateAiRecommendation(body.recommendation)
      : nativeAiTodo
        ? copyNativeAiTodo(nativeAiTodo, context.deal.assignedById)
        : await getAiRecommendation({ context, headers });

    const validated = validateAiRecommendation(recommendation);
    const todoPayload = buildTodoPayload({ dealId, recommendation: validated });
    const timelineLogPayload = buildTimelineLogPayload({ dealId, recommendation: validated });

    if (body.mode !== 'live') {
      return {
        success: true,
        data: {
          mode: 'preview',
          context,
          nativeAiTodoFound: Boolean(nativeAiTodo),
          recommendation: validated,
          todoPayload,
          timelineLogPayload
        }
      };
    }

    const created = await createCrmTodo({ dealId, recommendation: validated, todoPayload, headers });
    const createdActivityId = created?.id ?? created?.ID ?? created?.activity?.id ?? created?.activityId ?? null;
    const logPayload = buildTimelineLogPayload({ dealId, recommendation: validated, activityId: createdActivityId });
    const timelineLog = await safeCreateTimelineLog({ payload: logPayload, headers });

    return {
      success: true,
      data: {
        mode: 'live',
        context,
        nativeAiTodoFound: Boolean(nativeAiTodo),
        recommendation: validated,
        todoPayload,
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
  const [deal, timelines, activities, messages] = await Promise.all([
    requestVibe(`/deals/${dealId}`, { headers }),
    safeRequestVibe('/timelines/search', {
      headers,
      method: 'POST',
      body: {
        filter: { entityTypeId: 2, entityId: dealId },
        sort: 'createdAt',
        limit: 200
      }
    }),
    safeRequestVibe('/activities/search', {
      headers,
      method: 'POST',
      body: {
        filter: { ownerTypeId: 2, ownerId: dealId },
        sort: 'createdAt',
        limit: 200
      }
    }),
    loadCrmMessages({ dealId, headers })
  ]);

  return {
    deal,
    timelines: Array.isArray(timelines) ? timelines : [],
    activities: Array.isArray(activities) ? activities : [],
    messages: Array.isArray(messages) ? messages : []
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
      messages: buildPromptMessages({ context, systemPrompt: NEXT_STEP_SYSTEM_PROMPT }),
      temperature: 0.2,
      response_format: { type: 'json_object' }
    })
  });

  const content = response?.choices?.[0]?.message?.content ?? response?.message?.content ?? response?.content;
  if (typeof content !== 'string') {
    throw new Error('AI response does not contain text content');
  }

  return JSON.parse(content);
}

async function createCrmTodo({
  dealId,
  recommendation,
  todoPayload,
  headers
}: {
  dealId: number;
  recommendation: AiRecommendation;
  todoPayload: Record<string, unknown>;
  headers: Record<string, string>;
}) {
  try {
    return await requestVibe('/activities', {
      method: 'POST',
      headers,
      body: todoPayload
    });
  } catch (error) {
    console.warn('AI todo activity creation failed, falling back to linked task:', error);
    return await requestVibe('/tasks', {
      method: 'POST',
      headers,
      body: buildLinkedTaskPayload({ dealId, recommendation })
    });
  }
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

function copyNativeAiTodo(activity: Record<string, any>, fallbackResponsibleId: number | null) {
  const deadline = activity.deadline ?? activity.endTime ?? new Date(Date.now() + 60 * 60 * 1000).toISOString();
  return {
    title: activity.subject ?? activity.title ?? 'AI: следующий шаг по сделке',
    description: activity.description ?? activity.text ?? activity.comment ?? '',
    deadline,
    responsibleId: Number(activity.responsibleId ?? fallbackResponsibleId ?? 1),
    activityType: activity.activityType ?? 'Todo',
    importantDetails: ['Найдено открытое штатное AI-дело Bitrix24; создана копия по требованию сценария.'],
    justification: ['В сделке уже есть открытая рекомендация штатного AI на базе коммуникаций.'],
    sourceSignals: [`activity:${activity.id ?? activity.ID}`]
  };
}
