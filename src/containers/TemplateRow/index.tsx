import React, { useRef, useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";

import TemplateRowComponent from "../../components/TemplateRow";
import { RowData, RowType } from "../../types/TemplateWriter";

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

  const onKeyDownHandler = (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { shiftKey, key } = event;
    if (!shiftKey) return;
    switch (key) {
      case "Enter":
        addNewRow(type);
        return;
      case "Backspace":
        deleteRow(name);
        return;
      case "ArrowLeft":
        changeRowType(name, type, true);
        return;
      case "ArrowRight":
        changeRowType(name, type, false);
        return;
      case "ArrowUp":
        moveRow(true);
        return;
      case "ArrowDown":
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
          fieldName={name}
          type={type}
          inputValue={value}
          isDragDisabled={isDragDisabled}
          focusedClassName={
            name === focusedRowName || !isDragDisabled ? "focused" : undefined
          }
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
