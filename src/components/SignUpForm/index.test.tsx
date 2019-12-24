import React from "react";
import { render } from "@testing-library/react";

import SignUpForm, { Props } from ".";

describe("SignUpForm/component", () => {
  const baseProps: Props = {
    submitButtonIsDisabled: false,
    formValues: {
      email: "",
      password: "",
      confirmationPassword: ""
    },
    formErrors: {},
    handleSubmit: jest.fn(),
    inputChangeHandler: jest.fn()
  };

  it("ErrorMessage exists when formErrors.confirmationPassword is not undefined", () => {
    const props: Props = {
      ...baseProps,
      formErrors: {
        ...baseProps.formErrors,
        confirmationPassword: "TEST"
      }
    };

    const { getByTestId } = render(<SignUpForm {...props} />);

    expect(getByTestId(/confirmation-password-error/i)).toBeTruthy();
  });
});
