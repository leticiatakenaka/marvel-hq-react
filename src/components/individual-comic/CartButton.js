import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const ButtonStyle = styled.button`
  appearance: none;
  background-color: #f78f3f;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0,
    rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292e;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  padding: 6px 16px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  item-wrap: break-item;
  color: white;

  &:focus {
    outline: 1px transparent;
  }

  &:before {
    display: none;
  }

  &:-webkit-details-marker {
    display: none;
  }
`;

const HandleAddCart = (id) => {
  const itemsLS = JSON.parse(localStorage.getItem("cart"));
  let itemsCart = [];

  if (itemsLS) {
    itemsCart = itemsLS;
  }

  itemsCart.push(id);

  localStorage.setItem("cart", JSON.stringify(itemsCart));
};

function CartButton() {
  const { comicId } = useParams();

  return (
    <>
      <ButtonStyle onClick={() => HandleAddCart(comicId)}>
        <FontAwesomeIcon style={{ marginRight: "8px" }} icon={faCartShopping} />
        Adicionar
      </ButtonStyle>
    </>
  );
}

export default CartButton;
