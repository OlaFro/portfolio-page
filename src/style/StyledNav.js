import styled from "styled-components";
import { Menu, X } from "styled-icons/feather";

export const StyledNav = styled.nav`
  width: 100%;
  height: auto;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.theme4.hero};
  z-index: 10;
  box-shadow: 0px 0px 5px black;
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
`;

export const StyledNavContainer = styled.div`
  width: 95%;
  height: 100%;
  margin: auto;
  display: grid;
  grid-template-rows: 4rem auto;
  align-items: center;

  @media (min-width: 1400px) {
    grid-template-columns: 4rem auto;
    grid-template-rows: auto 0;
    margin-bottom: 0rem;
  }
`;

export const StyledNavLinks = styled.nav`
  flex-direction: column;
  justify-content: space-around;
  width: auto;
  font-size: 1.5rem;
  display: ${(props) => (props.display ? "flex" : "none")};
  a {
    text-decoration: none;
  }

  > a > div {
    margin: 0.5rem 0;
    width: 7rem;
  }

  @media (min-width: 1400px) {
    display: flex;
    margin: auto;
    flex-direction: row;
    width: 70%;
    height: 100%;
    align-items: center;
  }
`;

export const StyledMenu = styled(Menu)`
  height: 3rem;
  color: ${(props) => props.theme.theme4.about};
  cursor: pointer;
  display: ${(props) => (props.display ? "none" : "flex")};

  @media (min-width: 1400px) {
    opacity: 0;
  }
`;

export const StyledExit = styled(X)`
  height: 2.5rem;
  color: ${(props) => props.theme.theme4.about};
  cursor: pointer;
  display: ${(props) => (props.display ? "flex" : "none")};
  @media (min-width: 1400px) {
    opacity: 0;
  }
`;
