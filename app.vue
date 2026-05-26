<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue';

type HistoryType = 'buyer' | 'lead';

const toast = useToast();

const agentName = ref('Елена');
const clientName = ref('Александр');
const historyType = ref<HistoryType>('buyer');
const destination = ref('Турцию (Анталию)');
const tripDate = ref('в сентябре прошлого года');
const season = ref('Прошлой осенью');
const destinationLead = ref('Египет');
const travelContext = ref('предстоящий летний сезон');
const activeStep = ref(1);
const interest = ref<boolean | null>(null);
const crmNotes = ref('');
const isCallFinished = ref(false);
const accessToken = ref('');
const b24DealId = ref<number | null>(null);
const dealCategoryId = ref<number | null>(null);
const assignedById = ref<number | null>(null);
const b24Loading = ref(false);
const b24Saving = ref(false);
const b24Error = ref('');
const b24Debug = ref('');
const nextContactDate = ref('');
const createdActivityId = ref<number | string | null>(null);
const timerSeconds = ref(0);
const bx24Instance = ref<any>(null);
const bx24Ready = ref(false);
let timerId: ReturnType<typeof setInterval> | null = null;

const formattedTimer = computed(() => {
  const mins = String(Math.floor(timerSeconds.value / 60)).padStart(2, '0');
  const secs = String(timerSeconds.value % 60).padStart(2, '0');
  return `${mins}:${secs}`;
});

const step1Text = computed(() => {
  const context = historyType.value === 'buyer'
    ? `Мы помогали вам организовать вашу поездку в ${destination.value} ${tripDate.value}, помните?`
    : `${season.value} мы подбирали для вас тур в ${destinationLead.value}, помните?`;

  return [
    `${clientName.value}?`,
    `Меня зовут ${agentName.value}, компания Русский Экспресс.`,
    context,
    'Вам удобно сейчас говорить?'
  ].join('\n');
});

const step2Text = computed(() => (
  `Звоню сказать, что у нас сейчас активно идет раннее бронирование на ${travelContext.value}. ` +
  `Пока еще есть интересные варианты. Есть ли у вас планы на ${travelContext.value}?`
));

const step3Text = computed(() => {
  if (interest.value === true) {
    return `Давайте задам пару уточняющих вопросов и после этого обсудим конкретные отели. ${clientName.value}, с кем поедете?`;
  }
  if (interest.value === false) {
    return `Хорошо, ${clientName.value}. Когда вопрос с поездкой может стать для вас актуален?`;
  }
  return '';
});

const crmNotesReport = computed(() => [
  `Менеджер: ${agentName.value}`,
  `Клиент: ${clientName.value}`,
  `Интерес: ${interest.value === true ? 'Есть интерес' : interest.value === false ? 'Отказ / спросить позже' : 'Не определено'}`,
  crmNotes.value.trim() ? `Заметки: ${crmNotes.value.trim()}` : '',
  `Длительность разговора: ${formattedTimer.value}`
].filter(Boolean).join('\n'));

function showToast(title: string, description = '') {
  toast.add({
    title,
    description,
    color: 'air-primary',
    duration: 3000
  });
}

function startTimer() {
  clearTimer();
  timerSeconds.value = 0;
  timerId = setInterval(() => {
    timerSeconds.value += 1;
  }, 1000);
}

function clearTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
}

