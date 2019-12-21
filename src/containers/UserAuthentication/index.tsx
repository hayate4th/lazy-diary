import React, { useState } from "react";

import UserAuthenticationComponent from "../../components/UserAuthentication";

const UserAuthentication: React.FC = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);

  const signInButtonClickHandler = () => setIsSignedIn(true);
  const signOutButtonClickHandler = () => setIsSignedIn(false);
  const signUpButtonClickHandler = () => setIsSigningUp(true);
  const modalBackgroundClickHandler = () => setIsSigningUp(false);

  return (
    <UserAuthenticationComponent
      isSignedIn={isSignedIn}
      isSigningUp={isSigningUp}
      signInButtonClickHandler={signInButtonClickHandler}
      signOutButtonClickHandler={signOutButtonClickHandler}
      signUpButtonClickHandler={signUpButtonClickHandler}
      modalBackgroundClickHandler={modalBackgroundClickHandler}
    />
  );
};

export default UserAuthentication;
