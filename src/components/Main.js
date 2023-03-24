import styled from "styled-components";
import Cards from "./Cards";
import Button from "./Button";
import { useState } from "react";
import ActiveButton from "./ActiveButton";

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
  const [page, setPage] = useState(1);

  return (
    <MainStyle>
      <h3>HQ'S MARVEL</h3>
      <CardsStyle>
        <Cards />
      </CardsStyle>
      <PaginationStyle>
        <ActiveButton item={page} />
        <Button item={page + 1} />
        <Button item={page + 2} />
        <Button item={page + 3} />
        <Button item={page + 4} />
        <Button item={"próximo"} />
      </PaginationStyle>
    </MainStyle>
  );
}

export default Main;
