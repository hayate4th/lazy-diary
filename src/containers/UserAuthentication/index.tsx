import React, { useState } from "react";

import UserAuthenticationComponent from "../../components/UserAuthentication";
import { AuthenticationState } from "../../types/UserAuthentication";

const UserAuthentication: React.FC = () => {
  const [authenticationState, setAuthenticationState] = useState<
    AuthenticationState
  >("SIGNED_OUT");

  const signInButtonClickHandler = () => setAuthenticationState("SIGNING_IN");
  const signOutHandler = () => setAuthenticationState("SIGNED_OUT");
  const signUpButtonClickHandler = () => setAuthenticationState("SIGNING_UP");

  return (
    <UserAuthenticationComponent
      authenticationState={authenticationState}
      signInButtonClickHandler={signInButtonClickHandler}
      signUpButtonClickHandler={signUpButtonClickHandler}
      signOutHandler={signOutHandler}
      setAuthenticationState={setAuthenticationState}
    />
  );
};

export default UserAuthentication;
