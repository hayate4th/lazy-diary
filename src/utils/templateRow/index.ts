import { RowType } from "../../types/TemplateWriter";

export const typeToText = (type: RowType) => {
  return type.charAt(0) + type.slice(1).toLowerCase();
};
