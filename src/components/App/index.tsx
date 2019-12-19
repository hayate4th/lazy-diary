import React, { useState } from "react";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginButtonClickHandler = () => {
    setIsLoggedIn(true);
  };

  const signOutButtonClickHandler = () => {
    setIsLoggedIn(false);
  };

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

export default App;
