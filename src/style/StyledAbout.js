import styled from "styled-components";

export const StyledAboutContainer = styled.div`
  padding-top: 7rem;
  height: 80%;
  width: 80%;

  a {
    color: inherit;
    text-decoration: none;
    background-color: ${(props) => props.theme.theme4.projects};
    :hover {
      background-color: transparent;
    }
  }
`;

export const StyledBrackets = styled.p`
  color: ${(props) => props.theme.theme4.footer};
  margin: 0;
  font-weight: 100;
  font-size: 20vw;

  @media (min-width: 1024px) {
    font-size: 20rem;
  }
  @media (min-width: 1440px) {
    font-size: 40rem;
    padding-bottom: 65px;
  }
`;

export const StyledAboutFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 7rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 5rem;
  }
`;
