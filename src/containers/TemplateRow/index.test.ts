import { VisibleForTesting } from ".";

describe("SignUpForm/container", () => {
  const { typeToText } = VisibleForTesting;

  it("typeToText returns 'Title' when type is 'TITLE'", () => {
    expect(typeToText("TITLE")).toEqual("Title");
  });

  it("typeToText returns 'Subtitle' when type is 'SUBTITLE'", () => {
    expect(typeToText("SUBTITLE")).toEqual("Subtitle");
  });

  it("typeToText returns 'Content' when type is 'CONTENT'", () => {
    expect(typeToText("CONTENT")).toEqual("Content");
  });
});
