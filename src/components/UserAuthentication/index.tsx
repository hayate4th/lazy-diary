import React from "react";
import Button from "./Button";

export interface Props {
  isLoggedIn: boolean;
  loginButtonClickHandler: () => void;
  signOutButtonClickHandler: () => void;
}

const UserAuthentication: React.FC<Props> = ({
  isLoggedIn,
  loginButtonClickHandler,
  signOutButtonClickHandler
}) => {
  return (
    <>
      {!isLoggedIn && (
        <Button
          text="Login"
          onClickHandler={loginButtonClickHandler}
          data-testid="login-button"
        />
      )}
      {isLoggedIn && (
        <Button
          text="Sign Out"
          onClickHandler={signOutButtonClickHandler}
          data-testid="sign-out-button"
        />
      )}
    </>
  );
};

export default UserAuthentication;
