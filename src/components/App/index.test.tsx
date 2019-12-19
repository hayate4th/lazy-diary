import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from ".";

describe("App", () => {
  it("Login button exists", () => {
    const { getByTestId } = render(<App />);
    const loginButton = getByTestId(/login-button/i);

    expect(loginButton).toBeTruthy();
  });

  it("Login button does not exist after login button is clicked", () => {
    const { getByTestId, queryByTestId } = render(<App />);
    const loginButton = getByTestId(/login-button/i);

    fireEvent.click(loginButton);

    expect(queryByTestId(/login-button/i)).toBeNull();
  });

  it("Sign out button and Logged in text shows after login button is clicked", () => {
    const { getByTestId } = render(<App />);
    const loginButton = getByTestId(/login-button/i);

    fireEvent.click(loginButton);

    expect(getByTestId(/sign-out-button/i)).toBeTruthy();
    expect(getByTestId(/logged-in-text/i)).toBeTruthy();
  });

  // TODO: Find a better way to run this test
  it("Sign out button and Logged in text does not exist after sign out button is clicked", () => {
    const { getByTestId, queryByTestId } = render(<App />);
    const loginButton = getByTestId(/login-button/i);
    fireEvent.click(loginButton);

    const signOutButton = getByTestId(/sign-out-button/i);
    fireEvent.click(signOutButton);

    expect(queryByTestId(/sign-out-button/i)).toBeNull();
    expect(queryByTestId(/logged-in-text/i)).toBeNull();
  });

  // TODO: Find a better way to run this test
  it("Login button shows after sign out button is clicked", () => {
    const { getByTestId } = render(<App />);
    const loginButton = getByTestId(/login-button/i);
    fireEvent.click(loginButton);

    const signOutButton = getByTestId(/sign-out-button/i);
    fireEvent.click(signOutButton);

    expect(getByTestId(/login-button/i)).toBeTruthy();
  });
});
