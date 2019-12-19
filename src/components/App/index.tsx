import React, { useState } from "react";

const App: React.FC = () => {
  const [showLoginButton, setShowLoginButton] = useState(true);
  const loginClickHandler = () => {
    setShowLoginButton(false);
  };

  return (
    <>
      {showLoginButton && (
        <button onClick={loginClickHandler} data-testid="login-button">
          Login
        </button>
      )}
      {!showLoginButton && (
        <>
          <button data-testid="sign-out-button">Sign Out</button>
          <div data-testid="logged-in-text">Logged in</div>
        </>
      )}
    </>
  );
};

export default App;
