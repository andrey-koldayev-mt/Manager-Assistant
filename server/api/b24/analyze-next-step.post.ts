import {
  CRM_ACTIVITY_RECOMMENDATION_TOOL,
  buildActivityPayload,
  buildDealContext,
  buildLinkedTaskPayload,
  buildPromptMessages,
  buildTimelineLogPayload,
  ensureFutureRecommendationDeadline,
  validateAiRecommendation,
  type AiRecommendation
} from '../../domain/deal-analysis';
import { NEXT_STEP_SYSTEM_PROMPT } from '../../domain/next-step-prompt';
import { loadDealBundle, requestVibe, requestVibeRaw } from '../../utils/deal-bundle';
import { enrichCallTranscripts } from '../../utils/call-transcripts';
import {
  B24_API_KEY,
  ensureVibeApiKey,
  getVibeAuthorizationHeader
} from '../../utils/b24';

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
    throw createError({ statusCode: 401, statusMessage: 'Vibe Gateway session is missing. Reopen the widget from the deal card.' });
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
    const transcriptStats = await enrichCallTranscripts({ dealId, bundle, headers });
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
          context: { ...context, transcriptStats },
          recommendation: validated,
          timelineLogPayload
        }
      };
    }

    let activityPayload: Record<string, unknown> | null = null;
    let taskPayload: Record<string, unknown> | null = null;
    try {
      if (validated.activityType === 'Todo') {
        taskPayload = buildLinkedTaskPayload({ dealId, recommendation: validated });
      } else {
        activityPayload = buildActivityPayload({
          dealId,
          contactId: context.deal.contactId,
          recommendation: validated,
          communications: context.deal.communications
        });
      }
    } catch (error: any) {
      throw createError({
        statusCode: 422,
        statusMessage: error?.message || 'Не удалось подготовить действие в CRM.'
      });
    }
    const isTask = validated.activityType === 'Todo';
    const created = isTask
      ? await createCrmTask({ taskPayload: taskPayload!, headers })
      : await createCrmActivity({ activityPayload: activityPayload!, headers });
    const createdId = created?.id ?? created?.ID ?? created?.task?.id ?? created?.taskId ?? created?.activity?.id ?? created?.activityId ?? null;
    const logPayload = buildTimelineLogPayload({ dealId, recommendation: validated, activityId: createdId });
    const timelineLog = await safeCreateTimelineLog({ payload: logPayload, headers });

    return {
      success: true,
      data: {
        mode: 'live',
        context: { ...context, transcriptStats },
        recommendation: validated,
        activityPayload: activityPayload ?? taskPayload,
        timelineLogPayload: logPayload,
        createdActivityId: createdId,
        createdEntityType: isTask ? 'task' : 'activity',
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

async function getAiRecommendation({ context, headers }: { context: unknown; headers: Record<string, string> }) {
  const response = await requestVibeRaw('https://vibecode.bitrix24.tech/v1/chat/completions', {
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

async function createCrmTask({ taskPayload, headers }: { taskPayload: Record<string, unknown>; headers: Record<string, string> }) {
  return requestVibe('/tasks', {
    method: 'POST',
    headers,
    body: taskPayload
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
