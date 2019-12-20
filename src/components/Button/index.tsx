import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
  dataTestId: string;
  onClickHandler: () => void;
}

const Button: React.FC<Props> = ({ text, dataTestId, onClickHandler }) => {
  return (
    <StyledButton onClick={onClickHandler} data-testid={dataTestId}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: none;
  background-color: #49c6dd;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  padding: 5px 10px;

  &:focus {
    outline: none;
  }

  &:active {
    background: #c7c4c4;
  }
`;

export default Button;