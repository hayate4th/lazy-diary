import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { useFormik } from "formik";

import Button from "../Button";

Modal.setAppElement("body");
const modalContentStyle = {
  content: {
    bottom: "auto",
    backgroundColor: "#f7f6f6",
    color: "#434344",
    fontSize: "1em",
    left: "50%",
    right: "auto",
    top: "50%",
    transform: "translate(-50%, -50%)"
  }
};

export interface Props {
  isSignedIn: boolean;
  isSigningUp: boolean;
  signInButtonClickHandler: () => void;
  signOutButtonClickHandler: () => void;
  signUpButtonClickHandler: () => void;
  modalBackgroundClickHandler: () => void;
}

const UserAuthentication: React.FC<Props> = ({
  isSignedIn,
  isSigningUp,
  signInButtonClickHandler,
  signOutButtonClickHandler,
  signUpButtonClickHandler,
  modalBackgroundClickHandler
}) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmationPassword: ""
    },
    onSubmit: values => {
      console.log(values);
    }
  });
  return (
    <>
      {!isSignedIn && (
        <SignInUpButtonWrapper>
          <Button
            text="Sign In"
            dataTestId="sign-in-button"
            onClickHandler={signInButtonClickHandler}
          />
          <Button
            text="Sign Up"
            dataTestId="sign-up-button"
            onClickHandler={signUpButtonClickHandler}
          />
        </SignInUpButtonWrapper>
      )}
      {isSignedIn && (
        <Button
          text="Sign Out"
          dataTestId="sign-out-button"
          onClickHandler={signOutButtonClickHandler}
        />
      )}
      <Modal
        isOpen={isSigningUp}
        onRequestClose={modalBackgroundClickHandler}
        contentLabel="sign up via email and password"
        style={modalContentStyle}
        testId="sign-up-modal"
      >
        <form onSubmit={formik.handleSubmit}>
          <FormRow>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <FormInput
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </FormRow>
          <FormRow>
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </FormRow>
          <FormRow>
            <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
            <FormInput
              id="confirmationPassword"
              name="confirmationPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.confirmationPassword}
            />
          </FormRow>
          <FormButtonWrapper>
            <Button text="Sign Up" type="submit" dataTestId="submit-button" />
          </FormButtonWrapper>
        </form>
      </Modal>
    </>
  );
};

// TODO: Find a better way to create a space between the two buttons
const SignInUpButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 220px;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 300px;
`;

const FormLabel = styled.label`
  font-size: 1.5em;
`;

const FormInput = styled.input`
  font-size: 1.25em;
  padding: 10px 5px;
`;

const FormButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default UserAuthentication;
