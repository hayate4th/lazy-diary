export type RowType = "TITLE" | "SUBTITLE" | "CONTENT";

export type OperationType =
  | "ADD_ROW"
  | "DELETE_ROW"
  | "CHANGE_ROW_TYPE"
  | "CHANGE_ROW_VALUE"
  | "NORMAL";

export interface RowData {
  name: string;
  type: RowType;
  value: string;
}
