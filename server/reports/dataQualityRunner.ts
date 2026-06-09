import { buildDataQualityRow, shouldAnalyzeContact } from './dataQuality';
import { writeDataQualityLog } from './logStore';
import type { DataQualityLogPayload, VibeContact, VibeUser } from './types';
import { VibeCodeClient } from './vibecode';
import type { SlaCheckDateRange, SlaProgress } from './slaRunner';

function isCreatedAtInRange(value: string | null | undefined, range: SlaCheckDateRange): boolean {
  const valueTime = value ? new Date(value).getTime() : Number.NaN;
  const minTime = new Date(range.createdFrom).getTime();
  const maxTime = new Date(range.createdTo).getTime();
  return (
    Number.isFinite(valueTime) &&
    Number.isFinite(minTime) &&
    Number.isFinite(maxTime) &&
    valueTime >= minTime &&
    valueTime <= maxTime
  );
}

export async function runDataQualityCheckJob(
  apiKey: string,
  dateRange: SlaCheckDateRange,
  reportProgress: (progress: SlaProgress) => void
): Promise<DataQualityLogPayload> {
  reportProgress({ stage: 'starting', message: 'Готовим проверку качества данных', current: 0, total: 1 });

  const checkedAt = new Date().toISOString();
  const client = new VibeCodeClient(apiKey);

  reportProgress({ stage: 'loading_contacts', message: 'Загружаем контакты и сотрудников', current: 0, total: 1 });
  let loadedContacts = 0;
  const reportLoadedContacts = (processed: number) => {
    loadedContacts += processed;
    reportProgress({
      stage: 'loading_contacts',
      message: 'Загружаем контакты и сотрудников',
      current: loadedContacts,
      total: Math.max(loadedContacts, 1)
    });
  };

  const [contacts, users] = await Promise.all([
    client.searchContacts(dateRange.createdFrom, dateRange.createdTo, reportLoadedContacts),
    client.listUsers()
  ]);

  const filteredContacts = contacts.filter((contact: VibeContact) =>
    shouldAnalyzeContact(contact) && isCreatedAtInRange(contact.createdAt ?? contact.createdTime, dateRange)
  );
  const usersMap = new Map<number, VibeUser>(users.map((user) => [Number(user.id), user]));

  reportProgress({ stage: 'calculating', message: 'Считаем качество данных', current: 0, total: filteredContacts.length });
  const rows = filteredContacts
    .map((contact) => buildDataQualityRow({ contact, users: usersMap, checkedAt }))
    .sort((a, b) => new Date(b.contactCreatedAt).getTime() - new Date(a.contactCreatedAt).getTime());

  const payload = await writeDataQualityLog(rows, checkedAt);
  reportProgress({ stage: 'done', message: 'Проверка качества данных завершена', current: rows.length, total: rows.length });
  return payload;
}
