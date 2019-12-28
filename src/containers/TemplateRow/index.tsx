import React, { useRef, useEffect } from "react";

import TemplateRowComponent from "../../components/TemplateRow";
import { RowData, RowType } from "../../types/TemplateWriter";

interface Props extends RowData {
  focusedRowName: string;
  addNewRow: (type: RowType) => void;
  changeRowType: (name: string, type: RowType, isUp: boolean) => void;
  setFocusedRowName: React.Dispatch<React.SetStateAction<string>>;
}

const typeToText = (type: RowType): string => {
  switch (type) {
    case "TITLE":
      return "Title";
    case "SUBTITLE":
      return "Subtitle";
    case "CONTENT":
      return "Content";
    default:
      throw new Error("type does not match");
  }
};

const TemplateRow: React.FC<Props> = ({
  name,
  type,
  focusedRowName,
  addNewRow,
  changeRowType,
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
    if (key === "ArrowUp") {
      changeRowType(name, type, true);
      return;
    }
    if (key === "ArrowDown") {
      changeRowType(name, type, false);
    }
  };

  return (
    <TemplateRowComponent
      name={name}
      type={type}
      text={typeToText(type)}
      isFocused={name === focusedRowName}
      onKeyDownHandler={onKeyDownHandler}
      setFocusedRowName={setFocusedRowName}
      inputRef={inputRef}
      textareaRef={textareaRef}
    />
  );
};

export const VisibleForTesting = {
  typeToText
};

export default TemplateRow;
