import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from ".";

describe("App", () => {
  it("Login button exists", () => {
    const { getByTestId } = render(<App />);
    const loginButton = getByTestId(/login-button/i);

    expect(loginButton).toBeTruthy();
  });

  it("Login button does not exist after click", () => {
    const { getByTestId, queryByTestId } = render(<App />);
    const loginButton = getByTestId(/login-button/i);

    fireEvent.click(loginButton);

    expect(queryByTestId(/login-button/i)).toBeNull();
  });

  it("Logged in text shows after click", () => {
    const { getByTestId } = render(<App />);
    const loginButton = getByTestId(/login-button/i);

    fireEvent.click(loginButton);

    expect(getByTestId(/logged-in-text/i)).toBeTruthy();
  });
});
