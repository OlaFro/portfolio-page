import styled from "styled-components";
import project1 from "../img/project1.png";
import { Codepen } from "styled-icons/boxicons-logos";

export const StyledProjectsContainer = styled.div`
  display: grid;
  grid-template-rows: 15% auto;
  width: 80%;
  height: 80%;
`;

export const StyledFlex = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 3rem;
  justify-content: space-evenly;
`;

export const StyledProject = styled.div`
  height: 40rem;
  width: 20rem;
  background-color: grey;
  display: grid;
  grid-template-rows: repeat(2, 50%);
`;

export const StyledPic = styled.div`
  background-image: url(${project1});
  background-position: center;
  border: 10px solid white;
`;

export const StyledDescription = styled.div`
  background-color: ${(props) => props.theme.theme4.about};
  padding: 20px;
`;

export const StyledTitle = styled.h3`
  color: ${(props) => props.theme.theme4.footer};
  font-family: "Raleway", sans-serif;
  font-weight: 900;
`;

export const StyledBody = styled.span`
  color: ${(props) => props.theme.theme4.footer};
`;

export const StyledIconContainer = styled.div`
  padding: 0.5rem 0;
`;

export const StyledCodepen = styled(Codepen)`
  color: ${(props) => props.theme.theme4.footer};
  height: 2rem;
  width: 2rem;
`;
