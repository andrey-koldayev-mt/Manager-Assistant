import { buildDealContext, type AiRecommendation } from '../../domain/deal-analysis';
import { loadDealBundle, requestVibeRaw } from '../../utils/deal-bundle';
import { enrichCallTranscripts } from '../../utils/call-transcripts';
import { B24_API_KEY, ensureVibeApiKey, getVibeAuthorizationHeader } from '../../utils/b24';

const DEFAULT_AI_MODEL = 'bitrix/bitrixgpt-5.5';
const MAX_QUESTION_LENGTH = 4000;
const MAX_HISTORY_MESSAGES = 8;

type ChatMessage = { role: 'user' | 'assistant'; content: string };

export default defineEventHandler(async (event) => {
  const authHeader = getVibeAuthorizationHeader(event);
  const body = await readBody<{
    dealId?: number | string;
    question?: string;
    recommendation?: AiRecommendation;
    history?: ChatMessage[];
  }>(event);
  const question = body?.question?.trim() || '';
  const dealId = Number(body?.dealId);

  if (!Number.isFinite(dealId) || dealId <= 0) {
    throw createError({ statusCode: 400, statusMessage: 'Deal ID должен быть положительным числом.' });
  }
  if (!question || question.length > MAX_QUESTION_LENGTH) {
    throw createError({ statusCode: 400, statusMessage: `Вопрос должен содержать от 1 до ${MAX_QUESTION_LENGTH} символов.` });
  }
  if (!authHeader) {
    throw createError({ statusCode: 401, statusMessage: 'Missing authorization header' });
  }
  ensureVibeApiKey();

  const headers = { 'X-Api-Key': B24_API_KEY, Authorization: authHeader, 'Content-Type': 'application/json' };
  try {
    const bundle = await loadDealBundle({ dealId, headers });
    const transcriptStats = await enrichCallTranscripts({ dealId, bundle, headers });
    const context = { ...buildDealContext(bundle), transcriptStats };
    const response = await requestVibeRaw('https://vibecode.bitrix24.tech/v1/chat/completions', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        model: process.env.VIBE_AI_MODEL || DEFAULT_AI_MODEL,
        temperature: 0.2,
        messages: [
          {
            role: 'system',
            content: 'Ты AI CRM Sales Assistant для Bitrix24. Отвечай на русском, коротко и по делу. Используй только факты из контекста сделки и текущей рекомендации. Можно обсуждать всю сделку, историю коммуникаций и предложенное дело. Не выдумывай детали; если данных нет, скажи, что именно нужно уточнить. Не раскрывай внутренние рассуждения модели и не создавай CRM-сущности.'
          },
          { role: 'user', content: `Контекст сделки:\n${JSON.stringify(context)}\n\nТекущая AI-рекомендация:\n${JSON.stringify(body?.recommendation ?? null)}` },
          ...normalizeHistory(body?.history),
          { role: 'user', content: question }
        ]
      })
    });
    const answer = extractAnswer(response);
    if (!answer) throw new Error('AI не вернул текстовый ответ.');
    return { success: true, data: { answer } };
  } catch (error: any) {
    throw createError({ statusCode: error?.statusCode || 500, statusMessage: error?.message || 'Не удалось получить ответ AI.' });
  }
});

function normalizeHistory(value: unknown): ChatMessage[] {
  if (!Array.isArray(value)) return [];
  return value.slice(-MAX_HISTORY_MESSAGES).flatMap((message): ChatMessage[] => {
    if (!message || typeof message !== 'object') return [];
    const candidate = message as Partial<ChatMessage>;
    return (candidate.role === 'user' || candidate.role === 'assistant') && typeof candidate.content === 'string' && candidate.content.trim()
      ? [{ role: candidate.role, content: candidate.content.trim().slice(0, MAX_QUESTION_LENGTH) }]
      : [];
  });
}

function extractAnswer(response: any): string {
  const content = response?.choices?.[0]?.message?.content ?? response?.message?.content ?? response?.content;
  if (typeof content === 'string') return content.trim();
  if (Array.isArray(content)) return content.map((item) => item?.text ?? '').join('').trim();
  return '';
}
