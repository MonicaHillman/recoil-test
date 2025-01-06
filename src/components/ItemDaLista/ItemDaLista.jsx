import React from "react";
import { useContatos } from "../../hooks/useContatos";
import "./ItemDaLista.css";
import editIcon from "../../assets/pencil-square.svg";
import deleteIcon from "../../assets/trash.svg";
import { useNavigate } from "react-router-dom";

function ItemDaLista({ id, nome, telefone, imagem }) {
  const { deleteContato } = useContatos();

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/editar/${id}`)
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(`Você tem certeza que deseja excluir o contato: ${nome}?`);
    
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
    <li className="contatos__list-item" key={id}>
      <div className="list-item__perfil">
        <img src={imagem} alt={nome} className="perfil__imagem" />
        <p className="perfil__titulo">{nome}</p>
      </div>

      <p className="list-item__telefone">{telefone}</p>

      <div className="list-item__icones">
        <button onClick={handleEdit} className="icones__botao">
          <img src={editIcon} alt="Editar" />
        </button>
        <button onClick={handleDelete} className="icones__botao">
          <img src={deleteIcon} alt="Excluir" />
        </button>
      </div>
    </li>
  );
}

export default ItemDaLista;
