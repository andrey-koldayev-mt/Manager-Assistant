<script setup lang="ts">
import AlertIcon from '@bitrix24/b24icons-vue/main/WarningIcon';
import CheckIcon from '@bitrix24/b24icons-vue/main/CircleCheckIcon';
import MoonIcon from '@bitrix24/b24icons-vue/main/MoonIcon';
import RefreshIcon from '@bitrix24/b24icons-vue/main/RefreshIcon';
import SunIcon from '@bitrix24/b24icons-vue/main/SunIcon';

type ReportMode = 'sla-first-contact' | 'data-quality' | 'reactivation' | 'next-step-control';
type ViolationFlag = 'Да' | 'Нет';

interface JobState {
  id: string | null;
  status: 'idle' | 'running' | 'completed' | 'failed';
  startedAt: string | null;
  finishedAt: string | null;
  error: string | null;
  progress: {
    stage: string;
    message: string;
    current: number;
    total: number;
  };
}

interface SlaRow {
  id: string;
  leadId: number;
  leadTitle: string;
  leadStageName: string;
  rejectionReason: string | null;
  checkedAt: string;
  leadCreatedAt: string;
  firstContactAt: string | null;
  minutesToFirstContact: number | null;
  slaOverrunMinutes: number;
  status: string;
  responsibleId: number | null;
  responsibleName: string;
  violationFlag: ViolationFlag;
}

interface DataQualityRow {
  id: string;
  contactId: number;
  contactName: string;
  checkedAt: string;
  contactCreatedAt: string;
  qualityScore: number;
  qualityErrors: string[];
  normalizedPhone: string | null;
  normalizedEmail: string | null;
  status: string;
  responsibleId: number | null;
  responsibleName: string;
  violationFlag: ViolationFlag;
}

interface ReactivationRow {
  employeeId: number;
  name: string;
  lastName: string;
  photoUrl: string | null;
  weeklyCount: number;
  weeklyPlan: number;
  monthlyRating: number;
  successfulDeals: Array<{ dealId: number; title: string; updatedAt: string }>;
}

interface NextStepRow {
  id: string;
  dealId: number;
  dealTitle: string;
  checkedAt: string;
  dealCreatedAt: string;
  dealUpdatedAt: string;
  stageName: string;
  activityId: number | null;
  activityDeadline: string | null;
  activityDescription: string | null;
  nextStepErrors: string[];
  status: string;
  responsibleId: number | null;
  responsibleName: string;
  violationFlag: ViolationFlag;
}

interface LogPayload<T> {
  generatedAt: string | null;
  rows: T[];
  weekKey?: string | null;
  monthKey?: string | null;
}

interface SlaAutoControlState {
  enabled: boolean;
  startDate: string;
  time: string;
  intervalDays: number;
  lastRunAt: string | null;
  nextRunAt: string | null;
}

interface ReportKpi {
  label: string;
  value: number;
  tone: string;
  badge?: string;
  hint?: string;
}

const props = defineProps<{
  mode: ReportMode;
  accessToken?: string;
}>();
const colorMode = useColorMode();

const reportConfig: Record<ReportMode, {
  title: string;
  subtitle: string;
  logUrl: string;
  runUrl: string;
  statusUrl: string;
  runNeedsDateRange: boolean;
  searchPlaceholder: string;
}> = {
  'sla-first-contact': {
    title: 'Первичный контакт',
    subtitle: 'SLA первого контакта по лидам',
    logUrl: '/api/sla-log',
    runUrl: '/api/check-sla',
    statusUrl: '/api/check-sla/status',
    runNeedsDateRange: true,
    searchPlaceholder: 'ID, лид, стадия или сотрудник'
  },
  'data-quality': {
    title: 'Качество данных',
    subtitle: 'Контроль контактов CRM',
    logUrl: '/api/data-quality-log',
    runUrl: '/api/check-data-quality',
    statusUrl: '/api/check-data-quality/status',
    runNeedsDateRange: true,
    searchPlaceholder: 'ID, контакт, телефон, email или сотрудник'
  },
  reactivation: {
    title: 'Контроль Реактивация',
    subtitle: 'План и рейтинг отдела продаж',
    logUrl: '/api/reactivation-log',
    runUrl: '/api/check-reactivation',
    statusUrl: '/api/check-reactivation/status',
    runNeedsDateRange: false,
    searchPlaceholder: 'Сотрудник или сделка'
  },
  'next-step-control': {
    title: 'Следующий шаг',
    subtitle: 'Контроль качества планирования дел',
    logUrl: '/api/next-step-log',
    runUrl: '/api/check-next-step',
    statusUrl: '/api/check-next-step/status',
    runNeedsDateRange: false,
    searchPlaceholder: 'ID, сделка, стадия, ошибка или сотрудник'
  }
};

