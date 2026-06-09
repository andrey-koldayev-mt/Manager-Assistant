import { describe, expect, it } from 'vitest';
import { buildDataQualityRow, shouldAnalyzeContact } from '../../server/reports/dataQuality';
import type { VibeContact, VibeUser } from '../../server/reports/types';

const checkedAt = '2026-05-18T09:00:00.000Z';
const users = new Map<number, VibeUser>([[7, { id: 7, name: 'Анна', lastName: 'Петрова' }]]);

function contact(overrides: Partial<VibeContact> = {}): VibeContact {
  return {
    id: 1000,
    name: 'Иван',
    lastName: 'Петров',
    createdAt: '2026-05-18T08:30:00.000Z',
    assignedById: 7,
    phone: [{ value: '+7 (999) 123-45-67' }],
    email: [{ value: 'ivan.petrov@example-mail.ru' }],
    ...overrides
  };
}

describe('data quality calculation', () => {
  it('marks a complete contact with valid communication as clean', () => {
    const row = buildDataQualityRow({ contact: contact(), users, checkedAt });

    expect(row.status).toBe('Без ошибок');
    expect(row.qualityScore).toBe(100);
    expect(row.qualityErrors).toEqual([]);
    expect(row.normalizedPhone).toBe('+79991234567');
    expect(row.normalizedEmail).toBe('ivan.petrov@example-mail.ru');
    expect(row.violationFlag).toBe('Нет');
  });

  it('marks usable contacts with naming issues as warning', () => {
    const row = buildDataQualityRow({
      contact: contact({ name: 'мирослав', lastName: 'Иванов', email: null }),
      users,
      checkedAt
    });

    expect(row.status).toBe('Предупреждение');
    expect(row.qualityErrors).toContain('Имя должно начинаться с большой буквы');
    expect(row.qualityErrors).not.toContain('Имя не похоже на реально используемое в России');
    expect(row.qualityScore).toBeLessThan(100);
    expect(row.violationFlag).toBe('Да');
  });

  it('does not require a last name', () => {
    const row = buildDataQualityRow({
      contact: contact({ lastName: null }),
      users,
      checkedAt
    });

    expect(row.status).toBe('Без ошибок');
    expect(row.qualityScore).toBe(100);
    expect(row.qualityErrors).not.toContain('Фамилия не указано');
    expect(row.violationFlag).toBe('Нет');
  });

  it('marks contacts without a usable phone or email as error', () => {
    const row = buildDataQualityRow({
      contact: contact({ phone: [{ value: '1111111111' }], email: [{ value: 'bad-email' }] }),
      users,
      checkedAt
    });

    expect(row.status).toBe('Ошибка');
    expect(row.qualityErrors).toContain('Телефон невалиден');
    expect(row.qualityErrors).toContain('Email невалиден');
    expect(row.qualityErrors).toContain('Нет рабочего телефона или email');
    expect(row.qualityScore).toBeLessThan(100);
    expect(row.violationFlag).toBe('Да');
  });

  it('marks non-cyrillic names, emojis and trash values as error', () => {
    const row = buildDataQualityRow({
      contact: contact({ name: 'test', lastName: 'Smith😀' }),
      users,
      checkedAt
    });

    expect(row.status).toBe('Ошибка');
    expect(row.qualityErrors).toContain('Фамилия содержит эмодзи');
    expect(row.qualityErrors).toContain('Имя должно быть написано кириллицей');
    expect(row.qualityErrors).toContain('Фамилия должно быть написано кириллицей');
    expect(row.qualityErrors).toContain('Имя содержит тестовое или мусорное значение');
  });

  it('excludes generated Bitrix placeholder contacts from analysis', () => {
    expect(shouldAnalyzeContact(contact({ title: 'Контакт #72796 -', name: null, lastName: null }))).toBe(false);
    expect(shouldAnalyzeContact(contact({ title: 'Иван Петров' }))).toBe(true);
  });
});
