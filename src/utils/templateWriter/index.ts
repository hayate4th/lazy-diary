import { RowType, RowData } from "../../types/TemplateWriter";

export const changeRowTypeFromIsUp = (
  type: RowType,
  isUp: boolean
): RowType => {
  switch (type) {
    case "TITLE":
      if (isUp) return type;
      return "SUBTITLE";
    case "SUBTITLE":
      if (isUp) return "TITLE";
      return "CONTENT";
    case "CONTENT":
      if (isUp) return "SUBTITLE";
      return type;
    default:
      throw new Error("Invalid type");
  }
};

export const getFontSizeFromType = (type: RowType) => {
  switch (type) {
    case "TITLE":
      return "3em";
    case "SUBTITLE":
      return "2em";
    case "CONTENT":
      return "1.5em";
    default:
      throw new Error("Invalid type");
  }
};

export const allRowsAreEmpty = (rowList: RowData[]) => {
  for (const row of rowList) {
    // empty ContentRows contain white spaces, we need to trim them
    if (row.value.trim() !== "") return false;
  }
  return true;
};
