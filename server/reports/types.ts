export const SLA_STATUSES = [
  'В пределах 15 минут',
  'Более 15 минут',
  'Контакта не было',
  'Входящий звонок',
  'Требуется ручная проверка'
] as const;

export type SlaStatus = (typeof SLA_STATUSES)[number];
export type ViolationFlag = 'Да' | 'Нет';

export const DATA_QUALITY_STATUSES = ['Без ошибок', 'Предупреждение', 'Ошибка'] as const;
export type DataQualityStatus = (typeof DATA_QUALITY_STATUSES)[number];

export const NEXT_STEP_STATUSES = ['OK', 'WARNING', 'ERROR'] as const;
export type NextStepStatus = (typeof NEXT_STEP_STATUSES)[number];

export interface VibeLead {
  id: number;
  title?: string | null;
  createdAt?: string | null;
  createdTime?: string | null;
  stageId?: string | null;
  statusId?: string | null;
  stageSemanticId?: string | null;
  assignedById?: number | string | null;
  contactId?: number | string | null;
  contactIds?: Array<number | string> | null;
  sourceId?: string | null;
  sourceDescription?: string | null;
  comments?: string | null;
  isReturnCustomer?: string | boolean | null;
  searchContent?: string | null;
  ufCrm_1638180783?: unknown;
  UF_CRM_1638180783?: unknown;
  ufCrm_1715933850?: string | null;
  ufCrm_1716370242690?: string | null;
  ufCrm_1724510334936?: unknown;
  ufCrm_1717431064812?: unknown;
}

export interface VibeStatus {
  id?: number | string;
  entityId?: string | null;
  statusId?: string | null;
  name?: string | null;
  nameInit?: string | null;
}

export interface VibeEnumerationItem {
  ID?: string | number | null;
  id?: string | number | null;
  VALUE?: string | null;
  value?: string | null;
}

export interface VibeLeadFieldsResponse {
  fields?: Record<string, { type?: string; label?: string; items?: VibeEnumerationItem[] }>;
}

export interface VibeActivity {
  id: number;
  typeId?: number | string | null;
  TYPE_ID?: number | string | null;
  ownerTypeId?: number | string | null;
  ownerId?: number | string | null;
  subject?: string | null;
  direction?: number | string | null;
  DIRECTION?: number | string | null;
  completed?: boolean | string | null;
  deadline?: string | null;
  STATUS?: string | number | null;
  status?: string | number | null;
  startTime?: string | null;
  START_TIME?: string | null;
  endTime?: string | null;
  END_TIME?: string | null;
  createdAt?: string | null;
  CREATED?: string | null;
  updatedAt?: string | null;
  LAST_UPDATED?: string | null;
  responsibleId?: number | string | null;
  PROVIDER_ID?: string | null;
  PROVIDER_TYPE_ID?: string | null;
  PROVIDER_GROUP_ID?: string | null;
  providerId?: string | null;
  providerTypeId?: string | null;
  RESULT_STATUS?: string | number | null;
  resultStatus?: string | number | null;
  RESULT_MARK?: string | number | null;
  resultMark?: string | number | null;
  RESULT_STREAM?: string | number | null;
  resultStream?: string | number | null;
  SETTINGS?: Record<string, unknown> | unknown[] | null;
  settings?: Record<string, unknown> | unknown[] | null;
  description?: string | null;
}

export interface VibeUser {
  id: number;
  name?: string | null;
  lastName?: string | null;
  active?: boolean | string | null;
  email?: string | null;
}

export interface VibeMultiField {
  value?: string | null;
  VALUE?: string | null;
  type?: string | null;
  TYPE?: string | null;
  valueType?: string | null;
  VALUE_TYPE?: string | null;
}

export interface VibeContact {
  id: number;
  name?: string | null;
  lastName?: string | null;
  secondName?: string | null;
  title?: string | null;
  assignedById?: number | string | null;
  createdAt?: string | null;
  createdTime?: string | null;
  phone?: VibeMultiField[] | string | null;
  PHONE?: VibeMultiField[] | string | null;
  email?: VibeMultiField[] | string | null;
  EMAIL?: VibeMultiField[] | string | null;
}

