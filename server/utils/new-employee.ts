const SALES_MANAGER_POSITION = 'менеджер по продажам';
const ADAPTATION_WORKGROUP_NAME = 'обучение и адаптация сотрудников';

export function isNewEmployee({ position, workgroupName, memberIds, userId }: {
  position: string;
  workgroupName: string;
  memberIds: unknown[];
  userId: number;
}) {
  return normalize(position) === SALES_MANAGER_POSITION
    && normalize(workgroupName) === ADAPTATION_WORKGROUP_NAME
    && memberIds.some((id) => Number(id) === userId);
}

export function normalizeWorkgroupName(value: unknown) {
  return normalize(value);
}

function normalize(value: unknown) {
  return String(value || '')
    .trim()
    .toLocaleLowerCase('ru-RU')
    .replace(/\s+/g, ' ');
}
