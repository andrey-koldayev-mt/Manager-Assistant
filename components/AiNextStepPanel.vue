<script setup lang="ts">
import CircleCheckIcon from '@bitrix24/b24icons-vue/main/CircleCheckIcon';
import RocketIcon from '@bitrix24/b24icons-vue/main/RocketIcon';
import WarningIcon from '@bitrix24/b24icons-vue/main/WarningIcon';

type AnalyzeResult = {
  mode: 'preview' | 'live';
  recommendation: {
    title: string;
    description: string;
    deadline: string;
    responsibleId: number;
    activityType: string;
    importantDetails: string[];
    justification: string[];
    sourceSignals: string[];
  };
  context?: {
    sourceStats?: {
      comments: number;
      wazzupComments: number;
      activities: number;
      messages: number;
      leadActivities?: number;
      leadMessages?: number;
    };
    transcriptStats?: {
      calls: number;
      native: number;
      cached: number;
      transcribed: number;
      unavailable: number;
    };
  };
  createdActivityId?: number | string | null;
  createdEntityType?: 'activity';
  pinnedTimelineLogId?: number | string | null;
};

type ChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

const props = defineProps<{
  dealId: number | null;
  agentName: string;
  clientName: string;
  loadingContext?: boolean;
}>();

const toast = useToast();
const pending = ref(false);
const creating = ref(false);
const asking = ref(false);
const errorMessage = ref('');
const result = ref<AnalyzeResult | null>(null);
const question = ref('');
const chatMessages = ref<ChatMessage[]>([]);
const chatScroll = ref<HTMLElement | null>(null);

const canAnalyze = computed(() => Boolean(props.dealId) && !pending.value && !creating.value && !props.loadingContext);
const canCreate = computed(() => Boolean(result.value?.recommendation) && !creating.value && !pending.value);
const canAskAi = computed(() => Boolean(props.dealId && result.value?.recommendation && question.value.trim() && !asking.value));
const activityLabel = 'дело';

const formattedDeadline = computed(() => {
  const value = result.value?.recommendation.deadline;
  if (!value) {
    return '';
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
});

async function analyze() {
  if (!props.dealId || !canAnalyze.value) {
    return;
  }

  pending.value = true;
  errorMessage.value = '';

  try {
    const response = await $fetch('/api/b24/analyze-next-step', {
      method: 'POST',
      credentials: 'same-origin',
      body: {
        dealId: props.dealId,
        mode: 'preview'
      }
    }) as { success: boolean; data: AnalyzeResult };

    result.value = response.data;
    chatMessages.value = [];
    toast.add({
      title: 'AI-рекомендация готова',
      description: 'Проверьте следующий шаг перед созданием дела.',
      color: 'air-primary-success',
      icon: CircleCheckIcon
    });
  } catch (error: any) {
    errorMessage.value = error?.statusMessage || error?.message || 'Не удалось выполнить анализ сделки.';
    toast.add({
      title: 'Ошибка анализа',
      description: errorMessage.value,
      color: 'air-primary-alert',
      icon: WarningIcon
    });
  } finally {
    pending.value = false;
  }
}

async function askAi() {
  const text = question.value.trim();
  if (!props.dealId || !result.value?.recommendation || !text || asking.value) {
    return;
  }

  const userMessage: ChatMessage = { id: crypto.randomUUID(), role: 'user', content: text };
  question.value = '';
  chatMessages.value.push(userMessage);
  asking.value = true;
  errorMessage.value = '';
  await scrollChatToBottom();

  try {
    const response = await $fetch('/api/b24/ask-next-step-ai', {
      method: 'POST',
      credentials: 'same-origin',
      body: {
        dealId: props.dealId,
        question: text,
        recommendation: result.value.recommendation,
        history: chatMessages.value.map(({ role, content }) => ({ role, content }))
      }
    }) as { success: boolean; data: { answer: string } };

    chatMessages.value.push({ id: crypto.randomUUID(), role: 'assistant', content: response.data.answer });
    await scrollChatToBottom();
  } catch (error: any) {
    chatMessages.value.pop();
    question.value = text;
    errorMessage.value = error?.statusMessage || error?.message || 'Не удалось получить ответ AI.';
    toast.add({
      title: 'Ошибка AI-чата',
      description: errorMessage.value,
      color: 'air-primary-alert',
      icon: WarningIcon
    });
  } finally {
    asking.value = false;
  }
}

function formatApiError(error: any, fallback: string) {
  if (error?.statusCode === 401) {
    return '\u0421\u0435\u0430\u043d\u0441 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0438\u0441\u0442\u0451\u043a. \u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0432\u0438\u0434\u0436\u0435\u0442 \u0437\u0430\u043d\u043e\u0432\u043e \u0438\u0437 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u0441\u0434\u0435\u043b\u043a\u0438.';
  }
  return error?.statusMessage || error?.message || fallback;
}
function onQuestionKeydown(event: KeyboardEvent) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    void askAi();
  }
}

