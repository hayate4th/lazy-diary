import React, { useState } from "react";

import TemplateRowComponent from "../../components/TemplateRow";

interface Props {
  name: string;
  type: "TITLE" | "SUBTITLE" | "CONTENT";
}

const typeToText = (type: "TITLE" | "SUBTITLE" | "CONTENT"): string => {
  switch (type) {
    case "TITLE":
      return "Title";
    case "SUBTITLE":
      return "Subtitle";
    case "CONTENT":
      return "Content";
    default:
      throw new Error("type does not match");
  }
};

const TemplateRow: React.FC<Props> = ({ name, type }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TemplateRowComponent
      name={name}
      type={type}
      text={typeToText(type)}
      isFocused={isFocused}
      setIsFocused={setIsFocused}
    />
  );
};

export const VisibleForTesting = {
  typeToText
};

export default TemplateRow;
