import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import {join} from 'node:path';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine({
  allowedHosts: [
    '127.0.0.1',
    '127.0.0.1:3000',
    'localhost',
    'localhost:3000',
    'app-14d60207d8cf.vibecode.bitrix24.tech',
    'app-e0a07762e6a1.vibecode.bitrix24.tech'
  ],
  trustProxyHeaders: true
});

// Parse urlencoded and json bodies for Bitrix24 and local API requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const B24_API_KEY = process.env['VIBE_API_KEY'] ?? '';

function ensureVibeApiKey(res: express.Response): boolean {
  if (B24_API_KEY) {
    return true;
  }

  res.status(500).json({ success: false, error: 'VIBE_API_KEY is not configured' });
  return false;
}

const RU_MONTHS_PREPOSITIONAL = [
  'январе',
  'феврале',
  'марте',
  'апреле',
  'мае',
  'июне',
  'июле',
  'августе',
  'сентябре',
  'октябре',
  'ноябре',
  'декабре'
];

function firstString(...values: unknown[]): string {
  for (const value of values) {
    if (typeof value === 'string' && value.trim()) {
      return value.trim();
    }
    if (typeof value === 'number' && Number.isFinite(value)) {
      return String(value);
    }
  }

  return '';
}

function getDisplayName(person: Record<string, unknown> | null | undefined, fallback: string): string {
  if (!person) {
    return fallback;
  }

  const directName = firstString(
    person['name'],
    person['NAME'],
    person['fullName'],
    person['FULL_NAME']
  );
  if (directName) {
    return directName;
  }

  const firstName = firstString(person['firstName'], person['FIRST_NAME']);
  const lastName = firstString(person['lastName'], person['LAST_NAME']);
  const combined = [firstName, lastName].filter(Boolean).join(' ').trim();

  return combined || fallback;
}

function parseBitrixDate(value: string): Date | null {
  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }

  const ruDate = trimmed.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})/);
  if (ruDate) {
    const [, day, month, year] = ruDate;
    const date = new Date(Number(year), Number(month) - 1, Number(day));
    return Number.isNaN(date.getTime()) ? null : date;
  }

  const parsed = new Date(trimmed);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function getYearPhrase(year: number): string {
  const currentYear = new Date().getFullYear();
  if (year === currentYear) {
    return 'этого года';
  }
  if (year === currentYear - 1) {
    return 'прошлого года';
  }

  return `${year} года`;
}

function formatTripDatePhrase(startDateValue: string, endDateValue: string): string {
  const startDate = parseBitrixDate(startDateValue);
  const endDate = parseBitrixDate(endDateValue);

  if (!startDate && !endDate) {
    return '';
  }

  const primaryDate = startDate || endDate;
  if (!primaryDate) {
    return '';
  }

  const primaryMonth = RU_MONTHS_PREPOSITIONAL[primaryDate.getMonth()];
  const primaryYearPhrase = getYearPhrase(primaryDate.getFullYear());

  if (!endDate || !startDate) {
    return `в ${primaryMonth} ${primaryYearPhrase}`;
  }

  const sameMonth = startDate.getMonth() === endDate.getMonth();
  const sameYear = startDate.getFullYear() === endDate.getFullYear();

  if (sameMonth && sameYear) {
    return `в ${primaryMonth} ${primaryYearPhrase}`;
  }

  const endMonth = RU_MONTHS_PREPOSITIONAL[endDate.getMonth()];
  const endYearPhrase = getYearPhrase(endDate.getFullYear());

  if (sameYear) {
    return `с ${primaryMonth} по ${endMonth} ${primaryYearPhrase}`;
  }

  return `с ${primaryMonth} ${primaryYearPhrase} по ${endMonth} ${endYearPhrase}`;
}

/**
 * Bitrix24 Placement Bootstrap Handler
 * Forwards B24 authentication details to VibeCode, which returns an auto-submit form
 */
app.post('/api/bitrix-handler', async (req, res) => {
  try {
    if (!ensureVibeApiKey(res)) {
      return;
    }

    const response = await fetch('https://vibecode.bitrix24.tech/v1/bitrix-handler', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': B24_API_KEY
      },
      body: JSON.stringify(req.body)
    });
    const html = await response.text();
    res.send(html);
  } catch (error) {
    console.error('Error in bitrix-handler proxy:', error);
    res.status(500).send('Internal Server Error');
  }
});

/**
 * Handle POST / (Auto-submit landing page from VibeCode gateway)
 * Parse access_token, PLACEMENT, and PLACEMENT_OPTIONS, then redirect to GET /
 */
app.post('/', (req, res) => {
  const accessToken = req.body.access_token || req.body.auth?.access_token || '';
  const placement = req.body.PLACEMENT || '';
  const placementOptions = req.body.PLACEMENT_OPTIONS || '';

  const q = new URLSearchParams();
  if (accessToken) q.set('access_token', accessToken);
  if (placement) q.set('placement', placement);
  if (placementOptions) {
    const optStr = typeof placementOptions === 'object' ? JSON.stringify(placementOptions) : placementOptions;
    q.set('placement_options', optStr);
  }

  res.redirect(`/?${q.toString()}`);
});

