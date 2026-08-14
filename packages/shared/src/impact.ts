import type { ApiChange } from "./api-change";
import type { Consumer } from "./consumer";
import type { DependencyGraph } from "./dependency";
import type { RiskReport } from "./risk";

export interface ImpactReport {
  change: ApiChange;
  consumers: Consumer[];
  dependencyGraph: DependencyGraph;
  risk: RiskReport;
}