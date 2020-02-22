import React, { useState, useEffect } from "react";

import TemplateWriterComponent from "../../components/TemplateWriter";
import { RowData, RowType, OperationType } from "../../types/TemplateWriter";
import {
  changeRowTypeFromIsUp,
  reorderRowList
} from "../../utils/templateWriter";
import { DropResult } from "react-beautiful-dnd";

const TemplateWriter: React.FC = () => {
  const [rowList, setRowList] = useState<RowData[]>([
    { name: "row0", type: "TITLE", value: "" }
  ]);
  const [focusedRowName, setFocusedRowName] = useState("row0");
  const [operationType, setOperationType] = useState<OperationType>("NORMAL");
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [isDragAndDropMode, setIsDragAndDropMode] = useState(false);

  useEffect(() => {
    if (operationType === "ADD_ROW") moveRow(false);
    if (operationType === "DELETE_ROW") moveRow(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowList, operationType]);

  // TODO: Find if there is a better way to add
  const addNewRow = (type: RowType) => {
    const newRowList = rowList.map(row =>
      row.name === focusedRowName
        ? [row, { name: `row${rowList.length}`, type, value: "" }]
        : row
    );
    setRowList(
      newRowList
        .flatMap(row => row)
        .map((row, index) => ({
          name: `row${index}`,
          type: row.type,
          value: row.value
        }))
    );
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

  const moveRow = (isDecrement: boolean) => {
    const matchObject = focusedRowName.match(/row(\d+)/);
    if (matchObject === null) return;
    const rowNumber = Number(matchObject[1]);
    let movedRowNumber;
    if (isDecrement) {
      movedRowNumber = rowNumber < 1 ? 0 : rowNumber - 1;
    } else {
      movedRowNumber =
        rowNumber + 1 >= rowList.length ? rowNumber : rowNumber + 1;
    }
    setFocusedRowName(`row${movedRowNumber}`);
  };

  const changeRowType = (name: string, type: RowType, isLeft: boolean) => {
    const changedType = changeRowTypeFromIsUp(type, isLeft);
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

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const reorderedRowList = reorderRowList(
      rowList,
      result.source.index,
      result.destination.index
    );
    setRowList(
      reorderedRowList.map((row, index) => ({
        name: `row${index}`,
        type: row.type,
        value: row.value
      }))
    );
  };

  return (
    <TemplateWriterComponent
      rowList={rowList}
      focusedRowName={focusedRowName}
      isPreviewMode={isPreviewMode}
      isDragAndDropMode={isDragAndDropMode}
      addNewRow={addNewRow}
      deleteRow={deleteRow}
      moveRow={moveRow}
      changeRowType={changeRowType}
      changeRowValue={changeRowValue}
      onDragEnd={onDragEnd}
      setFocusedRowName={setFocusedRowName}
      setIsPreviewMode={setIsPreviewMode}
      setIsDragAndDropMode={setIsDragAndDropMode}
    />
  );
};

export default TemplateWriter;
