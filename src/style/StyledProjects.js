import styled from "styled-components";

export const StyledProjectsContainer = styled.div`
  display: grid;
  grid-template-rows: 20% auto;
  width: 80%;
  height: 80%;
  border: 1px solid black;
`;

export const StyledFlex = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 3rem;
  border: 1px solid blue;
  justify-content: space-evenly;
`;

export const StyledProject = styled.div`
  height: 25rem;
  width: 20rem;
  background-color: grey;
  display: grid;
  grid-template-rows: repeat(2, 50%);
`;
