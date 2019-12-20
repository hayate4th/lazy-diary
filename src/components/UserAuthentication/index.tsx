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
          <div data-testid="logged-in-text">Logged in</div>
        </>
      )}
    </>
  );
};

export default UserAuthentication;
