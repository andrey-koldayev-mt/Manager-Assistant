import { buildNavigatorContext } from '../../domain/objection-navigator';
import { loadDealBundle } from '../../utils/deal-bundle';
import {
  B24_API_KEY,
  ensureVibeApiKey,
  firstString,
  getDisplayName,
  getVibeAuthorizationHeader,
  toRecord
} from '../../utils/b24';

export default defineEventHandler(async (event) => {
  const dealId = Number(firstString(getQuery(event).dealId));
  const authHeader = getVibeAuthorizationHeader(event);

  if (!Number.isInteger(dealId) || dealId <= 0) {
    throw createError({ statusCode: 400, statusMessage: 'Deal ID должен быть положительным числом.' });
  }
  if (!authHeader) {
    throw createError({ statusCode: 401, statusMessage: 'Vibe Gateway session is missing. Reopen the widget from the deal card.' });
  }
  ensureVibeApiKey();

  const headers = {
    'X-Api-Key': B24_API_KEY,
    Authorization: authHeader,
    'Content-Type': 'application/json'
  };

  try {
    const bundle = await loadDealBundle({ dealId, headers });
    const context = buildNavigatorContext(bundle);
    const assignedById = Number(bundle.deal.assignedById ?? bundle.deal.ASSIGNED_BY_ID);

    if (Number.isInteger(assignedById) && assignedById > 0) {
      const response = await fetch(`https://vibecode.bitrix24.tech/v1/users/${assignedById}`, { headers });
      const payload = await response.json().catch(() => null);
      if (response.ok && payload?.success && payload.data) {
        context.deal.responsibleName = getDisplayName(toRecord(payload.data), 'не указан');
      }
    }

    return { success: true, data: context };
  } catch (error: any) {
    throw createError({
      statusCode: error?.statusCode || 500,
      statusMessage: error?.message || 'Не удалось загрузить контекст сценариев.'
    });
  }
});
