import { a as defineEventHandler, k as getQuery, c as createError } from '../../../_/nitro.mjs';
import { f as firstString, d as getVibeAuthorizationHeader, e as ensureVibeApiKey, B as B24_API_KEY, t as toRecord, c as getDisplayName, g as getDealField, a as formatTripDatePhrase } from '../../../_/b24.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:fs/promises';
import 'node:url';

const loadDealContext_get = defineEventHandler(async (event) => {
  var _a;
  const query = getQuery(event);
  const dealId = firstString(query.dealId);
  const authHeader = getVibeAuthorizationHeader(event);
  if (!dealId) {
    throw createError({ statusCode: 400, statusMessage: "Missing dealId parameter" });
  }
  if (!authHeader) {
    throw createError({ statusCode: 401, statusMessage: "Missing authorization header" });
  }
  ensureVibeApiKey();
  const headers = {
    "X-Api-Key": B24_API_KEY,
    Authorization: authHeader
  };
  const dealResponse = await fetch(`https://vibecode.bitrix24.tech/v1/deals/${dealId}`, { headers });
  const dealData = await dealResponse.json();
  if (!dealResponse.ok || !dealData.success) {
    throw createError({
      statusCode: dealResponse.status || 500,
      statusMessage: ((_a = dealData.error) == null ? void 0 : _a.message) || dealData.error || "VibeCode deal fetch failed"
    });
  }
  const deal = toRecord(dealData.data) || {};
  const assignedById = firstString(deal.assignedById, deal.ASSIGNED_BY_ID);
  const contactId = firstString(deal.contactId, deal.CONTACT_ID, Array.isArray(deal.contactIds) ? deal.contactIds[0] : "");
  const categoryId = firstString(deal.categoryId, deal.CATEGORY_ID);
  const dealCategory = toRecord(deal.category) || toRecord(deal.CATEGORY);
  const categoryNameFromDeal = firstString(
    deal.categoryName,
    deal.CATEGORY_NAME,
    dealCategory == null ? void 0 : dealCategory.name,
    dealCategory == null ? void 0 : dealCategory.title,
    dealCategory == null ? void 0 : dealCategory.NAME,
    dealCategory == null ? void 0 : dealCategory.TITLE
  );
  const [userData, contactData, categoryData] = await Promise.all([
    assignedById ? fetch(`https://vibecode.bitrix24.tech/v1/users/${assignedById}`, { headers }).then((response) => response.json()).catch((error) => {
      console.error("Error fetching responsible user:", error);
      return null;
    }) : Promise.resolve(null),
    contactId ? fetch(`https://vibecode.bitrix24.tech/v1/contacts/${contactId}`, { headers }).then((response) => response.json()).catch((error) => {
      console.error("Error fetching contact:", error);
      return null;
    }) : Promise.resolve(null),
    categoryId ? fetch(`https://vibecode.bitrix24.tech/v1/deal-categories/${categoryId}`, { headers }).then((response) => response.json()).catch((error) => {
      console.error("Error fetching deal category:", error);
      return null;
    }) : Promise.resolve(null)
  ]);
  const agentName = (userData == null ? void 0 : userData.success) && userData.data ? getDisplayName(toRecord(userData.data), "\u0415\u043B\u0435\u043D\u0430") : "\u0415\u043B\u0435\u043D\u0430";
  const clientName = (contactData == null ? void 0 : contactData.success) && contactData.data ? getDisplayName(toRecord(contactData.data), "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440") : "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440";
  const destination = getDealField(deal, "1604438175");
  const startDate = getDealField(deal, "1604438397");
  const endDate = getDealField(deal, "1621261388273");
  const tripDateText = formatTripDatePhrase(startDate, endDate);
  const previousTrip = destination || startDate || endDate ? { destination, startDate, endDate, tripDateText } : null;
  const category = (categoryData == null ? void 0 : categoryData.success) && categoryData.data ? toRecord(categoryData.data) : null;
  const categoryName = categoryNameFromDeal || firstString(
    category == null ? void 0 : category.name,
    category == null ? void 0 : category.NAME,
    category == null ? void 0 : category.title,
    category == null ? void 0 : category.TITLE
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

export { loadDealContext_get as default };
//# sourceMappingURL=load-deal-context.get.mjs.map
