import React from "react";
import { render } from "@testing-library/react";
import { DraggableProvided } from "react-beautiful-dnd";

import TemplateRow, { Props } from ".";
import { asA } from "../../utils/jest";

describe("TemplateRow", () => {
  const baseProps: Props = {
    fieldName: "",
    type: "TITLE",
    inputValue: "",
    isDragDisabled: true,
    draggableProvided: asA<DraggableProvided>({}),
    onKeyDownHandler: jest.fn(),
    onChangeHandler: jest.fn(),
    setFocusedRowName: jest.fn()
  };

  it("Input exists and Textarea does not exist when type is 'TITLE'", () => {
    const props: Props = {
      ...baseProps,
      type: "TITLE"
    };

    const { getByTestId, queryByTestId } = render(<TemplateRow {...props} />);

    expect(getByTestId(/template-row-input/i)).toBeTruthy();
    expect(queryByTestId(/template-row-textarea/i)).toBeNull();
  });

  it("Input exists and Textarea does not exist when type is 'SUBTITLE'", () => {
    const props: Props = {
      ...baseProps,
      type: "SUBTITLE"
    };

    const { getByTestId, queryByTestId } = render(<TemplateRow {...props} />);

    expect(getByTestId(/template-row-input/i)).toBeTruthy();
    expect(queryByTestId(/template-row-textarea/i)).toBeNull();
  });

  it("Textarea exists and Input does not exist when type is 'CONTENT'", () => {
    const props: Props = {
      ...baseProps,
      type: "CONTENT"
    };

    const { getByTestId, queryByTestId } = render(<TemplateRow {...props} />);

    expect(getByTestId(/template-row-textarea/i)).toBeTruthy();
    expect(queryByTestId(/template-row-input/i)).toBeNull();
  });
});
