import { getFontSizeFromType } from ".";

describe("templateWriter", () => {
  it("getFontSizeFromType returns '3em' when type is 'TITLE'", () => {
    expect(getFontSizeFromType("TITLE")).toEqual("3em");
  });

  it("getFontSizeFromType returns '2em' when type is 'SUBTITLE'", () => {
    expect(getFontSizeFromType("SUBTITLE")).toEqual("2em");
  });

  it("getFontSizeFromType returns '1.5em' when type is 'CONTENT'", () => {
    expect(getFontSizeFromType("CONTENT")).toEqual("1.5em");
  });
});