const STATUS_OPTIONS: Record<ReportMode, string[]> = {
  'sla-first-contact': ['Все', 'В пределах 15 минут', 'Более 15 минут', 'Контакта не было', 'Входящий звонок', 'Требуется ручная проверка'],
  'data-quality': ['Все', 'Без ошибок', 'Предупреждение', 'Ошибка'],
  reactivation: ['Все'],
  'next-step-control': ['Все', 'OK', 'WARNING', 'ERROR']
};

const EMPTY_JOB: JobState = {
  id: null,
  status: 'idle',
  startedAt: null,
  finishedAt: null,
  error: null,
  progress: { stage: 'starting', message: 'Проверка не запущена', current: 0, total: 1 }
};

const payload = ref<LogPayload<any>>({ generatedAt: null, rows: [] });
const job = ref<JobState>({ ...EMPTY_JOB, progress: { ...EMPTY_JOB.progress } });
const loading = ref(false);
const errorMessage = ref('');
const page = ref(1);
const filters = reactive({
  dateFrom: '',
  dateTo: '',
  status: 'Все',
  responsible: 'Все',
  violation: 'Все' as 'Все' | ViolationFlag,
  query: ''
});
const slaAutoControl = ref<SlaAutoControlState | null>(null);
const slaAutoSaving = ref(false);
let pollTimer: ReturnType<typeof setInterval> | null = null;

const config = computed(() => reportConfig[props.mode]);
const rows = computed<any[]>(() => payload.value.rows ?? []);
const isRunning = computed(() => job.value.status === 'running');
const currentTheme = computed(() => (colorMode.value === 'dark' ? 'dark' : 'light'));
const nextTheme = computed(() => (currentTheme.value === 'dark' ? 'light' : 'dark'));
const themeLabel = computed(() => (currentTheme.value === 'dark' ? 'Светлая' : 'Темная'));
const themeIcon = computed(() => (currentTheme.value === 'dark' ? SunIcon : MoonIcon));
const progressPercent = computed(() => (
  job.value.progress.total > 0
    ? Math.min(100, Math.round((job.value.progress.current / job.value.progress.total) * 100))
    : 0
));
const authHeaders = computed<Record<string, string>>(() => (
  props.accessToken ? { Authorization: `Bearer ${props.accessToken}` } : {} as Record<string, string>
));

function headers(extra: Record<string, string> = {}) {
  return { ...authHeaders.value, ...extra };
}

