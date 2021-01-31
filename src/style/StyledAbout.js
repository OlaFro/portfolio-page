import styled from "styled-components";
import me from "../img/me2.jpg";

export const StyledAboutContainer = styled.div`
  width: 60%;
  height: 100%;
  border: 1px solid red;
`;

export const StyledPortrait = styled.div`
  width: 22rem;
  height: 22rem;
  /* background-image: url(${me}); */
  background-size: cover;
  grid-area: img;
`;
