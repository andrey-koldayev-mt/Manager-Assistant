import fs from 'node:fs/promises';
import path from 'node:path';

const storePath = path.resolve(process.cwd(), 'data', 'sla-auto-control.json');
const MOSCOW_OFFSET_MINUTES = 3 * 60;

export interface SlaAutoControlConfig {
  enabled: boolean;
  startDate: string;
  time: string;
  intervalDays: number;
  lastRunAt: string | null;
}

export interface SlaAutoControlState extends SlaAutoControlConfig {
  nextRunAt: string | null;
}

export const DEFAULT_SLA_AUTO_CONTROL_CONFIG: SlaAutoControlConfig = {
  enabled: true,
  startDate: '2026-06-06',
  time: '00:00',
  intervalDays: 1,
  lastRunAt: null
};

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const TIME_PATTERN = /^([01]\d|2[0-3]):([0-5]\d)$/;

function validateConfig(config: SlaAutoControlConfig): SlaAutoControlConfig {
  if (!DATE_PATTERN.test(config.startDate)) throw new Error('Некорректная дата первого запуска');
  if (!TIME_PATTERN.test(config.time)) throw new Error('Некорректное время запуска');
  if (!Number.isInteger(config.intervalDays) || config.intervalDays < 1 || config.intervalDays > 365) {
    throw new Error('Периодичность должна быть от 1 до 365 дней');
  }
  return config;
}

export function toMoscowDateString(date: Date): string {
  const local = new Date(date.getTime() + MOSCOW_OFFSET_MINUTES * 60 * 1000);
  const pad = (value: number) => String(value).padStart(2, '0');
  return `${local.getUTCFullYear()}-${pad(local.getUTCMonth() + 1)}-${pad(local.getUTCDate())}`;
}

export function addDays(dateString: string, days: number): string {
  const date = new Date(`${dateString}T00:00:00.000Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

export function moscowDateTimeToUtcIso(dateString: string, time: string): string {
  return new Date(`${dateString}T${time}:00.000+03:00`).toISOString();
}

export function getMoscowDayRange(daysBeforeNow: number, now = new Date()): { createdFrom: string; createdTo: string } {
  const date = addDays(toMoscowDateString(now), -daysBeforeNow);
  return {
    createdFrom: moscowDateTimeToUtcIso(date, '00:00'),
    createdTo: new Date(`${date}T23:59:59.999+03:00`).toISOString()
  };
}

export function getPreviousMoscowDayRange(now = new Date()): { createdFrom: string; createdTo: string } {
  return getMoscowDayRange(1, now);
}

export function getDayBeforePreviousMoscowDayRange(now = new Date()): { createdFrom: string; createdTo: string } {
  return getMoscowDayRange(2, now);
}

export function getNextSlaAutoRunAt(config: SlaAutoControlConfig, now = new Date()): string | null {
  if (!config.enabled) return null;
  let candidateDate = config.startDate;
  let candidate = new Date(moscowDateTimeToUtcIso(candidateDate, config.time));
  while (candidate.getTime() <= now.getTime()) {
    candidateDate = addDays(candidateDate, config.intervalDays);
    candidate = new Date(moscowDateTimeToUtcIso(candidateDate, config.time));
  }
  return candidate.toISOString();
}

export async function readSlaAutoControlConfig(): Promise<SlaAutoControlConfig> {
  try {
    const raw = await fs.readFile(storePath, 'utf8');
    return validateConfig({ ...DEFAULT_SLA_AUTO_CONTROL_CONFIG, ...(JSON.parse(raw) as Partial<SlaAutoControlConfig>) });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error;
    await writeSlaAutoControlConfig(DEFAULT_SLA_AUTO_CONTROL_CONFIG);
    return DEFAULT_SLA_AUTO_CONTROL_CONFIG;
  }
}

export async function writeSlaAutoControlConfig(config: SlaAutoControlConfig): Promise<SlaAutoControlConfig> {
  const normalized = validateConfig(config);
  await fs.mkdir(path.dirname(storePath), { recursive: true });
  await fs.writeFile(storePath, JSON.stringify(normalized, null, 2), 'utf8');
  return normalized;
}

export function toSlaAutoControlState(config: SlaAutoControlConfig, now = new Date()): SlaAutoControlState {
  return {
    ...config,
    nextRunAt: getNextSlaAutoRunAt(config, now)
  };
}
