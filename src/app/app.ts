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
  b24DealId = signal<number | null>(null);
  dealCategoryId = signal<number | null>(null);
  nextContactDate = signal<string>('');
  assignedById = signal<number | null>(null);
  b24Loading = signal<boolean>(false);
  b24Saving = signal<boolean>(false);
  b24Error = signal<string>('');

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
    this.initB24Integration();
  }

  ngOnDestroy() {
    this.clearTimer();
    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }
  }

  // Bitrix24 launcher detection
  initB24Integration() {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const token = params.get('access_token');
      const placementOpts = params.get('placement_options');

      if (token && placementOpts) {
        this.accessToken.set(token);
        let dealId: string | number | null = null;
        try {
          const parsed = JSON.parse(placementOpts);
          dealId = parsed.ID || null;
        } catch {
          dealId = placementOpts;
        }

        if (dealId) {
          this.b24DealId.set(Number(dealId));
          this.loadDealContextFromServer();
        }
      }
    }
  }

  // Load deal context from our server-side proxy
  loadDealContextFromServer() {
    const dealId = this.b24DealId();
    const token = this.accessToken();
    if (!dealId || !token) return;

    this.b24Loading.set(true);
    this.b24Error.set('');

    fetch(`/api/b24/load-deal-context?dealId=${dealId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
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

          let tripDateStr = '';
          if (data.previousTrip.startDate) {
            const startStr = new Date(data.previousTrip.startDate).toLocaleDateString('ru-RU');
            tripDateStr = `${startStr}`;
            if (data.previousTrip.endDate) {
              const endStr = new Date(data.previousTrip.endDate).toLocaleDateString('ru-RU');
              tripDateStr += ` — ${endStr}`;
            }
          } else {
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

  // Create call activity in CRM
  saveActivityToB24() {
    const dealId = this.b24DealId();
    const token = this.accessToken();
    if (!dealId || !token) {
      console.log('Bitrix24 integration not active in this session.');
      return;
    }

    this.b24Saving.set(true);

    const body = {
      dealId: dealId,
      crmNotes: this.crmNotes(),
      nextContactDate: this.nextContactDate(),
      assignedById: this.assignedById()
    };

    fetch('/api/b24/create-call-activity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(res => {
      this.b24Saving.set(false);
      if (res.success) {
        this.showToast('Запись о звонке сохранена в Битрикс24!');
      } else {
        this.showToast('Ошибка при фиксировании звонка в СРМ.');
        console.error(res.error);
      }
    })
    .catch(err => {
      this.b24Saving.set(false);
      this.showToast('Сетевая ошибка при сохранении звонка.');
      console.error(err);
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
  finishCall() {
    this.clearTimer();
    this.isCallFinished.set(true);
    this.showToast('Звонок успешно завершен!');
    this.saveActivityToB24();
    
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

