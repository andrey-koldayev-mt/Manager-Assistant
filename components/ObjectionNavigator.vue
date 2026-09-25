<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import {
  NAVIGATOR_VARIABLE_LABELS,
  OBJECTION_CATALOG_GROUPS,
  OBJECTION_SCENARIOS,
  getScenario,
  getScenarioChannels,
  getScenarioStep,
  type NavigatorChannel
} from '~/shared/objection-navigator';

type NavigatorContext = {
  deal: {
    id: number;
    title: string;
    stage: string;
    contactName: string;
    responsibleName: string;
    lastActivityAt: string | null;
    variables: Record<string, string>;
  };
  communications: Array<{
    id: string;
    at: string;
    channel: string;
    direction: 'client' | 'manager' | 'unknown';
    title: string;
    preview: string;
  }>;
  recommendation: { scenarioId: string; reason: string } | null;
};

type AiRecommendation = {
  scenarioId: string;
  channel: NavigatorChannel;
  situation: string;
  recommendedAction: string;
  responseText: string;
  rationale: string[];
  sourceSignals: string[];
};

type TranscriptStats = {
  calls: number;
  native: number;
  cached: number;
  transcribed: number;
  unavailable: number;
};

const props = defineProps<{
  dealId: number | null;
  agentName: string;
  clientName: string;
  loadingContext?: boolean;
}>();

const toast = useToast();
const loading = ref(false);
const errorMessage = ref('');
const context = ref<NavigatorContext | null>(null);
const selectedScenarioId = ref<string | null>(null);
const selectedStepId = ref<string | null>(null);
const channel = ref<NavigatorChannel>('message');
const aiRecommendation = ref<AiRecommendation | null>(null);
const transcriptStats = ref<TranscriptStats | null>(null);
const aiLoading = ref(false);
const aiErrorMessage = ref('');
const expandedScenarioGroups = ref<string[]>(['choice']);

const selectedScenario = computed(() => getScenario(selectedScenarioId.value));
const selectedStep = computed(() => getScenarioStep(selectedScenarioId.value, selectedStepId.value));
const selectedStepChannels = computed(() => Object.keys(selectedStep.value?.text || {}) as NavigatorChannel[]);
const scenarioGroups = computed(() => OBJECTION_CATALOG_GROUPS.map((group) => ({
  ...group,
  scenarios: OBJECTION_SCENARIOS.filter((item) => item.group === group.id)
})));
const contextVariables = computed<Record<string, string>>(() => ({
  clientName: context.value ? (context.value.deal.contactName || props.clientName.trim()) : '',
  agentName: context.value ? (context.value.deal.responsibleName || props.agentName.trim()) : '',
  dealTitle: context.value?.deal.title || '',
  ...(context.value?.deal.variables || {})
}));
const missingVariables = computed(() => (selectedStep.value?.requiredVariables || []).filter((name) => !contextVariables.value[name]?.trim()));
const renderedText = computed(() => {
  const text = selectedStep.value?.text[channel.value]
    || selectedStep.value?.text[selectedStepChannels.value[0] || 'message']
    || '';
  return renderTemplate(text, contextVariables.value);
});
const canCopy = computed(() => Boolean(selectedStep.value && !missingVariables.value.length));
const recommendedScenario = computed(() => context.value?.recommendation
  ? getScenario(context.value.recommendation.scenarioId)
  : null);

const formattedLastActivity = computed(() => {
  const value = context.value?.deal.lastActivityAt;
  if (!value) return 'не найдена';
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? 'не найдена' : new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
  }).format(date);
});

function selectScenario(scenarioId: string, stepId?: string) {
  const scenario = getScenario(scenarioId);
  if (!scenario) return;
  selectedScenarioId.value = scenarioId;
  selectedStepId.value = stepId || scenario.steps[0]?.id || null;
  if (!expandedScenarioGroups.value.includes(scenario.group)) {
    expandedScenarioGroups.value = [...expandedScenarioGroups.value, scenario.group];
  }
  const availableChannels = getScenarioChannels(scenario);
  if (!availableChannels.includes(channel.value)) channel.value = availableChannels[0] || 'message';
}

function chooseAnswer(nextStepId?: string) {
  if (!nextStepId) return;
  selectedStepId.value = nextStepId;
  const nextStep = getScenarioStep(selectedScenarioId.value, nextStepId);
  const availableChannels = Object.keys(nextStep?.text || {}) as NavigatorChannel[];
  if (!availableChannels.includes(channel.value)) channel.value = availableChannels[0] || 'message';
}

async function loadContext() {
  if (!props.dealId) {
    context.value = null;
    return;
  }

  loading.value = true;
  errorMessage.value = '';
  try {
    const response = await $fetch(`/api/b24/load-navigator-context?dealId=${props.dealId}`, {
      credentials: 'same-origin'
    }) as { success: boolean; data: NavigatorContext };
    if (!response.success || !response.data) throw new Error('Контекст сценариев недоступен.');

    context.value = response.data;
    if (!selectedScenarioId.value && response.data.recommendation?.scenarioId) {
      selectScenario(response.data.recommendation.scenarioId);
    }
  } catch (error: any) {
    errorMessage.value = error?.statusMessage || error?.message || 'Не удалось загрузить контекст сценариев.';
  } finally {
    loading.value = false;
  }
}