function setQuestion(value: string) {
  question.value = value;
}

function clearChat() {
  chatMessages.value = [];
  question.value = '';
}

async function scrollChatToBottom() {
  await nextTick();
  chatScroll.value?.scrollTo({ top: chatScroll.value.scrollHeight, behavior: 'smooth' });
}

watch(() => props.dealId, () => {
  chatMessages.value = [];
  question.value = '';
});

async function createActivity() {
  if (!props.dealId || !result.value?.recommendation || !canCreate.value) {
    return;
  }

  creating.value = true;
  errorMessage.value = '';

  try {
    const response = await $fetch('/api/b24/analyze-next-step', {
      method: 'POST',
      credentials: 'same-origin',
      body: {
        dealId: props.dealId,
        mode: 'live',
        recommendation: result.value.recommendation
      }
    }) as { success: boolean; data: AnalyzeResult };

    result.value = response.data;
    const createdId = response.data.createdActivityId;
    toast.add({
      title: 'Дело создано',
      description: createdId ? `ID: ${createdId}` : 'Откройте карточку сделки для проверки.',
      color: 'air-primary-success',
      icon: CircleCheckIcon
    });
  } catch (error: any) {
    errorMessage.value = error?.data?.statusMessage
      || error?.data?.message
      || error?.statusMessage
      || error?.message
      || 'Не удалось создать дело в CRM.';
    toast.add({
      title: 'Ошибка создания дела',
      description: errorMessage.value,
      color: 'air-primary-alert',
      icon: WarningIcon
    });
  } finally {
    creating.value = false;
  }
}

async function copyRecommendation() {
  if (!result.value?.recommendation) {
    return;
  }

  await navigator.clipboard?.writeText([
    result.value.recommendation.title,
    '',
    result.value.recommendation.description
  ].join('\n'));

  toast.add({
    title: 'Рекомендация скопирована',
    color: 'air-primary',
    duration: 2400
  });
}
</script>

