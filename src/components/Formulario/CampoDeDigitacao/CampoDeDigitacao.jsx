import React from "react";
import styled from "styled-components";

const CampoWrapper = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  color: #212529;
`;

const Input = styled.input`
  border: 1px solid #ced4da;
  padding: 7px 13px;
  background-color: transparent;
  width: 100%;

  font-family: Montserrat;
  font-size: 18px;
  line-height: 27px;
  color: #6c757d;

  &:focus {
    outline: none;
    border-color: #0d6efd;
  }
`;

function CampoDeDigitacao({ id, label, type, value, onChange, placeholder }) {
  return (
    <CampoWrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </CampoWrapper>
  );
}

export default CampoDeDigitacao;
