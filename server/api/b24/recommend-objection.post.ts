import {
  OBJECTION_SCENARIOS,
  getScenario,
  getScenarioChannels
} from '../../../shared/objection-navigator';
import { buildDealContext, buildPromptMessages } from '../../domain/deal-analysis';
import {
  OBJECTION_RECOMMENDATION_TOOL,
  OBJECTION_SYSTEM_PROMPT,
  validateObjectionRecommendation
} from '../../domain/objection-prompt';
import { enrichCallTranscripts } from '../../utils/call-transcripts';
import { loadDealBundle, requestVibeRaw } from '../../utils/deal-bundle';
import { B24_API_KEY, ensureVibeApiKey, getVibeAuthorizationHeader } from '../../utils/b24';

const DEFAULT_AI_MODEL = 'bitrix/bitrixgpt-5.5';

export default defineEventHandler(async (event) => {
  const authHeader = getVibeAuthorizationHeader(event);
  const body = await readBody<{ dealId?: number | string; scenarioId?: string }>(event);
  const dealId = Number(body?.dealId);

  if (!Number.isInteger(dealId) || dealId <= 0) {
    throw createError({ statusCode: 400, statusMessage: 'Deal ID должен быть положительным числом.' });
  }
  if (!authHeader) {
    throw createError({ statusCode: 401, statusMessage: 'Vibe Gateway session is missing. Reopen the widget from the deal card.' });
  }
  ensureVibeApiKey();

  const requestedScenario = body?.scenarioId ? getScenario(body.scenarioId) : null;
  if (body?.scenarioId && !requestedScenario) {
    throw createError({ statusCode: 400, statusMessage: 'Выбранный сценарий не найден.' });
  }

  const headers = {
    'X-Api-Key': B24_API_KEY,
    Authorization: authHeader,
    'Content-Type': 'application/json'
  };

  try {
    const bundle = await loadDealBundle({ dealId, headers });
    const transcriptStats = await enrichCallTranscripts({ dealId, bundle, headers });
    const dealContext = buildDealContext(bundle);
    const { stageId: _stageId, stageName, ...dealWithoutSystemStage } = dealContext.deal;
    const aiDealContext = {
      ...dealContext,
      deal: {
        ...dealWithoutSystemStage,
        stage: stageName || 'Не определена'
      }
    };
    const catalogue = (requestedScenario ? [requestedScenario] : OBJECTION_SCENARIOS).map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      channels: getScenarioChannels(item)
    }));
    const response = await requestVibeRaw('https://vibecode.bitrix24.tech/v1/chat/completions', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        model: process.env.VIBE_AI_MODEL || DEFAULT_AI_MODEL,
        messages: buildPromptMessages({
          systemPrompt: OBJECTION_SYSTEM_PROMPT,
          context: {
            currentTime: new Date().toISOString(),
            selectedScenario: requestedScenario?.id || null,
            catalogue,
            deal: aiDealContext
          }
        }),
        temperature: 0.15,
        tools: [OBJECTION_RECOMMENDATION_TOOL],
        tool_choice: { type: 'function', function: { name: OBJECTION_RECOMMENDATION_TOOL.function.name } }
      })
    });
    const rawRecommendation = toolArguments(response);
    const recommendation = validateObjectionRecommendation(
      rawRecommendation,
      new Set(catalogue.map((item) => item.id))
    );
    const selected = getScenario(recommendation.scenarioId);
    if (!selected || !getScenarioChannels(selected).includes(recommendation.channel)) {
      throw new Error('AI returned a channel that is unavailable for the selected scenario');
    }

    return {
      success: true,
      data: { recommendation, transcriptStats }
    };
  } catch (error: any) {
    throw createError({
      statusCode: error?.statusCode || 500,
      statusMessage: error?.message || 'Не удалось подготовить рекомендацию по возражению.'
    });
  }
});

function toolArguments(response: any) {
  const message = response?.choices?.[0]?.message ?? response?.message;
  const toolCall = message?.tool_calls?.find((call: any) => call?.function?.name === OBJECTION_RECOMMENDATION_TOOL.function.name)
    ?? message?.toolCalls?.find((call: any) => call?.function?.name === OBJECTION_RECOMMENDATION_TOOL.function.name);
  const value = toolCall?.function?.arguments ?? toolCall?.arguments;
  if (typeof value === 'string') return JSON.parse(value);
  if (value && typeof value === 'object') return value;
  throw new Error('AI response does not contain an objection recommendation');
}
