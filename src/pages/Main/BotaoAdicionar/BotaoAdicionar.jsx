import React from "react";
import styled from "styled-components";
import addIcon from "../../../assets/icon.svg";

const AddButton = styled.button`
  background-color: transparent;
  border: 1px solid #0d6efd;
  padding: 6px;
  display: flex;
  align-items: center;
  gap: 8px;

  width: fit-content;
  margin: 0 auto;

  color: #0d6efd;

  font-family: Montserrat;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;

  cursor: pointer;

  &:hover {
    background-color: #e9f5ff; 
  }
`;

function BotaoAdicionar({ onClick }) {
  return (
    <AddButton onClick={onClick}>
      <img src={addIcon} alt="Add" />
      Criar novo contato
    </AddButton>
  );
}

export default BotaoAdicionar;