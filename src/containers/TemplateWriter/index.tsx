import React, { useState, useEffect } from "react";

import TemplateWriterComponent from "../../components/TemplateWriter";
import { RowData, RowType, OperationType } from "../../types/TemplateWriter";

const changeRowTypeInner = (type: RowType, isUp: boolean): RowType => {
  switch (type) {
    case "TITLE":
      if (isUp) return type;
      return "SUBTITLE";
    case "SUBTITLE":
      if (isUp) return "TITLE";
      return "CONTENT";
    case "CONTENT":
      if (isUp) return "SUBTITLE";
      return type;
    default:
      throw new Error("Invalid type");
  }
};

const TemplateWriter: React.FC = () => {
  const [rowList, setRowList] = useState<RowData[]>([
    { name: "row0", type: "TITLE" }
  ]);
  const [focusedRowName, setFocusedRowName] = useState("row0");
  const [operationType, setOperationType] = useState<OperationType>("NORMAL");

  useEffect(() => {
    if (operationType === "ADD_ROW")
      setFocusedRowName(rowList[rowList.length - 1].name);
  }, [rowList, operationType]);

  const addNewRow = (type: RowType) => {
    setRowList([...rowList, { name: `row${rowList.length}`, type }]);
    setOperationType("ADD_ROW");
  };

  const changeRowType = (name: string, type: RowType, isUp: boolean) => {
    const changedType = changeRowTypeInner(type, isUp);
    setRowList(
      rowList.map((row, index) =>
        row.name === name ? { name: `row${index}`, type: changedType } : row
      )
    );
    setOperationType("CHANGE_ROW_TYPE");
  };

  return (
    <TemplateWriterComponent
      rowList={rowList}
      focusedRowName={focusedRowName}
      addNewRow={addNewRow}
      changeRowType={changeRowType}
      setFocusedRowName={setFocusedRowName}
    />
  );
};

export default TemplateWriter;

export const VisibleForTesting = {
  changeRowTypeInner
};
