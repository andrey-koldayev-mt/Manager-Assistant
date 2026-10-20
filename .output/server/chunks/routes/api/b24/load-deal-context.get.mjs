import { a as defineEventHandler, k as getQuery, c as createError } from '../../../_/nitro.mjs';
import { f as firstString, d as getVibeAuthorizationHeader, e as ensureVibeApiKey, B as B24_API_KEY, t as toRecord, c as getDisplayName, g as getDealField, a as formatTripDatePhrase } from '../../../_/b24.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const SALES_MANAGER_POSITION = "\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043F\u043E \u043F\u0440\u043E\u0434\u0430\u0436\u0430\u043C";
const ADAPTATION_WORKGROUP_NAME$1 = "\u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0438 \u0430\u0434\u0430\u043F\u0442\u0430\u0446\u0438\u044F \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432";
function isNewEmployee({ position, workgroupName, memberIds, userId }) {
  return normalize(position) === SALES_MANAGER_POSITION && normalize(workgroupName) === ADAPTATION_WORKGROUP_NAME$1 && memberIds.some((id) => Number(id) === userId);
}
function normalizeWorkgroupName(value) {
  return normalize(value);
}
function normalize(value) {
  return String(value || "").trim().toLocaleLowerCase("ru-RU").replace(/\s+/g, " ");
}

const VIBE_API_URL = "https://vibecode.bitrix24.tech/v1";
const ADAPTATION_WORKGROUP_NAME = "\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0438 \u0430\u0434\u0430\u043F\u0442\u0430\u0446\u0438\u044F \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432";
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
  const [userData, contactData, categoryData, currentEmployee] = await Promise.all([
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
    }) : Promise.resolve(null),
    loadNewEmployeeState(headers)
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
      isNewEmployee: currentEmployee,
      previousTrip
    }
  };
});
async function loadNewEmployeeState(headers) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  try {
    const me = await fetchVibeData("/me", headers);
    const currentUserId = Number(
      (_e = (_d = (_c = (_a = me == null ? void 0 : me.currentUser) == null ? void 0 : _a.bitrixUserId) != null ? _c : (_b = me == null ? void 0 : me.currentUser) == null ? void 0 : _b.userId) != null ? _d : me == null ? void 0 : me.userId) != null ? _e : me == null ? void 0 : me.id
    );
    if (!Number.isInteger(currentUserId) || currentUserId <= 0) return false;
    const [user, workgroups] = await Promise.all([
      fetchVibeData(`/users/${currentUserId}`, headers),
      fetchVibeData(`/workgroups?filter[name][$contains]=${encodeURIComponent("\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435")}&limit=100`, headers)
    ]);
    const position = firstString(
      user == null ? void 0 : user.workPosition,
      user == null ? void 0 : user.WORK_POSITION,
      user == null ? void 0 : user.personalPosition,
      user == null ? void 0 : user.PERSONAL_POSITION,
      user == null ? void 0 : user.position
    );
    if (position.trim().toLocaleLowerCase("ru-RU") !== "\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043F\u043E \u043F\u0440\u043E\u0434\u0430\u0436\u0430\u043C") return false;
    const workgroup = toItems(workgroups).find((item) => {
      var _a2;
      return normalizeWorkgroupName((_a2 = item == null ? void 0 : item.name) != null ? _a2 : item == null ? void 0 : item.NAME) === normalizeWorkgroupName(ADAPTATION_WORKGROUP_NAME);
    });
    const workgroupId = Number((_f = workgroup == null ? void 0 : workgroup.id) != null ? _f : workgroup == null ? void 0 : workgroup.ID);
    if (!Number.isInteger(workgroupId) || workgroupId <= 0) return false;
    const members = await fetchVibeData(`/workgroups/${workgroupId}/users`, headers);
    return isNewEmployee({
      position,
      workgroupName: String((_h = (_g = workgroup == null ? void 0 : workgroup.name) != null ? _g : workgroup == null ? void 0 : workgroup.NAME) != null ? _h : ""),
      memberIds: toItems(members).map((member) => {
        var _a2, _b2, _c2;
        return (_c2 = (_b2 = (_a2 = member == null ? void 0 : member.userId) != null ? _a2 : member == null ? void 0 : member.USER_ID) != null ? _b2 : member == null ? void 0 : member.id) != null ? _c2 : member == null ? void 0 : member.ID;
      }),
      userId: currentUserId
    });
  } catch (error) {
    console.warn("Unable to resolve new employee state:", error);
    return false;
  }
}
async function fetchVibeData(path, headers) {
  var _a;
  const response = await fetch(`${VIBE_API_URL}${path}`, { headers });
  const payload = await response.json().catch(() => null);
  if (!response.ok || !(payload == null ? void 0 : payload.success)) throw new Error(((_a = payload == null ? void 0 : payload.error) == null ? void 0 : _a.message) || response.statusText);
  return payload.data;
}
function toItems(value) {
  var _a, _b;
  if (Array.isArray(value)) return value.filter((item) => Boolean(item) && typeof item === "object");
  const record = toRecord(value);
  const items = (_b = (_a = record == null ? void 0 : record.items) != null ? _a : record == null ? void 0 : record.results) != null ? _b : record == null ? void 0 : record.data;
  return Array.isArray(items) ? items.filter((item) => Boolean(item) && typeof item === "object") : [];
}

export { loadDealContext_get as default };
//# sourceMappingURL=load-deal-context.get.mjs.map