/**
 * Load CRM context for a specific deal:
 * Includes responsable manager info, linked contact info and previous tour deal (Category 0)
 */
app.get('/api/b24/load-deal-context', async (req, res) => {
  try {
    const dealId = req.query['dealId'];
    const authHeader = req.headers['authorization'];

    if (!dealId) {
      res.status(400).json({ success: false, error: 'Missing dealId parameter' });
      return;
    }
    if (!authHeader) {
      res.status(401).json({ success: false, error: 'Missing authorization header' });
      return;
    }
    if (!ensureVibeApiKey(res)) {
      return;
    }

    const headers = {
      'X-Api-Key': B24_API_KEY,
      'Authorization': authHeader
    };

    const getField = (obj: Record<string, unknown> | null | undefined, fieldId: string): string => {
      if (!obj) return '';
      return String(obj[`ufCrm_${fieldId}`] || obj[`ufCrm${fieldId}`] || obj[`UF_CRM_${fieldId}`] || '');
    };

    interface B24Deal {
      assignedById?: string | number | null;
      contactId?: string | number | null;
      contactIds?: Array<string | number> | null;
      categoryId?: string | number | null;
      [key: string]: unknown;
    }

    // 1. Load the primary Deal (Reactivation воронка)
    const dealRes = await fetch(`https://vibecode.bitrix24.tech/v1/deals/${dealId}`, { headers });
    const dealData = await dealRes.json();

    if (!dealData.success) {
      res.status(dealRes.status).json(dealData);
      return;
    }

    const deal = dealData.data as B24Deal;

    // 2. Fetch responsible manager if assignedById exists
    let agentName = 'Елена'; // default fallback
    const assignedById = deal.assignedById;
    if (assignedById) {
      try {
        const userRes = await fetch(`https://vibecode.bitrix24.tech/v1/users/${assignedById}`, { headers });
        const userData = await userRes.json();
        if (userData.success && userData.data) {
          agentName = getDisplayName(userData.data, agentName);
        }
      } catch (err) {
        console.error('Error fetching user:', err);
      }
    }

    // 3. Fetch contact if contactId exists
    let clientName = 'Александр'; // default fallback
    const contactId = deal.contactId || deal.contactIds?.[0] || null;

    // Retrieve previous trip info directly from the fields of this same reactivation deal
    const destination = getField(deal, '1604438175');
    const startDate = getField(deal, '1604438397');
    const endDate = getField(deal, '1621261388273');
    const tripDateText = formatTripDatePhrase(startDate, endDate);

    let previousTrip = null;
    if (destination || startDate || endDate) {
      previousTrip = {
        destination,
        startDate,
        endDate,
        tripDateText
      };
    }

    if (contactId) {
      try {
        const contactRes = await fetch(`https://vibecode.bitrix24.tech/v1/contacts/${contactId}`, { headers });
        const contactData = await contactRes.json();
        if (contactData.success && contactData.data) {
          clientName = getDisplayName(contactData.data, clientName);
        }
      } catch (err) {
        console.error('Error fetching contact:', err);
      }
    }

    res.json({
      success: true,
      data: {
        dealId: Number(dealId),
        categoryId: deal.categoryId,
        assignedById,
        contactId,
        agentName,
        clientName,
        previousTrip
      }
    });

  } catch (error) {
    console.error('Error loading deal context:', error);
    const msg = error instanceof Error ? error.message : String(error);
    res.status(500).json({ success: false, error: msg });
  }
});

/**
 * Create calling activity logged inside standard Bitrix24 activities
 */
app.post('/api/b24/create-call-activity', async (req, res) => {
  try {
    const authHeader = req.headers['authorization'];
    const { dealId, crmNotes, nextContactDate, assignedById } = req.body;

    if (!dealId) {
      res.status(400).json({ success: false, error: 'Missing dealId parameter' });
      return;
    }
    if (!authHeader) {
      res.status(401).json({ success: false, error: 'Missing authorization header' });
      return;
    }
    if (!ensureVibeApiKey(res)) {
      return;
    }

    let descriptionText = `Результаты звонка реактивации:\n`;
    descriptionText += crmNotes ? `${crmNotes.trim()}\n` : `[Черновик для CRM пуст]\n`;
    
    if (nextContactDate) {
      descriptionText += `\nПланируемая дата последующего контакта: ${nextContactDate}`;
    }

    const headers = {
      'X-Api-Key': B24_API_KEY,
      'Authorization': authHeader,
      'Content-Type': 'application/json'
    };

    const activityBody = {
      typeId: 1, // Звонок (Call)
      ownerTypeId: 2, // Сделка (Deal)
      ownerId: Number(dealId),
      subject: 'Завершение звонка реактивации',
      description: descriptionText,
      responsibleId: assignedById ? Number(assignedById) : 1,
      completed: true,
      direction: 2, // Исходящий (Outgoing)
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString()
    };

    const response = await fetch('https://vibecode.bitrix24.tech/v1/activities', {
      method: 'POST',
      headers,
      body: JSON.stringify(activityBody)
    });

    const result = await response.json();
    res.status(response.status).json(result);

  } catch (error) {
    console.error('Error creating call activity:', error);
    const msg = error instanceof Error ? error.message : String(error);
    res.status(500).json({ success: false, error: msg });
  }
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
