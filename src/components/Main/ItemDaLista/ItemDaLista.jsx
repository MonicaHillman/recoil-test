import "./ItemDaLista.css";
import editIcon from '../../../assets/pencil-square.svg';
import deleteIcon from '../../../assets/trash.svg';

export default function ItemDaLista({ nome, telefone, imagem }) {
    return (
        <li className="contatos__list-item">
        <div className="list-item__perfil">
                <img src={imagem} alt="Contato" className="perfil__imagem"/>
                <p className="perfil__titulo">{nome}</p>
        </div>

        <p className="list-item__telefone">{telefone}</p>

        <div className="list-item__icones">
                <img src={editIcon} alt="Editar" />
                <img src={deleteIcon} alt="Excluir" />
        
        </div>
    </li>
    )}
