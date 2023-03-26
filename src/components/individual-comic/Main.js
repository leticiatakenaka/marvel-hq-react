import styled from "styled-components";

import { MainStyle } from "../MainStyle";
import CartButton from "./CartButton";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../service/api";
import { HASH, PUBLIC_KEY } from "../../service/env";

export const Section = styled.div`
  margin-top: 3em;
  display: flex;
  text-align: start;

  @media screen and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    gap: 2em;
    margin-left: 4.5em;
    margin-right: 4.5em;
  }

  @media screen and (min-width: 1024px) {
    justify-content: space-around;
  }
`;

const Price = styled.h2`
  color: #f78f3f;
  font-weight: bold;
`;

const Description = styled.p`
  max-width: 60vh;
`;

export function Main() {
  const { comicId } = useParams();

  const [comic, setComic] = useState("");

  useEffect(() => {
    api
      .get(
        `/v1/public/comics/${comicId}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`
      )
      .then((response) => {
        setComic(...response.data.data.results);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  console.log(comic);

  return (
    <MainStyle style={{ minHeight: "58em" }}>
      <p>MARVEL COMICS {">"} ATUAL</p>
      <Section>
        {comic ? (
          <>
            <img
              src={`${comic.images[0].path}/portrait_uncanny.${comic.images[0].extension}`}
              alt="images_comics"
            ></img>
            <div className="details">
              <h2>{comic.title}</h2>
              <Price>
                {"$ "}
                {comic.prices[0].price}
              </Price>
              <Description>{comic.description}</Description>
              <CartButton />
            </div>
          </>
        ) : null}
      </Section>
    </MainStyle>
  );
}
