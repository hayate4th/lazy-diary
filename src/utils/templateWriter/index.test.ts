import { changeRowTypeFromIsUp, getFontSizeFromType, reorderRowList } from ".";
import { RowData } from "../../types/TemplateWriter";

describe("templateWriter", () => {
  it("changeRowTypeFromIsUp returns 'SUBTITLE' when type is 'TITLE' and isUp is false", () => {
    expect(changeRowTypeFromIsUp("TITLE", false)).toEqual("SUBTITLE");
  });

  it("changeRowTypeFromIsUp returns 'CONTENT' when type is 'SUBTITLE' and isUp is false", () => {
    expect(changeRowTypeFromIsUp("SUBTITLE", false)).toEqual("CONTENT");
  });

  it("changeRowTypeFromIsUp returns 'CONTENT' when type is 'CONTENT' and isUp is false", () => {
    expect(changeRowTypeFromIsUp("CONTENT", false)).toEqual("CONTENT");
  });

  it("changeRowTypeFromIsUp returns 'TITLE' when type is 'TITLE' and isUp is true", () => {
    expect(changeRowTypeFromIsUp("TITLE", true)).toEqual("TITLE");
  });

  it("changeRowTypeFromIsUp returns 'TITLE when type is 'SUBTITLE' and isUp is true", () => {
    expect(changeRowTypeFromIsUp("SUBTITLE", true)).toEqual("TITLE");
  });

  it("changeRowTypeFromIsUp returns 'SUBTITLE' when type is 'CONTENT' and isUp is true", () => {
    expect(changeRowTypeFromIsUp("CONTENT", true)).toEqual("SUBTITLE");
  });

  it("getFontSizeFromType returns '3em' when type is 'TITLE'", () => {
    expect(getFontSizeFromType("TITLE")).toEqual("3em");
  });

  it("getFontSizeFromType returns '2em' when type is 'SUBTITLE'", () => {
    expect(getFontSizeFromType("SUBTITLE")).toEqual("2em");
  });

  it("getFontSizeFromType returns '1.5em' when type is 'CONTENT'", () => {
    expect(getFontSizeFromType("CONTENT")).toEqual("1.5em");
  });

  it("reorderRowList returns [1, 2, 0] when RowData 0 is moved to the end", () => {
    const rowList: RowData[] = [
      {
        name: "row0",
        type: "TITLE",
        value: "TEST"
      },
      {
        name: "row1",
        type: "TITLE",
        value: "TEST"
      },
      {
        name: "row2",
        type: "TITLE",
        value: "TEST"
      }
    ];
    expect(reorderRowList(rowList, 0, 2)).toEqual([
      {
        name: "row1",
        type: "TITLE",
        value: "TEST"
      },
      {
        name: "row2",
        type: "TITLE",
        value: "TEST"
      },
      {
        name: "row0",
        type: "TITLE",
        value: "TEST"
      }
    ]);
  });
});
