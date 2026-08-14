const DEAL_ENTITY_TYPE_ID = 2;

export const AI_ACTIVITY_TYPES = ['Call', 'Meeting', 'Todo', 'Email'] as const;

export type AiActivityType = typeof AI_ACTIVITY_TYPES[number];

export type ContactCommunication = {
  type: 'PHONE' | 'EMAIL';
  value: string;
};

export type DealBundle = {
  deal: Record<string, any>;
  linkedLead?: Record<string, any> | null;
  timelines?: Record<string, any>[];
  activities?: Record<string, any>[];
  messages?: Record<string, any>[];
  contact?: Record<string, any> | null;
};

export type AiRecommendation = {
  title: string;
  description: string;
  deadline: string;
  responsibleId: number;
  activityType: AiActivityType;
  importantDetails: string[];
  justification: string[];
  sourceSignals: string[];
};

export function buildDealContext({ deal, linkedLead = null, timelines = [], activities = [], messages = [], contact = null }: DealBundle) {
  if (!deal || !Number.isFinite(Number(deal.id ?? deal.ID))) {
    throw new Error('deal is required');
  }

  const history = [
    ...activities.map(normalizeActivity),
    ...timelines.map(normalizeTimeline),
    ...messages.map(normalizeMessage)
  ]
    .filter((entry) => entry.text || entry.title)
    .sort((a, b) => new Date(a.at).getTime() - new Date(b.at).getTime());

  const dealId = Number(deal.id ?? deal.ID);

  return {
    deal: {
      id: dealId,
      title: deal.title ?? deal.name ?? deal.TITLE ?? `Сделка ${dealId}`,
      stageId: deal.stageId ?? deal.stage ?? deal.STAGE_ID ?? null,
      amount: deal.amount ?? deal.opportunity ?? deal.OPPORTUNITY ?? null,
      currencyId: deal.currencyId ?? deal.currency ?? deal.CURRENCY_ID ?? null,
      assignedById: numberOrNull(deal.assignedById ?? deal.responsibleId ?? deal.ASSIGNED_BY_ID),
      contactId: numberOrNull(deal.contactId ?? deal.CONTACT_ID),
      companyId: numberOrNull(deal.companyId ?? deal.COMPANY_ID),
      linkedLeadId: numberOrNull(linkedLead?.id ?? linkedLead?.ID ?? deal.leadId ?? deal.LEAD_ID),
      communications: extractContactCommunications(contact)
    },
    history,
    sourceStats: {
      comments: timelines.length,
      wazzupComments: timelines.filter(isWazzupComment).length,
      activities: activities.length,
      messages: messages.length,
      leadActivities: activities.filter((item) => item.sourceEntityType === 'lead').length,
      leadMessages: messages.filter((item) => item.sourceEntityType === 'lead').length
    }
  };
}

