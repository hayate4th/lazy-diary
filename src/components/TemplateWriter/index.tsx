import React from "react";
import styled from "styled-components";

import TemplateRow from "../../containers/TemplateRow";
import { RowData, RowType } from "../../types/TemplateWriter";

export interface Props {
  rowList: RowData[];
  focusedRowName: string;
  addNewRow: (type: RowType) => void;
  changeRowType: (name: string, type: RowType, isUp: boolean) => void;
  setFocusedRowName: React.Dispatch<React.SetStateAction<string>>;
}

const TemplateWriter: React.FC<Props> = ({
  rowList,
  focusedRowName,
  addNewRow,
  changeRowType,
  setFocusedRowName
}) => {
  return (
    <Paper>
      {rowList.map(row => (
        <TemplateRow
          key={row.name}
          name={row.name}
          type={row.type}
          focusedRowName={focusedRowName}
          addNewRow={addNewRow}
          changeRowType={changeRowType}
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
