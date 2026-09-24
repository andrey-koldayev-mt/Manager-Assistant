import type { NavigatorChannel } from '../../shared/objection-navigator';

export type ObjectionAiRecommendation = {
  scenarioId: string;
  channel: NavigatorChannel;
  situation: string;
  recommendedAction: string;
  responseText: string;
  rationale: string[];
  sourceSignals: string[];
};

export const OBJECTION_RECOMMENDATION_TOOL = {
  type: 'function',
  function: {
    name: 'recommend_objection_response',
    description: 'Формирует персональную рекомендацию для отработки возражения по фактам сделки.',
    parameters: {
      type: 'object',
      additionalProperties: false,
      required: ['scenarioId', 'channel', 'situation', 'recommendedAction', 'responseText', 'rationale', 'sourceSignals'],
      properties: {
        scenarioId: { type: 'string' },
        channel: { type: 'string', enum: ['call', 'remote', 'message'] },
        situation: { type: 'string' },
        recommendedAction: { type: 'string' },
        responseText: { type: 'string' },
        rationale: { type: 'array', items: { type: 'string' } },
        sourceSignals: { type: 'array', items: { type: 'string' } }
      }
    }
  }
} as const;

export const OBJECTION_SYSTEM_PROMPT = `Ты помогаешь менеджеру по продажам туров отработать конкретное возражение клиента.

Работай только по фактам, которые есть в контексте сделки: карточка, активности, комментарии таймлайна, сообщения мессенджеров и email, а также транскрипции звонков. История отсортирована по времени; при противоречиях учитывай более свежую запись. Не используй системные идентификаторы стадий и не называй стадии иначе, чем человекочитаемым названием из контекста.

Правила:
- Выбери один сценарий и один доступный для него канал из каталога, переданного в контексте.
- Объясни ситуацию через 1-3 конкретных сигнала из истории. В sourceSignals укажи краткие фактические ссылки на записи: канал, дата и суть. Не выдумывай сигналы.
- Сформулируй responseText специально для этой сделки. Используй имя, направление, отель, бюджет, договоренность или вопрос клиента только когда они явно есть в контексте.
- Не копируй шаблон каталога и не выдавай общую заготовку. Если фактов недостаточно, прямо укажи недостающий факт и сформулируй один уточняющий вопрос вместо предположений.
- Не обещай скидку, наличие, изменение цены, условия оплаты, личный опыт, гарантии или действия третьих лиц, если этого нет в данных сделки.
- Не дави на клиента, не спорь и не создавай CRM-сущности. Рекомендация предназначена только для ручной отправки менеджером.
- responseText должен быть коротким: для мессенджера 2-3 абзаца, для звонка или удаленной продажи - естественная реплика и один вопрос в конце.
`;

export function validateObjectionRecommendation(value: unknown, allowedScenarioIds: Set<string>): ObjectionAiRecommendation {
  if (!value || typeof value !== 'object') throw new Error('AI recommendation must be an object');
  const record = value as Record<string, unknown>;
  const scenarioId = stringValue(record.scenarioId);
  const channel = stringValue(record.channel) as NavigatorChannel;
  const situation = stringValue(record.situation);
  const recommendedAction = stringValue(record.recommendedAction);
  const responseText = stringValue(record.responseText);

  if (!allowedScenarioIds.has(scenarioId)) throw new Error('AI returned an unknown objection scenario');
  if (!['call', 'remote', 'message'].includes(channel)) throw new Error('AI returned an unknown communication channel');
  if (!situation || !recommendedAction || !responseText) throw new Error('AI recommendation is incomplete');

  return {
    scenarioId,
    channel,
    situation,
    recommendedAction,
    responseText,
    rationale: stringArray(record.rationale),
    sourceSignals: stringArray(record.sourceSignals)
  };
}

function stringValue(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function stringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === 'string' && item.trim()).map((item) => item.trim())
    : [];
}
