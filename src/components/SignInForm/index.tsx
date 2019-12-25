import React from "react";
import styled from "styled-components";
import { FormikErrors } from "formik";

import Button from "../Button";
import { UserAuthenticationFormData } from "../../types/UserAuthenticationForm";

export interface Props {
  signInButtonIsDisabled: boolean;
  formValues: UserAuthenticationFormData;
  formErrors: FormikErrors<UserAuthenticationFormData>;
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
      <Row>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={event => inputChangeHandler(event, "email")}
          value={formValues.email}
        />
        {formErrors.email && (
          <ErrorMessage data-testid="sign-in-form-email-error">
            {formErrors.email}
          </ErrorMessage>
        )}
      </Row>
      <Row>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          onChange={event => inputChangeHandler(event, "password")}
          value={formValues.password}
        />
        {formErrors.password && (
          <ErrorMessage data-testid="sign-in-form-password-error">
            {formErrors.password}
          </ErrorMessage>
        )}
      </Row>
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

// TODO: Find a better way to create a space between the rows
const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 300px;
`;

const Label = styled.label`
  font-size: 1.5em;
`;

const Input = styled.input`
  font-size: 1.25em;
  padding: 10px 5px;
`;

const ErrorMessage = styled.div`
  color: #f2426c;
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default SignInForm;
