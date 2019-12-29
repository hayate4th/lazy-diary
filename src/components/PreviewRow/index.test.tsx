import React from "react";
import { render } from "@testing-library/react";

import PreviewRow, { Props } from ".";

describe("PreviewRow", () => {
  const baseProps: Props = {
    name: "",
    text: "",
    type: "TITLE"
  };

  it("br exists and Title does not when type is 'TITLE' and text is empty", () => {
    const props: Props = {
      ...baseProps,
      text: "",
      type: "TITLE"
    };

    const { getByTestId, queryByTestId } = render(<PreviewRow {...props} />);

    expect(getByTestId(/title-br/i)).toBeTruthy();
    expect(queryByTestId(/title-div/i)).toBeNull();
  });

  it("br exists and Title does not when type is 'SUBTITLE' and text is empty", () => {
    const props: Props = {
      ...baseProps,
      text: "",
      type: "SUBTITLE"
    };

    const { getByTestId, queryByTestId } = render(<PreviewRow {...props} />);

    expect(getByTestId(/title-br/i)).toBeTruthy();
    expect(queryByTestId(/title-div/i)).toBeNull();
  });

  it("Title exists and br does not when type is 'TITLE' and text is not empty", () => {
    const props: Props = {
      ...baseProps,
      text: "TEST",
      type: "TITLE"
    };

    const { getByTestId, queryByTestId } = render(<PreviewRow {...props} />);

    expect(getByTestId(/title-div/i)).toBeTruthy();
    expect(queryByTestId(/title-br/i)).toBeNull();
  });

  it("Title exists and br does not when type is 'SUBTITLE' and text is not empty", () => {
    const props: Props = {
      ...baseProps,
      text: "TEST",
      type: "SUBTITLE"
    };

    const { getByTestId, queryByTestId } = render(<PreviewRow {...props} />);

    expect(getByTestId(/title-div/i)).toBeTruthy();
    expect(queryByTestId(/title-br/i)).toBeNull();
  });

  describe("ContentRow", () => {
    it("br exists and ContentRow does not when type is 'CONTENT' and text is empty", () => {
      const props: Props = {
        ...baseProps,
        text: "",
        type: "CONTENT"
      };

      const { getByTestId, queryByTestId } = render(<PreviewRow {...props} />);

      expect(getByTestId(/content-row-br/i)).toBeTruthy();
      expect(queryByTestId(/content-row-div/i)).toBeNull();
    });

    it("ContentRow exists and br does not when type is 'CONTENT' and text is not empty", () => {
      const props: Props = {
        ...baseProps,
        text: "TEST",
        type: "CONTENT"
      };

      const { getByTestId, queryByTestId } = render(<PreviewRow {...props} />);

      expect(getByTestId(/content-row-div/i)).toBeTruthy();
      expect(queryByTestId(/content-row-br/i)).toBeNull();
    });

    it("2 ContentRows and 1 br exist when type is 'CONTENT' and text has 2 consecutive breaks between texts", () => {
      const props: Props = {
        ...baseProps,
        text: "TEST\n\nTEST",
        type: "CONTENT"
      };

      const { getAllByTestId } = render(<PreviewRow {...props} />);

      expect(getAllByTestId(/content-row-div/i)).toHaveLength(2);
      expect(getAllByTestId(/content-row-br/i)).toHaveLength(1);
    });
  });
});
