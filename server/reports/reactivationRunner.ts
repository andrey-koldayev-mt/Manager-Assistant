import { readReactivationLog, writeReactivationLog } from './logStore';
import {
  buildReactivationRows,
  EXCLUDED_REACTIVATION_USER_ID,
  getMoscowWeekRange,
  REACTIVATION_DEPARTMENT_ID,
  rollupPreviousWeekIntoRating
} from './reactivation';
import type { SlaProgress } from './slaRunner';
import type { ReactivationLogPayload } from './types';
import { VibeCodeClient } from './vibecode';

export async function runReactivationCheckJob(
  apiKey: string,
  reportProgress: (progress: SlaProgress) => void
): Promise<ReactivationLogPayload> {
  reportProgress({ stage: 'starting', message: 'Готовим проверку реактивации', current: 0, total: 1 });

  const checkedAt = new Date().toISOString();
  const week = getMoscowWeekRange(checkedAt);
  const client = new VibeCodeClient(apiKey);

  reportProgress({ stage: 'loading_history', message: 'Загружаем сохраненный отчет', current: 0, total: 1 });
  const saved = await readReactivationLog();
  const rolled = rollupPreviousWeekIntoRating(saved, week.monthKey, checkedAt);

  reportProgress({ stage: 'loading_contacts', message: 'Загружаем сотрудников и сделки реактивации', current: 0, total: 1 });
  let loadedDeals = 0;
  const reportLoadedDeals = (processed: number) => {
    loadedDeals += processed;
    reportProgress({
      stage: 'loading_contacts',
      message: 'Загружаем сотрудников и сделки реактивации',
      current: loadedDeals,
      total: Math.max(loadedDeals, 1)
    });
  };

  const [employees, deals] = await Promise.all([
    client.listDepartmentUsers(REACTIVATION_DEPARTMENT_ID, new Set([EXCLUDED_REACTIVATION_USER_ID])),
    client.searchReactivationDeals(week.startedAt, week.finishedAt, reportLoadedDeals)
  ]);

  const dealIds = deals.map((deal) => deal.id);
  reportProgress({
    stage: 'loading_history',
    message: 'Загружаем активности по сделкам',
    current: 0,
    total: Math.max(1, dealIds.length)
  });
  let loadedActivities = 0;
  const reportLoadedActivities = (processed: number) => {
    loadedActivities += processed;
    reportProgress({
      stage: 'loading_history',
      message: 'Загружаем активности по сделкам',
      current: loadedActivities,
      total: Math.max(1, dealIds.length)
    });
  };
  const activitiesByDeal = await client.listActivitiesForDeals(dealIds, reportLoadedActivities);

  reportProgress({ stage: 'calculating', message: 'Считаем реактивацию', current: 0, total: employees.length });
  const rows = buildReactivationRows({
    employees,
    deals,
    activitiesByDeal,
    previousMonthlyRating: rolled.monthlyRating,
    week,
    checkedAt
  });

  const payload = await writeReactivationLog({
    generatedAt: checkedAt,
    weekKey: week.key,
    monthKey: week.monthKey,
    weekStartedAt: week.startedAt,
    weekFinishedAt: week.finishedAt,
    monthlyRating: rolled.monthlyRating,
    finalizedWeeks: rolled.finalizedWeeks,
    rows
  });

  reportProgress({ stage: 'done', message: 'Проверка реактивации завершена', current: rows.length, total: rows.length });
  return payload;
}
