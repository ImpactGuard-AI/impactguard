import type { ImpactReport } from "./impact";
import type { MigrationPlan } from "./migration";

export type PRStatus =
  | "PASS"
  | "BLOCK";

export interface PRAnalysis {
  pullRequestNumber: number;
  status: PRStatus;
  impactReport: ImpactReport;
  migrationPlan?: MigrationPlan;
  aiExplanation?: string;
}