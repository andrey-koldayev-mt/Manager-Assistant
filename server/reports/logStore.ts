import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { emptyReactivationLog } from './reactivation';
import type {
  DataQualityLogPayload,
  DataQualityLogRow,
  NextStepLogPayload,
  NextStepLogRow,
  ReactivationLogPayload,
  SlaLogPayload,
  SlaLogRow
} from './types';

const logPath = path.resolve(process.cwd(), 'data', 'sla-log.json');
const dataQualityLogPath = path.resolve(process.cwd(), 'data', 'data-quality-log.json');
const reactivationLogPath = path.resolve(process.cwd(), 'data', 'reactivation-log.json');
const nextStepLogPath = path.resolve(process.cwd(), 'data', 'next-step-log.json');
const REPORT_START_DATE = new Date(2026, 0, 1, 0, 0, 0, 0).getTime();

function getTodayEndTime(): number {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999).getTime();
}

function isRowInsideReportRange(row: SlaLogRow): boolean {
  const createdAtTime = new Date(row.leadCreatedAt).getTime();
  return Number.isFinite(createdAtTime) && createdAtTime >= REPORT_START_DATE && createdAtTime <= getTodayEndTime();
}

export async function readSlaLog(): Promise<SlaLogPayload> {
  try {
    const raw = await readFile(logPath, 'utf8');
    const parsed = JSON.parse(raw) as SlaLogPayload;
    const generatedAt = parsed.generatedAt ?? null;
    return {
      generatedAt,
      rows: Array.isArray(parsed.rows) ? parsed.rows.filter(isRowInsideReportRange) : []
    };
  } catch {
    return { generatedAt: null, rows: [] };
  }
}

export async function writeSlaLog(rows: SlaLogRow[], generatedAt: string): Promise<SlaLogPayload> {
  await mkdir(path.dirname(logPath), { recursive: true });
  const payload = { generatedAt, rows };
  await writeFile(logPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  return payload;
}

function isDataQualityRowInsideReportRange(row: DataQualityLogRow): boolean {
  const createdAtTime = new Date(row.contactCreatedAt).getTime();
  return Number.isFinite(createdAtTime) && createdAtTime >= REPORT_START_DATE && createdAtTime <= getTodayEndTime();
}

export async function readDataQualityLog(): Promise<DataQualityLogPayload> {
  try {
    const raw = await readFile(dataQualityLogPath, 'utf8');
    const parsed = JSON.parse(raw) as DataQualityLogPayload;
    const generatedAt = parsed.generatedAt ?? null;
    return {
      generatedAt,
      rows: Array.isArray(parsed.rows) ? parsed.rows.filter(isDataQualityRowInsideReportRange) : []
    };
  } catch {
    return { generatedAt: null, rows: [] };
  }
}

export async function writeDataQualityLog(rows: DataQualityLogRow[], generatedAt: string): Promise<DataQualityLogPayload> {
  await mkdir(path.dirname(dataQualityLogPath), { recursive: true });
  const payload = { generatedAt, rows };
  await writeFile(dataQualityLogPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  return payload;
}

export async function readNextStepLog(): Promise<NextStepLogPayload> {
  try {
    const raw = await readFile(nextStepLogPath, 'utf8');
    const parsed = JSON.parse(raw) as NextStepLogPayload;
    return {
      generatedAt: parsed.generatedAt ?? null,
      rows: Array.isArray(parsed.rows) ? parsed.rows : []
    };
  } catch {
    return { generatedAt: null, rows: [] };
  }
}

export async function writeNextStepLog(rows: NextStepLogRow[], generatedAt: string): Promise<NextStepLogPayload> {
  await mkdir(path.dirname(nextStepLogPath), { recursive: true });
  const payload = { generatedAt, rows };
  await writeFile(nextStepLogPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  return payload;
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export async function readReactivationLog(): Promise<ReactivationLogPayload> {
  const empty = emptyReactivationLog();
  try {
    const raw = await readFile(reactivationLogPath, 'utf8');
    const parsed = JSON.parse(raw) as Partial<ReactivationLogPayload>;
    return {
      ...empty,
      ...parsed,
      monthlyRating: isPlainObject(parsed.monthlyRating) ? (parsed.monthlyRating as Record<string, number>) : {},
      finalizedWeeks: Array.isArray(parsed.finalizedWeeks) ? parsed.finalizedWeeks : [],
      rows: Array.isArray(parsed.rows) ? parsed.rows : []
    };
  } catch {
    return empty;
  }
}

export async function writeReactivationLog(payload: ReactivationLogPayload): Promise<ReactivationLogPayload> {
  await mkdir(path.dirname(reactivationLogPath), { recursive: true });
  await writeFile(reactivationLogPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  return payload;
}