function toLocalInputDateTime(date: Date): string {
  const pad = (part: number) => String(part).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function setDefaultDateFilters() {
  const now = new Date();
  const from = new Date(now);
  from.setDate(now.getDate() - 2);
  filters.dateFrom = `${toLocalInputDateTime(from).slice(0, 10)}T00:00`;
  filters.dateTo = toLocalInputDateTime(now);
}

function formatDateTime(value: string | null): string {
  if (!value) return '—';
  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) return '—';
  return new Intl.DateTimeFormat('ru-RU', {
    timeZone: 'Europe/Moscow',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(date).replace(',', '');
}

function fromInputDate(value: string): number | null {
  if (!value) return null;
  const date = new Date(value.includes('T') ? value : `${value}T00:00:00`);
  return Number.isFinite(date.getTime()) ? date.getTime() : null;
}

function toInputDateEnd(value: string): number | null {
  if (!value) return null;
  const date = new Date(value.includes('T') ? `${value}:59.999` : `${value}T23:59:59.999`);
  return Number.isFinite(date.getTime()) ? date.getTime() : null;
}

function normalizeStatus(row: any): string {
  if (props.mode === 'data-quality' && row.status === 'OK') return 'Без ошибок';
  if (props.mode === 'data-quality' && row.status === 'WARNING') return 'Предупреждение';
  if (props.mode === 'data-quality' && row.status === 'ERROR') return 'Ошибка';
  return row.status ?? 'Все';
}

function rowCreatedAt(row: any): string | null {
  if (props.mode === 'sla-first-contact') return row.leadCreatedAt;
  if (props.mode === 'data-quality') return row.contactCreatedAt;
  if (props.mode === 'next-step-control') return row.dealCreatedAt;
  return null;
}

function rowSearchText(row: any): string {
  if (props.mode === 'sla-first-contact') {
    return `${row.leadId} ${row.leadTitle} ${row.leadStageName ?? ''} ${row.rejectionReason ?? ''} ${row.responsibleName}`;
  }
  if (props.mode === 'data-quality') {
    return `${row.contactId} ${row.contactName} ${row.responsibleName} ${row.normalizedPhone ?? ''} ${row.normalizedEmail ?? ''} ${(row.qualityErrors ?? []).join(' ')}`;
  }
  if (props.mode === 'reactivation') {
    return `${row.employeeId} ${row.name} ${row.lastName} ${(row.successfulDeals ?? []).map((deal: any) => deal.title).join(' ')}`;
  }
  return `${row.dealId} ${row.dealTitle} ${row.stageName} ${row.responsibleName} ${(row.nextStepErrors ?? []).join(' ')}`;
}

const responsibleOptions = computed(() => {
  const names = new Set<string>();
  for (const row of rows.value) {
    const name = props.mode === 'reactivation'
      ? [row.lastName, row.name].filter(Boolean).join(' ').trim()
      : row.responsibleName;
    if (name) names.add(name);
  }
  return ['Все', ...[...names].sort((left, right) => left.localeCompare(right, 'ru'))];
});

const filteredRows = computed(() => {
  const query = filters.query.trim().toLowerCase();
  const dateFrom = filters.dateFrom ? fromInputDate(filters.dateFrom) : null;
  const dateTo = filters.dateTo ? toInputDateEnd(filters.dateTo) : null;

  return rows.value.filter((row) => {
    const createdAtValue = rowCreatedAt(row);
    if (createdAtValue) {
      const createdAt = new Date(createdAtValue).getTime();
      if (dateFrom != null && createdAt < dateFrom) return false;
      if (dateTo != null && createdAt > dateTo) return false;
    }
    if (filters.status !== 'Все' && normalizeStatus(row) !== filters.status) return false;
    const responsible = props.mode === 'reactivation'
      ? [row.lastName, row.name].filter(Boolean).join(' ').trim()
      : row.responsibleName;
    if (filters.responsible !== 'Все' && responsible !== filters.responsible) return false;
    if (filters.violation !== 'Все' && row.violationFlag !== filters.violation) return false;
    if (query && !rowSearchText(row).toLowerCase().includes(query)) return false;
    return true;
  });
});

const pageSize = 25;
const pageCount = computed(() => Math.max(1, Math.ceil(filteredRows.value.length / pageSize)));
const pagedRows = computed(() => {
  const current = Math.min(page.value, pageCount.value);
  return filteredRows.value.slice((current - 1) * pageSize, current * pageSize);
});

const kpis = computed<ReportKpi[]>(() => {
  const list = filteredRows.value;
  if (props.mode === 'sla-first-contact') {
    const violations = list.filter((row: SlaRow) => row.status === 'Контакта не было' || row.violationFlag === 'Да').length;
    const within = list.filter((row: SlaRow) => row.status === 'В пределах 15 минут' || row.status === 'Входящий звонок').length;
    const rate = (value: number) => (list.length > 0 ? `${Math.round((value / list.length) * 100)}%` : '0%');
    return [
      { label: 'Всего лидов', value: list.length, tone: 'blue', hint: 'в текущей выборке' },
      { label: 'Нарушения', value: violations, tone: 'red', badge: rate(violations), hint: 'требуют внимания' },
      { label: 'В SLA', value: within, tone: 'green', badge: rate(within), hint: 'обработаны без ошибок' },
      { label: 'Без контакта', value: list.filter((row: SlaRow) => row.status === 'Контакта не было').length, tone: 'amber', hint: 'нет активности' }
    ];
  }
  if (props.mode === 'data-quality') {
    return [
      { label: 'Всего контактов', value: list.length, tone: 'blue' },
      { label: 'Без ошибок', value: list.filter((row: DataQualityRow) => normalizeStatus(row) === 'Без ошибок').length, tone: 'green' },
      { label: 'Предупреждение', value: list.filter((row: DataQualityRow) => normalizeStatus(row) === 'Предупреждение').length, tone: 'amber' },
      { label: 'Ошибка', value: list.filter((row: DataQualityRow) => normalizeStatus(row) === 'Ошибка').length, tone: 'red' }
    ];
  }
  if (props.mode === 'reactivation') {
    return [
      { label: 'Сотрудников', value: list.length, tone: 'blue' },
      { label: 'За неделю', value: list.reduce((sum: number, row: ReactivationRow) => sum + row.weeklyCount, 0), tone: 'green' },
      { label: 'План недели', value: list.reduce((sum: number, row: ReactivationRow) => sum + row.weeklyPlan, 0), tone: 'amber' },
      { label: 'Рейтинг месяца', value: list.reduce((sum: number, row: ReactivationRow) => sum + row.monthlyRating, 0), tone: 'red' }
    ];
  }
  return [
    { label: 'Всего сделок', value: list.length, tone: 'blue' },
    { label: 'OK', value: list.filter((row: NextStepRow) => row.status === 'OK').length, tone: 'green' },
    { label: 'WARNING', value: list.filter((row: NextStepRow) => row.status === 'WARNING').length, tone: 'amber' },
    { label: 'ERROR', value: list.filter((row: NextStepRow) => row.status === 'ERROR').length, tone: 'red' }
  ];
});

const chartSegments = computed(() => {
  const counts = new Map<string, number>();
  if (props.mode === 'sla-first-contact') {
    const ok = filteredRows.value.filter((row: SlaRow) => row.violationFlag === 'Нет').length;
    const bad = filteredRows.value.filter((row: SlaRow) => row.violationFlag === 'Да').length;
    counts.set('Без ошибок', ok);
    counts.set('С ошибками', bad);
  } else {
    for (const row of filteredRows.value) {
      const key = props.mode === 'reactivation'
        ? 'План'
        : normalizeStatus(row);
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
  }
  const colors = props.mode === 'sla-first-contact'
    ? ['#31c484', '#ff5752']
    : ['#31c484', '#ffb02e', '#ff5752', '#2fc6f6', '#8b96a7'];
  return [...counts.entries()].map(([label, value], index) => ({ label, value, color: colors[index % colors.length] }));
});

function setTheme() {
  colorMode.preference = nextTheme.value;
}

async function loadLog() {
  loading.value = true;
  errorMessage.value = '';
  try {
    payload.value = await $fetch(config.value.logUrl, { headers: headers() }) as LogPayload<any>;
  } catch (error: any) {
    errorMessage.value = error?.statusMessage || error?.message || 'Не удалось загрузить отчет';
  } finally {
    loading.value = false;
  }
}

async function loadStatus() {
  try {
    job.value = await $fetch(config.value.statusUrl, { headers: headers() }) as JobState;
  } catch (error: any) {
    errorMessage.value = error?.statusMessage || error?.message || 'Не удалось получить статус проверки';
  }
}

async function loadSlaAutoControl() {
  if (props.mode !== 'sla-first-contact') return;
  try {
    slaAutoControl.value = await $fetch('/api/sla-auto-control', { headers: headers() }) as SlaAutoControlState;
  } catch {
    slaAutoControl.value = null;
  }
}

async function refreshAll() {
  page.value = 1;
  await Promise.all([loadLog(), loadStatus(), loadSlaAutoControl()]);
}

async function runCheck(updateCrm = false) {
  errorMessage.value = '';
  try {
    const body = config.value.runNeedsDateRange
      ? { dateFrom: filters.dateFrom, dateTo: filters.dateTo, updateCrm }
      : undefined;
    job.value = await $fetch(config.value.runUrl, {
      method: 'POST',
      headers: headers({ 'Content-Type': 'application/json' }),
      body
    }) as JobState;
    startPolling();
  } catch (error: any) {
    errorMessage.value = error?.statusMessage || error?.message || 'Не удалось запустить проверку';
  }
}

async function saveSlaAutoControl() {
  if (!slaAutoControl.value) return;
  slaAutoSaving.value = true;
  try {
    slaAutoControl.value = await $fetch('/api/sla-auto-control', {
      method: 'PATCH',
      headers: headers({ 'Content-Type': 'application/json' }),
      body: slaAutoControl.value
    }) as SlaAutoControlState;
  } catch (error: any) {
    errorMessage.value = error?.statusMessage || error?.message || 'Не удалось сохранить расписание';
  } finally {
    slaAutoSaving.value = false;
  }
}

function stopPolling() {
  if (pollTimer) {
    clearInterval(pollTimer);
    pollTimer = null;
  }
}

function startPolling() {
  stopPolling();
  pollTimer = setInterval(async () => {
    await loadStatus();
    if (job.value.status === 'completed') {
      stopPolling();
      await loadLog();
    }
    if (job.value.status === 'failed') {
      stopPolling();
      errorMessage.value = job.value.error || 'Проверка завершилась ошибкой';
    }
  }, 1500);
}

function exportRows() {
  const header = Object.keys(filteredRows.value[0] ?? { empty: '' });
  const lines = [
    header.join(';'),
    ...filteredRows.value.map((row) => header.map((key) => JSON.stringify(row[key] ?? '')).join(';'))
  ];
  const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${props.mode}-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
}

function employeeName(row: ReactivationRow): string {
  return [row.lastName, row.name].filter(Boolean).join(' ').trim() || `ID ${row.employeeId}`;
}

watch(() => props.mode, async () => {
  filters.status = 'Все';
  filters.responsible = 'Все';
  filters.violation = 'Все';
  filters.query = '';
  stopPolling();
  await refreshAll();
});

watch(filteredRows, () => {
  page.value = 1;
});

onMounted(async () => {
  setDefaultDateFilters();
  await refreshAll();
  if (job.value.status === 'running') {
    startPolling();
  }
});

onUnmounted(stopPolling);
</script>

<template>
  <main class="admin-report">
    <header class="admin-report-header">
      <div>
        <p class="report-kicker">Отдел прямых продаж / SLA</p>
        <h1>{{ config.title }}</h1>
        <span>{{ config.subtitle }}</span>
      </div>
      <div class="report-actions">
        <span>Последняя проверка: {{ formatDateTime(payload.generatedAt) }}</span>
        <B24Button
          :icon="themeIcon"
          :label="themeLabel"
          class="theme-toggle header-theme-toggle"
          @click="setTheme"
        />
        <B24Button label="Экспорт" class="border border-default bg-default text-label" :disabled="filteredRows.length === 0" @click="exportRows" />
        <B24Button
          :icon="RefreshIcon"
          :label="isRunning ? 'Проверяем' : 'Обновить'"
          :loading="isRunning"
          class="brand-action refresh-action"
          @click="() => void runCheck(false)"
        />
      </div>
    </header>

    <section v-if="config.runNeedsDateRange" class="report-toolbar">
      <B24FormField label="Создан с">
        <B24Input v-model="filters.dateFrom" type="datetime-local" />
      </B24FormField>
      <B24FormField label="Создан по">
        <B24Input v-model="filters.dateTo" type="datetime-local" />
      </B24FormField>
      <B24FormField label="Статус">
        <select v-model="filters.status" class="native-select">
          <option v-for="status in STATUS_OPTIONS[mode]" :key="status" :value="status">{{ status }}</option>
        </select>
      </B24FormField>
      <B24FormField label="Ответственный">
        <select v-model="filters.responsible" class="native-select">
          <option v-for="responsible in responsibleOptions" :key="responsible" :value="responsible">{{ responsible }}</option>
        </select>
      </B24FormField>
      <B24FormField v-if="mode === 'sla-first-contact'" label="Нарушение SLA">
        <select v-model="filters.violation" class="native-select">
          <option value="Все">Все</option>
          <option value="Да">Да</option>
          <option value="Нет">Нет</option>
        </select>
      </B24FormField>
      <B24FormField label="Поиск">
        <B24Input v-model="filters.query" :placeholder="config.searchPlaceholder" />
      </B24FormField>
    </section>

    <section v-else class="report-toolbar">
      <B24FormField label="Статус">
        <select v-model="filters.status" class="native-select">
          <option v-for="status in STATUS_OPTIONS[mode]" :key="status" :value="status">{{ status }}</option>
        </select>
      </B24FormField>
      <B24FormField label="Ответственный">
        <select v-model="filters.responsible" class="native-select">
          <option v-for="responsible in responsibleOptions" :key="responsible" :value="responsible">{{ responsible }}</option>
        </select>
      </B24FormField>
      <B24FormField label="Поиск">
        <B24Input v-model="filters.query" :placeholder="config.searchPlaceholder" />
      </B24FormField>
    </section>

    <section v-if="mode === 'sla-first-contact' && slaAutoControl" class="automation-panel">
      <div class="automation-summary">
        <p class="report-kicker">Автоконтроль</p>
        <h2>SLA первого контакта</h2>
        <span>
          Следующий запуск: {{ slaAutoControl.nextRunAt ? formatDateTime(slaAutoControl.nextRunAt) : 'отключен' }}
        </span>
      </div>
      <label class="switch-line">
        <input v-model="slaAutoControl.enabled" type="checkbox" />
        Включить автоматический контроль
      </label>
      <B24FormField label="Первый запуск">
        <B24Input v-model="slaAutoControl.startDate" type="date" />
      </B24FormField>
      <B24FormField label="Время">
        <B24Input v-model="slaAutoControl.time" type="time" />
      </B24FormField>
      <B24FormField label="Периодичность, дней">
        <B24Input v-model="slaAutoControl.intervalDays" type="number" min="1" />
      </B24FormField>
      <B24Button label="Сохранить расписание" :loading="slaAutoSaving" class="brand-action automation-save" @click="saveSlaAutoControl" />
      <B24Button label="Заполнить CRM за период" class="brand-action" :disabled="isRunning" @click="() => void runCheck(true)" />
    </section>

    <B24Alert
      v-if="errorMessage"
      color="air-primary-alert"
      variant="soft"
      title="Ошибка отчета"
      :description="errorMessage"
      :icon="AlertIcon"
    />

    <section v-if="isRunning" class="progress-banner">
      <div>
        <strong>{{ job.progress.message }}</strong>
        <span>На экране остаются данные последнего готового лога.</span>
      </div>
      <small>{{ job.progress.current > 0 ? `${job.progress.current} / ${job.progress.total}` : 'выполняется' }}</small>
      <i :style="{ width: `${progressPercent}%` }" />
    </section>

    <div v-if="loading" class="loading">Загружаю отчет...</div>

    <template v-else>
      <section class="report-kpis">
        <article v-for="kpi in kpis" :key="kpi.label" class="report-kpi" :class="`tone-${kpi.tone}`">
          <i aria-hidden="true" />
          <span>{{ kpi.label }}</span>
          <div>
            <strong>{{ kpi.value }}</strong>
            <b v-if="kpi.badge">{{ kpi.badge }}</b>
          </div>
          <small v-if="kpi.hint">{{ kpi.hint }}</small>
        </article>
      </section>

      <section class="report-grid">
        <article class="report-panel chart-panel">
          <div class="panel-heading">
            <div>
              <p class="report-kicker">Сводка</p>
              <h2>Распределение</h2>
            </div>
            <B24Badge :label="`${filteredRows.length} строк`" class="brand-soft" />
          </div>
          <div class="donut-chart">
            <svg viewBox="0 0 120 120" role="img">
              <circle cx="60" cy="60" r="42" fill="none" stroke="#e5edf5" stroke-width="16" />
              <circle
                v-for="(segment, index) in chartSegments"
                :key="segment.label"
                cx="60"
                cy="60"
                r="42"
                fill="none"
                :stroke="segment.color"
                stroke-width="16"
                :stroke-dasharray="`${Math.max(1, Math.round((segment.value / Math.max(1, filteredRows.length)) * 264))} 264`"
                :stroke-dashoffset="-index * 52"
                stroke-linecap="round"
                transform="rotate(-90 60 60)"
              />
              <text x="60" y="64" text-anchor="middle">{{ filteredRows.length }}</text>
            </svg>
            <ul>
              <li v-for="segment in chartSegments" :key="segment.label">
                <i :style="{ backgroundColor: segment.color }" />
                <span>{{ segment.label }}</span>
                <b>{{ segment.value }}</b>
              </li>
            </ul>
          </div>
        </article>

        <article class="report-panel table-panel">
          <div class="panel-heading">
            <div>
              <p class="report-kicker">Лог</p>
              <h2>Детализация</h2>
            </div>
            <B24Badge :label="`${Math.min(page, pageCount)} / ${pageCount}`" class="brand-soft" />
          </div>

          <div class="report-table-wrap">
            <table v-if="mode === 'sla-first-contact'" class="report-table">
              <thead>
                <tr>
                  <th>Лид</th>
                  <th>Статус лида</th>
                  <th>Причина браковки</th>
                  <th>Проверка</th>
                  <th>Создан</th>
                  <th>Первый контакт</th>
                  <th>Минут</th>
                  <th>Просрочка</th>
                  <th>Статус</th>
                  <th>Ответственный</th>
                  <th>Нарушение</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in pagedRows" :key="row.id">
                  <td>
                    <strong class="lead-link">#{{ row.leadId }}</strong>
                    <span class="table-muted">{{ row.leadTitle }}</span>
                  </td>
                  <td>{{ row.leadStageName || '—' }}</td>
                  <td>{{ row.rejectionReason || '—' }}</td>
                  <td>{{ formatDateTime(row.checkedAt) }}</td>
                  <td>{{ formatDateTime(row.leadCreatedAt) }}</td>
                  <td>{{ formatDateTime(row.firstContactAt) }}</td>
                  <td>{{ row.minutesToFirstContact ?? '—' }}</td>
                  <td>{{ row.slaOverrunMinutes ?? '—' }}</td>
                  <td><mark>{{ row.status }}</mark></td>
                  <td>{{ row.responsibleName }}</td>
                  <td><b class="flag-pill" :class="row.violationFlag === 'Да' ? 'flag-bad' : 'flag-good'">{{ row.violationFlag }}</b></td>
                </tr>
              </tbody>
            </table>

            <table v-else-if="mode === 'data-quality'" class="report-table">
              <thead>
                <tr><th>ID</th><th>Контакт</th><th>Создан</th><th>Оценка</th><th>Ошибки</th><th>Ответственный</th><th>Статус</th></tr>
              </thead>
              <tbody>
                <tr v-for="row in pagedRows" :key="row.id">
                  <td>{{ row.contactId }}</td>
                  <td>{{ row.contactName }}</td>
                  <td>{{ formatDateTime(row.contactCreatedAt) }}</td>
                  <td>{{ row.qualityScore }}</td>
                  <td>{{ row.qualityErrors.join('; ') || '—' }}</td>
                  <td>{{ row.responsibleName }}</td>
                  <td><mark>{{ normalizeStatus(row) }}</mark></td>
                </tr>
              </tbody>
            </table>

            <table v-else-if="mode === 'reactivation'" class="report-table">
              <thead>
                <tr><th>Сотрудник</th><th>Неделя</th><th>План</th><th>Осталось</th><th>Рейтинг месяца</th></tr>
              </thead>
              <tbody>
                <tr v-for="row in pagedRows" :key="row.employeeId">
                  <td class="employee-cell">
                    <img v-if="row.photoUrl" :src="row.photoUrl" :alt="employeeName(row)" />
                    <span>{{ employeeName(row) }}</span>
                  </td>
                  <td>{{ row.weeklyCount }}</td>
                  <td>{{ row.weeklyPlan }}</td>
                  <td>{{ Math.max(0, row.weeklyPlan - row.weeklyCount) }}</td>
                  <td><strong>{{ row.monthlyRating }}</strong></td>
                </tr>
              </tbody>
            </table>

            <table v-else class="report-table">
              <thead>
                <tr><th>ID</th><th>Сделка</th><th>Стадия</th><th>Дедлайн</th><th>Ошибки</th><th>Ответственный</th><th>Статус</th></tr>
              </thead>
              <tbody>
                <tr v-for="row in pagedRows" :key="row.id">
                  <td>{{ row.dealId }}</td>
                  <td>{{ row.dealTitle }}</td>
                  <td>{{ row.stageName }}</td>
                  <td>{{ formatDateTime(row.activityDeadline) }}</td>
                  <td>{{ row.nextStepErrors.join('; ') || '—' }}</td>
                  <td>{{ row.responsibleName }}</td>
                  <td><mark>{{ row.status }}</mark></td>
                </tr>
              </tbody>
            </table>

            <div v-if="filteredRows.length === 0" class="empty-report">
              <CheckIcon class="h-6 w-6" />
              Нет строк для выбранных фильтров
            </div>
          </div>

          <div class="report-pagination">
            <span>{{ filteredRows.length }} строк</span>
            <div>
              <B24Button label="Назад" size="sm" class="border border-default bg-default text-label" :disabled="page <= 1" @click="page = Math.max(1, page - 1)" />
              <B24Button label="Вперед" size="sm" class="border border-default bg-default text-label" :disabled="page >= pageCount" @click="page = Math.min(pageCount, page + 1)" />
            </div>
          </div>
        </article>
      </section>
    </template>
  </main>
</template>
