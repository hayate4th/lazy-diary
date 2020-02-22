import React, { useRef, useEffect } from "react";

import TemplateRowComponent from "../../components/TemplateRow";
import { RowData, RowType } from "../../types/TemplateWriter";
import { typeToText } from "../../utils/templateRow";
import { Draggable } from "react-beautiful-dnd";

interface Props extends RowData {
  index: number;
  isDragDisabled: boolean;
  focusedRowName: string;
  addNewRow: (type: RowType) => void;
  deleteRow: (name: string) => void;
  moveRow: (isDecrement: boolean) => void;
  changeRowType: (name: string, type: RowType, isUp: boolean) => void;
  changeRowValue: (name: string, value: string) => void;
  setFocusedRowName: React.Dispatch<React.SetStateAction<string>>;
}

const TemplateRow: React.FC<Props> = ({
  index,
  isDragDisabled,
  name,
  type,
  value,
  focusedRowName,
  addNewRow,
  deleteRow,
  moveRow,
  changeRowType,
  changeRowValue,
  setFocusedRowName
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (name === focusedRowName) {
      if (type !== "CONTENT") {
        inputRef.current!.focus();
        return;
      }
      textareaRef.current!.focus();
    }
  }, [focusedRowName, name, type]);

  const onKeyDownHandler = (key: string) => {
    if (key === "Enter") {
      addNewRow(type);
      return;
    }
    if (key === "Backspace") {
      deleteRow(name);
      return;
    }
    if (key === "ArrowLeft") {
      changeRowType(name, type, true);
      return;
    }
    if (key === "ArrowRight") {
      changeRowType(name, type, false);
      return;
    }
    if (key === "ArrowUp") {
      moveRow(true);
      return;
    }
    if (key === "ArrowDown") {
      moveRow(false);
    }
  };

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    changeRowValue(name, event.currentTarget.value);
  };

  return (
    <Draggable
      draggableId={`draggable-template-row-${name}`}
      index={index}
      isDragDisabled={isDragDisabled}
    >
      {provided => (
        <TemplateRowComponent
          name={name}
          type={type}
          value={value}
          text={typeToText(type)}
          isDragDisabled={isDragDisabled}
          isFocused={name === focusedRowName}
          draggableProvided={provided}
          onKeyDownHandler={onKeyDownHandler}
          onChangeHandler={onChangeHandler}
          setFocusedRowName={setFocusedRowName}
          inputRef={inputRef}
          textareaRef={textareaRef}
        />
      )}
    </Draggable>
  );
};

export default TemplateRow;
