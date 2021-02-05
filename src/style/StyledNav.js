import styled from "styled-components";
import { Menu, X } from "styled-icons/feather";

export const StyledNavContainer = styled.nav`
  width: 100%;
  height: 5rem;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.theme4.hero};
  z-index: 10;
  box-shadow: 0px 0px 5px black;
  display: flex;
  align-items: center;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: auto;
  font-size: 1.5rem;
  a {
    text-decoration: none;
  }
  @media (max-width: 1550px) {
    display: none;
  }

  @media (min-width: 1550px) {
    display: flex;
    align-items: center;
  }
`;

export const StyledMenu = styled(Menu)`
  height: 2rem;
  /* color: ${(props) => props.theme.theme4.about}; */
  color: white;
  padding-left: 2rem;

  @media (max-width: 1550px) {
    display: block;
  }
  @media (min-width: 1550px) {
    display: none;
  }
`;

export const StyledExit = styled(X)`
  height: 2rem;
  color: ${(props) => props.theme.theme4.about};
  padding-left: 2rem;
  display: none;
`;
