import React from "react";

interface Props {
  text: string;
  onClickHandler: () => void;
}

const Button: React.FC<Props> = ({ text, onClickHandler }) => {
  return <button onClick={onClickHandler}>{text}</button>;
};

export default Button;
