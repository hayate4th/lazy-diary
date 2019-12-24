import { getFieldNameAndMessageFromError } from ".";
import { FirebaseError } from "firebase";

describe("firebaseAuth", () => {
  const baseError: FirebaseError = {
    code: "",
    message: "",
    name: ""
  };

  it("getFieldNameAndMessageFromError returns 'email' when error.code is related to email", () => {
    const error = {
      ...baseError,
      code: "auth/invalid-email",
      message: "TEST"
    };
    const [fieldName, errorMessage] = getFieldNameAndMessageFromError(error);
    expect(fieldName).toEqual("email");
    expect(errorMessage).toEqual("TEST");
  });

  it("getFieldNameAndMessageFromError returns 'password' when error.code is related to password", () => {
    const error = {
      ...baseError,
      code: "auth/weak-password",
      message: "TEST"
    };
    const [fieldName, errorMessage] = getFieldNameAndMessageFromError(error);
    expect(fieldName).toEqual("password");
    expect(errorMessage).toEqual("TEST");
  });
});