function extractDealIdFromPlacementOptions(rawOptions: unknown): number | null {
  if (!rawOptions) {
    return null;
  }

  const values: unknown[] = [rawOptions];
  if (typeof rawOptions === 'string') {
    try {
      values.push(JSON.parse(rawOptions));
    } catch {
      // Plain string is parsed below.
    }
  }

  for (const value of values) {
    if (typeof value === 'number' && Number.isFinite(value) && value > 0) {
      return value;
    }

    if (value && typeof value === 'object') {
      const record = value as Record<string, unknown>;
      values.push(record.ID, record.id, record.DEAL_ID, record.dealId, record.ENTITY_VALUE_ID, record.URI, record.uri);
      continue;
    }

    if (typeof value === 'string') {
      const direct = Number(value.trim());
      if (Number.isFinite(direct) && direct > 0) {
        return direct;
      }

      const match = value.match(/(?:\/crm\/deal\/details\/|details%2F|"ID"\s*:\s*"?|DEAL_ID[=:]|dealId[=:])(\d+)/i);
      if (match) {
        const parsed = Number(match[1]);
        if (Number.isFinite(parsed) && parsed > 0) {
          return parsed;
        }
      }
    }
  }

  return null;
}

function getDisplayName(person: any, fallback: string) {
  if (!person) {
    return fallback;
  }

  return person.NAME || person.name || person.FULL_NAME || person.fullName ||
    [person.firstName || person.FIRST_NAME, person.lastName || person.LAST_NAME].filter(Boolean).join(' ') ||
    fallback;
}

function reportClientContext(stage: string, extra: Record<string, unknown> = {}) {
  if (!import.meta.client) {
    return;
  }

  const w = window as any;
  $fetch('/api/debug/client-context', {
    method: 'POST',
    body: {
      stage,
      href: window.location.href,
      referrer: document.referrer,
      ancestorOrigins: Array.from(window.location.ancestorOrigins || []),
      windowName: window.name,
      locationParams: Object.fromEntries(new URLSearchParams(window.location.search).entries()),
      hasBX24: Boolean(w.BX24),
      bx24Keys: w.BX24 ? Object.keys(w.BX24).slice(0, 40) : [],
      ...extra
    }
  }).catch(() => {});
}

function bx24Call<T = any>(method: string, params: Record<string, unknown>): Promise<T> {
  return new Promise((resolve, reject) => {
    const BX24 = bx24Instance.value || (window as any).BX24;
    const timeout = setTimeout(() => {
      reject(new Error(`Bitrix24 SDK method ${method} timed out`));
    }, 6000);

    BX24.callMethod(method, params, (result: any) => {
      clearTimeout(timeout);
      if (result.error && result.error()) {
        reject(new Error(result.error_description?.() || result.error()));
        return;
      }

      resolve(result.data ? result.data() : result);
    });
  });
}

function loadBitrixSdk(): Promise<any> {
  const w = window as any;
  if (w.BX24) {
    bx24Instance.value = w.BX24;
    return Promise.resolve(w.BX24);
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://api.bitrix24.com/api/v1/';
    script.async = true;
    script.onload = () => {
      bx24Instance.value = (window as any).BX24;
      reportClientContext('bx24-script-loaded');
      resolve(bx24Instance.value);
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

async function loadDealContextFromServer() {
  if (!b24DealId.value) {
    return;
  }

  b24Loading.value = true;
  b24Error.value = '';

  try {
    const response = await $fetch<any>(`/api/b24/load-deal-context?dealId=${b24DealId.value}`, {
      headers: accessToken.value ? { Authorization: `Bearer ${accessToken.value}` } : {}
    });

    if (!response.success || !response.data) {
      throw new Error(response.error || 'Не удалось загрузить данные сделки');
    }

    const data = response.data;
    dealCategoryId.value = data.categoryId;
    assignedById.value = data.assignedById;
    agentName.value = data.agentName || agentName.value;
    clientName.value = data.clientName || clientName.value;

    if (data.previousTrip) {
      historyType.value = 'buyer';
      destination.value = data.previousTrip.destination || 'не указано';
      tripDate.value = data.previousTrip.tripDateText || 'неизвестно';
    }

    showToast('Данные сделки загружены');
  } catch (error) {
    b24Error.value = error instanceof Error ? error.message : 'Ошибка загрузки сделки';
    showToast('Не удалось загрузить данные сделки', b24Error.value);
  } finally {
    b24Loading.value = false;
  }
}

async function initB24Integration() {
  if (!import.meta.client) {
    return;
  }

  reportClientContext('init-start');

  const params = new URLSearchParams(window.location.search);
  accessToken.value = params.get('access_token') || params.get('AUTH_ID') || params.get('auth_id') || '';
  const placementOptions = params.get('placement_options') || params.get('PLACEMENT_OPTIONS');
  const dealId = extractDealIdFromPlacementOptions(placementOptions || window.location.href || window.name);

  b24Debug.value = `placement=${params.get('placement') || 'none'}`;
  if (dealId) {
    b24DealId.value = dealId;
    await loadDealContextFromServer();
  }

  try {
    const BX24 = await loadBitrixSdk();
    BX24.init(async () => {
      bx24Instance.value = BX24;
      bx24Ready.value = true;
      const auth = BX24.getAuth ? BX24.getAuth() : {};
      const token = auth?.access_token || auth?.AUTH_ID || auth?.auth_id;
      if (token) {
        accessToken.value = token;
      }

      const placementInfo = BX24.placement?.info ? BX24.placement.info() : null;
      const sdkDealId = extractDealIdFromPlacementOptions(placementInfo?.options || placementInfo?.OPTIONS || placementInfo);
      if (sdkDealId && sdkDealId !== b24DealId.value) {
        b24DealId.value = sdkDealId;
        await loadDealContextFromServer();
      }

      reportClientContext('bx24-init-callback', { placementInfo });
    });
  } catch (error) {
    reportClientContext('bx24-init-error', {
      message: error instanceof Error ? error.message : String(error)
    });
  }
}

function buildDeadlineForB24(dateValue: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(dateValue)
    ? `${dateValue}T10:00:00+03:00`
    : dateValue;
}

async function createTodoViaBitrixSdk() {
  const BX24 = bx24Instance.value || (import.meta.client ? (window as any).BX24 : null);
  if (!BX24?.callMethod || !b24DealId.value) {
    return false;
  }

  bx24Instance.value = BX24;
  reportClientContext('todo-sdk-attempt', {
    dealId: b24DealId.value,
    bx24Ready: bx24Ready.value,
    hasCallMethod: Boolean(BX24.callMethod)
  });

  const result = await bx24Call('crm.activity.todo.add', {
    ownerTypeId: 2,
    ownerId: b24DealId.value,
    deadline: buildDeadlineForB24(nextContactDate.value),
    title: 'Следующий контакт по реактивации',
    description: crmNotes.value.trim(),
    responsibleId: assignedById.value || undefined,
    pingOffsets: [0, 15],
    colorId: 'red'
  });

  createdActivityId.value = (result as any)?.id || (result as any)?.ID || String(result || '');
  reportClientContext('todo-sdk-success', {
    dealId: b24DealId.value,
    activityId: createdActivityId.value
  });
  return true;
}

async function saveActivityToB24() {
  if (!b24DealId.value) {
    showToast('Сделка не определена');
    return false;
  }
  if (!nextContactDate.value) {
    showToast('Укажите дату следующего контакта');
    return false;
  }
  if (!crmNotes.value.trim()) {
    showToast('Заполните заметку для CRM');
    return false;
  }

  b24Saving.value = true;
  createdActivityId.value = null;

  try {
    if (await createTodoViaBitrixSdk()) {
      showToast('Дело создано в Битрикс24');
      return true;
    }
  } catch (error) {
    reportClientContext('todo-sdk-error', {
      dealId: b24DealId.value,
      message: error instanceof Error ? error.message : String(error)
    });
    console.warn('SDK todo creation failed, using server fallback:', error);
  }

  try {
    const response = await $fetch<any>('/api/b24/create-call-activity', {
      method: 'POST',
      headers: accessToken.value ? { Authorization: `Bearer ${accessToken.value}` } : {},
      body: {
        dealId: b24DealId.value,
        crmNotes: crmNotes.value,
        nextContactDate: nextContactDate.value,
        assignedById: assignedById.value
      }
    });

    createdActivityId.value = response?.data?.id || response?.data?.ID || response?.id || response?.ID || null;
    showToast('Дело создано в Битрикс24');
    return true;
  } catch (error) {
    showToast('Ошибка при создании дела в CRM');
    console.error(error);
    return false;
  } finally {
    b24Saving.value = false;
  }
}

async function finishCall() {
  const saved = await saveActivityToB24();
  b24Saving.value = false;
  if (!saved) {
    return;
  }

  clearTimer();
  isCallFinished.value = true;
  await nextTick();
  document.getElementById('summary-panel')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function resetCall() {
  crmNotes.value = '';
  nextContactDate.value = '';
  interest.value = null;
  isCallFinished.value = false;
  createdActivityId.value = null;
  activeStep.value = 1;
  startTimer();
  showToast('Форма обновлена');
}

function setPresetContext(text: string) {
  travelContext.value = text;
}

function scrollToStep(step: number) {
  activeStep.value = step;
  setTimeout(() => {
    document.getElementById(`step-${step}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 50);
}

async function copyText(text: string) {
  await navigator.clipboard?.writeText(text || '');
  showToast('Текст скопирован');
}

onMounted(() => {
  startTimer();
  initB24Integration();
});

onUnmounted(clearTimer);
</script>

<template>
  <B24App>
    <div class="app-shell">
      <div v-if="b24Loading" class="fixed left-0 right-0 top-0 z-50 h-1 bg-red-100">
        <div class="h-full w-1/2 animate-pulse brand-action" />
      </div>

      <header class="sticky top-0 z-40 border-b border-default bg-default/95 px-4 py-3 backdrop-blur">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <div class="flex size-9 items-center justify-center rounded-md bg-[var(--brand-red)] text-sm font-black text-white">
              РЭ
            </div>
            <div>
              <h1 class="text-base font-bold leading-tight text-label">Русский Экспресс</h1>
              <p class="text-xs text-description">Интерактивный скрипт «Реактивация клиентов»</p>
            </div>
            <B24Badge label="B24 UI" class="brand-soft" />
          </div>

          <div class="flex flex-wrap items-center gap-2">
            <B24Badge
              v-if="b24DealId"
              :label="`Сделка #${b24DealId}`"
              class="brand-soft"
            />
            <B24Badge
              v-else
              label="Контекст сделки не найден"
              class="border border-amber-200 bg-amber-50 text-amber-900"
            />
            <B24Badge
              :label="`Длительность разговора: ${formattedTimer}`"
              class="border border-default bg-muted text-label"
            />
            <B24Button label="Сбросить" class="border border-default bg-default text-label" @click="resetCall" />
          </div>
        </div>
      </header>

      <main class="grid gap-4 p-4 lg:grid-cols-[390px_minmax(0,1fr)]">
        <aside class="sidebar-sticky work-panel p-4 workspace-scroll">
          <div class="mb-4 border-b border-default pb-3">
            <div class="flex items-center justify-between gap-3">
              <h2 class="text-base font-bold text-label">Данные для подстановки</h2>
              <B24Badge v-if="b24Debug" :label="b24Debug" class="border border-default bg-muted text-description" />
            </div>
            <p class="mt-1 text-xs text-description">Поля синхронизируются с карточкой сделки и сразу обновляют скрипт.</p>
          </div>

          <div class="field-stack">
            <B24FormField label="Ваше имя">
              <B24Input v-model="agentName" />
            </B24FormField>

            <B24FormField label="Имя клиента">
              <B24Input v-model="clientName" />
            </B24FormField>

            <div class="grid grid-cols-2 gap-2">
              <B24Button
                label="Покупал ранее"
                :class="historyType === 'buyer' ? 'brand-action' : 'border border-default bg-default text-label'"
                @click="historyType = 'buyer'"
              />
              <B24Button
                label="Не покупал"
                :class="historyType === 'lead' ? 'brand-action' : 'border border-default bg-default text-label'"
                @click="historyType = 'lead'"
              />
            </div>

            <div v-if="historyType === 'buyer'" class="brand-soft rounded-lg border p-3 field-stack">
              <B24FormField label="Направление поездки">
                <B24Input v-model="destination" />
              </B24FormField>
              <B24FormField label="Когда состоялась поездка">
                <B24Input v-model="tripDate" />
              </B24FormField>
            </div>

            <div v-else class="rounded-lg border border-default bg-muted p-3 field-stack">
              <B24FormField label="Когда подбирали тур">
                <B24Input v-model="season" />
              </B24FormField>
              <B24FormField label="Направление подбора">
                <B24Input v-model="destinationLead" />
              </B24FormField>
            </div>

            <B24FormField label="Контекст предстоящего путешествия">
              <B24Input v-model="travelContext" />
            </B24FormField>

            <div class="flex flex-wrap gap-2">
              <B24Button size="xs" label="Летний сезон" :class="travelContext === 'предстоящий летний сезон' ? 'brand-action' : 'border border-default bg-default text-label'" @click="setPresetContext('предстоящий летний сезон')" />
              <B24Button size="xs" label="Майские" :class="travelContext === 'майские праздники' ? 'brand-action' : 'border border-default bg-default text-label'" @click="setPresetContext('майские праздники')" />
              <B24Button size="xs" label="Бархатный" :class="travelContext === 'бархатный сезон осенью' ? 'brand-action' : 'border border-default bg-default text-label'" @click="setPresetContext('бархатный сезон осенью')" />
            </div>

            <div class="border-t border-default pt-3 field-stack">
              <B24FormField label="Дата следующего контакта">
                <B24Input v-model="nextContactDate" type="date" />
              </B24FormField>

              <B24FormField label="Заметка для CRM">
                <B24Textarea
                  v-model="crmNotes"
                  :rows="4"
                  placeholder="Итоги созвона, пожелания, бюджет, даты, следующий шаг..."
                />
              </B24FormField>

              <div class="grid grid-cols-2 gap-2">
                <B24Button label="Копировать" class="border border-default bg-default text-label" @click="copyText(crmNotes)" />
                <B24Button
                  :label="b24Saving ? 'Создаем...' : 'Создать дело'"
                  :loading="b24Saving"
                  class="brand-action"
                  @click="saveActivityToB24"
                />
              </div>
            </div>
          </div>
        </aside>

        <section class="script-scroll workspace-scroll">
          <div class="work-panel mb-4 p-3">
            <div class="grid gap-2 sm:grid-cols-3">
              <button class="step-tab" :class="{ active: activeStep === 1 }" @click="scrollToStep(1)">1 Присоединение</button>
              <button class="step-tab" :class="{ active: activeStep === 2 }" @click="scrollToStep(2)">2 Крючок</button>
              <button class="step-tab" :class="{ active: activeStep === 3 }" @click="scrollToStep(3)">3 Сделка</button>
            </div>
          </div>

          <div class="grid gap-4">
            <article id="step-1" class="script-card p-5" :class="{ active: activeStep === 1, 'opacity-70': activeStep !== 1 }">
              <div class="mb-4 flex items-start justify-between gap-3 border-b border-default pb-3">
                <div>
                  <p class="text-xs font-bold uppercase text-[var(--brand-red)]">Шаг 1 из 3</p>
                  <h2 class="text-xl font-bold text-label">Присоединение</h2>
                </div>
                <B24Badge label="Начало разговора" class="brand-soft" />
              </div>

              <div class="grid gap-3">
                <div class="script-line p-4">
                  <p class="text-xs font-bold uppercase text-description">Приветствие</p>
                  <p class="mt-1 text-lg text-label">— <span class="variable">{{ clientName || '[Имя клиента]' }}</span>?</p>
                </div>
                <div class="script-line p-4">
                  <p class="text-xs font-bold uppercase text-description">Представление</p>
                  <p class="mt-1 text-lg text-label">— Меня зовут <span class="variable">{{ agentName }}</span>, компания <strong>Русский Экспресс</strong>.</p>
                </div>
                <div class="rounded-lg border border-red-100 bg-red-50/40 p-4">
                  <p class="text-xs font-bold uppercase text-[var(--brand-red-hover)]">Установление контакта</p>
                  <p class="mt-2 text-xl font-medium leading-relaxed text-label">
                    «Мы помогали вам организовать поездку в <span class="variable">{{ destination }}</span> <span class="variable">{{ tripDate }}</span>, помните?»
                  </p>
                </div>
                <div class="script-line p-4">
                  <p class="text-xs font-bold uppercase text-description">Проверка готовности</p>
                  <p class="mt-1 text-lg font-semibold text-label">— Вам удобно сейчас говорить?</p>
                </div>
              </div>

              <div class="mt-4 flex justify-between border-t border-default pt-4">
                <B24Button label="Копировать шаг" class="border border-default bg-default text-label" @click="copyText(step1Text)" />
                <B24Button label="Далее" class="brand-action" @click="scrollToStep(2)" />
              </div>
            </article>

            <article id="step-2" class="script-card p-5" :class="{ active: activeStep === 2, 'opacity-70': activeStep !== 2 }">
              <div class="mb-4 border-b border-default pb-3">
                <p class="text-xs font-bold uppercase text-[var(--brand-red)]">Шаг 2 из 3</p>
                <h2 class="text-xl font-bold text-label">Вбиваем крючок</h2>
              </div>
              <div class="rounded-lg border border-red-100 bg-red-50/30 p-4">
                <p class="text-xl font-semibold leading-relaxed text-label">
                  «Звоню сказать, что у нас сейчас активно идет раннее бронирование на <span class="variable">{{ travelContext }}</span>. Пока еще есть интересные варианты. Есть ли у вас планы на <span class="variable">{{ travelContext }}</span>?»
                </p>
              </div>
              <div class="mt-4 flex justify-between border-t border-default pt-4">
                <B24Button label="Копировать шаг" class="border border-default bg-default text-label" @click="copyText(step2Text)" />
                <B24Button label="Далее" class="brand-action" @click="scrollToStep(3)" />
              </div>
            </article>

            <article id="step-3" class="script-card p-5" :class="{ active: activeStep === 3, 'opacity-70': activeStep !== 3 }">
              <div class="mb-4 border-b border-default pb-3">
                <p class="text-xs font-bold uppercase text-[var(--brand-red)]">Шаг 3 из 3</p>
                <h2 class="text-xl font-bold text-label">Подводим к сделке</h2>
              </div>

              <div class="grid gap-3 sm:grid-cols-2">
                <B24Button label="Есть интерес" :class="interest === true ? 'brand-action' : 'border border-default bg-default text-label'" @click="interest = true" />
                <B24Button label="Нет интереса" :class="interest === false ? 'brand-action' : 'border border-default bg-default text-label'" @click="interest = false" />
              </div>

              <div class="mt-4 rounded-lg border border-default bg-muted p-4">
                <p v-if="interest === true" class="text-xl font-semibold leading-relaxed text-label">
                  «Давайте задам пару уточняющих вопросов и после этого обсудим конкретные отели. <span class="variable">{{ clientName }}</span>, с кем поедете?»
                </p>
                <p v-else-if="interest === false" class="text-xl font-semibold leading-relaxed text-label">
                  «Хорошо, <span class="variable">{{ clientName }}</span>. Когда вопрос с поездкой может стать для вас актуален?»
                </p>
                <p v-else class="text-center text-description">Выберите реакцию клиента, чтобы показать нужный речевой модуль.</p>
              </div>

              <div class="mt-4 flex justify-between border-t border-default pt-4">
                <B24Button label="Копировать модуль" class="border border-default bg-default text-label" :disabled="interest === null" @click="copyText(step3Text)" />
                <B24Button
                  :label="b24Saving ? 'Создаем дело...' : 'Завершить звонок'"
                  :loading="b24Saving"
                  class="brand-action"
                  @click="finishCall"
                />
              </div>
            </article>

            <article v-if="isCallFinished" id="summary-panel" class="rounded-lg border border-red-200 bg-[var(--brand-red)] p-5 text-white">
              <h2 class="text-xl font-bold">Звонок завершен, дело создано</h2>
              <div class="mt-4 grid gap-2 rounded-lg bg-white/12 p-4 text-sm">
                <p><strong>Менеджер:</strong> {{ agentName }}</p>
                <p><strong>Клиент:</strong> {{ clientName }}</p>
                <p><strong>Дата выполнения:</strong> {{ nextContactDate }}</p>
                <p v-if="createdActivityId"><strong>Дело в CRM:</strong> #{{ createdActivityId }}</p>
                <p><strong>Заметка:</strong> {{ crmNotes }}</p>
              </div>
              <div class="mt-4 flex gap-2">
                <B24Button label="Копировать отчет" class="bg-white text-[var(--brand-red-hover)]" @click="copyText(crmNotesReport)" />
                <B24Button label="Новый звонок" class="border border-white/50 bg-transparent text-white" @click="resetCall" />
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  </B24App>
</template>
