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

  const activityBody = {
    typeId: 6,
    ownerTypeId: 2,
    ownerId: Number(body.dealId),
    subject: 'Следующий контакт по реактивации',
    description,
    responsibleId: body.assignedById ? Number(body.assignedById) : 1,
    completed: false,
    deadline,
    direction: 2,
    startTime: deadline,
    endTime: deadline
  };

  console.log('Creating CRM follow-up activity from widget:', JSON.stringify({
    dealId: activityBody.ownerId,
    responsibleId: activityBody.responsibleId,
    deadline: activityBody.deadline,
    hasNotes: Boolean(notes)
  }));

  const response = await fetch('https://vibecode.bitrix24.tech/v1/activities', {
    method: 'POST',
    headers: {
      'X-Api-Key': B24_API_KEY,
      Authorization: authHeader,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(activityBody)
  });
  const result = await response.json();

  if (!response.ok || !result.success) {
    console.error('CRM follow-up activity creation failed:', JSON.stringify(result).slice(0, 2000));
    throw createError({
      statusCode: response.status || 500,
      statusMessage: result.error?.message || result.error || 'Unable to create CRM activity',
      data: result
    });
  }

  console.log('CRM follow-up activity created:', JSON.stringify({
    dealId: activityBody.ownerId,
    activityId: result?.data?.id || result?.data?.ID || result?.id || result?.ID || null
  }));

  return result;
});