async function copyCurrentText() {
  if (!canCopy.value) return;
  try {
    await copyText(renderedText.value);
    toast.add({ title: 'Текст скопирован', description: 'Отправьте его клиенту вручную в Wazzup.', color: 'air-primary-success', duration: 2600 });
  } catch {
    toast.add({ title: 'Не удалось скопировать текст', description: 'Выделите текст и скопируйте его вручную.', color: 'air-primary-alert' });
  }
}

async function generateAiRecommendation() {
  if (!props.dealId) return;
  aiLoading.value = true;
  aiErrorMessage.value = '';
  try {
    const response = await $fetch('/api/b24/recommend-objection', {
      method: 'POST',
      credentials: 'same-origin',
      body: { dealId: props.dealId, scenarioId: selectedScenarioId.value || undefined }
    }) as { success: boolean; data: { recommendation: AiRecommendation; transcriptStats: TranscriptStats } };
    if (!response.success || !response.data?.recommendation) throw new Error('AI-рекомендация недоступна.');
    aiRecommendation.value = response.data.recommendation;
    transcriptStats.value = response.data.transcriptStats || null;
    selectScenario(response.data.recommendation.scenarioId);
    channel.value = response.data.recommendation.channel;
  } catch (error: any) {
    aiErrorMessage.value = error?.statusMessage || error?.message || 'Не удалось подготовить AI-рекомендацию.';
  } finally {
    aiLoading.value = false;
  }
}

async function copyAiRecommendation() {
  if (!aiRecommendation.value?.responseText) return;
  try {
    await copyText(aiRecommendation.value.responseText);
    toast.add({ title: 'Рекомендация скопирована', description: 'Отправьте текст клиенту вручную в Wazzup.', color: 'air-primary-success', duration: 2600 });
  } catch {
    toast.add({ title: 'Не удалось скопировать текст', description: 'Выделите текст и скопируйте его вручную.', color: 'air-primary-alert' });
  }
}

async function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement('textarea');
  textarea.value = value;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand('copy');
  textarea.remove();
  if (!copied) throw new Error('Clipboard is unavailable');
}

function renderTemplate(template: string, values: Record<string, string>) {
  return template.replace(/{{(\w+)}}/g, (_, key: string) => values[key]?.trim() || `{{${key}}}`);
}

function channelLabel(value: NavigatorChannel) {
  if (value === 'message') return 'Мессенджер';
  if (value === 'remote') return 'Удаленная продажа';
  return 'Звонок';
}

function directionLabel(value: NavigatorContext['communications'][number]['direction']) {
  if (value === 'client') return 'Клиент';
  if (value === 'manager') return 'Менеджер';
  return 'Не определено';
}

watch(() => props.dealId, () => {
  context.value = null;
  selectedScenarioId.value = null;
  selectedStepId.value = null;
  aiRecommendation.value = null;
  transcriptStats.value = null;
  aiErrorMessage.value = '';
  void loadContext();
}, { immediate: true });
</script>

