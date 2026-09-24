<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import {
  NAVIGATOR_VARIABLE_LABELS,
  OBJECTION_SCENARIOS,
  getScenario,
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

const selectedScenario = computed(() => getScenario(selectedScenarioId.value));
const selectedStep = computed(() => getScenarioStep(selectedScenarioId.value, selectedStepId.value));
const contextVariables = computed<Record<string, string>>(() => ({
  clientName: context.value ? (context.value.deal.contactName || props.clientName.trim()) : '',
  agentName: context.value ? (context.value.deal.responsibleName || props.agentName.trim()) : '',
  dealTitle: context.value?.deal.title || '',
  ...(context.value?.deal.variables || {})
}));
const missingVariables = computed(() => (selectedStep.value?.requiredVariables || []).filter((name) => !contextVariables.value[name]?.trim()));
const renderedText = computed(() => renderTemplate(selectedStep.value?.text[channel.value] || '', contextVariables.value));
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
}

function chooseAnswer(nextStepId?: string) {
  if (nextStepId) selectedStepId.value = nextStepId;
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
  return value === 'message' ? 'Мессенджер' : 'Звонок';
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
  void loadContext();
}, { immediate: true });
</script>

<template>
  <main class="objection-navigator-layout workspace-layout grid gap-4 p-4 lg:grid-cols-[420px_minmax(0,1fr)]">
    <aside class="sidebar-sticky work-panel p-4 workspace-scroll">
      <div class="mb-4 border-b border-default pb-3">
        <h2 class="text-base font-bold text-label">Навигатор возражений</h2>
        <p class="mt-1 text-xs text-description">Выберите сценарий, пройдите ветку и отправьте текст клиенту вручную.</p>
      </div>

      <B24Alert
        v-if="!dealId"
        color="air-primary-alert"
        variant="soft"
        title="Сделка не определена"
        description="Откройте виджет из карточки сделки, чтобы загрузить контекст."
      />

      <div v-else class="grid gap-4">
        <B24Alert
          v-if="errorMessage"
          color="air-primary-alert"
          variant="soft"
          title="Контекст не загружен"
          :description="errorMessage"
        />

        <div class="navigator-context">
          <div class="flex items-center justify-between gap-2">
            <p class="text-xs font-semibold uppercase text-description">Контекст сделки</p>
            <B24Button label="Обновить" size="xs" :loading="loading" class="mode-switch-button" @click="loadContext" />
          </div>
          <dl class="mt-3 grid gap-2 text-sm">
            <div><dt>Сделка</dt><dd>{{ context?.deal.title || `#${dealId}` }}</dd></div>
            <div><dt>Стадия</dt><dd>{{ context?.deal.stage || 'не указана' }}</dd></div>
            <div><dt>Контакт</dt><dd>{{ context?.deal.contactName || clientName || 'не указан' }}</dd></div>
            <div><dt>Ответственный</dt><dd>{{ context?.deal.responsibleName || agentName || 'не указан' }}</dd></div>
            <div><dt>Последняя активность</dt><dd>{{ formattedLastActivity }}</dd></div>
          </dl>
        </div>

        <div v-if="recommendedScenario" class="navigator-recommendation">
          <p class="text-xs font-semibold uppercase text-[var(--brand-red)]">Рекомендуемый сценарий</p>
          <h3 class="mt-1 text-sm font-bold text-label">{{ recommendedScenario.title }}</h3>
          <p class="mt-1 text-xs leading-5 text-description">{{ context?.recommendation?.reason }}</p>
          <B24Button label="Открыть сценарий" size="sm" class="brand-action mt-3" @click="selectScenario(recommendedScenario.id)" />
        </div>

        <section>
          <p class="mb-2 text-xs font-semibold uppercase text-description">Каталог</p>
          <div class="grid gap-2">
            <B24Button
              v-for="scenario in OBJECTION_SCENARIOS"
              :key="scenario.id"
              :label="scenario.title"
              block
              :class="selectedScenarioId === scenario.id ? 'navigator-category-active' : 'navigator-category'"
              @click="selectScenario(scenario.id)"
            />
          </div>
        </section>
      </div>
    </aside>

    <section class="script-scroll workspace-scroll min-w-0">
      <div class="grid gap-4">
        <article v-if="selectedScenario && selectedStep" class="script-card min-w-0 p-5">
          <div class="flex flex-wrap items-start justify-between gap-3 border-b border-default pb-4">
            <div>
              <p class="text-xs font-bold uppercase text-[var(--brand-red)]">Сценарий</p>
              <h2 class="mt-1 text-xl font-bold text-label">{{ selectedScenario.title }}</h2>
              <p class="mt-1 text-sm text-description">{{ selectedScenario.description }}</p>
            </div>
            <B24Badge :label="`Шаг ${selectedScenario.steps.findIndex((step) => step.id === selectedStep?.id) + 1} из ${selectedScenario.steps.length}`" class="brand-soft" />
          </div>

          <div class="mt-5 grid min-w-0 gap-4 xl:grid-cols-[minmax(0,1fr)_270px]">
            <div class="navigator-main-column grid min-w-0 gap-4">
              <div>
                <p class="text-sm font-semibold text-label">Цель шага</p>
                <p class="mt-1 text-sm leading-6 text-description">{{ selectedStep.goal }}</p>
              </div>

              <div class="navigator-channel" role="tablist" aria-label="Канал коммуникации">
                <B24Button
                  v-for="item in (['message', 'call'] as NavigatorChannel[])"
                  :key="item"
                  :label="channelLabel(item)"
                  size="sm"
                  :class="channel === item ? 'brand-action' : 'mode-switch-button'"
                  @click="channel = item"
                />
              </div>

              <div class="navigator-script-text">{{ renderedText }}</div>

              <B24Alert
                v-if="missingVariables.length"
                color="air-primary-alert"
                variant="soft"
                title="Заполните данные в сделке"
                :description="missingVariables.map((name) => NAVIGATOR_VARIABLE_LABELS[name] || name).join(', ')"
              />

              <div v-if="selectedStep.answers?.length" class="grid gap-2 border-t border-default pt-4">
                <p class="text-sm font-semibold text-label">Ответ клиента</p>
                <div class="flex flex-wrap gap-2">
                  <B24Button
                    v-for="answer in selectedStep.answers"
                    :key="answer.label"
                    :label="answer.label"
                    class="border border-default bg-default text-label"
                    @click="chooseAnswer(answer.nextStepId)"
                  />
                </div>
              </div>

              <div class="flex flex-wrap items-center justify-between gap-3 border-t border-default pt-4">
                <B24Button label="К каталогу" class="border border-default bg-default text-label" @click="selectedScenarioId = null; selectedStepId = null" />
                <B24Button label="Скопировать текст" :disabled="!canCopy" class="brand-action" @click="copyCurrentText" />
              </div>
            </div>

            <aside class="grid min-w-0 content-start gap-4">
              <B24Alert
                color="air-primary"
                variant="soft"
                title="Ручная отправка"
                description="Скопируйте текст и отправьте его клиенту вручную в Wazzup. Навигатор не меняет CRM."
              />
              <div class="navigator-history">
                <p class="text-sm font-bold text-label">Последние коммуникации</p>
                <div v-if="context?.communications.length" class="mt-3 grid gap-3">
                  <div v-for="item in context.communications" :key="item.id" class="navigator-history-item">
                    <div class="flex items-center justify-between gap-2">
                      <B24Badge :label="directionLabel(item.direction)" class="border border-default bg-default text-description" />
                      <span class="text-xs text-description">{{ item.channel }}</span>
                    </div>
                    <p v-if="item.title" class="mt-2 text-xs font-semibold text-label">{{ item.title }}</p>
                    <p v-if="item.preview" class="mt-1 text-xs leading-5 text-description">{{ item.preview }}</p>
                  </div>
                </div>
                <p v-else class="mt-2 text-sm text-description">Коммуникации не найдены.</p>
              </div>
            </aside>
          </div>
        </article>

        <article v-else class="script-card p-8">
          <div class="mx-auto flex max-w-xl flex-col items-center gap-3 text-center">
            <h2 class="text-xl font-bold text-label">Выберите сценарий</h2>
            <p class="text-sm leading-6 text-description">Каталог слева поможет быстро подобрать ветку для текущего возражения или переписки.</p>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>