export function detectNativeAiTodo(activities: Record<string, any>[] = []) {
  return activities.find((activity) => {
    const completed = activity.completed === true || activity.completed === 'Y' || activity.status === 'completed';
    if (completed) {
      return false;
    }

    const haystack = [
      activity.subject,
      activity.title,
      activity.description,
      activity.providerId,
      activity.providerTypeId,
      activity.originatorId,
      activity.originId
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();

    return /\bai\b|copilot|битрикс\s*ai|штатн/.test(haystack);
  }) ?? null;
}

export function validateAiRecommendation(value: any, now = new Date()): AiRecommendation {
  if (!value || typeof value !== 'object') {
    throw new Error('AI recommendation must be an object');
  }

  for (const field of ['title', 'description', 'deadline', 'activityType']) {
    if (typeof value[field] !== 'string' || value[field].trim().length === 0) {
      throw new Error(`${field} is required`);
    }
  }

  const deadline = new Date(value.deadline);
  if (Number.isNaN(deadline.getTime())) {
    throw new Error('deadline must be a valid ISO date');
  }
  if (deadline.getTime() <= now.getTime()) {
    throw new Error('deadline must be in the future');
  }

  const responsibleId = Number(value.responsibleId);
  if (!Number.isFinite(responsibleId) || responsibleId <= 0) {
    throw new Error('responsibleId must be a positive number');
  }

  const activityType = normalizeActivityType(value.activityType);
  if (!activityType) {
    throw new Error(`activityType must be one of: ${AI_ACTIVITY_TYPES.join(', ')}`);
  }

  return {
    title: value.title.trim(),
    description: value.description.trim(),
    deadline: value.deadline,
    responsibleId,
    activityType,
    importantDetails: toStringArray(value.importantDetails),
    justification: toStringArray(value.justification),
    sourceSignals: toStringArray(value.sourceSignals)
  };
}

export function ensureFutureRecommendationDeadline(value: any, now = new Date()) {
  if (!value || typeof value !== 'object') {
    return value;
  }

  const deadline = new Date(value.deadline);
  if (!Number.isNaN(deadline.getTime()) && deadline.getTime() > now.getTime()) {
    return value;
  }

  return {
    ...value,
    deadline: buildFallbackDeadline(now)
  };
}

export function buildActivityPayload({ dealId, contactId, recommendation, communications }: {
  dealId: number | string;
  contactId: number | string | null;
  recommendation: AiRecommendation;
  communications: ContactCommunication[];
}) {
  const numericDealId = Number(dealId);
  if (!Number.isFinite(numericDealId) || numericDealId <= 0) {
    throw new Error('dealId must be a positive number');
  }

  const validated = validateAiRecommendation(recommendation, new Date(0));
  const numericContactId = Number(contactId);
  const communication = selectCommunication(validated.activityType, communications);
  if (!communication || !Number.isFinite(numericContactId) || numericContactId <= 0) {
    const required = validated.activityType === 'Call' ? 'номер телефона' :
      validated.activityType === 'Email' ? 'email' : 'контактный канал';
    throw new Error(`Невозможно создать ${activityTypeLabel(validated.activityType)}: у контакта не найден ${required} или он не привязан к сделке.`);
  }

  const endTime = new Date(validated.deadline);
  const startTime = new Date(endTime.getTime() - 30 * 60 * 1000);

  return {
    ownerTypeId: DEAL_ENTITY_TYPE_ID,
    ownerId: numericDealId,
    subject: validated.title,
    typeId: activityTypeId(validated.activityType),
    startTime: startTime.toISOString(),
    endTime: endTime.toISOString(),
    deadline: endTime.toISOString(),
    description: validated.description,
    responsibleId: validated.responsibleId,
    completed: false,
    communications: [{
      VALUE: communication.value,
      ENTITY_TYPE_ID: 3,
      ENTITY_ID: numericContactId
    }]
  };
}

export function buildLinkedTaskPayload({ dealId, recommendation }: { dealId: number | string; recommendation: AiRecommendation }) {
  const numericDealId = Number(dealId);
  return {
    title: recommendation.title,
    description: recommendation.description,
    responsibleId: recommendation.responsibleId,
    deadline: recommendation.deadline,
    priority: 1,
    UF_CRM_TASK: [`D_${numericDealId}`]
  };
}

export function buildTimelineLogPayload({ dealId, recommendation, activityId }: {
  dealId: number | string;
  recommendation: AiRecommendation;
  activityId?: number | string | null;
}) {
  return {
    entityTypeId: DEAL_ENTITY_TYPE_ID,
    entityId: Number(dealId),
    title: 'AI: следующий шаг менеджера',
    text: [
      `Рекомендованное дело${activityId ? ` #${activityId}` : ''}: ${recommendation.title}`,
      '',
      recommendation.description
    ].join('\n'),
    iconCode: 'ai'
  };
}

export function buildPromptMessages({ context, systemPrompt }: { context: unknown; systemPrompt: string }) {
  return [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: JSON.stringify(context, null, 2) }
  ];
}

export const CRM_ACTIVITY_RECOMMENDATION_TOOL = {
  type: 'function',
  function: {
    name: 'recommend_crm_activity',
    description: 'Выбирает одну CRM-активность, которую менеджер создаст после ручного подтверждения.',
    parameters: {
      type: 'object',
      additionalProperties: false,
      required: ['title', 'description', 'deadline', 'responsibleId', 'activityType', 'importantDetails', 'justification', 'sourceSignals'],
      properties: {
        title: { type: 'string', description: 'Короткое название активности на русском.' },
        description: { type: 'string', description: 'Готовый практичный текст для менеджера.' },
        deadline: { type: 'string', description: 'Будущая дата и время в ISO-8601 с timezone.' },
        responsibleId: { type: 'number', description: 'ID ответственного менеджера.' },
        activityType: { type: 'string', enum: AI_ACTIVITY_TYPES, description: 'Тип создаваемого CRM-действия.' },
        importantDetails: { type: 'array', items: { type: 'string' } },
        justification: { type: 'array', items: { type: 'string' } },
        sourceSignals: { type: 'array', items: { type: 'string' } }
      }
    }
  }
} as const;

