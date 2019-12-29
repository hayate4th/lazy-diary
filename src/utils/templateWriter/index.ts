import { RowType } from "../../types/TemplateWriter";

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
