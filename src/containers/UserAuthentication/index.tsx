import React, { useState } from "react";

import UserAuthenticationComponent from "../../components/UserAuthentication";

const UserAuthentication: React.FC = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [hasSignedUp, setHasSignedUp] = useState(false);

  const signInButtonClickHandler = () => setIsSigningIn(true);
  const signOutButtonClickHandler = () => setIsSignedIn(false);
  const signUpButtonClickHandler = () => setIsSigningUp(true);
  const signInModalBackgroundClickHandler = () => setIsSigningIn(false);
  const signUpModalBackgroundClickHandler = () => setIsSigningUp(false);

  return (
    <UserAuthenticationComponent
      isSignedIn={isSignedIn}
      isSigningIn={isSigningIn}
      isSigningUp={isSigningUp}
      hasSignedUp={hasSignedUp}
      signInButtonClickHandler={signInButtonClickHandler}
      signOutButtonClickHandler={signOutButtonClickHandler}
      signUpButtonClickHandler={signUpButtonClickHandler}
      signInModalBackgroundClickHandler={signInModalBackgroundClickHandler}
      signUpModalBackgroundClickHandler={signUpModalBackgroundClickHandler}
      setIsSignedIn={setIsSignedIn}
      setIsSigningIn={setIsSigningIn}
      setHasSignedUp={setHasSignedUp}
    />
  );
};

export default UserAuthentication;
