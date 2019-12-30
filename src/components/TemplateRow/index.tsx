import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

import { RowType } from "../../types/TemplateWriter";
import { getFontSizeFromType } from "../../utils/templateWriter";
import { DraggableProvided } from "react-beautiful-dnd";

export interface Props {
  name: string;
  text: string;
  type: RowType;
  value: string;
  isFocused: boolean;
  isDragDisabled: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
  textareaRef?: React.RefObject<HTMLTextAreaElement>;
  draggableProvided: DraggableProvided;
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
  isDragDisabled,
  inputRef,
  textareaRef,
  draggableProvided,
  onKeyDownHandler,
  onChangeHandler,
  setFocusedRowName
}) => {
  const MAX_ROW_SIZE = 10;
  const MIN_ROW_SIZE = 2;

  return (
    <Row
      ref={draggableProvided.innerRef}
      {...draggableProvided.draggableProps}
      {...draggableProvided.dragHandleProps}
      onFocus={() => setFocusedRowName(name)}
      onBlur={() => setFocusedRowName("")}
      data-testid={`template-row-${name}`}
    >
      <Label
        htmlFor={name}
        className={isFocused || !isDragDisabled ? "focused" : ""}
      >
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
          disabled={!isDragDisabled}
        />
      )}
      {type === "CONTENT" && (
        <Textarea
          id={name}
          name={name}
          value={value}
          className={type}
          maxRows={MAX_ROW_SIZE}
          minRows={MIN_ROW_SIZE}
          onChange={onChangeHandler}
          onKeyDown={event => event.shiftKey && onKeyDownHandler(event.key)}
          inputRef={textareaRef}
          data-testid="template-row-textarea"
          disabled={!isDragDisabled}
        />
      )}
    </Row>
  );
};

const Row = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 10px;

  &:focus {
    outline: none;
  }
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
  font-size: ${props => getFontSizeFromType(props.className as RowType)};
  font-weight: bold;
  padding: 5px;
  width: 100%;

  &:focus {
    outline: 3px solid #49c6dd;
  }
`;

// font-family is needed for Firefox
const Textarea = styled(TextareaAutosize)`
  border: 1px solid #c7c4c4;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 1.5em;
  line-height: 1.5em;
  padding: 5px;
  resize: none;
  width: 100%;

  &:focus {
    outline: 3px solid #49c6dd;
  }
`;

export default TemplateRow;
