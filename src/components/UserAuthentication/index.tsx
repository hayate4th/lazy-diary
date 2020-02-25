import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

import Button from "../Button";
import SignUpForm from "../../containers/SignUpForm";
import SignInForm from "../../containers/SignInForm";
import { AuthenticationState } from "../../types/UserAuthentication";
import colors from "../../utils/colors";

Modal.setAppElement("body");
const modalContentStyle = {
  content: {
    bottom: "auto",
    backgroundColor: colors.modalBackground,
    color: colors.modalText,
    fontSize: "1em",
    left: "50%",
    right: "auto",
    top: "50%",
    transform: "translate(-50%, -50%)"
  }
};

export interface Props {
  authenticationState: AuthenticationState;
  setAuthenticationState: React.Dispatch<
    React.SetStateAction<AuthenticationState>
  >;
}

const UserAuthentication: React.FC<Props> = ({
  authenticationState,
  setAuthenticationState
}) => {
  return (
    <>
      {authenticationState !== "SIGNED_IN" && (
        <SignInUpButtonWrapper>
          <Button
            text="Sign In"
            dataTestId="sign-in-button"
            onClickHandler={() => setAuthenticationState("SIGNING_IN")}
          />
          <Button
            text="Sign Up"
            dataTestId="sign-up-button"
            onClickHandler={() => setAuthenticationState("SIGNING_UP")}
          />
        </SignInUpButtonWrapper>
      )}
      {authenticationState === "SIGNED_IN" && (
        <Button
          text="Sign Out"
          dataTestId="sign-out-button"
          onClickHandler={() => setAuthenticationState("SIGNED_OUT")}
        />
      )}
      <Modal
        isOpen={authenticationState === "SIGNING_IN"}
        onRequestClose={() => setAuthenticationState("SIGNED_OUT")}
        contentLabel="sign in via email and password"
        style={modalContentStyle}
        testId="sign-in-modal"
      >
        <SignInForm setAuthenticationState={setAuthenticationState} />
      </Modal>
      <Modal
        isOpen={
          authenticationState === "SIGNING_UP" ||
          authenticationState === "SIGNED_UP"
        }
        onRequestClose={() => setAuthenticationState("SIGNED_OUT")}
        contentLabel="sign up via email and password"
        style={modalContentStyle}
        testId="sign-up-modal"
      >
        {authenticationState === "SIGNED_UP" && (
          <VerifyWrapper data-testid="verify-email">
            <VerifyTitle>Please verify your email address</VerifyTitle>
            <VerifyInstruction>
              An email containing a verification link was sent.
            </VerifyInstruction>
          </VerifyWrapper>
        )}
        {authenticationState === "SIGNING_UP" && (
          <SignUpForm setAuthenticationState={setAuthenticationState} />
        )}
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

const VerifyWrapper = styled.div`
  text-align: center;
`;

const VerifyTitle = styled.div`
  font-size: 2em;
  font-weight: bold;
`;

const VerifyInstruction = styled.span`
  font-size: 1.5em;
`;

export default UserAuthentication;
