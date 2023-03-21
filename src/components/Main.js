import styled from "styled-components";
import Card from "./Card";

function Main() {
  const Main = styled.div`
    height: 400px;

    @media screen and (max-width: 1023px) {
      margin-top: 80px;
      display: flex;
      justify-content: center;
    }
    @media screen and (min-width: 1024px) {
      height: 400px;
      margin-left: 20em;
      margin-right: 18em;
      margin-top: 10em;
    }
  `;
  return (
    <Main>
      <Card />
    </Main>
  );
}

export default Main;
