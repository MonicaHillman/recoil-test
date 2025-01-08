import React from "react";
import styled from "styled-components";
import editIcon from "../../../../assets/pencil-square.svg";
import deleteIcon from "../../../../assets/trash.svg";
import { NavLink } from "react-router-dom";
import { useContatos } from "../../../../hooks/useContatos";

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8px 0;
`;

const Perfil = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const PerfilImagem = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const PerfilTitulo = styled.p`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  color: #212529;
`;

const Telefone = styled.p`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  color: #212529;
`;

const Icones = styled.div`
  display: flex;
  gap: 16px;
`;

const BotaoBase = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;

  img {
    width: 18px;
    height: 18px;
  }
`;

const BotaoEditar = styled(NavLink)`
  ${BotaoBase} 
`;

const BotaoExcluir = styled(BotaoBase)``;

function ItemDaLista({ id, nome, telefone, imagem }) {
  const { deleteContato } = useContatos();

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      `Você tem certeza que deseja excluir o contato: ${nome}?`
    );

    if (confirmDelete) {
      deleteContato(id)
        .then(() => {
          alert(`Contato ${nome} deletado com sucesso.`);
        })
        .catch(() => {
          alert(`Aconteceu uma falha em deletar o contato: ${nome}`);
        });
    }
  };

  return (
    <ListItem>
      <Perfil>
        <PerfilImagem src={imagem} alt={nome} />
        <PerfilTitulo>{nome}</PerfilTitulo>
      </Perfil>

      <Telefone>{telefone}</Telefone>

      <Icones>
        <BotaoEditar to={`/editar/${id}`}>
          <img src={editIcon} alt="Editar" />
        </BotaoEditar>
        <BotaoExcluir onClick={handleDelete}>
          <img src={deleteIcon} alt="Excluir" />
        </BotaoExcluir>
      </Icones>
    </ListItem>
  );
}

export default ItemDaLista;
