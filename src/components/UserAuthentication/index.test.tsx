import React from "react";
import { render } from "@testing-library/react";

import UserAuthentication, { Props } from ".";

describe("UserAuthentication", () => {
  const baseProps: Props = {
    isSignedIn: false,
    isSigningUp: false,
    hasSignedUp: false,
    signInButtonClickHandler: jest.fn(),
    signOutButtonClickHandler: jest.fn(),
    signUpButtonClickHandler: jest.fn(),
    modalBackgroundClickHandler: jest.fn(),
    setHasSignedUp: jest.fn()
  };

  it("Sign in/up button exist and sign out button does not exist when isSignedIn is false", () => {
    const props: Props = {
      ...baseProps,
      isSignedIn: false
    };

    const { getByTestId, queryByTestId } = render(
      <UserAuthentication {...props} />
    );

    expect(getByTestId(/sign-in-button/i)).toBeTruthy();
    expect(getByTestId(/sign-up-button/i)).toBeTruthy();
    expect(queryByTestId(/sign-out-button/i)).toBeNull();
  });

  it("Sign out button exists and sign in/up button does not exist when isSignedIn is true", () => {
    const props: Props = {
      ...baseProps,
      isSignedIn: true
    };

    const { getByTestId, queryByTestId } = render(
      <UserAuthentication {...props} />
    );

    expect(getByTestId(/sign-out-button/i)).toBeTruthy();
    expect(queryByTestId(/sign-in-button/i)).toBeNull();
    expect(queryByTestId(/sign-up-button/i)).toBeNull();
  });

  describe("Sign up modal", () => {
    it("Sign up modal does not exist when isSigningUp is false", () => {
      const props: Props = {
        ...baseProps,
        isSigningUp: false
      };

      const { queryByTestId } = render(<UserAuthentication {...props} />);

      expect(queryByTestId(/sign-up-modal/i)).toBeNull();
    });

    it("Sign up modal exists when isSigningUp is true", () => {
      const props: Props = {
        ...baseProps,
        isSigningUp: true
      };

      const { getByTestId } = render(<UserAuthentication {...props} />);

      expect(getByTestId(/sign-up-modal/i)).toBeTruthy();
    });

    it("SignUpForm exists and Verify email text does not when hasSignedUp is false", () => {
      const props: Props = {
        ...baseProps,
        isSigningUp: true,
        hasSignedUp: false
      };

      const { getByTestId, queryByTestId } = render(
        <UserAuthentication {...props} />
      );

      expect(getByTestId(/sign-up-form/i)).toBeTruthy();
      expect(queryByTestId(/verify-email/i)).toBeNull();
    });

    it("SignUpForm does not exist and Verify email text does when hasSignedUp is true", () => {
      const props: Props = {
        ...baseProps,
        isSigningUp: true,
        hasSignedUp: true
      };

      const { getByTestId, queryByTestId } = render(
        <UserAuthentication {...props} />
      );

      expect(getByTestId(/verify-email/i)).toBeTruthy();
      expect(queryByTestId(/sign-up-form/i)).toBeNull();
    });
  });
});
