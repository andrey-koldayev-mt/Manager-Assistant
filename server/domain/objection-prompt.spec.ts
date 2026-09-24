import { describe, expect, it } from 'vitest';
import { validateObjectionRecommendation } from './objection-prompt';

describe('validateObjectionRecommendation', () => {
  const allowed = new Set(['think', 'expensive']);

  it('accepts a factual recommendation for a catalogue scenario', () => {
    expect(validateObjectionRecommendation({
      scenarioId: 'think',
      channel: 'message',
      situation: 'Клиент попросил время после отправки подборки.',
      recommendedAction: 'Уточнить причину паузы.',
      responseText: 'Подскажите, что вызывает вопросы?',
      rationale: ['Последняя коммуникация от клиента.'],
      sourceSignals: ['wazzup, 2026-09-24: клиент попросил подумать']
    }, allowed)).toMatchObject({ scenarioId: 'think', channel: 'message' });
  });

  it('rejects a scenario or channel that is not allowed', () => {
    expect(() => validateObjectionRecommendation({
      scenarioId: 'unknown', channel: 'email', situation: 'x', recommendedAction: 'x', responseText: 'x'
    }, allowed)).toThrow('AI returned an unknown objection scenario');
  });
});
