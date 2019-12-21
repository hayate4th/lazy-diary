import React from "react";
import { render } from "@testing-library/react";

import UserAuthentication, { Props } from ".";

describe("App", () => {
  const baseProps: Props = {
    isSignedIn: false,
    signInButtonClickHandler: jest.fn(),
    signOutButtonClickHandler: jest.fn(),
    signUpButtonClickHandler: jest.fn()
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
});
