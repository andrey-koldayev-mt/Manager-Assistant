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
  createdEntityType?: 'activity' | 'task';
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
const draftTitle = ref('');
const draftDescription = ref('');
const draftDeadline = ref('');

const canAnalyze = computed(() => Boolean(props.dealId) && !pending.value && !creating.value && !props.loadingContext);
const canCreate = computed(() => Boolean(result.value?.recommendation) && !creating.value && !pending.value);
const canAskAi = computed(() => Boolean(props.dealId && result.value?.recommendation && question.value.trim() && !asking.value));
const activityLabel = 'задачу';
const sourceSignals = computed(() => result.value?.recommendation.sourceSignals.filter(Boolean) || []);
const keyFacts = computed(() => result.value?.recommendation.importantDetails.filter(Boolean) || []);

function toDateTimeLocal(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return '';
  }

  const offset = date.getTimezoneOffset() * 60_000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 16);
}

function syncDraft(recommendation: AnalyzeResult['recommendation']) {
  draftTitle.value = recommendation.title;
  draftDescription.value = recommendation.description;
  draftDeadline.value = toDateTimeLocal(recommendation.deadline);
}

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
    syncDraft(response.data.recommendation);
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
        recommendation: {
          ...result.value.recommendation,
          title: draftTitle.value.trim(),
          description: draftDescription.value.trim(),
          deadline: new Date(draftDeadline.value).toISOString()
        }
      }
    }) as { success: boolean; data: AnalyzeResult };

    result.value = response.data;
    syncDraft(response.data.recommendation);
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
    draftTitle.value,
    '',
    draftDescription.value
  ].join('\n'));

  toast.add({
    title: 'Рекомендация скопирована',
    color: 'air-primary',
    duration: 2400
  });
}
</script>

<template>
  <main class="workspace-layout re-ai-workspace">
    <section class="re-ai-command">
      <div>
        <p class="re-ai-overline">AI следующий шаг</p>
        <h2>Подготовьте следующее касание</h2>
        <p>AI изучит историю сделки, коммуникации и звонки, чтобы предложить одно своевременное действие.</p>
      </div>
      <B24Button :icon="RocketIcon" :disabled="!canAnalyze" :label="result ? 'Сформировать заново' : 'Сформировать следующий шаг'" :aria-busy="pending" :data-loading="pending ? 'true' : 'false'" class="brand-action re-ai-primary" @click="analyze" />
    </section>

    <B24Alert v-if="!dealId" color="air-primary-alert" variant="soft" title="Сделка не определена" description="Откройте виджет из карточки сделки, чтобы AI получил рабочий контекст." />
    <B24Alert v-else-if="result?.createdActivityId" color="air-primary-success" variant="soft" title="Задача создана" :description="`CRM ID: ${result.createdActivityId}`" />
    <B24Alert v-if="errorMessage" color="air-primary-alert" variant="soft" title="Не удалось выполнить действие" :description="errorMessage" />

    <article v-if="result" class="re-ai-layout">
      <section class="re-ai-main">
        <header class="re-ai-deal-heading">
          <p class="re-ai-overline">Рекомендованный следующий шаг</p>
          <h1>{{ result.recommendation.title }}</h1>
          <p>Проверьте текст и срок перед созданием задачи в карточке сделки.</p>
        </header>

        <section class="re-ai-signals" aria-label="События сделки">
          <h3>Основано на событиях по сделке</h3>
          <ol>
            <li v-for="(item, index) in sourceSignals" :key="item"><span>{{ index + 1 }}</span><p>{{ item }}</p></li>
            <li v-if="!sourceSignals.length"><span>1</span><p>AI использовал доступную историю сделки и коммуникаций.</p></li>
          </ol>
        </section>

        <section class="re-ai-editor">
          <div class="re-ai-editor-head"><div><p class="re-ai-overline">Создать задачу</p><h3>Черновик следующего касания</h3></div><B24Badge :label="result.mode === 'live' ? 'Создано в CRM' : 'Готово к созданию'" class="brand-soft" /></div>
          <label>Название задачи<input v-model="draftTitle" :disabled="creating" maxlength="200" /></label>
          <label>Комментарий<textarea v-model="draftDescription" :disabled="creating" maxlength="4000" rows="5" /></label>
          <div class="re-ai-fields"><label>Срок исполнения<input v-model="draftDeadline" :disabled="creating" type="datetime-local" /></label><label>Ответственный<input :value="agentName || 'Ответственный менеджер'" readonly /></label></div>
          <div class="re-ai-editor-actions"><p>Будет создана обычная задача в Bitrix24, привязанная к сделке.</p><div><B24Button :disabled="!result" label="Копировать текст" class="re-ai-secondary" @click="copyRecommendation" /><B24Button :loading="creating" :disabled="!canCreate || !draftTitle.trim() || !draftDescription.trim() || !draftDeadline" :label="`Создать ${activityLabel}`" class="brand-action re-ai-primary" @click="createActivity" /></div></div>
        </section>
      </section>

      <aside class="re-ai-sidebar">
        <section class="re-ai-why"><p class="re-ai-overline">Почему это важно</p><h2>Сейчас подходящее время для контакта</h2><ul><li v-for="item in result.recommendation.justification" :key="item">{{ item }}</li></ul></section>
        <section class="re-ai-facts"><h3>Ключевые факты</h3><ul><li v-for="item in keyFacts" :key="item">{{ item }}</li><li v-if="!keyFacts.length">Контекст сделки учтён при подготовке рекомендации.</li></ul></section>
        <section class="re-ai-chat"><div class="re-ai-chat-head"><div><p class="re-ai-overline">Обсудить с AI</p><h3>Уточните рекомендацию</h3></div><button v-if="chatMessages.length" type="button" @click="clearChat">Очистить</button></div><div ref="chatScroll" class="re-ai-chat-scroll"><div v-if="!chatMessages.length" class="re-ai-quick"><button type="button" @click="setQuestion('Почему вы рекомендуете именно этот следующий шаг?')">Почему этот шаг?</button><button type="button" @click="setQuestion('Что стоит уточнить у клиента?')">Что уточнить?</button></div><div v-for="message in chatMessages" :key="message.id" class="re-ai-chat-message" :class="message.role === 'user' ? 'is-user' : ''"><strong>{{ message.role === 'user' ? 'Вы' : 'AI ассистент' }}</strong><p>{{ message.content }}</p></div></div><form @submit.prevent="askAi"><textarea v-model="question" :disabled="asking" maxlength="4000" placeholder="Задайте вопрос по сделке" rows="3" @keydown="onQuestionKeydown" /><B24Button type="submit" :loading="asking" :disabled="!canAskAi" label="Спросить" class="brand-action re-ai-primary" /></form></section>
      </aside>
    </article>

    <article v-else class="re-ai-empty"><RocketIcon /><h2>Готово к анализу сделки</h2><p>Сформируйте следующий шаг, чтобы получить понятную рекомендацию и готовый к редактированию черновик задачи.</p></article>
  </main>
</template>
