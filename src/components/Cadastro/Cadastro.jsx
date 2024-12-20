import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
import voltarIcon from "../../assets/arrow-left.svg";
import user from "../../assets/user.png";
import adicionarIcon from "../../assets/gray-add.png";
import { useState } from "react";
import "./Cadastro.css";

export default function Cadastro() {

    const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };


    
    return (
        <div className="content">
        <Header />

        <main>
            <NavLink to="/" className="botao__voltar">
                <img src={voltarIcon} />
                    Voltar
            </NavLink>
        

<div className="cadastro__container">
        <img src={user} alt="Usuário" />
        <h2 className="cadastro__titulo">Adicionar contato</h2>
</div>
        <form>
        <div className="wrapper">
      <label 
        htmlFor="file-upload"
        className="label"
      >
        <div className="button-content">
          <div className="icon">
            <img src={adicionarIcon} />
          </div>
          {fileName ? (
            <span className="text">{fileName}</span>
          ) : (
            <>
              <span className="text">Adicione a imagem do contato</span>
            </>
          )}
        </div>
        <input
          id="file-upload"
          type="file"
          className="input"
          accept="image/*"
          onChange={handleFileChange}
        />
      </label>
    </div>

    <div class="cadastro__campo">
    <label for="nome" class="cadastro__label">Nome</label>
    <input type="text" id="nome" placeholder="Digite o nome do contato" class="cadastro__input"/>
</div>

<div class="cadastro__campo">
    <label for="telefone" class="cadastro__label">Número</label>
    <input type="tel" id="telefone" placeholder="Digite o número do telefone" class="cadastro__input"/>
</div>

            <div className="cadastro__botoes">
            <button className="cadastro__botao">Cancelar</button>
            <button className="cadastro__botao cadastro__botao-salvar">Salvar contato</button>
            </div>
        </form>

        </main>
        </div>
    )
}