export interface VibeDeal {
  id: number;
  title?: string | null;
  categoryId?: number | string | null;
  stageId?: string | null;
  assignedById?: number | string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  closed?: string | boolean | null;
  closedAt?: string | null;
}

export interface ReactivationEmployee {
  id: number;
  name: string;
  lastName: string;
  photoUrl: string | null;
}

export interface ReactivationSuccessfulDeal {
  dealId: number;
  title: string;
  stageId: string | null;
  responsibleId: number;
  reasons: Array<'activity' | 'won' | 'lose'>;
  updatedAt: string;
}

export interface ReactivationEmployeeRow {
  employeeId: number;
  name: string;
  lastName: string;
  photoUrl: string | null;
  weeklyCount: number;
  weeklyPlan: number;
  monthlyRating: number;
  successfulDeals: ReactivationSuccessfulDeal[];
}

export interface ReactivationFinalizedWeek {
  weekKey: string;
  monthKey: string;
  finalizedAt: string;
  employeeResults: Record<string, number>;
}

export interface ReactivationLogPayload {
  generatedAt: string | null;
  weekKey: string | null;
  monthKey: string | null;
  weekStartedAt: string | null;
  weekFinishedAt: string | null;
  monthlyRating: Record<string, number>;
  finalizedWeeks: ReactivationFinalizedWeek[];
  rows: ReactivationEmployeeRow[];
}

export interface NextStepLogRow {
  id: string;
  dealId: number;
  dealTitle: string;
  checkedAt: string;
  dealCreatedAt: string;
  dealUpdatedAt: string;
  stageId: string | null;
  stageName: string;
  activityId: number | null;
  activityDeadline: string | null;
  activityDescription: string | null;
  nextStepErrors: string[];
  status: NextStepStatus;
  responsibleId: number | null;
  responsibleName: string;
  violationFlag: ViolationFlag;
}

export interface NextStepLogPayload {
  generatedAt: string | null;
  rows: NextStepLogRow[];
}

export interface VibeCalendarEvent {
  id: number | string;
  name?: string | null;
  accessibility?: string | null;
  ACCESSIBILITY?: string | null;
  dateFrom?: string | null;
  dateTo?: string | null;
  DATE_FROM?: string | null;
  DATE_TO?: string | null;
  from?: string | null;
  to?: string | null;
  start?: string | null;
  end?: string | null;
}

export interface VibeAbsenceInterval {
  userId: number;
  start: string;
  end: string;
}

export interface VibeStageHistory {
  id: number;
  typeId?: number | string | null;
  ownerId: number;
  createdAt?: string | null;
  statusId?: string | null;
  statusSemanticId?: string | null;
}

export interface VibeTimelineComment {
  id?: number | string;
  ID?: number | string;
  entityId?: number | string | null;
  ENTITY_ID?: number | string | null;
  entityType?: string | null;
  ENTITY_TYPE?: string | null;
  comment?: string | null;
  COMMENT?: string | null;
  authorId?: number | string | null;
  AUTHOR_ID?: number | string | null;
  createdAt?: string | null;
  CREATED?: string | null;
}

export interface SlaLogRow {
  id: string;
  leadId: number;
  leadTitle: string;
  leadStageName: string;
  rejectionReason: string | null;
  checkedAt: string;
  leadCreatedAt: string;
  firstContactAt: string | null;
  minutesToFirstContact: number | null;
  slaOverrunMinutes: number;
  status: SlaStatus;
  responsibleId: number | null;
  responsibleName: string;
  violationFlag: ViolationFlag;
}

export interface SlaLogPayload {
  generatedAt: string | null;
  rows: SlaLogRow[];
}

export interface DataQualityLogRow {
  id: string;
  contactId: number;
  contactName: string;
  checkedAt: string;
  contactCreatedAt: string;
  qualityScore: number;
  qualityErrors: string[];
  normalizedPhone: string | null;
  normalizedEmail: string | null;
  status: DataQualityStatus;
  responsibleId: number | null;
  responsibleName: string;
  violationFlag: ViolationFlag;
}

export interface DataQualityLogPayload {
  generatedAt: string | null;
  rows: DataQualityLogRow[];
}
