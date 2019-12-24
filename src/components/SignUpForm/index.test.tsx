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

  it("ErrorMessage for email exists when formErrors.email is not undefined", () => {
    const props: Props = {
      ...baseProps,
      formErrors: {
        ...baseProps.formErrors,
        email: "TEST"
      }
    };

    const { getByTestId } = render(<SignUpForm {...props} />);

    expect(getByTestId(/sign-up-form-email-error/i)).toBeTruthy();
  });

  it("ErrorMessage for password exists when formErrors.password is not undefined", () => {
    const props: Props = {
      ...baseProps,
      formErrors: {
        ...baseProps.formErrors,
        password: "TEST"
      }
    };

    const { getByTestId } = render(<SignUpForm {...props} />);

    expect(getByTestId(/sign-up-form-password-error/i)).toBeTruthy();
  });

  it("ErrorMessage for confirmationPassword exists when formErrors.confirmationPassword is not undefined", () => {
    const props: Props = {
      ...baseProps,
      formErrors: {
        ...baseProps.formErrors,
        confirmationPassword: "TEST"
      }
    };

    const { getByTestId } = render(<SignUpForm {...props} />);

    expect(
      getByTestId(/sign-up-form-confirmation-password-error/i)
    ).toBeTruthy();
  });
});
