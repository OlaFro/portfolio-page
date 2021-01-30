import styled from "styled-components";

export const StyledAboutContainer = styled.div`
  width: 60%;
  height: 80%;
`;

export const StyledAboutGrid = styled.div`
  display: grid;
  grid-gap: 5rem;
  grid-template-areas:
    "img text1"
    "text2 text2";
`;

export const StyledPortrait = styled.div`
  width: 20rem;
  height: 20rem;
  background-color: grey;
  grid-area: img;
`;
export const StyledAboutText1 = styled.div`
  grid-area: text1;
`;

export const StyledAboutText2 = styled.div`
  grid-area: text2;
`;
