import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const HeaderStyle = styled.div`
  display: flex;
  background: #f78f3f;
  height: 8vh;
  align-items: center;
  justify-content: space-around;

  @media screen and (min-width: 1024px) {
    height: 13vh;
    align-items: center;
  }
`;

function Header() {
  return (
    <HeaderStyle>
      <p>LOGO</p>
      <FontAwesomeIcon icon={faCartShopping} />
    </HeaderStyle>
  );
}

export default Header;
