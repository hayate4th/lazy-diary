import React from "react";
import { render } from "@testing-library/react";

import SignInForm, { Props } from ".";

describe("SignInForm/component", () => {
  const baseProps: Props = {
    signInButtonIsDisabled: false,
    formValues: {
      email: "",
      password: ""
    },
    formErrors: {},
    handleSubmit: jest.fn(),
    inputChangeHandler: jest.fn()
  };

  it("ErrorMessage for email exists when formErrors.email is not undefined", () => {
    const props: Props = {
      ...baseProps,
      formErrors: {
        ...baseProps.formErrors,
        email: "TEST"
      }
    };

    const { getByTestId } = render(<SignInForm {...props} />);

    expect(getByTestId(/sign-in-form-email-error/i)).toBeTruthy();
  });

  it("ErrorMessage for password exists when formErrors.password is not undefined", () => {
    const props: Props = {
      ...baseProps,
      formErrors: {
        ...baseProps.formErrors,
        password: "TEST"
      }
    };

    const { getByTestId } = render(<SignInForm {...props} />);

    expect(getByTestId(/sign-in-form-password-error/i)).toBeTruthy();
  });
});
