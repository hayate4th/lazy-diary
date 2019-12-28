import React from "react";
import { render } from "@testing-library/react";

import TemplateWriter, { Props } from ".";

describe("TemplateWriter/component", () => {
  const baseProps: Props = {
    rowList: [],
    focusedRowName: "",
    addNewRow: jest.fn(),
    changeRowType: jest.fn(),
    setFocusedRowName: jest.fn()
  };

  it("3 TemplateRow components exists when rowList length is 3", () => {
    const props: Props = {
      ...baseProps,
      rowList: [
        { name: "row0", type: "TITLE" },
        { name: "row1", type: "TITLE" },
        { name: "row2", type: "TITLE" }
      ]
    };

    const { getAllByTestId } = render(<TemplateWriter {...props} />);

    expect(getAllByTestId(/template-row-row/i)).toHaveLength(3);
  });
});
