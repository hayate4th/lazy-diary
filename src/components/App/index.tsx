import React from "react";

const App: React.FC = () => {
  const loginClickHandler = () => {
    console.log("Login");
  };

  return <button onClick={loginClickHandler}>Login</button>;
};

export default App;
