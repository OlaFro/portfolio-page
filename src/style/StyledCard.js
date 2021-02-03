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
  min-height: auto;
  /* min-height: ${(props) => props.height}; */
  z-index: ${(props) => props.zIndex};
  color: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: start;
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
  color: ${(props) => {
    if (props.about) {
      return props.theme.theme4.footer;
    } else {
      return props.theme.theme4.about;
    }
  }};
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
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 1rem;
`;

export const StyledH2 = styled.h2`
  font-size: 32px;
  margin: 10px 0;
  /* padding: 1rem; */
  text-align: center;
  line-height: 1.15;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 3px;

  text-transform: uppercase;
  color: ${(props) => {
    if (props.about) {
      return props.theme.theme4.footer;
    } else {
      return `white`;
    }
  }};
`;

export const StyledH3 = styled.h3`
  color: ${(props) => {
    if (props.footer) {
      return props.theme.theme4.about;
    } else {
      return props.theme.theme4.footer;
    }
  }};
  font-family: "Raleway", sans-serif;
  font-weight: 900;
  margin: 0 0 10px 0;
  font-size: 1.2rem;
`;

export const StyledText = styled.p`
  font-size: 1.1rem;
  color: ${(props) =>
    props.skills ? props.theme.theme4.about : props.theme.theme4.skills};
  padding: 1rem;
`;

export const StyledBody = styled.div`
  color: ${(props) => {
    if (props.footer) {
      return props.theme.theme4.about;
    } else {
      return props.theme.theme4.footer;
    }
  }};
  ${(props) => {
    if (props.pin) {
      return `display: inline`;
    }
  }};
`;

// Button style

export const StyledButton = styled.div`
  color: ${(props) => props.theme.theme4.about};
  text-decoration: none;
  padding: 5px 15px;
  margin: 0;
  height: 2rem;
  width: auto;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 1rem;
  border: 1px solid white;
  transition: background-color 200ms ease-in-out;

  :hover {
    background-color: ${(props) => props.theme.theme4.projects};
    color: ${(props) => props.theme.theme4.hero};
    border: 1px solid transparent;

    :active {
      outline: none;
    }
  }
`;
