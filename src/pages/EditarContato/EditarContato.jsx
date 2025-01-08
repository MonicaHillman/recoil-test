import {useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { useContatos } from "../../hooks/useContatos";
import Container from "../../components/Container/Container";
import Wrapper from "../../components/Wrapper/Wrapper";
import BotaoVoltar from "../../components/BotaoVoltar/BotaoVoltar";
import Formulario from "../../components/Formulario/Formulario";
import Titulo from "../../components/Titulo/Titulo";
import Header from "../../components/Header/Header";


function EditarContato() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { contatos, updateContato } = useContatos();
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    imagem: "",
  });

  // Carregar dados do contato atual
  useEffect(() => {
    const contatoAtual = contatos.find(
      (contato) => contato.id === parseInt(id)
    );
    if (contatoAtual) {
      setFormData(contatoAtual);
    }
  }, [id, contatos]);

  // Atualizar estado do formulário
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Submeter alterações
  const handleSubmit = (e) => {
    e.preventDefault();
    updateContato(id, formData)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Erro ao atualizar contato:", error);
      });
  };

  return (

    <Wrapper>
      <Header />
      <Container>
      <BotaoVoltar/>

        <Titulo>
          Editar contato
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

export default EditarContato;
