export type RowType = "TITLE" | "SUBTITLE" | "CONTENT";

export type OperationType =
  | "ADD_ROW"
  | "DELETE_ROW"
  | "CHANGE_ROW_TYPE"
  | "NORMAL";

export interface RowData {
  name: string;
  type: RowType;
}
