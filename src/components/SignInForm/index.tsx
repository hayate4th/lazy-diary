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
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
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
        name="email"
        text="Email Address"
        value={formValues.email}
        type="email"
        errorMessage={formErrors.email}
        dataTestId="sign-in-form-email-error"
        onChangeHandler={inputChangeHandler}
      />
      <FormRow
        name="password"
        text="Password"
        value={formValues.password}
        type="password"
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
