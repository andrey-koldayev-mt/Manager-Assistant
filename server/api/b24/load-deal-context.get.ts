import {
  B24_API_KEY,
  ensureVibeApiKey,
  firstString,
  formatTripDatePhrase,
  getDealField,
  getDisplayName,
  getVibeAuthorizationHeader,
  toRecord
} from '../../utils/b24';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const dealId = firstString(query.dealId);
  const authHeader = getVibeAuthorizationHeader(event);

  if (!dealId) {
    throw createError({ statusCode: 400, statusMessage: 'Missing dealId parameter' });
  }
  if (!authHeader) {
    throw createError({ statusCode: 401, statusMessage: 'Missing authorization header' });
  }
  ensureVibeApiKey();

  const headers = {
    'X-Api-Key': B24_API_KEY,
    Authorization: authHeader
  };

  const dealResponse = await fetch(`https://vibecode.bitrix24.tech/v1/deals/${dealId}`, { headers });
  const dealData = await dealResponse.json();
  if (!dealResponse.ok || !dealData.success) {
    throw createError({
      statusCode: dealResponse.status || 500,
      statusMessage: dealData.error?.message || dealData.error || 'VibeCode deal fetch failed'
    });
  }

  const deal = toRecord(dealData.data) || {};
  const assignedById = firstString(deal.assignedById, deal.ASSIGNED_BY_ID);
  const contactId = firstString(deal.contactId, deal.CONTACT_ID, Array.isArray(deal.contactIds) ? deal.contactIds[0] : '');
  const categoryId = firstString(deal.categoryId, deal.CATEGORY_ID);
  const dealCategory = toRecord(deal.category) || toRecord(deal.CATEGORY);
  const categoryNameFromDeal = firstString(
    deal.categoryName,
    deal.CATEGORY_NAME,
    dealCategory?.name,
    dealCategory?.title,
    dealCategory?.NAME,
    dealCategory?.TITLE
  );

  const [userData, contactData, categoryData] = await Promise.all([
    assignedById
      ? fetch(`https://vibecode.bitrix24.tech/v1/users/${assignedById}`, { headers })
        .then((response) => response.json())
        .catch((error) => {
          console.error('Error fetching responsible user:', error);
          return null;
        })
      : Promise.resolve(null),
    contactId
      ? fetch(`https://vibecode.bitrix24.tech/v1/contacts/${contactId}`, { headers })
        .then((response) => response.json())
        .catch((error) => {
          console.error('Error fetching contact:', error);
          return null;
        })
      : Promise.resolve(null),
    categoryId
      ? fetch(`https://vibecode.bitrix24.tech/v1/deal-categories/${categoryId}`, { headers })
        .then((response) => response.json())
        .catch((error) => {
          console.error('Error fetching deal category:', error);
          return null;
        })
      : Promise.resolve(null)
  ]);

  const agentName = userData?.success && userData.data
    ? getDisplayName(toRecord(userData.data), 'Елена')
    : 'Елена';
  const clientName = contactData?.success && contactData.data
    ? getDisplayName(toRecord(contactData.data), 'Александр')
    : 'Александр';

  const destination = getDealField(deal, '1604438175');
  const startDate = getDealField(deal, '1604438397');
  const endDate = getDealField(deal, '1621261388273');
  const tripDateText = formatTripDatePhrase(startDate, endDate);
  const previousTrip = destination || startDate || endDate
    ? { destination, startDate, endDate, tripDateText }
    : null;
  const category = categoryData?.success && categoryData.data ? toRecord(categoryData.data) : null;
  const categoryName = categoryNameFromDeal || firstString(
    category?.name,
    category?.NAME,
    category?.title,
    category?.TITLE
  );

  return {
    success: true,
    data: {
      dealId: Number(dealId),
      categoryId: categoryId ? Number(categoryId) : null,
      categoryName,
      assignedById: assignedById ? Number(assignedById) : null,
      contactId: contactId ? Number(contactId) : null,
      agentName,
      clientName,
      previousTrip
    }
  };
});
