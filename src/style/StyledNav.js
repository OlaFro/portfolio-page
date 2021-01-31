import styled from "styled-components";

export const StyledNavContainer = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.theme4.hero};
  padding: 1rem 0;
  z-index: 10;
  box-shadow: 1px 1px 5px black;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: auto;
  font-size: 1.5rem;
`;

export const StyledButton = styled.div`
  color: ${(props) => props.theme.theme4.projects};
  text-decoration: none;
  padding: 5px 15px;
  margin: 0;
  font-size: 1.2rem;
  height: 2rem;
  width: 3rem;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 0;
  /* border: 2px solid ${(props) => props.theme.theme4.projects}; */

  ::after {
    content: "";
    background-color: ${(props) => props.theme.theme4.projects};
    position: absolute;
    left: -25%;
    width: 7rem;
    height: 3rem;
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 250ms ease-in;
    z-index: 1;
  }

  ::before {
    ${(props) => {
      if (props.Home) {
        return `content: "Home"`;
      } else if (props.About) {
        return `content: "About"`;
      } else if (props.Skills) {
        return `content: "Skills"`;
      } else if (props.Projects) {
        return `content: "Projects"`;
      } else {
        return `content: "Contact"`;
      }
    }};
    position: absolute;
    opacity: 0;
  }

  :hover {
    color: transparent;

    ::after {
      transform: scaleY(1);
      transform-origin: bottom;
    }
    ::before {
      color: black;
      opacity: 1;
      z-index: 2;
    }

    :active {
      outline: none;
    }
  }
`;
