import { buildDealContext, type DealBundle } from './deal-analysis';
import { firstString } from '../utils/b24';

export type NavigatorCommunication = {
  id: string;
  at: string;
  channel: string;
  direction: 'client' | 'manager' | 'unknown';
  title: string;
  preview: string;
};

export function buildNavigatorContext(bundle: DealBundle) {
  const context = buildDealContext(bundle);
  const history = context.history
    .map((entry, index) => ({
      id: entry.id || `history-${index}`,
      at: validDate(entry.at),
      channel: String(entry.channel || 'CRM'),
      direction: inferDirection(entry),
      title: textValue(entry.title),
      preview: textValue(entry.text).slice(0, 280)
    }))
    .filter((entry) => entry.title || entry.preview)
    .sort((left, right) => new Date(right.at).getTime() - new Date(left.at).getTime())
    .slice(0, 10);

  const deal = bundle.deal;
  const contact = bundle.contact || {};
  const destination = firstString(
    deal.destination,
    deal.DESTINATION,
    deal.ufCrm1604438175,
    deal.UF_CRM_1604438175
  );
  const hotel = firstString(deal.hotel, deal.hotelName, deal.HOTEL, deal.UF_CRM_HOTEL);
  const selectionLink = findSelectionLink(context.history);

  return {
    deal: {
      id: context.deal.id,
      title: context.deal.title,
      stage: firstString(
        deal.stageName,
        deal.STAGE_NAME,
        objectName(deal.stage),
        context.deal.stageId
      ) || 'не указана',
      contactName: firstString(contact.name, contact.NAME, contact.fullName, contact.FULL_NAME),
      responsibleName: '',
      lastActivityAt: history[0]?.at || null,
      variables: {
        dealTitle: context.deal.title,
        destination,
        hotel,
        budget: context.deal.amount ? `${context.deal.amount}${context.deal.currencyId ? ` ${context.deal.currencyId}` : ''}` : '',
        phone: context.deal.communications.find((item) => item.type === 'PHONE')?.value || '',
        selectionLink
      }
    },
    communications: history,
    recommendation: recommendScenario(history)
  };
}

export function recommendScenario(communications: NavigatorCommunication[]) {
  const latest = communications[0];
  if (!latest) {
    return null;
  }

  if (isSelectionSignal(latest)) {
    return { scenarioId: 'selection-sent', reason: 'В последней коммуникации найдена подборка или ссылка.' };
  }

  if (latest.direction === 'manager') {
    return { scenarioId: 'no-response', reason: 'Последняя коммуникация была исходящей от менеджера.' };
  }

  return null;
}

function inferDirection(entry: Record<string, any>): NavigatorCommunication['direction'] {
  const signal = [entry.direction, entry.directionName, entry.incoming, entry.outgoing, entry.channel, entry.title]
    .filter((value) => value !== undefined && value !== null)
    .join(' ')
    .toLowerCase();

  if (/incoming|inbound|входящ|client|клиент/.test(signal)) return 'client';
  if (/outgoing|outbound|исходящ|manager|менеджер/.test(signal)) return 'manager';
  return 'unknown';
}

function isSelectionSignal(entry: NavigatorCommunication) {
  return /https?:\/\/|подборк|вариант|отел/.test(`${entry.title} ${entry.preview}`.toLowerCase());
}

function findSelectionLink(history: Array<{ title?: string; text?: string }>) {
  for (const entry of history) {
    const match = `${entry.title || ''} ${entry.text || ''}`.match(/https?:\/\/[^\s<>"]+/i);
    if (match) return match[0];
  }
  return '';
}

function objectName(value: unknown) {
  if (!value || typeof value !== 'object') return '';
  const record = value as Record<string, unknown>;
  return firstString(record.name, record.NAME, record.title, record.TITLE);
}

function textValue(value: unknown) {
  return String(value || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function validDate(value: unknown) {
  const date = new Date(String(value || ''));
  return Number.isNaN(date.getTime()) ? new Date(0).toISOString() : date.toISOString();
}
