import styled from "styled-components";
import me from "../img/me2.jpg";

export const StyledAboutContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  width: 80%;
  height: 80%;
`;

export const StyledPortrait = styled.div`
  width: 22rem;
  height: 22rem;
  /* background-image: url(${me}); */
  background-size: cover;
  grid-area: img;
`;
