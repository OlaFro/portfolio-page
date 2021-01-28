import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { StyledNav } from "../style/StyledCard";

export default function Nav() {
  return (
    // <div></div>
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
  );
}
