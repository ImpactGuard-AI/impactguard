export type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE"
  | "OPTIONS"
  | "HEAD";

export type ApiChangeType =
  | "ENDPOINT_ADDED"
  | "ENDPOINT_REMOVED"
  | "PARAMETER_ADDED"
  | "PARAMETER_REMOVED"
  | "PARAMETER_TYPE_CHANGED"
  | "RESPONSE_FIELD_ADDED"
  | "RESPONSE_FIELD_REMOVED"
  | "RESPONSE_FIELD_TYPE_CHANGED"
  | "REQUIRED_FIELD_ADDED"
  | "ENUM_CHANGED"
  | "STATUS_CODE_CHANGED";

export interface ApiChange {
  method: HttpMethod;
  path: string;
  changeType: ApiChangeType;
  field?: string;
  oldValue?: string;
  newValue?: string;
  breaking: boolean;
}