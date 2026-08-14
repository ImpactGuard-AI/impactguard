export type DependencyNodeType =
  | "API"
  | "SERVICE"
  | "CLIENT"
  | "COMPONENT"
  | "CRITICAL_PATH";

export interface DependencyNode {
  id: string;
  name: string;
  type: DependencyNodeType;
}

export interface DependencyEdge {
  source: string;
  target: string;
  relationship: string;
}

export interface DependencyGraph {
  nodes: DependencyNode[];
  edges: DependencyEdge[];
}