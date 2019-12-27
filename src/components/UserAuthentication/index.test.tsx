import React from "react";
import { render } from "@testing-library/react";

import UserAuthentication, { Props } from ".";

describe("UserAuthentication", () => {
  const baseProps: Props = {
    authenticationState: "SIGNED_OUT",
    signInButtonClickHandler: jest.fn(),
    signOutButtonClickHandler: jest.fn(),
    signUpButtonClickHandler: jest.fn(),
    signInModalBackgroundClickHandler: jest.fn(),
    signUpModalBackgroundClickHandler: jest.fn(),
    setAuthenticationState: jest.fn()
  };

  it("Sign in/up button exist and sign out button does not exist when authenticationState is 'SIGNED_OUT'", () => {
    const props: Props = {
      ...baseProps,
      authenticationState: "SIGNED_OUT"
    };

    const { getByTestId, queryByTestId } = render(
      <UserAuthentication {...props} />
    );

    expect(getByTestId(/sign-in-button/i)).toBeTruthy();
    expect(getByTestId(/sign-up-button/i)).toBeTruthy();
    expect(queryByTestId(/sign-out-button/i)).toBeNull();
  });

  it("Sign out button exists and sign in/up button does not exist when authenticationState is 'SIGNED_IN'", () => {
    const props: Props = {
      ...baseProps,
      authenticationState: "SIGNED_IN"
    };

    const { getByTestId, queryByTestId } = render(
      <UserAuthentication {...props} />
    );

    expect(getByTestId(/sign-out-button/i)).toBeTruthy();
    expect(queryByTestId(/sign-in-button/i)).toBeNull();
    expect(queryByTestId(/sign-up-button/i)).toBeNull();
  });

  describe("Sign in modal", () => {
    it("Sign in modal does not exist when authenticationState is 'SIGNED_OUT'", () => {
      const props: Props = {
        ...baseProps,
        authenticationState: "SIGNED_OUT"
      };

      const { queryByTestId } = render(<UserAuthentication {...props} />);

      expect(queryByTestId(/sign-in-modal/i)).toBeNull();
    });

    it("Sign in modal exists when authenticationState is 'SIGNING_IN'", () => {
      const props: Props = {
        ...baseProps,
        authenticationState: "SIGNING_IN"
      };

      const { getByTestId } = render(<UserAuthentication {...props} />);

      expect(getByTestId(/sign-in-modal/i)).toBeTruthy();
    });
  });

  describe("Sign up modal", () => {
    it("Sign up modal does not exist when authenticationState is 'SIGNED_OUT'", () => {
      const props: Props = {
        ...baseProps,
        authenticationState: "SIGNED_OUT"
      };

      const { queryByTestId } = render(<UserAuthentication {...props} />);

      expect(queryByTestId(/sign-up-modal/i)).toBeNull();
    });

    it("Sign up modal exists when authenticationState is 'SIGNING_UP' or 'SIGNED_UP", () => {
      const props: Props = {
        ...baseProps,
        authenticationState: "SIGNING_UP"
      };

      const { getByTestId } = render(<UserAuthentication {...props} />);

      expect(getByTestId(/sign-up-modal/i)).toBeTruthy();
    });

    it("Sign up form exists and verify email text does not when authenticationState is 'SIGNING_UP'", () => {
      const props: Props = {
        ...baseProps,
        authenticationState: "SIGNING_UP"
      };

      const { getByTestId, queryByTestId } = render(
        <UserAuthentication {...props} />
      );

      expect(getByTestId("sign-up-form")).toBeTruthy();
      expect(queryByTestId(/verify-email/i)).toBeNull();
    });

    it("Sign up form does not exist and verify email text does when authenticationState is 'SIGNED_UP'", () => {
      const props: Props = {
        ...baseProps,
        authenticationState: "SIGNED_UP"
      };

      const { getByTestId, queryByTestId } = render(
        <UserAuthentication {...props} />
      );

      expect(getByTestId(/verify-email/i)).toBeTruthy();
      expect(queryByTestId("sign-up-form")).toBeNull();
    });
  });
});
