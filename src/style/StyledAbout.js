import styled from "styled-components";

export const StyledAboutContainer = styled.div`
  width: 60%;
  height: 80%;

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
  font-size: 40rem;
  color: ${(props) => props.theme.theme4.footer};
  margin: 0;
  font-weight: 100;
  padding-bottom: 65px;
`;

export const StyledAboutFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
`;
