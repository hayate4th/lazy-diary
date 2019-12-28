import React from "react";
import styled from "styled-components";
import TemplateRow from "../../containers/TemplateRow";

const TemplateWriter: React.FC = () => {
  return (
    <Paper>
      <TemplateRow name="title" type="TITLE" />
      <TemplateRow name="subtitle" type="SUBTITLE" />
      <TemplateRow name="content" type="CONTENT" />
    </Paper>
  );
};

const Paper = styled.div`
  color: #434344;
  padding: 10px 20px;
`;

export default TemplateWriter;
