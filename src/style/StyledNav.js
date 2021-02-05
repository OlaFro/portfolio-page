import styled from "styled-components";
import { Menu, X } from "styled-icons/feather";

export const StyledNav = styled.nav`
  width: 100%;
  height: 30rem;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.theme4.hero};
  z-index: 10;
  box-shadow: 0px 0px 5px black;
  display: flex;
  align-items: center;

  @media (min-width: 1550px) {
    height: 5rem;
  }
  border: 1px solid yellow;
`;

export const StyledNavContainer = styled.div`
  width: 95%;
  height: 100%;
  margin: auto;
  border: 1px solid red;
  display: grid;
  grid-template-rows: 4rem auto;
  align-items: center;

  @media (min-width: 1550px) {
    grid-template-columns: 4rem auto;
  }
`;

export const StyledNavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: auto;
  font-size: 1.5rem;
  border: 1px solid blue;

  a {
    text-decoration: none;
  }

  > a > div {
    margin: 0.5rem 0;
  }
  @media (min-width: 1550px) {
    margin: auto;
    flex-direction: row;
    width: 50%;
  }
`;

export const StyledMenu = styled(Menu)`
  height: 2rem;
  color: ${(props) => props.theme.theme4.about};
  border: 1px solid green;

  @media (max-width: 1550px) {
    display: block;
  }
  @media (min-width: 1550px) {
    /* display: none; */
  }
`;

export const StyledExit = styled(X)`
  height: 2rem;
  color: ${(props) => props.theme.theme4.about};
  padding-left: 2rem;
  display: none;
`;
