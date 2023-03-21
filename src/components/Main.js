import styled from "styled-components";
import Card from "./Card";
import { client } from "../service/api";
import { useEffect } from "react";

const MainStyle = styled.div`
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

function Main() {
  return (
    <MainStyle>
      <Card />
    </MainStyle>
  );
}

export default Main;
