import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  chooseClosestRecording,
  findCachedTranscript,
  getTranscriptConfig,
  transcribeRecording
} from './call-transcripts';

const baseTime = Date.parse('2026-07-30T10:00:00Z');
const headers = { 'X-Api-Key': 'test-key', Authorization: 'Bearer test-session' };

describe('call transcript cache', () => {
  it('uses a transcript saved by this integration for the same activity only', () => {
    const timelines = [
      { text: '[AI_CALL_TRANSCRIPT:42]\nКлиент подтвердил даты поездки.' },
      { text: '[AI_CALL_TRANSCRIPT:99]\nДругой звонок.' }
    ];

    expect(findCachedTranscript(42, timelines)).toBe('Клиент подтвердил даты поездки.');
    expect(findCachedTranscript(7, timelines)).toBe('');
  });

  it('recognizes an existing Bitrix timeline transcript linked to the call', () => {
    expect(findCachedTranscript(42, [
      { activityId: 42, title: 'Расшифровка звонка', text: 'Клиент попросил перезвонить в пятницу.' }
    ])).toBe('Клиент попросил перезвонить в пятницу.');
  });
});

describe('recording selection', () => {
  it('selects the unique closest recording within one hour', () => {
    const selected = chooseClosestRecording([
      { id: 1, createdAt: '2026-07-30T09:57:00Z' },
      { id: 2, createdAt: '2026-07-30T11:30:00Z' }
    ], baseTime);

    expect(selected?.id).toBe(1);
  });

  it('does not guess when the closest recordings are equally distant', () => {
    expect(chooseClosestRecording([
      { id: 1, createdAt: '2026-07-30T09:55:00Z' },
      { id: 2, createdAt: '2026-07-30T10:05:00Z' }
    ], baseTime)).toBeNull();
  });
});

describe('Whisper request failures', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('reports a structured error returned by the transcription endpoint', async () => {
    const fetchMock = vi.fn()
      .mockResolvedValueOnce(new Response('audio', { status: 200, headers: { 'content-length': '5' } }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ error: { code: 'ai_pacing_limited', message: 'Try again later' } }), { status: 429 }));
    vi.stubGlobal('fetch', fetchMock);

    await expect(transcribeRecording(
      { name: 'call.mp3', downloadUrl: 'https://crm-re.bitrix24.ru/download/call.mp3' },
      headers,
      { folderId: 1, model: 'bitrix/deepdml/faster-whisper-large-v3-turbo-ct2', language: 'ru', maxAudioBytes: 1024, prompt: '' }
    )).rejects.toMatchObject({ code: 'ai_pacing_limited' });
  });

  it('enforces VibeCode’s 25 MB upload limit even when configuration is larger', () => {
    expect(getTranscriptConfig({ VIBE_TRANSCRIPTION_MAX_BYTES: '99999999' }).maxAudioBytes).toBe(25 * 1024 * 1024);
  });
});
