import {
  getDayBeforePreviousMoscowDayRange,
  getNextSlaAutoRunAt,
  readSlaAutoControlConfig,
  toSlaAutoControlState,
  writeSlaAutoControlConfig,
  type SlaAutoControlConfig
} from './slaAutoControlStore';
import { runDataQualityCheckJob } from './dataQualityRunner';
import { runNextStepCheckJob } from './nextStepRunner';
import { runReactivationCheckJob } from './reactivationRunner';
import { runSlaCheckJob, type SlaProgress } from './slaRunner';

const MOSCOW_OFFSET = '+03:00';
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const DATETIME_PATTERN = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;

export type ReportJobStatus = 'idle' | 'running' | 'completed' | 'failed';
export type ReportKind = 'sla' | 'dataQuality' | 'reactivation' | 'nextStep';

export interface ReportJobState {
  id: string | null;
  status: ReportJobStatus;
  startedAt: string | null;
  finishedAt: string | null;
  error: string | null;
  progress: SlaProgress;
}

export interface ReportDateRangeRequest {
  dateFrom?: string;
  dateTo?: string;
  updateCrm?: boolean;
}

function createInitialJob(message = 'Проверка не запущена'): ReportJobState {
  return {
    id: null,
    status: 'idle',
    startedAt: null,
    finishedAt: null,
    error: null,
    progress: { stage: 'starting', message, current: 0, total: 1 }
  };
}

const state = globalThis as typeof globalThis & {
  __managerAssistantReportJobs?: Record<ReportKind, ReportJobState>;
  __managerAssistantSlaAutoTimer?: NodeJS.Timeout | null;
  __managerAssistantSlaAutoScheduled?: boolean;
};

export const reportJobs = state.__managerAssistantReportJobs ??= {
  sla: createInitialJob(),
  dataQuality: createInitialJob(),
  reactivation: createInitialJob(),
  nextStep: createInitialJob()
};

export function parseMoscowDateRange(body: ReportDateRangeRequest) {
  const { dateFrom, dateTo } = body;
  if (!dateFrom || !dateTo) {
    throw new Error('Некорректный период проверки');
  }

  const createdFrom = DATE_PATTERN.test(dateFrom)
    ? new Date(`${dateFrom}T00:00:00.000${MOSCOW_OFFSET}`)
    : DATETIME_PATTERN.test(dateFrom)
      ? new Date(`${dateFrom}:00.000${MOSCOW_OFFSET}`)
      : new Date(Number.NaN);
  const createdTo = DATE_PATTERN.test(dateTo)
    ? new Date(`${dateTo}T23:59:59.999${MOSCOW_OFFSET}`)
    : DATETIME_PATTERN.test(dateTo)
      ? new Date(`${dateTo}:59.999${MOSCOW_OFFSET}`)
      : new Date(Number.NaN);

  if (!Number.isFinite(createdFrom.getTime()) || !Number.isFinite(createdTo.getTime()) || createdFrom > createdTo) {
    throw new Error('Некорректный период проверки');
  }

  return {
    createdFrom: createdFrom.toISOString(),
    createdTo: createdTo.toISOString()
  };
}

function getApiKey(): string {
  const apiKey = process.env.VIBE_API_KEY ?? '';
  if (!apiKey) {
    throw new Error('VIBE_API_KEY is not configured');
  }

  return apiKey;
}

function startJob(
  kind: ReportKind,
  startMessage: string,
  runner: (apiKey: string, reportProgress: (progress: SlaProgress) => void) => Promise<unknown>
): ReportJobState {
  const job = reportJobs[kind];
  if (job.status === 'running') {
    return job;
  }

  const jobId = `${Date.now()}`;
  job.id = jobId;
  job.status = 'running';
  job.startedAt = new Date().toISOString();
  job.finishedAt = null;
  job.error = null;
  job.progress = { stage: 'starting', message: startMessage, current: 0, total: 1 };

  void runner(getApiKey(), (progress) => {
    if (job.id === jobId) {
      job.progress = progress;
    }
  })
    .then(() => {
      if (job.id !== jobId) return;
      job.status = 'completed';
      job.finishedAt = new Date().toISOString();
    })
    .catch((error: Error) => {
      if (job.id !== jobId) return;
      console.error(error);
      job.status = 'failed';
      job.finishedAt = new Date().toISOString();
      job.error = error.message || 'Unexpected server error';
    });

  return job;
}

