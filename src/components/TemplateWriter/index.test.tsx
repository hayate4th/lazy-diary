import React from "react";
import { render } from "@testing-library/react";

import TemplateWriter, { Props } from ".";

describe("TemplateWriter/component", () => {
  const baseProps: Props = {
    rowList: [],
    focusedRowName: "",
    isPreviewMode: false,
    isDragAndDropMode: false,
    rowOperationByKeyValue: jest.fn(),
    changeRowValue: jest.fn(),
    onDragEnd: jest.fn(),
    setFocusedRowName: jest.fn(),
    setIsPreviewMode: jest.fn(),
    setIsDragAndDropMode: jest.fn()
  };

  it("3 TemplateRow components exists when rowList length is 3", () => {
    const props: Props = {
      ...baseProps,
      rowList: [
        { name: "row0", type: "TITLE", value: "TEST" },
        { name: "row1", type: "TITLE", value: "TEST" },
        { name: "row2", type: "TITLE", value: "TEST" }
      ]
    };

    const { getAllByTestId } = render(<TemplateWriter {...props} />);

    expect(getAllByTestId(/template-row-row/i)).toHaveLength(3);
  });

  it("3 PreviewRow components exists when rowList length is 3 and isPreviewMode is true", () => {
    const props: Props = {
      ...baseProps,
      rowList: [
        { name: "row0", type: "TITLE", value: "TEST" },
        { name: "row1", type: "TITLE", value: "TEST" },
        { name: "row2", type: "TITLE", value: "TEST" }
      ],
      isPreviewMode: true
    };

    const { getAllByTestId } = render(<TemplateWriter {...props} />);

    expect(getAllByTestId(/preview-row-row/i)).toHaveLength(3);
  });
});
