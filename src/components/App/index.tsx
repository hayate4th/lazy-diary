import React, { useState } from "react";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginButtonClickHandler = () => {
    setIsLoggedIn(true);
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
          <button data-testid="sign-out-button">Sign Out</button>
          <div data-testid="logged-in-text">Logged in</div>
        </>
      )}
    </>
  );
};

export default App;
