export interface MigrationStep {
  order: number;
  description: string;
}

export interface MigrationPlan {
  steps: MigrationStep[];
}