<template>
  <main class="workspace-layout workspace-ai gap-4 p-4">
    <section class="ai-decision-column">
      <section class="ai-command-bar work-panel p-5">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p class="eyebrow">AI следующий шаг</p>
            <h2 class="mt-1 text-xl font-bold text-label">Одно действие, которое важно сейчас</h2>
            <p class="mt-2 max-w-2xl text-sm leading-6 text-description">AI изучит историю сделки, коммуникации и звонки, затем подготовит одно дело для менеджера.</p>
          </div>
          <B24Button
            :icon="RocketIcon"
            :loading="pending"
            :disabled="!canAnalyze"
            :label="result ? 'Сформировать заново' : 'Сформировать следующий шаг'"
            class="brand-action"
            @click="analyze"
          />
        </div>
        <B24Alert
          v-if="!dealId"
          class="mt-4"
          color="air-primary-alert"
          variant="soft"
          title="Сделка не определена"
          description="Откройте виджет из карточки сделки, чтобы AI получил рабочий контекст."
        />
        <B24Alert
          v-else-if="result?.createdActivityId"
          class="mt-4"
          color="air-primary-success"
          variant="soft"
          title="Дело создано"
          :description="`CRM ID: ${result.createdActivityId}`"
        />
      </section>

      <B24Alert
        v-if="errorMessage"
        color="air-primary-alert"
        variant="soft"
        title="Не удалось выполнить действие"
        :description="errorMessage"
      />

      <article v-if="result" class="ai-recommendation-panel work-panel p-5">
        <div class="flex flex-wrap items-start justify-between gap-3 border-b border-default pb-4">
          <div>
            <p class="eyebrow">Рекомендация</p>
            <h2 class="mt-1 text-xl font-bold text-label">{{ result.recommendation.title }}</h2>
            <p class="mt-1 text-sm text-description">Дело · выполнить {{ formattedDeadline }}</p>
          </div>
          <B24Badge :label="result.mode === 'live' ? 'Создано в CRM' : 'Готово к созданию'" class="brand-soft" />
        </div>

        <div class="mt-5 grid gap-5">
          <div class="ai-recommendation-copy">{{ result.recommendation.description }}</div>
          <div class="ai-recommendation-meta">
            <div>
              <h3>Почему этот шаг</h3>
              <ul><li v-for="item in result.recommendation.justification" :key="item">{{ item }}</li></ul>
            </div>
            <div>
              <h3>Важно учесть</h3>
              <ul><li v-for="item in result.recommendation.importantDetails" :key="item">{{ item }}</li></ul>
            </div>
          </div>
          <div class="flex flex-wrap gap-2 border-t border-default pt-4">
            <B24Button :loading="creating" :disabled="!canCreate" :label="`Создать ${activityLabel}`" class="brand-action" @click="createActivity" />
            <B24Button :disabled="!result" label="Копировать текст" class="mode-switch-button border border-default" @click="copyRecommendation" />
          </div>
          <B24Alert
            v-if="result.context?.transcriptStats"
            color="air-primary"
            variant="soft"
            title="Звонки в анализе"
            :description="'Найдено: ' + result.context.transcriptStats.calls + '; готовых: ' + result.context.transcriptStats.native + '; из кэша: ' + result.context.transcriptStats.cached + '; расшифровано сейчас: ' + result.context.transcriptStats.transcribed + '.'"
          />
        </div>
      </article>

      <article v-else class="ai-empty-state work-panel p-8">
        <RocketIcon class="h-7 w-7 text-[var(--brand-red)]" />
        <h2 class="mt-3 text-xl font-bold text-label">Готово к анализу сделки</h2>
        <p class="mt-2 max-w-xl text-sm leading-6 text-description">Создайте рекомендацию, чтобы увидеть приоритетное действие, обоснование и готовый текст для клиента.</p>
      </article>
    </section>

    <aside class="ai-chat-panel work-panel overflow-hidden">
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-default px-5 py-4">
        <div><h2 class="text-base font-bold text-label">Обсудить с AI</h2><p class="mt-1 text-xs text-description">Уточните рекомендации и факты сделки.</p></div>
        <B24Button v-if="chatMessages.length" label="Очистить" size="xs" class="mode-switch-button" @click="clearChat" />
      </div>
      <div ref="chatScroll" class="ai-chat-scroll grid gap-3 px-5 py-4">
        <div v-if="!chatMessages.length" class="grid gap-2">
          <p class="text-xs font-semibold uppercase text-description">Быстрые вопросы</p>
          <div class="grid gap-2">
            <button type="button" class="ai-question-suggestion" @click="setQuestion('Почему вы рекомендуете именно этот следующий шаг?')">Почему этот шаг?</button>
            <button type="button" class="ai-question-suggestion" @click="setQuestion('Какие факты в истории сделки важнее всего сейчас?')">Какие факты важны?</button>
            <button type="button" class="ai-question-suggestion" @click="setQuestion('Что стоит уточнить у клиента перед созданием дела?')">Что уточнить?</button>
          </div>
        </div>
        <div v-for="message in chatMessages" :key="message.id" class="ai-chat-message" :class="message.role === 'user' ? 'ai-chat-message-user' : 'ai-chat-message-assistant'">
          <p class="mb-1 text-xs font-semibold" :class="message.role === 'user' ? 'text-white/80' : 'text-[var(--brand-red)]'">{{ message.role === 'user' ? 'Вы' : 'AI ассистент' }}</p>
          <p class="whitespace-pre-wrap text-sm leading-6">{{ message.content }}</p>
        </div>
        <div v-if="asking" class="ai-chat-message ai-chat-message-assistant"><p class="text-sm text-description">AI изучает актуальный контекст сделки…</p></div>
      </div>
      <form class="grid gap-3 border-t border-default p-4" @submit.prevent="askAi">
        <label class="sr-only" for="ai-next-step-question">Ваш вопрос</label>
        <textarea id="ai-next-step-question" v-model="question" class="ai-chat-input" :disabled="asking" maxlength="4000" placeholder="Задайте вопрос по сделке…" rows="3" @keydown="onQuestionKeydown" />
        <div class="flex items-center justify-between gap-3"><p class="text-xs text-description">Enter — отправить</p><B24Button type="submit" :loading="asking" :disabled="!canAskAi" label="Спросить" class="brand-action" /></div>
      </form>
    </aside>
  </main>
</template>
