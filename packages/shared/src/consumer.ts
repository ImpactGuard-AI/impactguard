export type ConsumerUsageType =
  | "API_CALL"
  | "FIELD_ACCESS"
  | "DISPLAY"
  | "ARITHMETIC"
  | "CONDITIONAL"
  | "ASSIGNMENT"
  | "OTHER";

export type ConsumerCriticality =
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "CRITICAL";

export interface Consumer {
  name: string;
  file: string;
  line: number;
  usageType: ConsumerUsageType;
  criticality: ConsumerCriticality;
  field?: string;
  codeSnippet?: string;
}