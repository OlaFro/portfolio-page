import styled from "styled-components";

export const StyledAboutContainer = styled.div`
  padding-top: 7rem;
  height: 80%;
  width: 60%;

  a {
    color: inherit;
    text-decoration: none;
    background-color: ${(props) => props.theme.theme4.projects};
    :hover {
      background-color: transparent;
    }
  }

  @media (max-width: 1440px) {
    width: 80%;
  }
`;

export const StyledBrackets = styled.p`
  color: ${(props) => props.theme.theme4.footer};
  margin: 0;
  font-weight: 100;

  @media (min-width: 1440px) {
    font-size: 40rem;
    padding-bottom: 65px;
  }
  @media (min-width: 1024px) {
    font-size: 20rem;
  }
  @media (max-width: 1024px) {
    font-size: 20vw;
  } ;
`;

export const StyledAboutFlex = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 7rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 5rem;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
