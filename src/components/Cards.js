import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../service/api";

const CardStyle = styled.div`
  height: 16em;
  width: 12em;
`;

function Cards() {
  const [comicsList, setComicsList] = useState([]);

  useEffect(() => {
    api
      .get(
        "/v1/public/comics?ts=1&apikey=8fed82c36a49172b887ffe0bc9cf8478&hash=11f5fb667b1fa98d74ae4798ee82031e&limit=15"
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
          <CardStyle>
            <img
              src={comic.thumbnail.path + "/portrait_fantastic.jpg"}
              alt="comic thumbnail"
            />
          </CardStyle>
          <h5>{comic.title}</h5>
          <h5>${comic.prices[0].price}</h5>
        </div>
      ))}
    </>
  );
}

export default Cards;
