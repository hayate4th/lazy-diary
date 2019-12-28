import { VisibleForTesting } from ".";

describe("TemplateWriter/container", () => {
  const { changeRowTypeInner } = VisibleForTesting;

  it("changeRowTypeInner returns 'SUBTITLE' when type is 'TITLE' and isUp is false", () => {
    expect(changeRowTypeInner("TITLE", false)).toEqual("SUBTITLE");
  });

  it("changeRowTypeInner returns 'CONTENT' when type is 'SUBTITLE' and isUp is false", () => {
    expect(changeRowTypeInner("SUBTITLE", false)).toEqual("CONTENT");
  });

  it("changeRowTypeInner returns 'CONTENT' when type is 'CONTENT' and isUp is false", () => {
    expect(changeRowTypeInner("CONTENT", false)).toEqual("CONTENT");
  });

  it("changeRowTypeInner returns 'TITLE' when type is 'TITLE' and isUp is true", () => {
    expect(changeRowTypeInner("TITLE", true)).toEqual("TITLE");
  });

  it("changeRowTypeInner returns 'TITLE when type is 'SUBTITLE' and isUp is true", () => {
    expect(changeRowTypeInner("SUBTITLE", true)).toEqual("TITLE");
  });

  it("changeRowTypeInner returns 'SUBTITLE' when type is 'CONTENT' and isUp is true", () => {
    expect(changeRowTypeInner("CONTENT", true)).toEqual("SUBTITLE");
  });
});
