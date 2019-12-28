import React from "react";
import styled from "styled-components";

import TemplateRow from "../../containers/TemplateRow";
import { RowData, RowType } from "../../types/TemplateWriter";

export interface Props {
  rowList: RowData[];
  focusedRowName: string;
  addNewRow: (type: RowType) => void;
  deleteRow: (name: string) => void;
  changeRowType: (name: string, type: RowType, isUp: boolean) => void;
  changeRowValue: (name: string, value: string) => void;
  setFocusedRowName: React.Dispatch<React.SetStateAction<string>>;
}

const TemplateWriter: React.FC<Props> = ({
  rowList,
  focusedRowName,
  addNewRow,
  deleteRow,
  changeRowType,
  changeRowValue,
  setFocusedRowName
}) => {
  return (
    <Paper>
      {rowList.map(row => (
        <TemplateRow
          key={row.name}
          name={row.name}
          type={row.type}
          value={row.value}
          focusedRowName={focusedRowName}
          addNewRow={addNewRow}
          deleteRow={deleteRow}
          changeRowType={changeRowType}
          changeRowValue={changeRowValue}
          setFocusedRowName={setFocusedRowName}
        />
      ))}
    </Paper>
  );
};

const Paper = styled.div`
  color: #434344;
  padding: 10px 20px;
`;

export default TemplateWriter;
