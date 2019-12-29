import React from "react";
import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";

import TemplateRow from "../../containers/TemplateRow";
import { RowData, RowType } from "../../types/TemplateWriter";
import Button from "../Button";
import PreviewRow from "../PreviewRow";
import { allRowsAreEmpty } from "../../utils/templateWriter";

export interface Props {
  rowList: RowData[];
  focusedRowName: string;
  isPreviewMode: boolean;
  addNewRow: (type: RowType) => void;
  deleteRow: (name: string) => void;
  changeRowType: (name: string, type: RowType, isUp: boolean) => void;
  changeRowValue: (name: string, value: string) => void;
  setFocusedRowName: React.Dispatch<React.SetStateAction<string>>;
  setIsPreviewMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const TemplateWriter: React.FC<Props> = ({
  rowList,
  focusedRowName,
  isPreviewMode,
  addNewRow,
  deleteRow,
  changeRowType,
  changeRowValue,
  setFocusedRowName,
  setIsPreviewMode
}) => {
  return (
    <>
      <Header>
        <Button
          text="Preview"
          dataTestId="preview-mode-button"
          onClickHandler={() => setIsPreviewMode(true)}
          disabled={allRowsAreEmpty(rowList)}
        />
      </Header>
      <Paper>
        <Drawer
          anchor="right"
          open={isPreviewMode}
          onClose={() => setIsPreviewMode(false)}
        >
          <Preview>
            {rowList.map((row, index) => (
              <PreviewRow
                text={row.value}
                type={row.type}
                key={`preview-row-${index}`}
              />
            ))}
          </Preview>
        </Drawer>
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
    </>
  );
};

const Paper = styled.div`
  color: #434344;
  padding: 10px 20px;
`;

const Header = styled.div`
  padding: 10px 20px;
`;

const Preview = styled.div`
  padding: 10px 20px;
`;

export default TemplateWriter;
