import styled from "styled-components";
import { KeyboardArrowDown } from "styled-icons/material-twotone/";

// styles for the card components

export const StyledCard = styled.div`
  background-color: ${(props) => {
    if (props.hero) {
      return props.theme.theme4.hero;
    } else if (props.about) {
      return props.theme.theme4.about;
    } else if (props.skills) {
      return props.theme.theme4.skills;
    } else {
      return props.theme.theme4.projects;
    }
  }};

  width: 100%;
  min-height: ${(props) => props.height};
  z-index: ${(props) => props.zIndex};
  color: white;
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15);

  ::before {
    content: "";
    background-color: inherit;
    height: 5rem;
    width: 5rem;
    position: absolute;
    bottom: -2.5rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 9999px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
      0 16px 16px rgba(0, 0, 0, 0.12);
  }

  ::after {
    content: "";
    background-color: inherit;
    width: 6rem;
    height: 2.5rem;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
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
  font-size: 5rem;
  margin: 20px;
  padding: 10px;
  font-family: "Raleway", sans-serif;
  font-weight: 900;
  text-align: center;
  text-shadow: 0 6px 5px rgba(0, 0, 0, 0.3);
  /* text-decoration: wavy underline ${(props) =>
    props.theme.theme4.projects}; */
  cursor: pointer;
`;

export const StyledH2 = styled.h2`
  font-size: 2.2rem;
  margin: 10px;
  padding: 1rem;
  text-align: center;
  line-height: 1.15;
  font-family: "Raleway", sans-serif;
  font-weight: 300;

  ${(props) => {
    if (props.title === "hero") {
      return `margin-top: -2rem`;
    }
  }}
`;

export const StyledText = styled.p`
  font-size: 2rem;
  color: ${(props) => (props.skills ? "white" : "grey")};
  padding: 1rem;
`;
