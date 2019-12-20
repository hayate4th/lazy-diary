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
          dataTestId="login-button"
          onClickHandler={loginButtonClickHandler}
        />
      )}
      {isLoggedIn && (
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
