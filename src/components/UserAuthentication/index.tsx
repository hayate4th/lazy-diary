import React from "react";
import Button from "./Button";

export interface Props {
  isSignedIn: boolean;
  signInButtonClickHandler: () => void;
  signOutButtonClickHandler: () => void;
}

const UserAuthentication: React.FC<Props> = ({
  isSignedIn,
  signInButtonClickHandler,
  signOutButtonClickHandler
}) => {
  return (
    <>
      {!isSignedIn && (
        <Button
          text="Sign In"
          dataTestId="sign-in-button"
          onClickHandler={signInButtonClickHandler}
        />
      )}
      {isSignedIn && (
        <Button
          text="Sign Out"
          dataTestId="sign-out-button"
          onClickHandler={signOutButtonClickHandler}
        />
      )}
    </>
  );
};

export default UserAuthentication;
