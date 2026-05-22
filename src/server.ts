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

const B24_API_KEY = process.env['VIBE_API_KEY'] ?? '';

function ensureVibeApiKey(res: express.Response): boolean {
  if (B24_API_KEY) {
    return true;
  }

  res.status(500).json({ success: false, error: 'VIBE_API_KEY is not configured' });
  return false;
}

function getVibeAuthorizationHeader(req: express.Request): string {
  return firstString(
    req.headers['x-vibe-authorization'],
    req.headers['authorization']
  );
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

function stripBearer(value: string): string {
  return value.replace(/^Bearer\s+/i, '').trim();
}

function toStringRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === 'object' ? value as Record<string, unknown> : null;
}

function getFieldValue(obj: Record<string, unknown> | null | undefined, ...keys: string[]): unknown {
  if (!obj) {
    return undefined;
  }

  for (const key of keys) {
    if (obj[key] !== undefined && obj[key] !== null && obj[key] !== '') {
      return obj[key];
    }
  }

  return undefined;
}

async function callBitrixRest(serverEndpoint: string, authToken: string, method: string, params: Record<string, unknown> = {}) {
  const endpoint = serverEndpoint.endsWith('/') ? serverEndpoint : `${serverEndpoint}/`;
  const body = new URLSearchParams();
  body.set('auth', authToken);

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null) {
      body.set(key, String(value));
    }
  }

  const response = await fetch(`${endpoint}${method}.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body
  });
  const data = await response.json();

  if (!response.ok || data.error) {
    throw new Error(data.error_description || data.error || `Bitrix REST ${method} failed`);
  }

  return data.result;
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

function buildBitrixLaunchUrl(body: Record<string, unknown> | null | undefined): string {
  const source = body || {};
  const auth = typeof source['auth'] === 'object' && source['auth'] !== null
    ? source['auth'] as Record<string, unknown>
    : {};

  const accessToken = firstString(
    source['access_token'],
    source['AUTH_ID'],
    source['auth_id'],
    auth['access_token'],
    auth['AUTH_ID'],
    auth['auth_id']
  );
  const refreshToken = firstString(source['REFRESH_ID'], source['refresh_id'], auth['refresh_token']);
  const memberId = firstString(source['member_id'], source['MEMBER_ID'], auth['member_id']);
  const placement = firstString(source['PLACEMENT'], source['placement']);
  const serverEndpoint = firstString(source['SERVER_ENDPOINT'], source['server_endpoint']);
  const placementOptionsRaw = source['PLACEMENT_OPTIONS'] || source['placement_options'] || '';
  const placementOptions = typeof placementOptionsRaw === 'object'
    ? JSON.stringify(placementOptionsRaw)
    : firstString(placementOptionsRaw);

  const q = new URLSearchParams();
  if (accessToken) q.set('access_token', accessToken);
  if (refreshToken) q.set('refresh_id', refreshToken);
  if (memberId) q.set('member_id', memberId);
  if (placement) q.set('placement', placement);
  if (serverEndpoint) q.set('server_endpoint', serverEndpoint);
  if (placementOptions) q.set('placement_options', placementOptions);

  const query = q.toString();
  return query ? `/?${query}` : '/';
}

function parseBitrixLaunchBody(rawBody: string, contentType: string): Record<string, string> {
  const fields: Record<string, string> = {};

  if (contentType.includes('multipart/form-data')) {
    const boundaryMatch = contentType.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
    const boundary = boundaryMatch?.[1] || boundaryMatch?.[2];
    if (!boundary) {
      return fields;
    }

    for (const part of rawBody.split(`--${boundary}`)) {
      const nameMatch = part.match(/name="([^"]+)"/);
      const valueStart = part.indexOf('\r\n\r\n');
      if (!nameMatch || valueStart === -1) {
        continue;
      }

      fields[nameMatch[1]] = part
        .slice(valueStart + 4)
        .replace(/\r\n--$/, '')
        .replace(/\r\n$/, '');
    }

    return fields;
  }

  if (contentType.includes('application/json') || rawBody.trim().startsWith('{')) {
    try {
      return JSON.parse(rawBody);
    } catch {
      return fields;
    }
  }

  for (const [key, value] of new URLSearchParams(rawBody)) {
    fields[key] = value;
  }

  return fields;
}

function handleBitrixLaunchPost(req: express.Request, res: express.Response) {
  const chunks: Buffer[] = [];
  req.on('data', (chunk: Buffer) => chunks.push(chunk));
  req.on('end', () => {
    const rawBody = Buffer.concat(chunks).toString('utf8');
    const body = parseBitrixLaunchBody(rawBody, req.headers['content-type'] || '');
    const launchUrl = buildBitrixLaunchUrl(body);

    if (launchUrl === '/') {
      res.status(400).send('Missing Bitrix24 launch payload');
      return;
    }

    res.redirect(303, launchUrl);
  });
  req.on('error', (error) => {
    console.error('Error reading Bitrix24 launch body:', error);
    res.status(500).send('Internal Server Error');
  });
}

app.post('/api/bitrix-handler', handleBitrixLaunchPost);

/**
 * Handle POST / (Auto-submit landing page from VibeCode gateway)
 * Parse access_token, PLACEMENT, and PLACEMENT_OPTIONS, then redirect to GET /
 */
app.post('/', handleBitrixLaunchPost);

// Parse urlencoded and json bodies for local API requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * Load CRM context for a specific deal:
 * Includes responsable manager info, linked contact info and previous tour deal (Category 0)
 */
app.get('/api/b24/load-deal-context', async (req, res) => {
  try {
    const dealId = req.query['dealId'];
    const authHeader = getVibeAuthorizationHeader(req);
    const bitrixEndpoint = firstString(req.headers['x-bitrix-rest-endpoint']);

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

    let deal = {} as B24Deal;
    let directBitrixAuth = false;

    try {
      const dealRes = await fetch(`https://vibecode.bitrix24.tech/v1/deals/${dealId}`, { headers });
      const dealData = await dealRes.json();

      if (!dealData.success) {
        throw new Error(dealData.error?.message || dealData.error || 'VibeCode deal fetch failed');
      }

      deal = dealData.data as B24Deal;
    } catch (err) {
      if (!bitrixEndpoint) {
        throw err;
      }

      directBitrixAuth = true;
      const bitrixDeal = await callBitrixRest(bitrixEndpoint, stripBearer(authHeader), 'crm.deal.get', { id: dealId });
      const rawDeal = toStringRecord(bitrixDeal) || {};
      deal = {
        ...rawDeal,
        assignedById: getFieldValue(rawDeal, 'assignedById', 'ASSIGNED_BY_ID') as string | number | null,
        contactId: getFieldValue(rawDeal, 'contactId', 'CONTACT_ID') as string | number | null,
        categoryId: getFieldValue(rawDeal, 'categoryId', 'CATEGORY_ID') as string | number | null
      };
    }

    // 2. Fetch responsible manager if assignedById exists
    let agentName = 'Елена'; // default fallback
    const assignedById = deal.assignedById;
    if (assignedById) {
      try {
        if (directBitrixAuth && bitrixEndpoint) {
          const userResult = await callBitrixRest(bitrixEndpoint, stripBearer(authHeader), 'user.get', { ID: assignedById });
          const user = Array.isArray(userResult) ? userResult[0] : userResult;
          agentName = getDisplayName(toStringRecord(user), agentName);
        } else {
          const userRes = await fetch(`https://vibecode.bitrix24.tech/v1/users/${assignedById}`, { headers });
          const userData = await userRes.json();
          if (userData.success && userData.data) {
            agentName = getDisplayName(userData.data, agentName);
          }
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
        if (directBitrixAuth && bitrixEndpoint) {
          const contact = await callBitrixRest(bitrixEndpoint, stripBearer(authHeader), 'crm.contact.get', { id: contactId });
          clientName = getDisplayName(toStringRecord(contact), clientName);
        } else {
          const contactRes = await fetch(`https://vibecode.bitrix24.tech/v1/contacts/${contactId}`, { headers });
          const contactData = await contactRes.json();
          if (contactData.success && contactData.data) {
            clientName = getDisplayName(contactData.data, clientName);
          }
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

app.get('/api/b24/session', async (req, res) => {
  try {
    const authHeader = getVibeAuthorizationHeader(req);
    if (!authHeader) {
      res.status(401).json({ success: false, error: 'Missing Vibe session header' });
      return;
    }
    if (!ensureVibeApiKey(res)) {
      return;
    }

    const response = await fetch('https://vibecode.bitrix24.tech/v1/me', {
      headers: {
        'X-Api-Key': B24_API_KEY,
        'Authorization': authHeader
      }
    });
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Error loading Vibe session:', error);
    const msg = error instanceof Error ? error.message : String(error);
    res.status(500).json({ success: false, error: msg });
  }
});

app.get('/api/debug/runtime', async (req, res) => {
  const authHeader = getVibeAuthorizationHeader(req);
  let me: unknown = null;

  if (authHeader && B24_API_KEY) {
    try {
      const response = await fetch('https://vibecode.bitrix24.tech/v1/me', {
        headers: {
          'X-Api-Key': B24_API_KEY,
          'Authorization': authHeader
        }
      });
      const data = await response.json();
      me = data?.success && data?.data
        ? {
            portal: data.data.portal || data.data.portalDomain,
            user: data.data.user ? {
              id: data.data.user.id || data.data.user.userId,
              name: data.data.user.name
            } : undefined,
            userId: data.data.userId,
            keys: Object.keys(data.data)
          }
        : data;
    } catch (error) {
      me = { error: error instanceof Error ? error.message : String(error) };
    }
  }

  res.json({
    success: true,
    data: {
      path: req.path,
      query: req.query,
      hasVibeAuthorization: Boolean(authHeader),
      hasApiKey: Boolean(B24_API_KEY),
      headers: {
        host: req.headers['host'],
        referer: req.headers['referer'],
        origin: req.headers['origin'],
        xForwardedHost: req.headers['x-forwarded-host'],
        xForwardedProto: req.headers['x-forwarded-proto']
      },
      me
    }
  });
});

app.post('/api/debug/client-context', (req, res) => {
  const body = req.body && typeof req.body === 'object' ? req.body : {};
  console.log('Bitrix client context debug:', JSON.stringify(body).slice(0, 4000));
  res.json({ success: true });
});

/**
 * Create calling activity logged inside standard Bitrix24 activities
 */
app.post('/api/b24/create-call-activity', async (req, res) => {
  try {
    const authHeader = getVibeAuthorizationHeader(req);
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
