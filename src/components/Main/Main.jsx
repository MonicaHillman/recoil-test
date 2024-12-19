import Header from "../Header/Header";
import './Main.css';
import contact from '../../assets/contacts.png';
import addIcon from '../../assets/icon.svg';
import cat from '../../assets/cat.jpg';


import CampoDeDigitacao from "../CampoDeDigitacao/CampoDeDigitacao";
import ItemDaLista from "../ItemDaLista/ItemDaLista";

export default function Main () {

    return (
        <div className="content">
            <Header />
            <main>
                <img src={contact} alt="Contatos" />
                <h1>Organize, <span className="titulo-destaque">conecte,</span> simplifique!</h1>

                <CampoDeDigitacao type="text" placeholder="Digite para buscar" />

                <button className="add__contato">
                    <img src={addIcon} />
                    Criar novo contato
                </button>

                <div className="contatos">
                    <h2 className="contatos__titulo">A</h2>

                    <ul className="contatos__list">
                        <ItemDaLista nome="gatito" telefone="123456789" imagem={cat}/>

                    </ul>

                </div>
            </main>
        </div>
    )
}