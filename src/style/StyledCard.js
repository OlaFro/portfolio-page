import styled from "styled-components";
import { KeyboardArrowDown } from "styled-icons/material-twotone/";

// styles for the card components

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
  box-shadow: 1px 1px 5px black;
  ${(props) => {
    if (props.footer) {
      return `padding-bottom: 4rem`;
    }
  }}

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
    box-shadow: 1px 1px 5px black;
  }

  ::after {
    content: "";
    background-color: inherit;
    width: 6rem;
    height: 3rem;
    position: absolute;
    bottom: 0;
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

// Typography styles

export const StyledH1 = styled.h1`
  font-size: 20rem;
  margin: 0;
  font-family: "Raleway", sans-serif;
  font-weight: 900;
  text-align: center;
  text-shadow: 6px 6px 5px rgba(0, 0, 0, 0.3);
`;

export const StyledH2 = styled.h2`
  font-size: 3rem;
  margin: 0;
  padding: 1rem;
  text-align: center;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.3);

  ${(props) => {
    if (props.title === "hero") {
      return `margin-top: -4rem`;
    }
  }}
`;
