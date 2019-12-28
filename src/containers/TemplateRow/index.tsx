import React, { useRef, useEffect } from "react";

import TemplateRowComponent from "../../components/TemplateRow";
import { RowData, RowType } from "../../types/TemplateWriter";

interface Props extends RowData {
  focusedRowName: string;
  addNewRow: (type: RowType) => void;
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
  setFocusedRowName
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (name === focusedRowName) inputRef.current!.focus();
  }, [focusedRowName, name]);

  const onKeyDownHandler = (key: string) => {
    if (key !== "Enter") return;
    addNewRow(type);
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
    />
  );
};

export const VisibleForTesting = {
  typeToText
};

export default TemplateRow;
