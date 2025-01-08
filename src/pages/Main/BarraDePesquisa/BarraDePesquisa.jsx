
import styled from "styled-components";

const InputPesquisa = styled.input`
  border: 1px solid #ced4da;
  padding: 7px 13px;
  background-color: transparent;
  width: 100%;

  font-family: Montserrat;
  font-size: 18px;
  line-height: 27px;
  color: #6c757d;

  &:focus {
    outline: none;
    border-color: #0d6efd;
  }
`;

function BarraDePesquisa({ onSearch }) {
  return (
    <InputPesquisa
      type="text"
      placeholder="Pesquisar contatos"
      onChange={onSearch}
    />
  );
}

export default BarraDePesquisa;
