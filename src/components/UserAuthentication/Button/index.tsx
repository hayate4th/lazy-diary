import React from "react";

interface Props {
  text: string;
  dataTestId: string;
  onClickHandler: () => void;
}

const Button: React.FC<Props> = ({ text, dataTestId, onClickHandler }) => {
  return (
    <button onClick={onClickHandler} data-testid={dataTestId}>
      {text}
    </button>
  );
};

export default Button;
