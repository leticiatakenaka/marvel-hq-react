import styled from "styled-components";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { MainStyle } from "../MainStyle";
import Cards from "./Cards";
import Button from "./Button";
import ActiveButton from "./ActiveButton";

const CardsStyle = styled.div`
  display: grid;
  min-height: 45em;
  justify-content: start;
  gap: 25px;

  @media screen and (max-width: 1023px) {
    justify-content: center;
    grid-template-columns: 12em 12em;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 200px 200px 200px 200px 200px 200px;
  }
`;

const PaginationStyle = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export function Main() {
  const { page } = useParams();

  const [pageNumber, setpageNumber] = useState(page ? parseInt(page) : 1);

  return (
    <MainStyle>
      <h2>MARVEL COMICS</h2>
      <CardsStyle>
        <Cards />
      </CardsStyle>
      <PaginationStyle>
        {pageNumber === 1 ? (
          <>
            <ActiveButton item={pageNumber} />
            <Button item={pageNumber + 1} />
            <Button item={pageNumber + 2} />
            <Button item={pageNumber + 3} />
            <Button item={pageNumber + 4} />
            <Button item={"próximo"} action={"next"} />
          </>
        ) : (
          <>
            <Button item={"anterior"} action={"back"} />
            {pageNumber !== 2 ? <Button item={pageNumber - 2} /> : null}
            <Button item={pageNumber - 1} />
            <ActiveButton item={pageNumber} />
            <Button item={pageNumber + 1} />
            <Button item={pageNumber + 2} />
            <Button item={"próximo"} action={"next"} />
          </>
        )}
      </PaginationStyle>
    </MainStyle>
  );
}
