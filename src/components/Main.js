import styled from "styled-components";
import Cards from "./Cards";

const CardsStyle = styled.div`
  display: grid;

  @media screen and (max-width: 1023px) {
    margin-top: 2em;
    justify-content: center;
    grid-template-columns: 12em 12em;
  }

  @media screen and (min-width: 1024px) {
    gap: 20px;
    margin-left: 20em;
    margin-right: 20em;
    margin-top: 4em;
    grid-template-columns: 200px 200px 200px 200px 200px;
  }
`;

const Title = styled.h3`
  @media screen and (min-width: 1024px) {
    margin-left: 17em;
    margin-top: 2em;
  }
  @media screen and (max-width: 1023px) {
    margin-left: 2em;
  }
`;

function Main() {
  return (
    <>
      <Title>HQ'S MARVEL</Title>
      <CardsStyle>
        <Cards />
      </CardsStyle>
    </>
  );
}

export default Main;
