const DEAL_ENTITY_TYPE_ID = 2;

export type DealBundle = {
  deal: Record<string, any>;
  timelines?: Record<string, any>[];
  activities?: Record<string, any>[];
  messages?: Record<string, any>[];
};

export type AiRecommendation = {
  title: string;
  description: string;
  deadline: string;
  responsibleId: number;
  activityType: string;
  importantDetails: string[];
  justification: string[];
  sourceSignals: string[];
};

export function buildDealContext({ deal, timelines = [], activities = [], messages = [] }: DealBundle) {
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
      companyId: numberOrNull(deal.companyId ?? deal.COMPANY_ID)
    },
    history,
    sourceStats: {
      timelines: timelines.length,
      activities: activities.length,
      messages: messages.length
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

  return {
    title: value.title.trim(),
    description: value.description.trim(),
    deadline: value.deadline,
    responsibleId,
    activityType: value.activityType.trim(),
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

export function buildTodoPayload({ dealId, recommendation }: { dealId: number | string; recommendation: AiRecommendation }) {
  const numericDealId = Number(dealId);
  if (!Number.isFinite(numericDealId) || numericDealId <= 0) {
    throw new Error('dealId must be a positive number');
  }

  const validated = validateAiRecommendation(recommendation, new Date(0));

  return {
    ownerTypeId: DEAL_ENTITY_TYPE_ID,
    ownerId: numericDealId,
    deadline: validated.deadline,
    title: validated.title,
    description: validated.description,
    responsibleId: validated.responsibleId,
    pingOffsets: []
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

function normalizeActivity(activity: Record<string, any>) {
  return {
    id: `activity:${activity.id ?? activity.ID}`,
    at: activity.createdAt ?? activity.deadline ?? activity.startTime ?? activity.dateCreate ?? new Date(0).toISOString(),
    channel: activity.activityType ?? activity.typeName ?? activity.providerTypeId ?? 'activity',
    author: activity.authorName ?? activity.responsibleName ?? null,
    title: activity.subject ?? activity.title ?? '',
    text: activity.description ?? activity.text ?? activity.comment ?? ''
  };
}

function normalizeTimeline(item: Record<string, any>) {
  return {
    id: `timeline:${item.id ?? item.ID}`,
    at: item.createdAt ?? item.dateCreate ?? item.updatedAt ?? new Date(0).toISOString(),
    channel: item.type ?? item.typeName ?? 'timeline',
    author: item.authorName ?? item.userName ?? null,
    title: item.title ?? item.subject ?? '',
    text: item.text ?? item.description ?? item.comment ?? ''
  };
}

function normalizeMessage(message: Record<string, any>) {
  return {
    id: `message:${message.id ?? message.ID}`,
    at: message.date ?? message.createdAt ?? message.dateCreate ?? new Date(0).toISOString(),
    channel: 'chat',
    author: message.authorName ?? message.senderName ?? message.userName ?? null,
    title: message.chatTitle ?? message.dialogId ?? '',
    text: message.text ?? message.message ?? ''
  };
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
