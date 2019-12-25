import React from "react";
import styled from "styled-components";

// TODO: Change type to
export interface Props {
  name: string;
  text: string;
  value: string;
  type: string;
  errorMessage?: string;
  dataTestId?: string;
  onChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => void;
}

const FormRow: React.FC<Props> = ({
  name,
  text,
  value,
  type,
  errorMessage,
  dataTestId,
  onChangeHandler
}) => {
  return (
    <Row>
      <Label htmlFor={name}>{text}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        onChange={event => onChangeHandler(event, name)}
        value={value}
      />
      {errorMessage && (
        <ErrorMessage data-testid={dataTestId}>{errorMessage}</ErrorMessage>
      )}
    </Row>
  );
};

// TODO: Find a better way to create a space between the rows
const Row = styled.div`
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
  color: #f2426c;
  font-weight: bold;
`;

export default FormRow;
