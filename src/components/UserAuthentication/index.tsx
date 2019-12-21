import React from "react";
import Modal from "react-modal";

import Button from "../Button";

Modal.setAppElement("#root");

export interface Props {
  isSignedIn: boolean;
  isSigningUp: boolean;
  signInButtonClickHandler: () => void;
  signOutButtonClickHandler: () => void;
  signUpButtonClickHandler: () => void;
}

const UserAuthentication: React.FC<Props> = ({
  isSignedIn,
  isSigningUp,
  signInButtonClickHandler,
  signOutButtonClickHandler,
  signUpButtonClickHandler
}) => {
  return (
    <>
      {!isSignedIn && (
        <>
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
        </>
      )}
      {isSignedIn && (
        <Button
          text="Sign Out"
          dataTestId="sign-out-button"
          onClickHandler={signOutButtonClickHandler}
        />
      )}
      <Modal isOpen={isSigningUp} />
    </>
  );
};

export default UserAuthentication;
