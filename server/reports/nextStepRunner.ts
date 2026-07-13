import { buildNextStepRows } from './nextStep';
import { writeNextStepLog } from './logStore';
import type { SlaProgress } from './slaRunner';
import type { NextStepLogPayload, VibeUser } from './types';
import { VibeCodeClient } from './vibecode';

export async function runNextStepCheckJob(
  apiKey: string,
  reportProgress: (progress: SlaProgress) => void,
  authorization: string | null = null
): Promise<NextStepLogPayload> {
  reportProgress({ stage: 'starting', message: 'Готовим проверку следующего шага', current: 0, total: 1 });

  const checkedAt = new Date().toISOString();
  const client = new VibeCodeClient(apiKey, authorization);

  reportProgress({ stage: 'loading_contacts', message: 'Загружаем сделки и сотрудников', current: 0, total: 1 });
  let loadedDeals = 0;
  const reportLoadedDeals = (processed: number) => {
    loadedDeals += processed;
    reportProgress({
      stage: 'loading_contacts',
      message: 'Загружаем сделки и сотрудников',
      current: loadedDeals,
      total: Math.max(loadedDeals, 1)
    });
  };

  const [deals, users] = await Promise.all([client.searchNextStepDeals(reportLoadedDeals), client.listUsers()]);
  const dealIds = deals.map((deal) => deal.id);

  reportProgress({
    stage: 'loading_history',
    message: 'Загружаем дела по сделкам',
    current: 0,
    total: Math.max(1, dealIds.length)
  });
  let loadedActivities = 0;
  const reportLoadedActivities = (processed: number) => {
    loadedActivities += processed;
    reportProgress({
      stage: 'loading_history',
      message: 'Загружаем дела по сделкам',
      current: loadedActivities,
      total: Math.max(1, dealIds.length)
    });
  };
  const activitiesByDeal = await client.listActivitiesForDeals(dealIds, reportLoadedActivities);
  const usersMap = new Map<number, VibeUser>(users.map((user) => [Number(user.id), user]));

  reportProgress({ stage: 'calculating', message: 'Считаем следующий шаг', current: 0, total: deals.length });
  const rows = buildNextStepRows({ deals, activitiesByDeal, users: usersMap, checkedAt });
  const payload = await writeNextStepLog(rows, checkedAt);

  reportProgress({ stage: 'done', message: 'Проверка следующего шага завершена', current: rows.length, total: rows.length });
  return payload;
}
