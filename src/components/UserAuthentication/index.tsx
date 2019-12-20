import React from "react";

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
        <button onClick={loginButtonClickHandler} data-testid="login-button">
          Login
        </button>
      )}
      {isLoggedIn && (
        <>
          <button
            onClick={signOutButtonClickHandler}
            data-testid="sign-out-button"
          >
            Sign Out
          </button>
        </>
      )}
    </>
  );
};

export default UserAuthentication;
