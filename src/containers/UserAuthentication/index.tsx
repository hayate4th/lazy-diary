import React, { useState } from "react";

import UserAuthenticationComponent from "../../components/UserAuthentication";
import { AuthenticationState } from "../../types/UserAuthentication";

const UserAuthentication: React.FC = () => {
  const [authenticationState, setAuthenticationState] = useState<
    AuthenticationState
  >("SIGNED_OUT");

  const signInButtonClickHandler = () => setAuthenticationState("SIGNING_IN");
  const signOutButtonClickHandler = () => setAuthenticationState("SIGNED_OUT");
  const signUpButtonClickHandler = () => setAuthenticationState("SIGNING_UP");
  const signInModalBackgroundClickHandler = () =>
    setAuthenticationState("SIGNED_OUT");
  const signUpModalBackgroundClickHandler = () =>
    setAuthenticationState("SIGNED_OUT");

  return (
    <UserAuthenticationComponent
      authenticationState={authenticationState}
      signInButtonClickHandler={signInButtonClickHandler}
      signOutButtonClickHandler={signOutButtonClickHandler}
      signUpButtonClickHandler={signUpButtonClickHandler}
      signInModalBackgroundClickHandler={signInModalBackgroundClickHandler}
      signUpModalBackgroundClickHandler={signUpModalBackgroundClickHandler}
      setAuthenticationState={setAuthenticationState}
    />
  );
};

export default UserAuthentication;
