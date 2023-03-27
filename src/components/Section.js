import styled from "styled-components";

export const Section = styled.div`
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
