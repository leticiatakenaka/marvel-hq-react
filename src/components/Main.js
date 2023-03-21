import styled from "styled-components";
import Card from "./Card";
import api from "../service/api";
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
  useEffect(() => {
    api
      .get(
        "/v1/public/stories?ts=1&apikey=8fed82c36a49172b887ffe0bc9cf8478&hash=11f5fb667b1fa98d74ae4798ee82031e"
      )
      .then((response) => console.log(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  return (
    <MainStyle>
      <Card />
    </MainStyle>
  );
}

export default Main;
