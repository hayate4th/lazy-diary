import React from "react";
import styled from "styled-components";

import colors from "../../utils/colors";

interface Props {
  text: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  dataTestId: string;
  onClickHandler?: () => void;
}

const Button: React.FC<Props> = ({
  text,
  type,
  disabled,
  dataTestId,
  onClickHandler
}) => {
  return (
    <StyledButton
      onClick={onClickHandler}
      type={type}
      disabled={disabled}
      data-testid={dataTestId}
    >
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: none;
  background-color: ${props =>
    props.disabled ? colors.buttonDisabled : colors.buttonPrimary};
  border: none;
  border-radius: 6px;
  color: ${colors.buttonText};
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 2em;
  font-weight: bold;
  padding: 5px 10px;

  &:focus {
    outline: none;
  }

  &:active {
    background: ${colors.buttonPrimary};
  }
`;

export default Button;