function normalizeActivity(activity: Record<string, any>) {
  return {
    id: `${activity.sourceEntityType ?? 'deal'}:activity:${activity.id ?? activity.ID}`,
    at: activity.createdAt ?? activity.deadline ?? activity.startTime ?? activity.dateCreate ?? new Date(0).toISOString(),
    channel: sourceLabel(activity, activity.activityType ?? activity.typeName ?? activity.providerTypeId ?? activity.typeId ?? activity.TYPE_ID ?? 'activity'),
    author: activity.authorName ?? activity.responsibleName ?? null,
    title: activity.subject ?? activity.title ?? '',
    text: activity.transcript ?? activity.transcription ?? activity.description ?? activity.text ?? activity.comment ?? ''
  };
}

function normalizeTimeline(item: Record<string, any>) {
  return {
    id: `${item.sourceEntityType ?? 'deal'}:timeline:${item.id ?? item.ID}`,
    at: item.createdAt ?? item.dateCreate ?? item.updatedAt ?? new Date(0).toISOString(),
    channel: sourceLabel(item, isWazzupComment(item) ? 'wazzup' : item.type ?? item.typeName ?? 'timeline'),
    author: item.authorName ?? item.userName ?? null,
    title: item.title ?? item.subject ?? '',
    text: item.text ?? item.description ?? item.comment ?? ''
  };
}

function extractContactCommunications(contact: Record<string, any> | null): ContactCommunication[] {
  if (!contact) {
    return [];
  }

  return [
    ...extractCommunicationValues(contact.phone ?? contact.PHONE ?? contact.phones ?? contact.PHONES, 'PHONE'),
    ...extractCommunicationValues(contact.email ?? contact.EMAIL ?? contact.emails ?? contact.EMAILS, 'EMAIL')
  ].filter((communication, index, all) => (
    all.findIndex((item) => item.type === communication.type && item.value === communication.value) === index
  ));
}

function extractCommunicationValues(value: unknown, type: ContactCommunication['type']): ContactCommunication[] {
  const values = Array.isArray(value) ? value : [value];
  return values
    .map((item) => typeof item === 'object' && item
      ? (item as Record<string, unknown>).value ?? (item as Record<string, unknown>).VALUE
      : item)
    .filter((item): item is string => typeof item === 'string' && item.trim().length > 0)
    .map((item) => ({ type, value: item.trim() }));
}

function selectCommunication(activityType: AiActivityType, communications: ContactCommunication[]) {
  if (activityType === 'Call') {
    return communications.find((item) => item.type === 'PHONE') ?? null;
  }
  if (activityType === 'Email') {
    return communications.find((item) => item.type === 'EMAIL') ?? null;
  }
  return communications[0] ?? null;
}

function normalizeActivityType(value: string): AiActivityType | null {
  const normalized = value.trim().toLowerCase();
  return AI_ACTIVITY_TYPES.find((type) => type.toLowerCase() === normalized) ?? null;
}

function activityTypeId(activityType: AiActivityType): number {
  return { Call: 2, Meeting: 1, Todo: 3, Email: 4 }[activityType];
}

function activityTypeLabel(activityType: AiActivityType): string {
  return { Call: 'звонок', Meeting: 'встречу', Todo: 'задачу', Email: 'email' }[activityType];
}

function isWazzupComment(item: Record<string, any>) {
  return [item.providerId, item.providerTypeId, item.originatorId, item.originId, item.title, item.text, item.comment]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
    .includes('wazzup');
}

function normalizeMessage(message: Record<string, any>) {
  return {
    id: `${message.sourceEntityType ?? 'deal'}:message:${message.id ?? message.ID}`,
    at: message.date ?? message.createdAt ?? message.dateCreate ?? new Date(0).toISOString(),
    channel: sourceLabel(message, 'chat'),
    author: message.authorName ?? message.senderName ?? message.userName ?? null,
    title: message.chatTitle ?? message.dialogId ?? '',
    text: message.text ?? message.message ?? ''
  };
}

function sourceLabel(item: Record<string, any>, channel: string) {
  return item.sourceEntityType === 'lead' ? `lead:${channel}` : channel;
}

function numberOrNull(value: unknown) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : null;
}

function toStringArray(value: unknown) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((item) => typeof item === 'string' && item.trim())
    .map((item) => item.trim());
}

function buildFallbackDeadline(now: Date) {
  const fallback = new Date(now.getTime() + 2 * 60 * 60 * 1000);
  fallback.setMinutes(0, 0, 0);

  return fallback.toISOString();
}
