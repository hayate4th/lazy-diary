import React, { useState } from "react";

import UserAuthenticationComponent from "../../components/UserAuthentication";

const UserAuthentication: React.FC = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const signInButtonClickHandler = () => setIsSignedIn(true);
  const signOutButtonClickHandler = () => setIsSignedIn(false);
  const signUpButtonClickHandler = () => {
    console.log("sign up");
  };

  return (
    <UserAuthenticationComponent
      isSignedIn={isSignedIn}
      signInButtonClickHandler={signInButtonClickHandler}
      signOutButtonClickHandler={signOutButtonClickHandler}
      signUpButtonClickHandler={signUpButtonClickHandler}
    />
  );
};

export default UserAuthentication;
