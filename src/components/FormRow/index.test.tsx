import React from "react";
import { render } from "@testing-library/react";

import FormRow, { Props } from ".";

describe("FormRow", () => {
  const baseProps: Props = {
    fieldName: "",
    labelText: "",
    inputValue: "",
    onChangeHandler: jest.fn()
  };

  it("ErrorMessage exists when errorMessage is not undefined", () => {
    const props: Props = {
      ...baseProps,
      dataTestId: "error-message",
      errorMessage: "TEST"
    };

    const { getByTestId } = render(<FormRow {...props} />);

    expect(getByTestId(props.dataTestId!)).toBeTruthy();
  });
});
