import styled from "styled-components";

import { MainStyle } from "../MainStyle";
import CartButton from "./CartButton";

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../service/api";
import { HASH, PUBLIC_KEY } from "../../service/env";

const Section = styled.div`
  margin-top: 3em;
  display: flex;
  text-align: start;
  gap: 2em;

  @media screen and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    margin-left: 4.5em;
    margin-right: 4.5em;
  }

  @media screen and (min-width: 1024px) {
    justify-content: space-around;
    min-width: 45em;
  }
`;

const Price = styled.h2`
  color: #f78f3f;
  font-weight: bold;
`;

const Description = styled.p`
  max-width: 60vh;
`;

const BreadCrumbs = styled.ul`
  padding: 10px 16px;
  list-style: none;
  background-color: #eee;

  li {
    display: inline;
    font-size: 18px;
  }

  li a {
    color: #0275d8;
    text-decoration: none;
  }

  li a:hover {
    color: #01447e;
    text-decoration: underline;
  }
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
      <BreadCrumbs>
        <li>
          <Link to="/"> MARVEL COMICS</Link>
        </li>
        <li>{comic.title}</li>
      </BreadCrumbs>

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