import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

import Button from "../Button";

Modal.setAppElement("body");

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
        testId="sign-up-modal"
      />
    </>
  );
};

// TODO: Find a better way to create a space between the two buttons
const SignInUpButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 220px;
`;

export default UserAuthentication;
