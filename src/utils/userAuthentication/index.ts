import { UserAuthenticationData } from "../../types/UserAuthentication";

export const checkIfFieldsAreEmpty = (fieldValues: UserAuthenticationData) => {
  const { email, password, confirmationPassword } = fieldValues;
  return (
    email.length === 0 ||
    password.length === 0 ||
    confirmationPassword?.length === 0
  );
};
