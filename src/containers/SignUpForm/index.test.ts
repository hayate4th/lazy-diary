import { SignUpFormData } from "../../types/SignUpForm";
import { VisibleForTesting } from ".";

describe("SignUpForm/container", () => {
  const { checkIfFieldsAreEmpty, checkIfPasswordsAreSame } = VisibleForTesting;
  const baseData: SignUpFormData = {
    email: "",
    password: "",
    confirmationPassword: ""
  };

  it("checkIfFieldsAreEmpty returns true when one or more fields are empty", () => {
    expect(checkIfFieldsAreEmpty(baseData)).toBeTruthy();
    expect(checkIfFieldsAreEmpty({ ...baseData, email: "TEST" })).toBeTruthy();
    expect(
      checkIfFieldsAreEmpty({ ...baseData, password: "TEST" })
    ).toBeTruthy();
    expect(
      checkIfFieldsAreEmpty({ ...baseData, confirmationPassword: "TEST" })
    ).toBeTruthy();
  });

  it("checkIfFieldsAreEmpty returns false when all fields are not empty", () => {
    expect(
      checkIfFieldsAreEmpty({
        ...baseData,
        email: "TEST",
        password: "TEST",
        confirmationPassword: "TEST"
      })
    ).toBeFalsy();
  });

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
