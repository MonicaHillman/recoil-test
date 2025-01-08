import styled from "styled-components";
import user from "../../assets/user.png";

const TituloContainer = styled.div`
  padding-bottom: 24px;
  border-bottom: 1px solid #0d6efd;
  width: 100%;
  text-align: center;

  img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 104px;
    height: 104px;
    border: 2px dashed #ccc;
    border-radius: 8px;
    cursor: pointer;
    transition: border-color 0.2s ease;
    margin: 0 auto 16px;
  }

  h2 {
    font-family: Montserrat;
    font-size: 26px;
    font-weight: 700;
    line-height: 39px;
    color: #0d6efd;
  }
`;


function Titulo({ titulo }) {
  return (
    <TituloContainer>
    <img src={user} alt="Usuário" />
    <h2>{titulo}</h2>
  </TituloContainer>
  );
}

export default Titulo;
