import { c as createError } from './nitro.mjs';
import { d as getVibeAuthorizationHeader, B as B24_API_KEY, t as toRecord } from './b24.mjs';

const EMPLOYEE_MODULES = ["manager-assistant"];
const ADMIN_MODULES = [
  "manager-assistant",
  "sla-first-contact",
  "data-quality",
  "reactivation",
  "next-step-control"
];
function firstBoolean(...values) {
  for (const value of values) {
    if (typeof value === "boolean") {
      return value;
    }
    if (typeof value === "string") {
      const normalized = value.trim().toLowerCase();
      if (["true", "y", "yes", "1", "admin"].includes(normalized)) {
        return true;
      }
      if (["false", "n", "no", "0", "user"].includes(normalized)) {
        return false;
      }
    }
    if (typeof value === "number" && Number.isFinite(value)) {
      return value === 1;
    }
  }
  return false;
}
function firstNumber(...values) {
  for (const value of values) {
    const parsed = typeof value === "number" ? value : typeof value === "string" ? Number(value) : Number.NaN;
    if (Number.isFinite(parsed) && parsed > 0) {
      return parsed;
    }
  }
  return null;
}
function firstString(...values) {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }
  return "";
}
function deriveAccessFromVibeMe(raw) {
  var _a;
  const root = toRecord(raw);
  const currentUser = toRecord(root == null ? void 0 : root.currentUser);
  const user = (_a = toRecord(root == null ? void 0 : root.user)) != null ? _a : currentUser;
  const isAuthenticated = Boolean(root && (user || currentUser || root.userId || root.bitrixUserId));
  const isAdmin = firstBoolean(
    root == null ? void 0 : root.isAdmin,
    root == null ? void 0 : root.admin,
    root == null ? void 0 : root.ADMIN,
    currentUser == null ? void 0 : currentUser.isAdmin,
    currentUser == null ? void 0 : currentUser.admin,
    currentUser == null ? void 0 : currentUser.ADMIN,
    user == null ? void 0 : user.isAdmin,
    user == null ? void 0 : user.admin,
    user == null ? void 0 : user.ADMIN,
    user == null ? void 0 : user.isAdministrator,
    user == null ? void 0 : user.IS_ADMIN
  );
  return {
    isAuthenticated,
    isAdmin,
    portal: firstString(root == null ? void 0 : root.portal, root == null ? void 0 : root.portalDomain, root == null ? void 0 : root.domain) || null,
    user: {
      id: firstNumber(root == null ? void 0 : root.userId, root == null ? void 0 : root.bitrixUserId, currentUser == null ? void 0 : currentUser.bitrixUserId, currentUser == null ? void 0 : currentUser.id, user == null ? void 0 : user.id, user == null ? void 0 : user.ID),
      name: firstString(currentUser == null ? void 0 : currentUser.name, currentUser == null ? void 0 : currentUser.fullName, user == null ? void 0 : user.name, user == null ? void 0 : user.FULL_NAME, user == null ? void 0 : user.NAME)
    },
    allowedModules: isAdmin ? ADMIN_MODULES : EMPLOYEE_MODULES
  };
}
async function getCurrentAccess(event) {
  var _a;
  const authHeader = getVibeAuthorizationHeader(event);
  if (!authHeader || !B24_API_KEY) {
    return deriveAccessFromVibeMe(null);
  }
  const response = await fetch("https://vibecode.bitrix24.tech/v1/me", {
    headers: {
      "X-Api-Key": B24_API_KEY,
      Authorization: authHeader
    }
  });
  const payload = await response.json().catch(() => null);
  if (!response.ok || (payload == null ? void 0 : payload.success) === false) {
    return deriveAccessFromVibeMe(null);
  }
  return deriveAccessFromVibeMe((_a = payload == null ? void 0 : payload.data) != null ? _a : payload);
}
async function requireAdmin(event) {
  const access = await getCurrentAccess(event);
  if (!access.isAuthenticated) {
    throw createError({ statusCode: 401, statusMessage: "Bitrix24 authorization is required" });
  }
  if (!access.isAdmin) {
    throw createError({ statusCode: 403, statusMessage: "Bitrix24 administrator access is required" });
  }
  return access;
}

export { getCurrentAccess as g, requireAdmin as r };
//# sourceMappingURL=access.mjs.map
