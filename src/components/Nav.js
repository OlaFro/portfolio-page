import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { StyledNav, StyledNavContainer } from "../style/StyledNav";

export default function Nav() {
  return (
    <StyledNavContainer>
      <StyledNav>
        <NavHashLink smooth to="#home">
          Home
        </NavHashLink>
        <NavHashLink smooth to="#about">
          About
        </NavHashLink>
        <NavHashLink smooth to="#skills">
          Skills
        </NavHashLink>
        <NavHashLink smooth to="#projects">
          Projects
        </NavHashLink>
        <NavHashLink smooth to="#footer">
          Footer
        </NavHashLink>
      </StyledNav>
    </StyledNavContainer>
  );
}
