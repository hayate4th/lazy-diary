import React from "react";
import styled from "styled-components";
import { FormikErrors } from "formik";

import Button from "../Button";
import { UserAuthenticationData } from "../../types/UserAuthentication";
import FormRow from "../FormRow";

export interface Props {
  signInButtonIsDisabled: boolean;
  formValues: UserAuthenticationData;
  formErrors: FormikErrors<UserAuthenticationData>;
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  inputChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => void;
}

const SignInForm: React.FC<Props> = ({
  signInButtonIsDisabled,
  formValues,
  formErrors,
  handleSubmit,
  inputChangeHandler
}) => {
  return (
    <form onSubmit={handleSubmit} data-testid="sign-in-form">
      <FormRow
        fieldName="email"
        labelText="Email Address"
        inputValue={formValues.email}
        inputType="email"
        errorMessage={formErrors.email}
        dataTestId="sign-in-form-email-error"
        onChangeHandler={inputChangeHandler}
      />
      <FormRow
        fieldName="password"
        labelText="Password"
        inputValue={formValues.password}
        inputType="password"
        errorMessage={formErrors.password}
        dataTestId="sign-in-form-password-error"
        onChangeHandler={inputChangeHandler}
      />
      <ButtonWrapper>
        <Button
          text="Sign in"
          type="submit"
          disabled={signInButtonIsDisabled}
          dataTestId="sign-in-form-sign-in-button"
        />
      </ButtonWrapper>
    </form>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default SignInForm;
