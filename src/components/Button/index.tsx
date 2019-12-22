import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
  type?: "button" | "submit" | "reset";
  dataTestId: string;
  onClickHandler?: () => void;
}

const Button: React.FC<Props> = ({
  text,
  type,
  dataTestId,
  onClickHandler
}) => {
  return (
    <StyledButton onClick={onClickHandler} type={type} data-testid={dataTestId}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: none;
  background-color: #49c6dd;
  border: none;
  border-radius: 6px;
  color: #f7f6f6;
  cursor: pointer;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 2em;
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
