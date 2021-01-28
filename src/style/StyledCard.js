import styled from "styled-components";
import { KeyboardArrowDown } from "styled-icons/material-twotone/";

export const StyledCard = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  z-index: ${(props) => props.zIndex};
  color: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  ::before {
    background-color: ${(props) => props.color};
    height: 5rem;
    width: 5rem;
    position: absolute;
    bottom: -2.5rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 9999px;
    ${(props) => {
      if (!props.footer) {
        return `content: ""`;
      }
    }}
  }
`;

export const ArrowDown = styled(KeyboardArrowDown)`
  color: white;
  height: 2rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  bottom: -1.8rem;
  transform: translateX(-50%);
  transition: bottom 250ms ease-in-out;
  :hover {
    color: yellow;
    bottom: -2rem;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 20rem;
  color: white;
  margin: 0;
  font-family: "Raleway", sans-serif;
  font-weight: 900;
`;

export const StyledNav = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 40px;
  width: 50%;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  margin: auto;
  font-size: 1.5rem;
  margin-top: -2rem;

  a {
    text-decoration: none;
    color: white;
  }
`;
