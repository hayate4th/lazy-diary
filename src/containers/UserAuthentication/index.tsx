import React, { useState } from "react";

import UserAuthenticationComponent from "../../components/UserAuthentication";

const UserAuthentication: React.FC = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const signInButtonClickHandler = () => setIsSignedIn(true);
  const signOutButtonClickHandler = () => setIsSignedIn(false);

  return (
    <UserAuthenticationComponent
      isSignedIn={isSignedIn}
      signInButtonClickHandler={signInButtonClickHandler}
      signOutButtonClickHandler={signOutButtonClickHandler}
    />
  );
};

export default UserAuthentication;
