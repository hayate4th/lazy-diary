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
      {!showLoginButton && <div data-testid="logged-in-text">Logged in</div>}
    </>
  );
};

export default App;
