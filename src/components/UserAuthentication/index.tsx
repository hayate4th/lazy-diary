import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

import Button from "../Button";
import SignUpForm from "../../containers/SignUpForm";

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
  hasSignedUp: boolean;
  signInButtonClickHandler: () => void;
  signOutButtonClickHandler: () => void;
  signUpButtonClickHandler: () => void;
  modalBackgroundClickHandler: () => void;
  setHasSignedUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserAuthentication: React.FC<Props> = ({
  isSignedIn,
  isSigningUp,
  hasSignedUp,
  signInButtonClickHandler,
  signOutButtonClickHandler,
  signUpButtonClickHandler,
  modalBackgroundClickHandler,
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
        isOpen={isSigningUp}
        onRequestClose={modalBackgroundClickHandler}
        contentLabel="sign up via email and password"
        style={modalContentStyle}
        testId="sign-up-modal"
      >
        {hasSignedUp && (
          <VerifyWrapper>
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
