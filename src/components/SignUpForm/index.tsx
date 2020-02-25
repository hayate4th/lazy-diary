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
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
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
        fieldName="email"
        labelText="Email Address"
        inputValue={formValues.email}
        inputType="email"
        errorMessage={formErrors.email}
        dataTestId="sign-up-form-email-error"
        onChangeHandler={inputChangeHandler}
      />
      <FormRow
        fieldName="password"
        labelText="Password"
        inputValue={formValues.password}
        inputType="password"
        errorMessage={formErrors.password}
        dataTestId="sign-up-form-password-error"
        onChangeHandler={inputChangeHandler}
      />
      <FormRow
        fieldName="confirmationPassword"
        labelText="Confirm Password"
        inputValue={formValues.confirmationPassword!}
        inputType="password"
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
