import styled from "styled-components";

import { MainStyle } from "../MainStyle";
import CartButton from "./CartButton";

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../service/api";
import { HASH, PUBLIC_KEY } from "../../service/env";

const Section = styled.div`
  margin-top: 3em;
  text-align: start;
  gap: 2em;

  @media screen and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 4.5em;
    margin-right: 4.5em;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 500px 500px;
    justify-content: center;
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

const Breadcrumbs = styled.ul`
  list-style: none;
  padding: 0;
  & > li:after {
    content: "${(props) => props.separator || "/"}";
    padding: 0 8px;
  }
`;

const Crumb = styled.li`
  display: inline-block;

  &:last-of-type:after {
    content: "";
    padding: 0;
  }

  a {
    color: #e23636;
    text-decoration: none;
    &:hover,
    &:active {
      text-decoration: underline;
    }
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
      <Breadcrumbs>
        <Crumb>
          <Link to="/"> MARVEL COMICS</Link>
        </Crumb>
        <Crumb>{comic.title}</Crumb>
      </Breadcrumbs>

      <Section>
        {comic ? (
          <>
            {Object.keys(comic.images) > 1 ? (
              <img
                src={`${comic.images[0].path}/portrait_uncanny.${comic.images[0].extension}`}
                alt="images_comics"
              ></img>
            ) : (
              <img
                src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`}
                alt="images_comics"
              ></img>
            )}
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
