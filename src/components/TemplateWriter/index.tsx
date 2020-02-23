import React from "react";
import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

import TemplateRow from "../../containers/TemplateRow";
import { RowData, RowType } from "../../types/TemplateWriter";
import Button from "../Button";
import PreviewRow from "../PreviewRow";
import { allRowsAreEmpty } from "../../utils/templateWriter";
import colors from "../../utils/colors";

export interface Props {
  rowList: RowData[];
  focusedRowName: string;
  isPreviewMode: boolean;
  isDragAndDropMode: boolean;
  addNewRow: (type: RowType) => void;
  deleteRow: (name: string) => void;
  moveRow: (isDecrement: boolean) => void;
  changeRowType: (name: string, type: RowType, isUp: boolean) => void;
  changeRowValue: (name: string, value: string) => void;
  onDragEnd: (result: DropResult) => void;
  setFocusedRowName: React.Dispatch<React.SetStateAction<string>>;
  setIsPreviewMode: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDragAndDropMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const TemplateWriter: React.FC<Props> = ({
  rowList,
  focusedRowName,
  isPreviewMode,
  isDragAndDropMode,
  addNewRow,
  deleteRow,
  moveRow,
  changeRowType,
  changeRowValue,
  onDragEnd,
  setFocusedRowName,
  setIsPreviewMode,
  setIsDragAndDropMode
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
        <Button
          text={isDragAndDropMode ? "Confirm Rows" : "Reorder Rows"}
          dataTestId="drag-and-drop-mode-button"
          onClickHandler={() => setIsDragAndDropMode(!isDragAndDropMode)}
          disabled={rowList.length <= 1}
        />
      </Header>
      <Drawer
        anchor="right"
        open={isPreviewMode}
        onClose={() => setIsPreviewMode(false)}
      >
        <Preview>
          {rowList.map((row, index) => (
            <PreviewRow
              name={row.name}
              text={row.value}
              type={row.type}
              key={`preview-row-${index}`}
            />
          ))}
        </Preview>
      </Drawer>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" isDropDisabled={!isDragAndDropMode}>
          {provided => (
            <Paper {...provided.droppableProps} ref={provided.innerRef}>
              {rowList.map((row, index) => (
                <TemplateRow
                  index={index}
                  key={row.name}
                  name={row.name}
                  type={row.type}
                  value={row.value}
                  isDragDisabled={!isDragAndDropMode}
                  focusedRowName={focusedRowName}
                  addNewRow={addNewRow}
                  deleteRow={deleteRow}
                  moveRow={moveRow}
                  changeRowType={changeRowType}
                  changeRowValue={changeRowValue}
                  setFocusedRowName={setFocusedRowName}
                />
              ))}
              {provided.placeholder}
            </Paper>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

const Paper = styled.div`
  color: ${colors.paperBackground};
  padding: 10px 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  width: 300px;
`;

const Preview = styled.div`
  padding: 10px 20px;
  max-width: calc(100vw - 40px);
`;

export default TemplateWriter;
