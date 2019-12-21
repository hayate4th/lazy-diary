import React from "react";
import styled from "styled-components";

import UserAuthentication from "../../containers/UserAuthentication";

const AppHeader: React.FC = () => {
  return (
    <Header>
      <Title>Lazy Diary</Title>
      <div>
        <UserAuthentication />
      </div>
    </Header>
  );
};

const Header = styled.div`
  background-color: #f2426c;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 2.5em;
  font-weight: bold;
`;

export default AppHeader;
