import React, { useState, useEffect } from "react";

import TemplateWriterComponent from "../../components/TemplateWriter";
import { RowData, RowType } from "../../types/TemplateWriter";

const TemplateWriter: React.FC = () => {
  const [rowList, setRowList] = useState<RowData[]>([
    { name: "title0", type: "TITLE" }
  ]);
  const [focusedRowName, setFocusedRowName] = useState("title0");

  useEffect(() => {
    setFocusedRowName(rowList[rowList.length - 1].name);
  }, [rowList]);

  const addNewRow = (type: RowType) => {
    setRowList([
      ...rowList,
      { name: `${type.toLowerCase()}${rowList.length}`, type }
    ]);
  };

  return (
    <TemplateWriterComponent
      rowList={rowList}
      focusedRowName={focusedRowName}
      addNewRow={addNewRow}
      setFocusedRowName={setFocusedRowName}
    />
  );
};

export default TemplateWriter;
