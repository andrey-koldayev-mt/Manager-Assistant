import {
  B24_API_KEY,
  buildActivityDeadline,
  ensureVibeApiKey,
  getVibeAuthorizationHeader
} from '../../utils/b24';

export default defineEventHandler(async (event) => {
  const authHeader = getVibeAuthorizationHeader(event);
  const body = await readBody<{
    dealId?: number | string;
    crmNotes?: string;
    nextContactDate?: string;
    assignedById?: number | string | null;
  }>(event);

  if (!body?.dealId) {
    throw createError({ statusCode: 400, statusMessage: 'Missing dealId parameter' });
  }
  if (!authHeader) {
    throw createError({ statusCode: 401, statusMessage: 'Missing authorization header' });
  }
  ensureVibeApiKey();

  const notes = typeof body.crmNotes === 'string' ? body.crmNotes.trim() : '';
  if (!body.nextContactDate) {
    throw createError({ statusCode: 400, statusMessage: 'Missing nextContactDate parameter' });
  }
  if (!notes) {
    throw createError({ statusCode: 400, statusMessage: 'Missing crmNotes parameter' });
  }

  const deadline = buildActivityDeadline(String(body.nextContactDate));
  const description = [
    'Заметки менеджера:',
    notes,
    '',
    `Дата выполнения: ${body.nextContactDate}`,
    'Создано автоматически из виджета реактивации после завершения звонка.'
  ].join('\n');

  const dealId = Number(body.dealId);
  const taskBody = {
    title: 'Следующий контакт по реактивации',
    description,
    responsibleId: body.assignedById ? Number(body.assignedById) : 1,
    deadline,
    priority: 1,
    UF_CRM_TASK: [`D_${dealId}`]
  };

  console.log('Creating CRM follow-up task from widget:', JSON.stringify({
    dealId,
    responsibleId: taskBody.responsibleId,
    deadline: taskBody.deadline,
    hasNotes: Boolean(notes)
  }));

  const response = await fetch('https://vibecode.bitrix24.tech/v1/tasks', {
    method: 'POST',
    headers: {
      'X-Api-Key': B24_API_KEY,
      Authorization: authHeader,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(taskBody)
  });
  const result = await response.json();

  if (!response.ok || !result.success) {
    console.error('CRM follow-up task creation failed:', JSON.stringify(result).slice(0, 2000));
    throw createError({
      statusCode: response.status || 500,
      statusMessage: result.error?.message || result.error || 'Unable to create CRM follow-up task',
      data: result
    });
  }

  console.log('CRM follow-up task created:', JSON.stringify({
    dealId,
    taskId: result?.data?.id || result?.data?.ID || result?.id || result?.ID || null
  }));

  return result;
});
