import React, { useState } from "react";

import UserAuthenticationComponent from "../../components/UserAuthentication";

const UserAuthentication: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginButtonClickHandler = () => setIsLoggedIn(true);
  const signOutButtonClickHandler = () => setIsLoggedIn(false);

  return (
    <UserAuthenticationComponent
      isLoggedIn={isLoggedIn}
      loginButtonClickHandler={loginButtonClickHandler}
      signOutButtonClickHandler={signOutButtonClickHandler}
    />
  );
};

export default UserAuthentication;
