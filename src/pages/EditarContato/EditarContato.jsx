import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import "./EditarContato.css"; // Can reuse the same styles
import voltarIcon from "../../assets/arrow-left.svg";
import user from "../../assets/user.png";
import { useContatos } from '../../hooks/useContatos';
import CampoDeDigitacao from "../../components/CampoDeDigitacao/CampoDeDigitacao";

function EditarContato() {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const { contatos, updateContato } = useContatos();
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    imagem: ''
  });

  useEffect(() => {
    const contatoAtual = contatos.find(contato => contato.id === parseInt(id));
    if (contatoAtual) {
      setFormData(contatoAtual);
    }
  }, [id, contatos]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    updateContato(id, formData)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error('Erro ao atualizar contato:', error);
      });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="conteudo">
      <Header />
      <main>
        <NavLink to="/" className="botao__voltar">
          <img src={voltarIcon} alt="Voltar" />
          Voltar
        </NavLink>

        <div className="cadastro__container">
          <img src={user} alt="Usuário" />
          <h2 className="cadastro__titulo">Editar contato</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <CampoDeDigitacao
            id="imagem"
            label="Link da Imagem"
            type="url"
            value={formData.imagem}
            onChange={handleInputChange}
            placeholder="Cole o link da imagem"
          />

          <CampoDeDigitacao 
            id="nome"
            label="Nome"
            type="text"
            value={formData.nome}
            onChange={handleInputChange}
            placeholder="Digite o nome do contato"
          />
          
          <CampoDeDigitacao
            id="telefone"
            label="Número"
            type="tel"
            value={formData.telefone}
            onChange={handleInputChange}
            placeholder="Digite o número do telefone"
          />

          <div className="cadastro__botoes">
            <button 
              className="cadastro__botao"
              onClick={handleCancel}
            >
              Cancelar
            </button>
            <button 
              type="submit"
              className="cadastro__botao cadastro__botao-salvar"
            >
              Salvar alterações
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default EditarContato;