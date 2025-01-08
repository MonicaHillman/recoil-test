import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

import { useContatos } from "../../hooks/useContatos";
import Wrapper from "../../components/Wrapper/Wrapper";
import Container from "../../components/Container/Container";
import BotaoVoltar from "../../components/BotaoVoltar/BotaoVoltar";
import Formulario from "../../components/Formulario/Formulario";
import Titulo from "../../components/Titulo/Titulo";


function Cadastro() {
  const navigate = useNavigate();
  const { addContatos } = useContatos();
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    imagem: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContatos(formData)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Erro ao adicionar contato:", error);
      });
  };


  return (
    <Wrapper>
      <Header />
      <Container>
        <BotaoVoltar/>


        <Titulo>
        Adicionar contato
        </Titulo>

        <Formulario
            formData={formData}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
          />
      </Container>
    </Wrapper>
  );
}

export default Cadastro;
