import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import BarraDePesquisa from "./BarraDePesquisa/BarraDePesquisa";
import BotaoAdicionar from "./BotaoAdicionar/BotaoAdicionar";
import ListaDeContatos from "./ListaDeContatos/ListaDeContatos";
import contact from "../../assets/contacts.png";
import { useContatos } from "../../hooks/useContatos";
import Wrapper from "../../components/Wrapper/Wrapper";
import styled from "styled-components";

const ImagemContato = styled.img`
  width: 250px;
  margin: 0 auto;
`;

const Titulo = styled.h1`
  border-bottom: 1px solid #0d6efd;
  padding-bottom: 24px;

  font-size: 26px;
  font-weight: 400;
  font-family: Zen Dots;
  color: #0d6efd;
  text-align: center;
  line-height: 39px;

  span {
    color: #fd9843;
  }
`;

const MainContainer = styled.main`
display: flex;
  flex-direction: column;

  gap: 40px;

  min-width: 416px;
`



function Main() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { contatos } = useContatos(); 

  const filteredContacts = useMemo(() => {
    const searchLower = search.trim().toLowerCase();
    return searchLower
      ? contatos.filter((contact) =>
          contact.nome.toLowerCase().includes(searchLower)
        )
      : contatos;
  }, [search, contatos]);

  return (
    <Wrapper>
      <Header />
      <MainContainer>
        <ImagemContato src={contact} alt="Contatos" className="imagem-contato" />
        <Titulo>
          Organize, <span className="titulo-destaque">conecte,</span> simplifique!
        </Titulo>


        <BarraDePesquisa onSearch={(e) => setSearch(e.target.value)} />

        <BotaoAdicionar onClick={() => navigate("/cadastro")} />

        <ListaDeContatos contatosIniciais={filteredContacts} />
      </MainContainer>
    </Wrapper>
  );
}

export default Main;
