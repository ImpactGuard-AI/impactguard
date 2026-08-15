export type RiskSeverity =
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "CRITICAL";

export interface RiskSignal {
  name: string;
  points: number;
  reason: string;
}

export interface RiskReport {
  score: number;
  severity: RiskSeverity;
  signals: RiskSignal[];
}