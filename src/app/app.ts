import {ChangeDetectionStrategy, Component, signal, computed, inject, OnDestroy, OnInit} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';
import {MatChipsModule} from '@angular/material/chips';
import {ClipboardModule, Clipboard} from '@angular/cdk/clipboard';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatChipsModule,
    ClipboardModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit, OnDestroy {
  private clipboard = inject(Clipboard);
  private snackBar = inject(MatSnackBar);
  private readonly bx24SdkUrl = 'https://api.bitrix24.com/api/v1/';
  private bx24Instance: any = null;

  // Identity variables
  agentName = signal<string>('Елена');
  clientName = signal<string>('Александр');
  historyType = signal<'buyer' | 'lead'>('buyer');

  // Client history details (Buyer category)
  destination = signal<string>('Турцию (Анталию)');
  tripDate = signal<string>('в сентябре прошлого года');

  // Client history details (Lead category)
  season = signal<string>('Прошлой осенью');
  destinationLead = signal<string>('Египет');

  // Upcoming trip settings
  travelContext = signal<string>('предстоящий летний сезон');

  // Application walkthrough controls
  activeStep = signal<number>(1);
  interest = signal<boolean | null>(null);
  crmNotes = signal<string>('');
  isCallFinished = signal<boolean>(false);

  // Bitrix24 Integration state
  accessToken = signal<string>('');
  bitrixRestEndpoint = signal<string>('');
  b24DealId = signal<number | null>(null);
  dealCategoryId = signal<number | null>(null);
  nextContactDate = signal<string>('');
  assignedById = signal<number | null>(null);
  b24Loading = signal<boolean>(false);
  b24Saving = signal<boolean>(false);
  createdActivityId = signal<number | string | null>(null);
  b24Error = signal<string>('');
  b24Debug = signal<string>('');

  // Timer trackers
  timerSeconds = signal<number>(0);
  private timerInterval: ReturnType<typeof setInterval> | null = null;

  // Active toast alerts
  toastMessage = signal<string>('');
  toastVisible = signal<boolean>(false);
  private toastTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    this.startTimer();
  }

  ngOnInit() {
    this.probeRuntime();
    this.initB24Integration();
  }

  ngOnDestroy() {
    this.clearTimer();
    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }
  }

  private extractDealIdFromPlacementOptions(rawOptions: string | null): number | null {
    if (!rawOptions) {
      return null;
    }

    const valuesToCheck: unknown[] = [rawOptions];
    try {
      const parsed = JSON.parse(rawOptions);
      valuesToCheck.push(parsed);
      if (parsed && typeof parsed === 'object') {
        valuesToCheck.push(
          parsed.ID,
          parsed.id,
          parsed.DEAL_ID,
          parsed.dealId,
          parsed.ENTITY_ID,
          parsed.entityId,
          parsed.ENTITY_VALUE_ID,
          parsed.entityValueId,
          parsed.OWNER_ID,
          parsed.ownerId,
          parsed.value
        );
      }
    } catch {
      // Plain string placement options are handled below.
    }

    for (const value of valuesToCheck) {
      if (typeof value === 'number' && Number.isFinite(value) && value > 0) {
        return value;
      }

      if (typeof value === 'string') {
        const trimmedValue = value.trim();
        const directNumber = Number(trimmedValue);
        if (Number.isFinite(directNumber) && directNumber > 0) {
          return directNumber;
        }

        const explicitDealMatch = trimmedValue.match(
          /(?:\/crm\/deal\/details\/|crm%2Fdeal%2Fdetails%2F|deal\/details\/|details%2F|DEAL[_=:]|dealId[=:]|DEAL_ID[=:]|ENTITY_VALUE_ID[=:]|"ID"\s*:\s*"?)(\d+)/i
        );
        if (explicitDealMatch) {
          const parsedNumber = Number(explicitDealMatch[1]);
          if (Number.isFinite(parsedNumber) && parsedNumber > 0) {
            return parsedNumber;
          }
        }

        if (
          trimmedValue.startsWith('{') ||
          trimmedValue.startsWith('[') ||
          trimmedValue.includes('://') ||
          trimmedValue.includes('bitrix24.')
        ) {
          continue;
        }

        const match = trimmedValue.match(/\d+/);
        if (match) {
          const parsedNumber = Number(match[0]);
          if (Number.isFinite(parsedNumber) && parsedNumber > 0) {
            return parsedNumber;
          }
        }
      }
    }

    return null;
  }

  private extractDealIdFromAnySource(...sources: unknown[]): number | null {
    for (const source of sources) {
      if (typeof source === 'number' && Number.isFinite(source) && source > 0) {
        return source;
      }

      if (typeof source === 'string') {
        const dealId = this.extractDealIdFromPlacementOptions(source);
        if (dealId) {
          return dealId;
        }
      } else if (source && typeof source === 'object') {
        const dealId = this.extractDealIdFromPlacementOptions(JSON.stringify(source));
        if (dealId) {
          return dealId;
        }
      }
    }

    return null;
  }

  private extractDealIdFromSessionPayload(source: unknown, depth = 0): number | null {
    if (!source || depth > 5) {
      return null;
    }

    if (typeof source === 'string') {
      return this.extractDealIdFromPlacementOptions(source);
    }

    if (typeof source !== 'object') {
      return null;
    }

    const record = source as Record<string, unknown>;
    const uriDealId = this.extractDealIdFromAnySource(record['URI'], record['uri'], record['backurl'], record['BACKURL']);
    if (uriDealId) {
      return uriDealId;
    }

    const placement = String(record['placement'] || record['PLACEMENT'] || '');
    if (placement.includes('DEAL')) {
      const directDealId = this.extractDealIdFromAnySource(
        record['ID'],
        record['id'],
        record['DEAL_ID'],
        record['dealId'],
        record['ENTITY_VALUE_ID'],
        record['entityValueId']
      );
      if (directDealId) {
        return directDealId;
      }
    }

    for (const [key, value] of Object.entries(record)) {
      if (/placement|options|launch|context|data/i.test(key)) {
        const nestedDealId = this.extractDealIdFromSessionPayload(value, depth + 1);
        if (nestedDealId) {
          return nestedDealId;
        }
      }
    }

    return null;
  }

  private probeRuntime() {
    if (typeof window === 'undefined') {
      return;
    }

    fetch('/api/debug/runtime')
      .then(res => res.json())
      .then(data => {
        const current = this.b24Debug();
        const runtimeDebug = `runtime=${data?.success ? 'ok' : 'fail'}; auth=${data?.data?.hasVibeAuthorization ? 'yes' : 'no'}`;
        this.b24Debug.set(current ? `${current}; ${runtimeDebug}` : runtimeDebug);
      })
      .catch(err => {
        const current = this.b24Debug();
        const runtimeDebug = `runtime=error:${err instanceof Error ? err.message : String(err)}`;
        this.b24Debug.set(current ? `${current}; ${runtimeDebug}` : runtimeDebug);
      });
  }

  private reportClientContext(stage: string, extra: Record<string, unknown> = {}) {
    if (typeof window === 'undefined') {
      return;
    }

    const w = window as any;
    const locationParams = Object.fromEntries(new URLSearchParams(window.location.search).entries());
    const payload = {
      stage,
      href: window.location.href,
      referrer: document.referrer,
      ancestorOrigins: Array.from(window.location.ancestorOrigins || []),
      windowName: window.name,
      locationParams,
      hasBX24: Boolean(w.BX24),
      bx24Keys: w.BX24 ? Object.keys(w.BX24).slice(0, 40) : [],
      ...extra
    };

    fetch('/api/debug/client-context', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(err => console.warn('Unable to report client context:', err));
  }

  private sanitizeAuthForDebug(auth: any) {
    if (!auth || typeof auth !== 'object') {
      return auth || null;
    }

    return {
      domain: auth.domain,
      member_id: auth.member_id,
      expires_in: auth.expires_in,
      hasAccessToken: Boolean(auth.access_token || auth.AUTH_ID || auth.auth_id),
      hasRefreshToken: Boolean(auth.refresh_token || auth.REFRESH_ID || auth.refresh_id)
    };
  }

  private getDisplayName(person: any, fallback: string): string {
    if (!person) {
      return fallback;
    }

    const directName = person.NAME || person.name || person.FULL_NAME || person.fullName;
    if (directName) {
      return String(directName);
    }

    const firstName = person.NAME || person.firstName || person.FIRST_NAME || '';
    const lastName = person.LAST_NAME || person.lastName || '';
    const combined = [firstName, lastName].filter(Boolean).join(' ').trim();

    return combined || fallback;
  }

  private getDealField(deal: any, fieldId: string): string {
    return String(
      deal?.[`UF_CRM_${fieldId}`] ||
      deal?.[`ufCrm_${fieldId}`] ||
      deal?.[`ufCrm${fieldId}`] ||
      ''
    );
  }

  private parseDate(value: string): Date | null {
    if (!value) {
      return null;
    }

    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }

  private formatTripDatePhrase(startDateRaw: string, endDateRaw: string): string {
    const startDate = this.parseDate(startDateRaw);
    const endDate = this.parseDate(endDateRaw);
    const primaryDate = startDate || endDate;
    if (!primaryDate) {
      return '';
    }

    const months = [
      '\u044f\u043d\u0432\u0430\u0440\u0435',
      '\u0444\u0435\u0432\u0440\u0430\u043b\u0435',
      '\u043c\u0430\u0440\u0442\u0435',
      '\u0430\u043f\u0440\u0435\u043b\u0435',
      '\u043c\u0430\u0435',
      '\u0438\u044e\u043d\u0435',
      '\u0438\u044e\u043b\u0435',
      '\u0430\u0432\u0433\u0443\u0441\u0442\u0435',
      '\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u0435',
      '\u043e\u043a\u0442\u044f\u0431\u0440\u0435',
      '\u043d\u043e\u044f\u0431\u0440\u0435',
      '\u0434\u0435\u043a\u0430\u0431\u0440\u0435'
    ];
    const month = months[primaryDate.getMonth()];
    const currentYear = new Date().getFullYear();
    const diff = currentYear - primaryDate.getFullYear();
    const yearPhrase = diff === 0
      ? '\u044d\u0442\u043e\u0433\u043e \u0433\u043e\u0434\u0430'
      : diff === 1
        ? '\u043f\u0440\u043e\u0448\u043b\u043e\u0433\u043e \u0433\u043e\u0434\u0430'
        : `${primaryDate.getFullYear()} \u0433\u043e\u0434\u0430`;

    if (startDate && endDate && startDate.getMonth() !== endDate.getMonth()) {
      const endMonth = months[endDate.getMonth()];
      return `\u0441 ${month} \u043f\u043e ${endMonth} ${yearPhrase}`;
    }

    return `\u0432 ${month} ${yearPhrase}`;
  }

  private bx24Call<T = any>(BX24: any, method: string, params: Record<string, unknown>): Promise<T> {
    return new Promise((resolve, reject) => {
      BX24.callMethod(method, params, (result: any) => {
        if (result.error && result.error()) {
          reject(new Error(result.error_description?.() || result.error()));
          return;
        }

        resolve(result.data ? result.data() : result);
      });
    });
  }

  private buildDeadlineForB24(dateValue: string): string {
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
      return `${dateValue}T10:00:00+03:00`;
    }

    const parsed = new Date(dateValue);
    return Number.isNaN(parsed.getTime()) ? dateValue : parsed.toISOString();
  }

  private async createTodoViaBitrixSdk(
    dealId: number,
    notes: string,
    nextContactDate: string,
    assignedById: number | null
  ): Promise<boolean> {
    const BX24 = this.bx24Instance || (typeof window !== 'undefined' ? (window as any).BX24 : null);
    if (!BX24?.callMethod) {
      return false;
    }

    const result = await this.bx24Call<any>(BX24, 'crm.activity.todo.add', {
      ownerTypeId: 2,
      ownerId: dealId,
      deadline: this.buildDeadlineForB24(nextContactDate),
      title: 'Следующий контакт по реактивации',
      description: notes,
      responsibleId: assignedById || undefined,
      pingOffsets: [0, 15],
      colorId: 'red'
    });
    const activityId = result?.id || result?.ID || result;
    this.createdActivityId.set(activityId || null);
    return true;
  }

  private loadDealContextFromBitrixSdk(BX24: any, dealId: number) {
    this.b24Loading.set(true);
    this.b24Error.set('');

    this.bx24Call<any>(BX24, 'crm.deal.get', { id: dealId })
      .then(async (deal) => {
        const assignedById = deal?.ASSIGNED_BY_ID || deal?.assignedById || null;
        const contactId = deal?.CONTACT_ID || deal?.contactId || deal?.CONTACT_IDS?.[0] || null;
        this.dealCategoryId.set(Number(deal?.CATEGORY_ID || deal?.categoryId || 0) || null);
        this.assignedById.set(Number(assignedById) || null);

        if (assignedById) {
          try {
            const users = await this.bx24Call<any[]>(BX24, 'user.get', { ID: assignedById });
            this.agentName.set(this.getDisplayName(Array.isArray(users) ? users[0] : users, this.agentName()));
          } catch (err) {
            console.warn('Unable to load responsible user via BX24 SDK:', err);
          }
        }

        if (contactId) {
          try {
            const contact = await this.bx24Call<any>(BX24, 'crm.contact.get', { id: contactId });
            this.clientName.set(this.getDisplayName(contact, this.clientName()));
          } catch (err) {
            console.warn('Unable to load contact via BX24 SDK:', err);
          }
        }

        const destination = this.getDealField(deal, '1604438175');
        const startDate = this.getDealField(deal, '1604438397');
        const endDate = this.getDealField(deal, '1621261388273');
        const tripDateText = this.formatTripDatePhrase(startDate, endDate);

        if (destination || startDate || endDate) {
          this.historyType.set('buyer');
          if (destination) {
            this.destination.set(destination);
          }
          if (tripDateText) {
            this.tripDate.set(tripDateText);
          }
        }
      })
      .catch((err) => {
        this.b24Error.set('\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u0434\u0435\u043b\u043a\u0443 \u0447\u0435\u0440\u0435\u0437 Bitrix24 SDK');
        console.warn('Unable to load deal via BX24 SDK:', err);
      })
      .finally(() => this.b24Loading.set(false));
  }

  private loadDealIdFromSession() {
    fetch('/api/b24/session')
      .then(res => res.json())
      .then(data => {
        this.b24Debug.set(`session keys: ${Object.keys(data?.data || data || {}).join(', ') || 'empty'}`);
        const dealId = this.extractDealIdFromSessionPayload(data);
        if (dealId) {
          this.b24DealId.set(dealId);
          this.loadDealContextFromServer();
        } else {
          console.warn('Vibe session without deal id:', data);
        }
      })
      .catch(err => console.warn('Unable to load Vibe session context:', err));
  }

  private loadBitrixSdk(): Promise<any> {
    const w = window as any;
    if (w.BX24) {
      this.reportClientContext('bx24-existing');
      return Promise.resolve(w.BX24);
    }

    return new Promise((resolve, reject) => {
      const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${this.bx24SdkUrl}"]`);
      if (existingScript) {
        existingScript.addEventListener('load', () => resolve((window as any).BX24), { once: true });
        existingScript.addEventListener('error', reject, { once: true });
        return;
      }

      const script = document.createElement('script');
      script.src = this.bx24SdkUrl;
      script.async = true;
      script.onload = () => {
        this.reportClientContext('bx24-script-loaded');
        resolve((window as any).BX24);
      };
      script.onerror = (event) => {
        this.reportClientContext('bx24-script-error', {
          eventType: event instanceof Event ? event.type : String(event)
        });
        reject(event);
      };
      document.head.appendChild(script);
    });
  }

  private initB24FromSdk() {
    this.loadBitrixSdk()
      .then((BX24) => {
        if (!BX24) {
          throw new Error('BX24 SDK is unavailable');
        }
        this.bx24Instance = BX24;

        BX24.init(() => {
          const auth = BX24.getAuth ? BX24.getAuth() : {};
          const token = auth?.access_token || auth?.AUTH_ID || auth?.auth_id || '';
          const placementInfo = BX24.placement?.info ? BX24.placement.info() : null;
          const dealId = this.extractDealIdFromAnySource(
            placementInfo?.options,
            placementInfo?.OPTIONS,
            placementInfo,
            document.referrer,
            window.location.href
          );

          if (token) {
            this.accessToken.set(token);
          }

          if (dealId) {
            this.b24DealId.set(dealId);
            this.loadDealContextFromBitrixSdk(BX24, dealId);
          } else {
            this.b24Error.set('Не удалось определить ID сделки через Bitrix24 SDK');
            console.warn('Bitrix24 SDK placement info without deal id:', placementInfo);
          }
        });
      })
      .catch((err) => {
        this.b24Error.set('Не удалось загрузить Bitrix24 SDK');
        console.warn('Bitrix24 SDK initialization failed:', err);
      });
  }

  private initB24FromSdkWithDiagnostics(fallbackDealId: number | null = null) {
    this.loadBitrixSdk()
      .then((BX24) => {
        if (!BX24) {
          throw new Error('BX24 SDK is unavailable');
        }
        this.bx24Instance = BX24;

        this.reportClientContext('bx24-before-init', {
          preInitPlacementInfo: BX24.placement?.info ? BX24.placement.info() : null,
          preInitAuth: this.sanitizeAuthForDebug(BX24.getAuth ? BX24.getAuth() : null)
        });

        let initStarted = false;
        let initCompleted = false;
        const initTimeout = setTimeout(() => {
          if (!initCompleted) {
            this.b24Error.set('Bitrix24 SDK загружен, но BX24.init не вернул контекст');
            this.reportClientContext('bx24-init-timeout', {
              placementInfo: BX24.placement?.info ? BX24.placement.info() : null,
              auth: this.sanitizeAuthForDebug(BX24.getAuth ? BX24.getAuth() : null)
            });
          }
        }, 5000);

        const handleInit = () => {
          initCompleted = true;
          clearTimeout(initTimeout);

          const auth = BX24.getAuth ? BX24.getAuth() : {};
          const token = auth?.access_token || auth?.AUTH_ID || auth?.auth_id || '';
          const placementInfo = BX24.placement?.info ? BX24.placement.info() : null;
          this.reportClientContext('bx24-init-callback', {
            placementInfo,
            auth: this.sanitizeAuthForDebug(auth)
          });
          const dealId = this.extractDealIdFromAnySource(
            placementInfo?.options,
            placementInfo?.OPTIONS,
            placementInfo,
            fallbackDealId
          );

          if (token) {
            this.accessToken.set(token);
          }

          if (dealId) {
            this.b24DealId.set(dealId);
            this.loadDealContextFromBitrixSdk(BX24, dealId);
          } else {
            this.b24Error.set('Не удалось определить ID сделки через Bitrix24 SDK');
            console.warn('Bitrix24 SDK placement info without deal id:', placementInfo);
          }
        };

        const startInit = () => {
          if (initStarted) {
            return;
          }

          initStarted = true;
          this.reportClientContext('bx24-init-start');
          BX24.init(handleInit);
        };

        if (BX24.ready) {
          BX24.ready(startInit);
        }
        if (!BX24.ready || document.readyState !== 'loading') {
          setTimeout(startInit, 0);
        }
      })
      .catch((err) => {
        this.b24Error.set('Не удалось загрузить Bitrix24 SDK');
        this.reportClientContext('bx24-init-error', {
          message: err instanceof Error ? err.message : String(err)
        });
        console.warn('Bitrix24 SDK initialization failed:', err);
      });
  }

  // Bitrix24 launcher detection
  initB24Integration() {
    if (typeof window !== 'undefined') {
      this.reportClientContext('init-start');
      const params = new URLSearchParams(window.location.search);
      const token = params.get('access_token') || params.get('AUTH_ID') || params.get('auth_id');
      const serverEndpoint = params.get('server_endpoint') || params.get('SERVER_ENDPOINT');
      const placementOpts = params.get('placement_options') || params.get('PLACEMENT_OPTIONS');
      const referrerDealId = this.extractDealIdFromAnySource(
        document.referrer,
        window.location.href,
        window.name,
        Array.from(window.location.ancestorOrigins || []).join(' ')
      );
      const dealId = this.extractDealIdFromAnySource(placementOpts, referrerDealId);
      this.b24Debug.set(`url keys: ${Array.from(params.keys()).join(', ') || 'none'}; placement=${params.get('placement') || 'none'}`);

      if (token) {
        this.accessToken.set(token);
      }
      if (serverEndpoint) {
        this.bitrixRestEndpoint.set(serverEndpoint);
      }

      if (dealId) {
        this.b24DealId.set(dealId);
        this.loadDealContextFromServer();
        this.initB24FromSdkWithDiagnostics(dealId);
      } else {
        this.initB24FromSdkWithDiagnostics();
      }
    }
  }

  // Load deal context from our server-side proxy
  loadDealContextFromServer() {
    const dealId = this.b24DealId();
    const token = this.accessToken();
    if (!dealId) return;

    this.b24Loading.set(true);
    this.b24Error.set('');

    const headers: Record<string, string> = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    if (this.bitrixRestEndpoint()) {
      headers['X-Bitrix-Rest-Endpoint'] = this.bitrixRestEndpoint();
    }

    fetch(`/api/b24/load-deal-context?dealId=${dealId}`, { headers })
    .then(res => res.json())
    .then(res => {
      this.b24Loading.set(false);
      if (res.success && res.data) {
        const data = res.data;
        this.dealCategoryId.set(data.categoryId);
        this.assignedById.set(data.assignedById);

        if (data.agentName) {
          this.agentName.set(data.agentName);
        }
        if (data.clientName) {
          this.clientName.set(data.clientName);
        }

        if (data.categoryId !== 12) {
          this.showToast('Внимание: Приложение открыто вне сделки Реактивации!');
        }

        if (data.previousTrip) {
          this.historyType.set('buyer');
          if (data.previousTrip.destination) {
            this.destination.set(data.previousTrip.destination);
          } else {
            this.destination.set('не указано');
          }

          let tripDateStr = data.previousTrip.tripDateText || '';
          if (!tripDateStr && data.previousTrip.startDate) {
            const startStr = new Date(data.previousTrip.startDate).toLocaleDateString('ru-RU');
            tripDateStr = `${startStr}`;
            if (data.previousTrip.endDate) {
              const endStr = new Date(data.previousTrip.endDate).toLocaleDateString('ru-RU');
              tripDateStr += ` — ${endStr}`;
            }
          } else if (!tripDateStr) {
            tripDateStr = 'неизвестно';
          }
          this.tripDate.set(tripDateStr);
        } else {
          this.destination.set('не найдено');
          this.tripDate.set('—');
        }
        this.showToast('Интеграция с Битрикс24 выполнена успешно!');
      } else {
        this.b24Error.set(res.error || 'Ошибка загрузки контекста сделки');
        this.showToast('Не удалось загрузить данные из СРМ.');
      }
    })
    .catch(err => {
      this.b24Loading.set(false);
      this.b24Error.set('Сетевая ошибка при загрузке данных');
      this.showToast('Ошибка сети.');
      console.error(err);
    });
  }

  // Create follow-up CRM activity for the current deal.
  async saveActivityToB24(): Promise<boolean> {
    const dealId = this.b24DealId();
    const token = this.accessToken();
    if (!dealId) {
      this.showToast('Сделка не определена, дело в CRM не создано.');
      return false;
    }

    if (!this.nextContactDate()) {
      this.showToast('Укажите дату следующего контакта перед завершением звонка.');
      return false;
    }

    if (!this.crmNotes().trim()) {
      this.showToast('Заполните заметку для CRM: она станет описанием дела.');
      return false;
    }

    this.b24Saving.set(true);
    this.createdActivityId.set(null);

    const body = {
      dealId: dealId,
      crmNotes: this.crmNotes(),
      nextContactDate: this.nextContactDate(),
      assignedById: this.assignedById()
    };

    const headers: Record<string, string> = {
      'Content-Type': 'application/json'
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const createdWithSdk = await this.createTodoViaBitrixSdk(
        dealId,
        this.crmNotes().trim(),
        this.nextContactDate(),
        this.assignedById()
      );
      if (createdWithSdk) {
        this.b24Saving.set(false);
        this.showToast('Дело создано в Битрикс24.');
        return true;
      }
    } catch (err) {
      console.warn('Unable to create Bitrix24 todo via SDK, falling back to server:', err);
    }

    return fetch('/api/b24/create-call-activity', {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(res => {
      this.b24Saving.set(false);
      if (res.success) {
        const activityId = res?.data?.id || res?.data?.ID || res?.id || res?.ID || null;
        this.createdActivityId.set(activityId);
        this.showToast('Запись о звонке сохранена в Битрикс24!');
        return true;
      } else {
        this.showToast('Ошибка при фиксировании звонка в СРМ.');
        console.error(res.error);
        return false;
      }
    })
    .catch(err => {
      this.b24Saving.set(false);
      this.showToast('Сетевая ошибка при сохранении звонка.');
      console.error(err);
      return false;
    });
  }

  // Timer handlers
  startTimer() {
    this.clearTimer();
    this.timerSeconds.set(0);
    this.timerInterval = setInterval(() => {
      this.timerSeconds.update(s => s + 1);
    }, 1000);
  }

  clearTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  formattedTimer = computed(() => {
    const total = this.timerSeconds();
    const mins = String(Math.floor(total / 60)).padStart(2, '0');
    const secs = String(total % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  });

  // Client history setup
  setHistoryType(type: 'buyer' | 'lead') {
    this.historyType.set(type);
  }

  // Travel contexts selection
  setPresetContext(contextText: string) {
    this.travelContext.set(contextText);
  }

  // Active dialogue steps scroll
  scrollToStep(stepNum: number) {
    this.activeStep.set(stepNum);
    setTimeout(() => {
      const el = document.getElementById(`step-${stepNum}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 50);
  }

  // Branch interest selection
  setInterest(hasInterest: boolean) {
    this.interest.set(hasInterest);
  }

  // Call termination operations
  async finishCall() {
    const saved = await this.saveActivityToB24();
    if (!saved) {
      return;
    }

    this.clearTimer();
    this.isCallFinished.set(true);
    this.showToast('Звонок завершен, дело создано в CRM.');
    
    setTimeout(() => {
      const el = document.getElementById('summary-panel');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  }

  // Call sequence refreshing
  resetCall() {
    this.clientName.set('');
    this.destination.set('');
    this.tripDate.set('');
    this.season.set('');
    this.destinationLead.set('');
    this.crmNotes.set('');
    this.nextContactDate.set('');
    this.createdActivityId.set(null);
    this.interest.set(null);
    this.isCallFinished.set(false);
    this.activeStep.set(1);
    this.startTimer();
    this.showToast('Форма полностью обновлена! Таймер перезапущен.');

    setTimeout(() => {
      const el = document.getElementById('step-1');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  }

  // Date adapters support
  nextContactDateObj = computed(() => {
    const dStr = this.nextContactDate();
    return dStr ? new Date(dStr) : null;
  });

  onNextContactDateChange(date: Date | null) {
    if (date) {
      const yyyy = date.getFullYear();
      const mm = String(date.getMonth() + 1).padStart(2, '0');
      const dd = String(date.getDate()).padStart(2, '0');
      this.nextContactDate.set(`${yyyy}-${mm}-${dd}`);
    } else {
      this.nextContactDate.set('');
    }
  }

  // Alert controller (Material SnackBar wrapper)
  showToast(message: string) {
    this.toastMessage.set(message);
    this.toastVisible.set(true);

    this.snackBar.open(message, 'Закрыть', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    });

    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }

    this.toastTimeout = setTimeout(() => {
      this.toastVisible.set(false);
    }, 3000);
  }

  // Clipboard copies
  copyText(text: string) {
    if (this.clipboard.copy(text)) {
      this.showToast('Текст скопирован в буфер обмена!');
    }
  }

  // Computed strings for step copies
  step1Text = computed(() => {
    const client = this.clientName() || '[Имя клиента]';
    const agent = this.agentName() || '[Имя менеджера]';
    let contextBlockText = '';
    
    if (this.historyType() === 'buyer') {
      const dest = this.destination() || '[Направление прошлой поездки]';
      const when = this.tripDate() || '[Дата поездки]';
      contextBlockText = `— Мы помогали вам организовать вашу поездку в ${dest} ${when}, помните?`;
    } else {
      const whenLead = this.season() || '[Время года]';
      const destLead = this.destinationLead() || '[Направление]';
      contextBlockText = `— ${whenLead} мы подбирали для вас тур в ${destLead}, помните?`;
    }

    return `— ${client}?\n— Меня зовут ${agent}, компания Русский Экспресс.\n${contextBlockText}\n— Вам удобно сейчас говорить?`;
  });

  step2Text = computed(() => {
    const context = this.travelContext() || '[контекст путешествия]';
    return `«Звоню сказать, что у нас сейчас активно идет раннее / активное бронирование на ${context}. Пока ещё есть по-настоящему интересные, очень выгодные варианты — от полноценного двухнедельного путешествия до коротких туров выходного дня на 2-3 ночи... поэтому хотела спросить: есть ли у вас какие-то планы на ${context}? Можем присмотреть для вас парочку вариантов?»`;
  });

  step3Text = computed(() => {
    const client = this.clientName() || '[Имя клиента]';
    const context = this.travelContext() || '[контекст путешествия]';

    if (this.interest() === true) {
      return `«Сейчас есть несколько очень классных туров на эти даты, но тянуть не стоит. Сами понимаете: ${context} пользуется большой популярностью — места в лучших отелях очень быстро разбирают. Давайте задам вам пару уточняющих вопросов и после этого обсудим конкретные отели. ${client}, скажите пожалуйста, с кем поедете?»`;
    } else if (this.interest() === false) {
      return `«Хорошо, а скажите пожалуйста, чтобы лишний раз вас не беспокоила, когда вопрос с поездкой может стать для вас актуален?»`;
    }
    return '';
  });

  crmNotesReport = computed(() => {
    const agentText = this.agentName() ? `Менеджер: ${this.agentName()}\n` : '';
    const clientText = this.clientName() ? `Клиент: ${this.clientName()}\n` : '';
    let interestText = 'Интерес: ';
    if (this.interest() === true) {
      interestText += 'Есть интерес (будет подбор тура)\n';
    } else if (this.interest() === false) {
      interestText += 'Отказ (спросить позже)\n';
    } else {
      interestText += 'Неизвестно\n';
    }
    const crmNotesText = this.crmNotes().trim() ? `Заметки: ${this.crmNotes().trim()}\n` : '';
    return `${agentText}${clientText}${interestText}${crmNotesText}Длительность разговора: ${this.formattedTimer()}`;
  });
}

