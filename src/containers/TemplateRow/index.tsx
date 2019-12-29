import React, { useRef, useEffect } from "react";

import TemplateRowComponent from "../../components/TemplateRow";
import { RowData, RowType } from "../../types/TemplateWriter";
import { typeToText } from "../../utils/templateRow";

interface Props extends RowData {
  index: number;
  isDragDisabled: boolean;
  focusedRowName: string;
  addNewRow: (type: RowType) => void;
  deleteRow: (name: string) => void;
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
    if (key === "ArrowUp") {
      changeRowType(name, type, true);
      return;
    }
    if (key === "ArrowDown") {
      changeRowType(name, type, false);
    }
  };

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    changeRowValue(name, event.currentTarget.value);
  };

  return (
    <TemplateRowComponent
      index={index}
      name={name}
      type={type}
      value={value}
      text={typeToText(type)}
      isDragDisabled={isDragDisabled}
      isFocused={name === focusedRowName}
      onKeyDownHandler={onKeyDownHandler}
      onChangeHandler={onChangeHandler}
      setFocusedRowName={setFocusedRowName}
      inputRef={inputRef}
      textareaRef={textareaRef}
    />
  );
};

export default TemplateRow;
