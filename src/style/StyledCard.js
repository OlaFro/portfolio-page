import styled from "styled-components";
import { KeyboardArrowDown } from "styled-icons/material-twotone/";

export const StyledCard = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  z-index: ${(props) => props.zIndex};
  color: white;
  position: relative;
  /* ${(props) => {
    if (props.hero) {
      return `background-image: url(https://images.unsplash.com/photo-1483470134942-13bbf4677d84?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
        background-attachment: fixed;
        background-size: cover
        background-repeat: no-repeat`;
    }
  }}; */

  ::before {
    content: "";
    background-color: ${(props) => props.color};
    height: 5rem;
    width: 5rem;
    position: absolute;
    bottom: -2.5rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 9999px;
    /* ${(props) => {
      if (!props.footer) {
        return `content: ""`;
      }
    }} */
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
  font-size: 30rem;
  color: white;
  margin-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledNav = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 30px;
  width: 60%;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  margin: auto;
  a {
    text-decoration: none;
    color: white;
  }
`;
