import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import api from "../service/api";
import { HASH, PUBLIC_KEY } from "../service/env";

const CardStyle = styled.div`
  height: 16em;
  width: 12em;
`;

function Cards() {
  const [comicsList, setComicsList] = useState([]);
  const { page } = useParams();

  useEffect(() => {
    let url;
    let limit = 18;
    if (page && page !== "1") {
      let offset = (parseInt(page) - 1) * limit;
      console.log(offset);
      url = `/v1/public/comics?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}&limit=${limit}&orderBy=-focDate&offset=${offset}`;
    } else {
      url = `/v1/public/comics?ts=1&apikey=8fed82c36a49172b887ffe0bc9cf8478&hash=11f5fb667b1fa98d74ae4798ee82031e&limit=${limit}&orderBy=-focDate`;
    }

    api
      .get(url)
      .then((response) => {
        console.log(response.data.data.results);
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
