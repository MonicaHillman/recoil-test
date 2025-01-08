import styled from "styled-components";
import { NavLink } from "react-router-dom";
import voltarIcon from "../../assets/icon.svg"; // Altere o caminho para onde está o ícone

const Botao = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  color: #0d6efd;
  text-decoration: none;

  img {
    width: 14px;
    height: 14px;
  }
`;

function BotaoVoltar() {
  return ( 
  <Botao to="/">
    <img src={voltarIcon} alt="Voltar" />
    Voltar
  </Botao>
  )
}

export default BotaoVoltar;
