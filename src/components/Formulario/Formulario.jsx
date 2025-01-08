import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import CampoDeDigitacao from "./CampoDeDigitacao/CampoDeDigitacao";

const FormularioEstilizado = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 3rem;
`;

const ContainerBotoes = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-top: 20px;
`;

const BotaoCancelar = styled(NavLink)`
  width: 50%;
  text-align: center;
  padding: 6px 0;
  background-color: transparent;
  border: 1px solid #0d6efd;
  color: #0d6efd;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    background-color: #e9f5ff;
  }
`;

const BotaoSalvar = styled.button`
  width: 50%;
  padding: 6px 0;
  background-color: #0d6efd;
  color: white;
  border: none;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;

function Formulario({ formData, onChange, onSubmit }) {
  return (
    <FormularioEstilizado onSubmit={onSubmit}>
      <CampoDeDigitacao
        id="imagem"
        label="Link da Imagem"
        type="url"
        value={formData.imagem}
        onChange={onChange}
        placeholder="Cole o link da imagem"
      />

      <CampoDeDigitacao
        id="nome"
        label="Nome"
        type="text"
        value={formData.nome}
        onChange={onChange}
        placeholder="Digite o nome do contato"
      />

      <CampoDeDigitacao
        id="telefone"
        label="Número"
        type="tel"
        value={formData.telefone}
        onChange={onChange}
        placeholder="Digite o número do telefone"
      />

      <ContainerBotoes>
        <BotaoCancelar to="/">Cancelar</BotaoCancelar>
        <BotaoSalvar type="submit">Salvar alterações</BotaoSalvar>
      </ContainerBotoes>
    </FormularioEstilizado>
  );
}

export default Formulario;
