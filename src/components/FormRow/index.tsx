import React from "react";
import styled from "styled-components";

import colors from "../../utils/colors";

export interface Props {
  fieldName: string;
  labelText: string;
  inputValue: string;
  inputType?: string;
  errorMessage?: string;
  dataTestId?: string;
  onChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => void;
}

const FormRow: React.FC<Props> = ({
  fieldName,
  labelText,
  inputValue,
  inputType,
  errorMessage,
  dataTestId,
  onChangeHandler
}) => {
  return (
    <Wrapper>
      <Label htmlFor={fieldName}>{labelText}</Label>
      <Input
        id={fieldName}
        name={fieldName}
        type={inputType}
        onChange={event => onChangeHandler(event, fieldName)}
        value={inputValue}
      />
      {errorMessage && (
        <ErrorMessage data-testid={dataTestId}>{errorMessage}</ErrorMessage>
      )}
    </Wrapper>
  );
};

// FIXME: Wrapper should not manage the margin between the lined up FormRows
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 300px;
`;

const Label = styled.label`
  font-size: 1.5em;
`;

const Input = styled.input`
  font-size: 1.25em;
  padding: 10px 5px;
`;

const ErrorMessage = styled.div`
  color: ${colors.formErrorText};
  font-weight: bold;
`;

export default FormRow;
