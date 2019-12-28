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
    { name: "row0", type: "TITLE", value: "" }
  ]);
  const [focusedRowName, setFocusedRowName] = useState("row0");
  const [operationType, setOperationType] = useState<OperationType>("NORMAL");

  useEffect(() => {
    if (operationType === "ADD_ROW")
      setFocusedRowName(rowList[rowList.length - 1].name);
  }, [rowList, operationType]);

  const addNewRow = (type: RowType) => {
    setRowList([...rowList, { name: `row${rowList.length}`, type, value: "" }]);
    setOperationType("ADD_ROW");
  };

  const deleteRow = (name: string) => {
    if (rowList.length <= 1) return;
    const newRowList = rowList.filter(row => row.name !== name);
    setRowList(
      newRowList.map((row, index) => ({
        name: `row${index}`,
        type: row.type,
        value: row.value
      }))
    );
    setOperationType("DELETE_ROW");
  };

  const changeRowType = (name: string, type: RowType, isUp: boolean) => {
    const changedType = changeRowTypeInner(type, isUp);
    setRowList(
      rowList.map(row =>
        row.name === name ? { name, type: changedType, value: row.value } : row
      )
    );
    setOperationType("CHANGE_ROW_TYPE");
  };

  const changeRowValue = (name: string, value: string) => {
    setRowList(
      rowList.map(row =>
        row.name === name ? { name, type: row.type, value } : row
      )
    );
    setOperationType("CHANGE_ROW_VALUE");
  };

  return (
    <TemplateWriterComponent
      rowList={rowList}
      focusedRowName={focusedRowName}
      addNewRow={addNewRow}
      deleteRow={deleteRow}
      changeRowType={changeRowType}
      changeRowValue={changeRowValue}
      setFocusedRowName={setFocusedRowName}
    />
  );
};

export default TemplateWriter;

export const VisibleForTesting = {
  changeRowTypeInner
};
