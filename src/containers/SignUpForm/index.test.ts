import { UserAuthenticationData } from "../../types/UserAuthentication";
import { VisibleForTesting } from ".";

describe("SignUpForm/container", () => {
  const { checkIfPasswordsAreSame } = VisibleForTesting;
  const baseData: UserAuthenticationData = {
    email: "",
    password: "",
    confirmationPassword: ""
  };

  it("checkIfPasswordsAreSame returns false when passwords are not the same", () => {
    expect(checkIfPasswordsAreSame("TEST1", "TEST2")).toBeFalsy();
  });

  it("checkIfPasswordsAreSame returns false when either passwords are empty strings", () => {
    expect(checkIfPasswordsAreSame("TEST", "")).toBeFalsy();
    expect(checkIfPasswordsAreSame("", "TEST")).toBeFalsy();
    expect(checkIfPasswordsAreSame("", "")).toBeFalsy();
  });

  it("checkIfPasswordsAreSame returns true when passwords are same", () => {
    expect(checkIfPasswordsAreSame("TEST", "TEST")).toBeTruthy();
  });
});
