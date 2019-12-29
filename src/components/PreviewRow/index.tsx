import React from "react";
import styled from "styled-components";

import { RowType } from "../../types/TemplateWriter";
import { getFontSizeFromType } from "../../utils/templateWriter";

interface Props {
  text: string;
  type: RowType;
}

const PreviewRow: React.FC<Props> = ({ text, type }) => {
  return (
    <Row>
      {(type === "TITLE" || type === "SUBTITLE") && (
        <Title className={type}>{text}</Title>
      )}
      {type === "CONTENT" &&
        text.split("\n").map((line, index) =>
          line === "" ? (
            <br key={`content-row-${index}`} />
          ) : (
            <ContentRow className={type} key={`content-row-${index}`}>
              {line}
            </ContentRow>
          )
        )}
    </Row>
  );
};

const Row = styled.div`
  color: #434344;
  margin-bottom: 10px;
  width: 750px;
`;

const Title = styled.div`
  font-size: ${props => getFontSizeFromType(props.className as RowType)};
  font-weight: bold;
`;

const ContentRow = styled.div`
  font-size: ${props => getFontSizeFromType(props.className as RowType)};
  line-height: 1.5em;
`;

export default PreviewRow;
