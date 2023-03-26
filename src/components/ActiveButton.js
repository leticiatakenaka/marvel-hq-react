import React from "react";
import styled from "styled-components";

const ActiveButtonStyle = styled.div`
  & {
    appearance: none;
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 6px;
    box-sizing: border-box;
    color: #24292e;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    list-style: none;
    padding: 6px 16px;
    position: relative;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    white-space: nowrap;
    word-wrap: break-word;
    background-color: #edeff2;
    box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
    transition: none 0s;
  }

  &:hover {
    background-color: #f3f4f6;
    text-decoration: none;
    transition-duration: 0.1s;
  }

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

function ActiveButton(props) {
  return <ActiveButtonStyle>{props.item}</ActiveButtonStyle>;
}

export default ActiveButton;
