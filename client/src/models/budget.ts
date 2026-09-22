export interface IBudgetCreateRequest {
  month: string;
  category: string;
  limit: number;
  isRollover?: boolean;
}

export interface IBudgetUpdateRequest {
  id: string;
  limit: number;
  isRollover: boolean;
}

export interface IBudget {
  id: string;
  month: string;
  category: string;
  limit: number;
  isRollover: boolean;
  /** Balance carried in from prior months. Negative when earlier months were overspent. */
  rollover: number;
  userId: string;
}

export enum CashFlowValue {
  Positive,
  Neutral,
  Negative,
}