export function startSlaJob(params: {
  dateRange: { createdFrom: string; createdTo: string };
  updateCrm?: boolean;
  source?: 'manual' | 'auto';
}): ReportJobState {
  const job = reportJobs.sla;
  if (job.status === 'running') {
    return job;
  }

  const jobId = `${Date.now()}`;
  job.id = jobId;
  job.status = 'running';
  job.startedAt = new Date().toISOString();
  job.finishedAt = null;
  job.error = null;
  job.progress = {
    stage: 'starting',
    message: params.updateCrm ? 'Проверка SLA с заполнением CRM запускается' : 'Проверка SLA запускается',
    current: 0,
    total: 1
  };

  void runSlaCheckJob(
    getApiKey(),
    params.dateRange,
    (progress) => {
      if (job.id === jobId) {
        job.progress = progress;
      }
    },
    { updateCrm: params.updateCrm }
  )
    .then(async () => {
      if (job.id !== jobId) return;
      job.status = 'completed';
      job.finishedAt = new Date().toISOString();
      if (params.source === 'auto') {
        const config = await readSlaAutoControlConfig();
        await writeSlaAutoControlConfig({ ...config, lastRunAt: job.finishedAt });
      }
    })
    .catch((error: Error) => {
      if (job.id !== jobId) return;
      console.error(error);
      job.status = 'failed';
      job.finishedAt = new Date().toISOString();
      job.error = error.message || 'Unexpected server error';
    })
    .finally(() => {
      if (params.source === 'auto') {
        void scheduleSlaAutoControl();
      }
    });

  return job;
}

export function startDataQualityJob(dateRange: { createdFrom: string; createdTo: string }): ReportJobState {
  return startJob('dataQuality', 'Проверка качества данных запускается', (apiKey, progress) =>
    runDataQualityCheckJob(apiKey, dateRange, progress)
  );
}

export function startReactivationJob(): ReportJobState {
  return startJob('reactivation', 'Проверка реактивации запускается', (apiKey, progress) =>
    runReactivationCheckJob(apiKey, progress)
  );
}

export function startNextStepJob(): ReportJobState {
  return startJob('nextStep', 'Проверка следующего шага запускается', (apiKey, progress) =>
    runNextStepCheckJob(apiKey, progress)
  );
}

export async function readSlaAutoControlState() {
  return toSlaAutoControlState(await readSlaAutoControlConfig());
}

export async function updateSlaAutoControlConfig(body: Partial<SlaAutoControlConfig>) {
  const current = await readSlaAutoControlConfig();
  const updated = await writeSlaAutoControlConfig({
    ...current,
    enabled: typeof body.enabled === 'boolean' ? body.enabled : current.enabled,
    startDate: body.startDate ?? current.startDate,
    time: body.time ?? current.time,
    intervalDays: body.intervalDays ?? current.intervalDays
  });
  await scheduleSlaAutoControl();
  return toSlaAutoControlState(updated);
}

export async function scheduleSlaAutoControl(): Promise<void> {
  if (state.__managerAssistantSlaAutoTimer) {
    clearTimeout(state.__managerAssistantSlaAutoTimer);
    state.__managerAssistantSlaAutoTimer = null;
  }

  const config = await readSlaAutoControlConfig();
  const nextRunAt = getNextSlaAutoRunAt(config);
  if (!nextRunAt) {
    return;
  }

  const delayMs = Math.max(0, new Date(nextRunAt).getTime() - Date.now());
  state.__managerAssistantSlaAutoTimer = setTimeout(() => {
    if (!process.env.VIBE_API_KEY) {
      console.error('VIBE_API_KEY is not configured; scheduled SLA control skipped');
      void scheduleSlaAutoControl();
      return;
    }

    startSlaJob({
      dateRange: getDayBeforePreviousMoscowDayRange(new Date()),
      updateCrm: true,
      source: 'auto'
    });
  }, delayMs);
  state.__managerAssistantSlaAutoTimer.unref?.();
}

export function ensureSlaAutoControlScheduled(): void {
  if (state.__managerAssistantSlaAutoScheduled) {
    return;
  }

  state.__managerAssistantSlaAutoScheduled = true;
  void scheduleSlaAutoControl();
}
