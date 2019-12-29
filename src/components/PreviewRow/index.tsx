import React from "react";
import styled from "styled-components";

import { RowType } from "../../types/TemplateWriter";
import { getFontSizeFromType } from "../../utils/templateWriter";

export interface Props {
  name: string;
  text: string;
  type: RowType;
}

const PreviewRow: React.FC<Props> = ({ name, text, type }) => {
  // When type is CONTENT split the text becuase line breaks are not visible
  return (
    <Row data-testid={`preview-row-${name}`}>
      {(type === "TITLE" || type === "SUBTITLE") &&
        (text === "" ? (
          <br data-testid={`title-br-${name}`} />
        ) : (
          <Title className={type} data-testid={`title-div-${name}`}>
            {text}
          </Title>
        ))}
      {type === "CONTENT" &&
        text.split("\n").map((line, index) =>
          line === "" ? (
            <br
              key={`content-row-${index}`}
              data-testid={`content-row-br-${name}-${index}`}
            />
          ) : (
            <ContentRow
              className={type}
              key={`content-row-${index}`}
              data-testid={`content-row-div-${name}-${index}`}
            >
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
