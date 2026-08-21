import { describe, expect, it } from 'vitest';
import { isNewEmployee, normalizeWorkgroupName } from './new-employee';

describe('isNewEmployee', () => {
  const eligibleEmployee = {
    position: 'Менеджер по продажам',
    workgroupName: 'Обучение и адаптация сотрудников',
    memberIds: [3, 17, 42],
    userId: 42
  };

  it('identifies a sales manager who belongs to the adaptation project', () => {
    expect(isNewEmployee(eligibleEmployee)).toBe(true);
  });

  it('requires both the sales position and membership in the project', () => {
    expect(isNewEmployee({ ...eligibleEmployee, position: 'Руководитель отдела продаж' })).toBe(false);
    expect(isNewEmployee({ ...eligibleEmployee, memberIds: [3, 17] })).toBe(false);
  });

  it('matches the project title without accidental whitespace differences', () => {
    expect(normalizeWorkgroupName('  Обучение  и адаптация сотрудников '))
      .toBe(normalizeWorkgroupName('Обучение и адаптация сотрудников'));
  });
});
