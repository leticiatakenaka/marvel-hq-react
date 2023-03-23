import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../service/api";

const CardStyle = styled.div`
  background: #efefef;
  height: 16em;
  width: 12em;

  @media screen and (max-width: 1023px) {
  }
`;
const CardTextStyle = styled.div`
  @media screen and (max-width: 1023px) {
    display: flex;
    justify-content: space-between;
  }
`;

function Cards() {
  const [comicsList, setComicsList] = useState([]);

  useEffect(() => {
    api
      .get(
        "/v1/public/comics?ts=1&apikey=8fed82c36a49172b887ffe0bc9cf8478&hash=11f5fb667b1fa98d74ae4798ee82031e&limit=12"
      )
      .then((response) => {
        setComicsList([...response.data.data.results]);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <>
      {comicsList.map((comic) => (
        <div key={comic.id} className="item">
          <CardStyle />
          <CardTextStyle>
            <h5>{comic.title}</h5>
          </CardTextStyle>
        </div>
      ))}
    </>
  );
}

export default Cards;
