import React from "react";
import styled from "styled-components";

interface Props {
  name: string;
  text: string;
  type: "TITLE" | "SUBTITLE" | "CONTENT";
  isFocused: boolean;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
}

const TemplateRow: React.FC<Props> = ({
  name,
  text,
  type,
  isFocused,
  setIsFocused
}) => {
  return (
    <Row onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
      <Label htmlFor={name} className={isFocused ? "focused" : ""}>
        {text}
      </Label>
      {(type === "TITLE" || type === "SUBTITLE") && (
        <Input id={name} name={name} type="text" className={type} />
      )}
      {type === "CONTENT" && (
        <Textarea id={name} name={name} className={type} />
      )}
    </Row>
  );
};

const Row = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 10px;
`;

const Label = styled.label`
  background-color: ${props =>
    props.className === "focused" ? "#49c6dd" : "#c7c4c4"};
  border-radius: 6px;
  color: #f7f6f6;
  font-size: 1em;
  font-weight: bold;
  margin-right: 20px;
  padding: 2px 5px;
  text-align: center;
  width: 50px;
`;

const Input = styled.input`
  font-size: ${props => (props.className === "TITLE" ? "2.5em" : "2em")};
  font-weight: bold;
  width: 100%;
`;

const Textarea = styled.textarea`
  font-size: 1.5em;
  resize: none;
  width: 100%;
`;

export default TemplateRow;
