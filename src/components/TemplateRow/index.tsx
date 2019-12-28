import React from "react";
import styled from "styled-components";

import { RowType } from "../../types/TemplateWriter";

export interface Props {
  name: string;
  text: string;
  type: RowType;
  value: string;
  isFocused: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
  textareaRef?: React.RefObject<HTMLTextAreaElement>;
  onKeyDownHandler: (key: string) => void;
  onChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  setFocusedRowName: React.Dispatch<React.SetStateAction<string>>;
}

const TemplateRow: React.FC<Props> = ({
  name,
  text,
  type,
  value,
  isFocused,
  inputRef,
  textareaRef,
  onKeyDownHandler,
  onChangeHandler,
  setFocusedRowName
}) => {
  return (
    <Row
      onFocus={() => setFocusedRowName(name)}
      onBlur={() => setFocusedRowName("")}
      data-testid={`template-row-${name}`}
    >
      <Label htmlFor={name} className={isFocused ? "focused" : ""}>
        {text}
      </Label>
      {(type === "TITLE" || type === "SUBTITLE") && (
        <Input
          id={name}
          name={name}
          type="text"
          value={value}
          className={type}
          onChange={onChangeHandler}
          onKeyDown={event => event.shiftKey && onKeyDownHandler(event.key)}
          ref={inputRef}
          data-testid="template-row-input"
        />
      )}
      {type === "CONTENT" && (
        <Textarea
          id={name}
          name={name}
          value={value}
          className={type}
          onChange={onChangeHandler}
          onKeyDown={event => event.shiftKey && onKeyDownHandler(event.key)}
          ref={textareaRef}
          data-testid="template-row-textarea"
        />
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
  font-size: 1.5em;
  font-weight: bold;
  margin-right: 20px;
  padding: 2px 5px;
  text-align: center;
  width: 80px;
`;

const Input = styled.input`
  border: 1px solid #c7c4c4;
  font-size: ${props => (props.className === "TITLE" ? "3em" : "2em")};
  font-weight: bold;
  padding: 5px;
  width: 100%;

  &:focus {
    outline: 3px solid #49c6dd;
  }
`;

const Textarea = styled.textarea`
  border: 1px solid #c7c4c4;
  font-size: 1.5em;
  padding: 5px;
  resize: none;
  width: 100%;

  &:focus {
    outline: 3px solid #49c6dd;
  }
`;

export default TemplateRow;
