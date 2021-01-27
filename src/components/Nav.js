import React from "react";
import { NavHashLink } from "react-router-hash-link";

export default function Nav() {
  return (
    <div>
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
    </div>
  );
}
