import styled from "styled-components";
import { MainStyle } from "../MainStyle";
import { Section } from "../Section";
import { useEffect, useState } from "react";
import api from "../../service/api";
import { HASH, PUBLIC_KEY } from "../../service/env";

const Left = styled.table`
  min-width: 28em;
`;

const Right = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #efefef;
`;

const Container = styled(Section)`
  @media screen and (min-width: 1024px) {
    grid-template-columns: 700px 250px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Aside = styled.div`
  display: flex;
  flex-direction: column;
`;

const BuyButton = styled.div`
  background-color: #f78f3f;
  border: none;
  color: #000000;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 2em;
  cursor: pointer;
`;

export function Main() {
  const [comicsList, setComicsList] = useState([]);
  const itemsLS = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    itemsLS.forEach((element) => {
      api
        .get(
          `/v1/public/comics/${element}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`
        )
        .then((response) => {
          setComicsList([...response.data.data.results]);
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    });
  }, []);

  return (
    <MainStyle>
      <h2>Carrinho de compras</h2>
      <Container>
        <Left>
          <thead>
            <tr>
              <th style={{ textAlign: "left" }}>Produto</th>
              <th style={{ textAlign: "right" }}>Preço</th>
              <th style={{ textAlign: "right" }}>Subtotal</th>
            </tr>
          </thead>
          <tbody style={{ border: "1px solid" }}>
            <tr style={{ border: "1px solid" }}>
              {comicsList.map((comic, i) => (
                <>
                  <td key={i}>
                    <p>{comic.title}</p>
                    <img
                      src={`${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension}`}
                      alt="comic_image"
                    ></img>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    {"$ "}
                    {comic.prices[0].price}
                  </td>
                  <td style={{ textAlign: "right" }}>
                    {" "}
                    {comic.prices[0].price}
                  </td>
                </>
              ))}
            </tr>
          </tbody>
        </Left>
        <Right>
          <h3>Resumo</h3>
          <Aside>
            <Row>
              <p>Sub-total</p>
              <p>$ 20</p>
            </Row>
            <Row>
              <p>Frete</p>
              <p>$ 20</p>
            </Row>
            <Row>
              <p>Total do Pedido</p>
              <p>$ 20</p>
            </Row>
            <BuyButton>Finalizar Compra</BuyButton>
          </Aside>
        </Right>
      </Container>
    </MainStyle>
  );
}
