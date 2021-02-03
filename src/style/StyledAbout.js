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