<template>
  <main class="objection-navigator-layout workspace-layout workspace-navigator gap-4 p-4">
    <aside class="navigator-sidebar work-panel p-4">
      <div class="flex items-center justify-between gap-2 border-b border-default pb-3">
        <div><p class="eyebrow">Навигатор возражений</p><h2 class="mt-1 text-base font-bold text-label">Каталог сценариев</h2></div>
        <B24Button label="Обновить" size="xs" :loading="loading" class="mode-switch-button" @click="loadContext" />
      </div>
      <B24Alert v-if="!dealId" class="mt-4" color="air-primary-alert" variant="soft" title="Сделка не определена" description="Откройте виджет из карточки сделки, чтобы загрузить контекст." />
      <B24Alert v-else-if="errorMessage" class="mt-4" color="air-primary-alert" variant="soft" title="Контекст не загружен" :description="errorMessage" />
      <div v-if="recommendedScenario" class="navigator-match-card mt-4">
        <p class="eyebrow">Подходит по истории</p><h3 class="mt-1 text-sm font-bold text-label">{{ recommendedScenario.title }}</h3>
        <p class="mt-1 text-xs leading-5 text-description">{{ context?.recommendation?.reason }}</p>
        <B24Button label="Открыть сценарий" size="sm" class="brand-action mt-3" @click="selectScenario(recommendedScenario.id)" />
      </div>
      <section class="mt-4"><p class="mb-2 text-xs font-semibold uppercase text-description">Возражения</p>
        <B24Accordion v-model="expandedScenarioGroups" :items="scenarioGroups" type="multiple" collapsible value-key="id" label-key="title" class="navigator-catalog-accordion">
          <template #body="{ item }"><div class="grid gap-1"><B24Button v-for="scenario in item.scenarios" :key="scenario.id" :label="scenario.title" block :class="selectedScenarioId === scenario.id ? 'navigator-category-active' : 'navigator-category'" @click="selectScenario(scenario.id)" /></div></template>
        </B24Accordion>
      </section>
    </aside>

    <section class="navigator-workspace min-w-0">
      <section class="navigator-ai-panel work-panel p-5">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div><p class="eyebrow">AI-рекомендация</p><h2 class="mt-1 text-xl font-bold text-label">Рекомендуемый ответ</h2><p class="mt-2 text-sm text-description">Карточка, Wazzup, email и звонки — без изменения CRM.</p></div>
          <B24Button label="Сформировать рекомендацию" :loading="aiLoading" class="brand-action" @click="generateAiRecommendation" />
        </div>
        <B24Alert v-if="aiErrorMessage" class="mt-4" color="air-primary-alert" variant="soft" title="Рекомендация недоступна" :description="aiErrorMessage" />
        <div v-if="aiRecommendation" class="navigator-ai-result mt-5">
          <div><p class="result-label">Ситуация</p><p>{{ aiRecommendation.situation }}</p></div>
          <div><p class="result-label">Что сделать</p><p>{{ aiRecommendation.recommendedAction }}</p></div>
          <div class="navigator-script-text">{{ aiRecommendation.responseText }}</div>
          <div v-if="aiRecommendation.sourceSignals.length"><p class="result-label">Факты сделки</p><ul><li v-for="signal in aiRecommendation.sourceSignals" :key="signal">{{ signal }}</li></ul></div>
          <div class="flex flex-wrap gap-2"><B24Button label="Скопировать текст" class="brand-action" @click="copyAiRecommendation" /><B24Badge label="Отправка вручную в Wazzup" class="brand-soft" /></div>
        </div>
        <B24Alert v-if="transcriptStats" class="mt-4" color="air-primary" variant="soft" title="Звонки в анализе" :description="'Найдено: ' + transcriptStats.calls + '; готовых: ' + transcriptStats.native + '; из кэша: ' + transcriptStats.cached + '; расшифровано: ' + transcriptStats.transcribed + '.'" />
      </section>

      <article v-if="selectedScenario && selectedStep" class="navigator-scenario-panel work-panel min-w-0 p-5">
        <div class="flex flex-wrap items-start justify-between gap-3 border-b border-default pb-4"><div><p class="eyebrow">Сценарий</p><h2 class="mt-1 text-xl font-bold text-label">{{ selectedScenario.title }}</h2><p class="mt-1 text-sm text-description">{{ selectedScenario.description }}</p></div><B24Badge :label="`Шаг ${selectedScenario.steps.findIndex((step) => step.id === selectedStep?.id) + 1} из ${selectedScenario.steps.length}`" class="brand-soft" /></div>
        <div class="mt-5 grid min-w-0 gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
          <div class="navigator-main-column grid min-w-0 gap-4">
            <div><p class="result-label">Цель шага</p><p class="mt-1 text-sm leading-6 text-description">{{ selectedStep.goal }}</p></div>
            <div class="navigator-channel" role="tablist" aria-label="Канал коммуникации"><B24Button v-for="item in selectedStepChannels" :key="item" :label="channelLabel(item)" size="sm" :class="channel === item ? 'brand-action' : 'mode-switch-button'" @click="channel = item" /></div>
            <div class="navigator-script-text">{{ renderedText }}</div>
            <B24Alert v-if="missingVariables.length" color="air-primary-alert" variant="soft" title="Заполните данные в сделке" :description="missingVariables.map((name) => NAVIGATOR_VARIABLE_LABELS[name] || name).join(', ')" />
            <div v-if="selectedStep.answers?.length" class="grid gap-2 border-t border-default pt-4"><p class="text-sm font-semibold text-label">Ответ клиента</p><div class="flex flex-wrap gap-2"><B24Button v-for="answer in selectedStep.answers" :key="answer.label" :label="answer.label" class="border border-default bg-default text-label" @click="chooseAnswer(answer.nextStepId)" /></div></div>
            <div class="flex flex-wrap items-center justify-between gap-3 border-t border-default pt-4"><B24Button label="К каталогу" class="mode-switch-button border border-default" @click="selectedScenarioId = null; selectedStepId = null" /><B24Button label="Скопировать текст" :disabled="!canCopy" class="brand-action" @click="copyCurrentText" /></div>
          </div>
          <aside class="navigator-history"><p class="text-sm font-bold text-label">Последние коммуникации</p><div v-if="context?.communications.length" class="mt-3 grid gap-2"><div v-for="item in context.communications" :key="item.id" class="navigator-history-item"><div class="flex items-center justify-between gap-2"><span class="text-xs font-semibold text-label">{{ item.channel }} · {{ directionLabel(item.direction) }}</span><span class="text-xs text-description">{{ item.at }}</span></div><p class="mt-1 truncate text-xs text-description">{{ item.title || item.preview }}</p></div></div><p v-else class="mt-2 text-sm text-description">Коммуникации не найдены.</p></aside>
        </div>
      </article>
      <article v-else class="navigator-empty-state work-panel p-8"><h2 class="text-xl font-bold text-label">Выберите возражение</h2><p class="mt-2 text-sm leading-6 text-description">Каталог слева поможет открыть ветку для текущей переписки или звонка.</p></article>
    </section>
  </main>
</template>
