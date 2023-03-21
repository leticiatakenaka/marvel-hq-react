import styled from "styled-components";

const NavStyle = styled.div`
  display: flex;
  align-items: center;
  background: #efefef;

  @media screen and (max-width: 1023px) {
    justify-content: center;
    height: 2vh;
    font-size: 12px;
  }

  @media screen and (min-width: 1024px) {
    height: 4vh;
    justify-content: start;
    font-size: 14px;
  }
`;

const ItemsStyle = styled.div`
  display: flex;
  gap: 16px;

  @media screen and (max-width: 1023px) {
    justify-content: center;
  }

  @media screen and (min-width: 1024px) {
    margin-left: 24vh;
  }
`;

function Nav() {
  return (
    <NavStyle>
      <ItemsStyle>
        <p>Fale Conosco</p>
        <p>Meus Pedidos</p>
      </ItemsStyle>
    </NavStyle>
  );
}

export default Nav;
