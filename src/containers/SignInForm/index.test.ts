import { UserAuthenticationData } from "../../types/UserAuthentication";
import { VisibleForTesting } from ".";

describe("SignUpForm/container", () => {
  const { checkIfFieldsAreEmpty } = VisibleForTesting;
  const baseData: UserAuthenticationData = {
    email: "",
    password: ""
  };

  it("checkIfFieldsAreEmpty returns true when one or more fields are empty", () => {
    expect(checkIfFieldsAreEmpty(baseData)).toBeTruthy();
    expect(checkIfFieldsAreEmpty({ ...baseData, email: "TEST" })).toBeTruthy();
    expect(
      checkIfFieldsAreEmpty({ ...baseData, password: "TEST" })
    ).toBeTruthy();
  });

  it("checkIfFieldsAreEmpty returns false when all fields are not empty", () => {
    expect(
      checkIfFieldsAreEmpty({
        ...baseData,
        email: "TEST",
        password: "TEST"
      })
    ).toBeFalsy();
  });
});
