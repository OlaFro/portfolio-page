import styled from "styled-components";
import { keyframes } from "styled-components";

const blink = keyframes`
0% {
  opacity: 0
}
100% {
  opacity: 1
}
`;

export const StyledHeroContainer = styled.div`
  margin: 10rem;
  width: 70%;

  display: grid;
  justify-content: center;
  align-items: center;

  @media (min-width: 425px) {
    margin: 10rem auto;
    width: 100%;
  }
`;

export const StyledCursor = styled.span`
  margin: 3rem 0;
  height: 1rem;
  width: 3px;
  background-color: ${(props) => props.theme.theme4.about};
  animation-name: ${blink};
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
`;
