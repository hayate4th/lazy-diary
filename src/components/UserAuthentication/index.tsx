import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

import Button from "../Button";
import SignUpForm from "../../containers/SignUpForm";
import SignInForm from "../../containers/SignInForm";

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
  isSigningIn: boolean;
  isSigningUp: boolean;
  hasSignedUp: boolean;
  signInButtonClickHandler: () => void;
  signOutButtonClickHandler: () => void;
  signUpButtonClickHandler: () => void;
  signInModalBackgroundClickHandler: () => void;
  signUpModalBackgroundClickHandler: () => void;
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSigningIn: React.Dispatch<React.SetStateAction<boolean>>;
  setHasSignedUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserAuthentication: React.FC<Props> = ({
  isSignedIn,
  isSigningIn,
  isSigningUp,
  hasSignedUp,
  signInButtonClickHandler,
  signOutButtonClickHandler,
  signUpButtonClickHandler,
  signInModalBackgroundClickHandler,
  signUpModalBackgroundClickHandler,
  setIsSignedIn,
  setIsSigningIn,
  setHasSignedUp
}) => {
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
        isOpen={isSigningIn}
        onRequestClose={signInModalBackgroundClickHandler}
        contentLabel="sign in via email and password"
        style={modalContentStyle}
        testId="sign-in-modal"
      >
        <SignInForm
          setIsSignedIn={setIsSignedIn}
          setIsSigningIn={setIsSigningIn}
        />
      </Modal>
      <Modal
        isOpen={isSigningUp}
        onRequestClose={signUpModalBackgroundClickHandler}
        contentLabel="sign up via email and password"
        style={modalContentStyle}
        testId="sign-up-modal"
      >
        {hasSignedUp && (
          <VerifyWrapper data-testid="verify-email">
            <VerifyTitle>Please verify your email address</VerifyTitle>
            <VerifyInstruction>
              An email containing a verification link was sent.
            </VerifyInstruction>
          </VerifyWrapper>
        )}
        {!hasSignedUp && <SignUpForm setHasSignedUp={setHasSignedUp} />}
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
