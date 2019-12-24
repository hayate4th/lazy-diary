import React from "react";
import styled from "styled-components";
import { FormikErrors } from "formik";

import Button from "../Button";
import { SignUpFormData } from "../../types/SignUpForm";

export interface Props {
  submitButtonIsDisabled: boolean;
  formValues: SignUpFormData;
  formErrors: FormikErrors<SignUpFormData>;
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
    <form onSubmit={handleSubmit}>
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
          <ErrorMessage data-testid="email-error">
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
          <ErrorMessage data-testid="password-error">
            {formErrors.password}
          </ErrorMessage>
        )}
      </Row>
      <Row>
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmationPassword"
          name="confirmationPassword"
          type="password"
          onChange={event => inputChangeHandler(event, "confirmationPassword")}
          value={formValues.confirmationPassword}
        />
        {formErrors.confirmationPassword && (
          <ErrorMessage data-testid="confirmation-password-error">
            {formErrors.confirmationPassword}
          </ErrorMessage>
        )}
      </Row>
      <ButtonWrapper>
        <Button
          text="Submit"
          type="submit"
          disabled={submitButtonIsDisabled}
          dataTestId="submit-button"
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

export default SignUpForm;
