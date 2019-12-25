import React from "react";
import styled from "styled-components";
import { FormikErrors } from "formik";

import Button from "../Button";
import { UserAuthenticationData } from "../../types/UserAuthentication";
import FormRow from "../FormRow";

export interface Props {
  submitButtonIsDisabled: boolean;
  formValues: UserAuthenticationData;
  formErrors: FormikErrors<UserAuthenticationData>;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  inputChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => void;
}

const SignUpForm: React.FC<Props> = ({
  submitButtonIsDisabled,
  formValues,
  formErrors,
  handleSubmit,
  inputChangeHandler
}) => {
  return (
    <form onSubmit={handleSubmit} data-testid="sign-up-form">
      <FormRow
        name="email"
        text="Email Address"
        value={formValues.email}
        type="email"
        errorMessage={formErrors.email}
        dataTestId="sign-up-form-email-error"
        onChangeHandler={inputChangeHandler}
      />
      <FormRow
        name="password"
        text="Password"
        value={formValues.password}
        type="password"
        errorMessage={formErrors.password}
        dataTestId="sign-up-form-password-error"
        onChangeHandler={inputChangeHandler}
      />
      <FormRow
        name="confirmationPassword"
        text="Confirm Password"
        value={formValues.confirmationPassword!}
        type="password"
        errorMessage={formErrors.confirmationPassword}
        dataTestId="sign-up-form-confirmation-password-error"
        onChangeHandler={inputChangeHandler}
      />
      <ButtonWrapper>
        <Button
          text="Submit"
          type="submit"
          disabled={submitButtonIsDisabled}
          dataTestId="sign-up-form-submit-button"
        />
      </ButtonWrapper>
    </form>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default SignUpForm;
