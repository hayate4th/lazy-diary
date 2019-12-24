import { SignUpFormData } from "../../types/SignUpForm";
import { VisibleForTesting } from ".";

describe("SignUpForm/container", () => {
  const { checkIfFieldsAreEmpty } = VisibleForTesting;
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
});
