import React, { useState } from "react";

import UserAuthenticationComponent from "../../components/UserAuthentication";
import { AuthenticationState } from "../../types/UserAuthentication";

const UserAuthentication: React.FC = () => {
  const [authenticationState, setAuthenticationState] = useState<
    AuthenticationState
  >("SIGNED_OUT");

  return (
    <UserAuthenticationComponent
      authenticationState={authenticationState}
      setAuthenticationState={setAuthenticationState}
    />
  );
};

export default UserAuthentication;
