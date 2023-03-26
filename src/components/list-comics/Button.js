import styled from "styled-components";

import { useParams, useNavigate } from "react-router-dom";

const ButtonStyle = styled.button`
  appearance: none;
  background-color: #fafbfc;
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
  font-size: 14px;
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
  word-wrap: break-word;

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

function Button(props) {
  const { page } = useParams();
  const navigate = useNavigate();

  const handleNext = (pg) => {
    let increasePage = parseInt(pg) + 1;
    navigate(`/page/${increasePage}`);
    //reload
    navigate(0);
  };

  const handleBack = (pg) => {
    let decreasePage = parseInt(pg) - 1;
    navigate(`/page/${decreasePage}`);
    //reload
    navigate(0);
  };

  const handleClick = (pg) => {
    if (props.action === "next") {
      handleNext(page || 1);
    } else if (props.action === "back") {
      handleBack(page);
    } else {
      navigate(`/page/${props.item}`);
      //reload
      navigate(0);
    }
  };

  return <ButtonStyle onClick={() => handleClick()}>{props.item}</ButtonStyle>;
}

export default Button;
