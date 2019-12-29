import { typeToText } from ".";

describe("templateRow", () => {
  it("typeToText returns 'Title' when type is 'TITLE'", () => {
    expect(typeToText("TITLE")).toEqual("Title");
  });
});
