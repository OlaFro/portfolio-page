import styled from "styled-components";
import me from "../img/me2.jpg";

export const StyledAboutContainer = styled.div`
  width: 60%;
  height: 80%;
`;

export const StyledAboutGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 23rem auto;
  grid-template-areas:
    "img text1"
    "text2 text2";
`;

export const StyledPortrait = styled.div`
  width: 22rem;
  height: 22rem;
  /* background-image: url(${me}); */
  background-size: cover;
  grid-area: img;
`;
export const StyledAboutText1 = styled.div`
  grid-area: text1;
`;

export const StyledAboutText2 = styled.div`
  grid-area: text2;
`;
