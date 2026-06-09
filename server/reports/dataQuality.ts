import type { DataQualityLogRow, DataQualityStatus, VibeContact, VibeMultiField, VibeUser, ViolationFlag } from './types';

const TRASH_PATTERNS = ['test', 'тест', 'demo', 'example', 'qwerty', 'asdf', 'unknown', 'неизвестно', 'нет данных'];
const TRASH_PATTERN_SET = new Set(TRASH_PATTERNS);
const TRASH_EMAIL_DOMAINS = new Set(['example.com', 'test.ru', 'mailinator.com']);

function normalizeText(value: string): string {
  return value.trim().replace(/\s+/g, ' ');
}

function normalizeForSearch(value: string): string {
  return normalizeText(value).toLowerCase();
}

function hasEmoji(value: string): boolean {
  return /[\p{Extended_Pictographic}\u{1f1e6}-\u{1f1ff}]/u.test(value);
}

function hasTrashText(value: string): boolean {
  const normalized = normalizeForSearch(value);
  const tokens = normalized.split(/[\s._@+-]+/).filter(Boolean);
  if (normalized.includes('нет данных')) return true;
  return tokens.some((token) => TRASH_PATTERN_SET.has(token));
}

function isCyrillicName(value: string): boolean {
  return /^[А-ЯЁа-яё][А-ЯЁа-яё\s'-]*$/.test(value);
}

function hasCorrectNameCase(value: string): boolean {
  return normalizeText(value)
    .split(/\s+/)
    .filter(Boolean)
    .every((part) => {
      const clean = part.replace(/^[-']+|[-']+$/g, '');
      if (!clean) return true;
      const firstLetter = clean[0] ?? '';
      return firstLetter === firstLetter.toLocaleUpperCase('ru-RU') && clean.slice(1) === clean.slice(1).toLocaleLowerCase('ru-RU');
    });
}

function isPlaceholderContact(contact: VibeContact): boolean {
  const fullName = getContactName(contact);
  return /^Контакт\s+#\d+\s*-\s*$/i.test(fullName);
}

function getFirstMultiFieldValue(value: VibeMultiField[] | string | null | undefined): string | null {
  if (typeof value === 'string') return normalizeText(value) || null;
  if (!Array.isArray(value)) return null;
  for (const item of value) {
    const raw = item.value ?? item.VALUE ?? null;
    if (raw && normalizeText(raw)) return normalizeText(raw);
  }
  return null;
}

function normalizePhone(value: string | null): string | null {
  if (!value) return null;
  const hasPlus = value.trim().startsWith('+');
  let digits = value.replace(/\D/g, '');
  if (/^(\d)\1+$/.test(digits)) return null;
  if (digits.length === 11 && digits.startsWith('8')) digits = `7${digits.slice(1)}`;
  if (digits.length === 10) digits = `7${digits}`;
  if (digits.length < 10 || digits.length > 15) return null;
  if (/^(\d)\1+$/.test(digits)) return null;
  return `${hasPlus || digits.startsWith('7') ? '+' : ''}${digits}`;
}

function normalizeEmail(value: string | null): string | null {
  if (!value) return null;
  const email = normalizeText(value).toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  const domain = email.split('@')[1] ?? '';
  if (TRASH_EMAIL_DOMAINS.has(domain)) return null;
  return email;
}

function getResponsibleId(contact: VibeContact): number | null {
  const value = contact.assignedById;
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string' && value.trim()) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

function getResponsibleName(contact: VibeContact, users: Map<number, VibeUser>): string {
  const id = getResponsibleId(contact);
  if (id == null) return 'Не указан';
  const user = users.get(id);
  if (!user) return `ID ${id}`;
  return [user.name, user.lastName].filter(Boolean).join(' ').trim() || `ID ${id}`;
}

export function getContactName(contact: VibeContact): string {
  const parts = [contact.lastName, contact.name, contact.secondName].filter((part): part is string => Boolean(part?.trim()));
  if (parts.length > 0) return parts.map(normalizeText).join(' ');
  return normalizeText(contact.title ?? '') || `Контакт ${contact.id}`;
}

export function shouldAnalyzeContact(contact: VibeContact): boolean {
  return !isPlaceholderContact(contact);
}

export function buildDataQualityRow(params: {
  contact: VibeContact;
  users: Map<number, VibeUser>;
  checkedAt: string;
}): DataQualityLogRow {
  const { contact, users, checkedAt } = params;
  const errors: string[] = [];
  const warnings: string[] = [];
  const firstName = normalizeText(contact.name ?? '');
  const lastName = normalizeText(contact.lastName ?? '');
  const contactName = getContactName(contact);
  const rawPhone = getFirstMultiFieldValue(contact.phone ?? contact.PHONE);
  const rawEmail = getFirstMultiFieldValue(contact.email ?? contact.EMAIL);
  const normalizedPhone = normalizePhone(rawPhone);
  const normalizedEmail = normalizeEmail(rawEmail);

  if (!firstName && !lastName) {
    errors.push('Не указаны имя и фамилия');
  } else {
    for (const [label, value] of [
      ['Имя', firstName],
      ['Фамилия', lastName]
    ] as const) {
      if (!value) {
        if (label === 'Имя') warnings.push(`${label} не указано`);
        continue;
      }
      if (value.length <= 1 || !/\p{L}/u.test(value)) errors.push(`${label} содержит мусорное значение`);
      if (hasEmoji(value)) errors.push(`${label} содержит эмодзи`);
      if (!isCyrillicName(value)) errors.push(`${label} должно быть написано кириллицей`);
      if (!hasCorrectNameCase(value)) warnings.push(`${label} должно начинаться с большой буквы`);
      if (hasTrashText(value)) errors.push(`${label} содержит тестовое или мусорное значение`);
    }
  }

  if (!rawPhone && !rawEmail) {
    errors.push('Не указан телефон или email');
  }
  if (rawPhone && !normalizedPhone) errors.push('Телефон невалиден');
  if (rawEmail && !normalizedEmail) errors.push('Email невалиден');
  if (rawPhone && hasTrashText(rawPhone)) errors.push('Телефон содержит тестовое или мусорное значение');
  if (!normalizedPhone && !normalizedEmail) errors.push('Нет рабочего телефона или email');

  const score = 100 - errors.length * 20 - warnings.length * 7;
  const status: DataQualityStatus = errors.length > 0 ? 'Ошибка' : warnings.length > 0 ? 'Предупреждение' : 'Без ошибок';
  const violationFlag: ViolationFlag = status === 'Без ошибок' ? 'Нет' : 'Да';

  return {
    id: `${contact.id}-${checkedAt}`,
    contactId: contact.id,
    contactName,
    checkedAt,
    contactCreatedAt: contact.createdAt ?? contact.createdTime ?? checkedAt,
    qualityScore: Math.max(0, Math.min(100, score)),
    qualityErrors: [...errors, ...warnings],
    normalizedPhone,
    normalizedEmail,
    status,
    responsibleId: getResponsibleId(contact),
    responsibleName: getResponsibleName(contact, users),
    violationFlag
  };
}
