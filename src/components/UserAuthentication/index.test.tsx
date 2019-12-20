import React from "react";
import { render } from "@testing-library/react";

import UserAuthentication, { Props } from ".";

describe("App", () => {
  const baseProps: Props = {
    isLoggedIn: false,
    loginButtonClickHandler: jest.fn(),
    signOutButtonClickHandler: jest.fn()
  };

  it("Login button exist and sign out button does not exist when isLoggedIn is false", () => {
    const props: Props = {
      ...baseProps,
      isLoggedIn: false
    };

    const { getByTestId, queryByTestId } = render(
      <UserAuthentication {...props} />
    );

    expect(getByTestId(/login-button/i)).toBeTruthy();
    expect(queryByTestId(/sign-out-button/i)).toBeNull();
  });

  it("Sign out button exists and login button does not exist when isLoggedIn is true", () => {
    const props: Props = {
      ...baseProps,
      isLoggedIn: true
    };

    const { getByTestId, queryByTestId } = render(
      <UserAuthentication {...props} />
    );

    expect(getByTestId(/sign-out-button/i)).toBeTruthy();
    expect(queryByTestId(/login-button/i)).toBeNull();
  });
});
