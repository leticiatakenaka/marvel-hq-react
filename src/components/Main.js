import styled from "styled-components";
import Cards from "./Cards";

const MainStyle = styled.div`
  height: 9em;
  gap: 20px;
  display: grid;

  @media screen and (max-width: 1023px) {
    margin-top: 2em;
    justify-content: center;
    grid-template-columns: 11em 11em;
  }

  @media screen and (min-width: 1024px) {
    margin-left: 20em;
    margin-right: 20em;
    margin-top: 7em;
    grid-template-columns: 200px 200px 200px 200px 200px;
  }
`;

function Main() {
  return (
    <MainStyle>
      <Cards />
    </MainStyle>
  );
}

export default Main;
