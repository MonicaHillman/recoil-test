import styled from "styled-components";
import logo from "../../assets/Logo.svg";

const HeaderWrapper = styled.header`
  margin-bottom: 40px;
`;

 function Header() {
  return (
    <HeaderWrapper>
      <img src={logo} alt="Logo" />
    </HeaderWrapper>
  );
}

export default Header;