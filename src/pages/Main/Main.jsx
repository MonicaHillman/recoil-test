import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import BarraDePesquisa from "../../components/BarraDePesquisa/BarraDePesquisa";
import BotaoAdicionar from "../../components/BotaoAdicionar/BotaoAdicionar";
import ListaDeContatos from "../../components/ListaDeContatos/ListaDeContatos";
import contact from "../../assets/contacts.png";
import { useContatos } from "../../hooks/useContatos";
import "./Main.css";

function Main() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { contatos, fetchContatos } = useContatos();

  useEffect(() => {
    fetchContatos();
  }, []);

  const filteredContacts = useMemo(() => {
    return search.trim()
      ? contatos.filter((contact) =>
          contact.nome.toLowerCase().includes(search.toLowerCase())
        )
      : contatos;
  }, [search, contatos]);



  return (
    <div className="conteudo">
      <Header />
      <main>
        <img src={contact} alt="Contatos" class="imagem-contato"/>
        <h1>
          Organize, <span className="titulo-destaque">conecte,</span> simplifique!
        </h1>

        <BarraDePesquisa onSearch={(e) => setSearch(e.target.value)} />
        <BotaoAdicionar onClick={() => navigate("/cadastro")} />
        <ListaDeContatos contatosIniciais={filteredContacts} />
      </main>
    </div>
  );
}

export default Main;
