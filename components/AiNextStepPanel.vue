<script setup lang="ts">
import CircleCheckIcon from '@bitrix24/b24icons-vue/main/CircleCheckIcon';
import RocketIcon from '@bitrix24/b24icons-vue/main/RocketIcon';
import WarningIcon from '@bitrix24/b24icons-vue/main/WarningIcon';

type AnalyzeResult = {
  mode: 'preview' | 'live';
  nativeAiTodoFound: boolean;
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
      timelines: number;
      activities: number;
      messages: number;
    };
  };
  createdActivityId?: number | string | null;
  pinnedTimelineLogId?: number | string | null;
};

const props = defineProps<{
  dealId: number | null;
  agentName: string;
  clientName: string;
  accessToken?: string;
  loadingContext?: boolean;
}>();

const toast = useToast();
const pending = ref(false);
const creating = ref(false);
const errorMessage = ref('');
const result = ref<AnalyzeResult | null>(null);

const canAnalyze = computed(() => Boolean(props.dealId) && !pending.value && !creating.value && !props.loadingContext);
const canCreate = computed(() => Boolean(result.value?.recommendation) && !creating.value && !pending.value);

const headers = computed<Record<string, string>>(() => {
  if (!props.accessToken) {
    const emptyHeaders: Record<string, string> = {};
    return emptyHeaders;
  }

  const authHeaders: Record<string, string> = { Authorization: `Bearer ${props.accessToken}` };
  return authHeaders;
});

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
      headers: headers.value,
      body: {
        dealId: props.dealId,
        mode: 'preview'
      }
    }) as { success: boolean; data: AnalyzeResult };

    result.value = response.data;
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

async function createActivity() {
  if (!props.dealId || !result.value?.recommendation || !canCreate.value) {
    return;
  }

  creating.value = true;
  errorMessage.value = '';

  try {
    const response = await $fetch('/api/b24/analyze-next-step', {
      method: 'POST',
      headers: headers.value,
      body: {
        dealId: props.dealId,
        mode: 'live',
        recommendation: result.value.recommendation
      }
    }) as { success: boolean; data: AnalyzeResult };

    result.value = response.data;
    const createdId = response.data.createdActivityId;
    toast.add({
      title: 'Дело создано в CRM',
      description: createdId ? `ID: ${createdId}` : 'Откройте карточку сделки для проверки.',
      color: 'air-primary-success',
      icon: CircleCheckIcon
    });
  } catch (error: any) {
    errorMessage.value = error?.statusMessage || error?.message || 'Не удалось создать дело в CRM.';
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
  <main class="grid gap-4 p-4 lg:grid-cols-[420px_minmax(0,1fr)]">
    <aside class="sidebar-sticky work-panel p-4 workspace-scroll">
      <div class="mb-4 border-b border-default pb-3">
        <h2 class="text-base font-bold text-label">AI следующий шаг</h2>
        <p class="mt-1 text-xs text-description">
          Анализирует историю сделки и предлагает одно практичное дело для менеджера.
        </p>
      </div>

      <div class="field-stack">
        <B24Alert
          v-if="!dealId"
          color="air-primary-alert"
          variant="soft"
          title="Сделка не определена"
          description="Откройте виджет из карточки сделки, чтобы AI получил рабочий контекст."
        />

        <div class="rounded-lg border border-default bg-muted p-3">
          <p class="text-xs font-semibold uppercase text-description">Контекст</p>
          <div class="mt-2 grid gap-2 text-sm text-label">
            <p><strong>Сделка:</strong> {{ dealId ? `#${dealId}` : 'не найдена' }}</p>
            <p><strong>Менеджер:</strong> {{ agentName || 'не указан' }}</p>
            <p><strong>Клиент:</strong> {{ clientName || 'не указан' }}</p>
          </div>
        </div>

        <B24Button
          :icon="RocketIcon"
          :loading="pending"
          :disabled="!canAnalyze"
          label="Сформировать следующий шаг"
          block
          class="brand-action"
          @click="analyze"
        />

        <B24Button
          :loading="creating"
          :disabled="!canCreate"
          label="Создать дело в CRM"
          block
          class="border border-default bg-default text-label"
          @click="createActivity"
        />

        <B24Button
          :disabled="!result"
          label="Копировать рекомендацию"
          block
          class="border border-default bg-default text-label"
          @click="copyRecommendation"
        />

        <B24Alert
          v-if="result?.createdActivityId"
          color="air-primary-success"
          variant="soft"
          title="Дело создано"
          :description="`CRM ID: ${result.createdActivityId}`"
        />
      </div>
    </aside>

    <section class="script-scroll workspace-scroll">
      <div class="grid gap-4">
        <B24Alert
          v-if="errorMessage"
          color="air-primary-alert"
          variant="soft"
          title="Не удалось выполнить действие"
          :description="errorMessage"
        />

        <article v-if="result" class="script-card p-5">
          <div class="mb-4 flex flex-wrap items-start justify-between gap-3 border-b border-default pb-3">
            <div>
              <p class="text-xs font-bold uppercase text-[var(--brand-red)]">Рекомендация AI</p>
              <h2 class="mt-1 text-xl font-bold text-label">{{ result.recommendation.title }}</h2>
              <p class="mt-1 text-sm text-description">
                {{ result.recommendation.activityType }} · выполнить {{ formattedDeadline }}
              </p>
            </div>
            <B24Badge
              :label="result.mode === 'live' ? 'Создано в CRM' : 'Preview'"
              :class="result.mode === 'live' ? 'border border-green-200 bg-green-50 text-green-800' : 'brand-soft'"
            />
          </div>

          <div class="grid gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
            <div class="rounded-lg border border-default bg-muted p-4 text-sm leading-6 whitespace-pre-wrap text-label">
              {{ result.recommendation.description }}
            </div>

            <div class="grid content-start gap-4">
              <B24Alert
                v-if="result.nativeAiTodoFound"
                color="air-primary-warning"
                variant="soft"
                title="Найдено штатное AI-дело"
                description="Рекомендация построена на уже найденном открытом AI-деле Bitrix24."
              />

              <div class="rounded-lg border border-default bg-default p-3">
                <h3 class="text-sm font-bold text-label">Важные детали</h3>
                <ul class="mt-2 grid gap-2 text-sm text-description">
                  <li v-for="item in result.recommendation.importantDetails" :key="item">{{ item }}</li>
                </ul>
              </div>

              <div class="rounded-lg border border-default bg-default p-3">
                <h3 class="text-sm font-bold text-label">Почему сейчас</h3>
                <ul class="mt-2 grid gap-2 text-sm text-description">
                  <li v-for="item in result.recommendation.justification" :key="item">{{ item }}</li>
                </ul>
              </div>

              <div v-if="result.context?.sourceStats" class="rounded-lg border border-default bg-default p-3 text-sm text-description">
                Источники: таймлайн {{ result.context.sourceStats.timelines }},
                дела {{ result.context.sourceStats.activities }},
                сообщения {{ result.context.sourceStats.messages }}.
              </div>
            </div>
          </div>
        </article>

        <article v-else class="script-card p-8">
          <div class="mx-auto flex max-w-xl flex-col items-center gap-3 text-center">
            <div class="flex h-12 w-12 items-center justify-center rounded-lg brand-soft">
              <RocketIcon class="h-6 w-6" />
            </div>
            <h2 class="text-xl font-bold text-label">Готово к анализу сделки</h2>
            <p class="text-sm leading-6 text-description">
              Нажмите кнопку формирования, чтобы AI изучил историю сделки, коммуникации и открытые дела,
              а затем предложил следующий шаг без автоматической записи в CRM.
            </p>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>
