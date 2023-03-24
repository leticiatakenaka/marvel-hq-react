import styled from "styled-components";
import Cards from "./Cards";
import Button from "./Button";

const CardsStyle = styled.div`
  display: grid;

  @media screen and (max-width: 1023px) {
    margin-top: 2em;
    justify-content: center;
    grid-template-columns: 12em 12em;
  }

  @media screen and (min-width: 1024px) {
    gap: 20px;
    margin-top: 4em;
    grid-template-columns: 200px 200px 200px 200px 200px;
  }
`;

const MainStyle = styled.h3`
  @media screen and (min-width: 1024px) {
    margin-left: 17em;
    margin-top: 2em;
    margin-right: 17em;
  }
  @media screen and (max-width: 1023px) {
    margin-left: 2em;
  }
`;

const PaginationStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

function Main() {
  return (
    <MainStyle>
      <h3>HQ'S MARVEL</h3>
      <CardsStyle>
        <Cards />
      </CardsStyle>
      <PaginationStyle>
        <Button item={"anterior"} />
        <Button item={"1"} />
        <Button item={"2"} />
        <Button item={"3"} />
        <Button item={"4"} />
        <Button item={"5"} />
        <Button item={"próximo"} />
      </PaginationStyle>
    </MainStyle>
  );
}

export default Main;
