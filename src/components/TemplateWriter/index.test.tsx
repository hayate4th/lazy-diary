import React from "react";
import { render } from "@testing-library/react";

import TemplateWriter, { Props } from ".";

describe("TemplateWriter/component", () => {
  const baseProps: Props = {
    rowList: [],
    focusedRowName: "",
    addNewRow: jest.fn(),
    deleteRow: jest.fn(),
    changeRowType: jest.fn(),
    changeRowValue: jest.fn(),
    setFocusedRowName: jest.fn()
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
});
