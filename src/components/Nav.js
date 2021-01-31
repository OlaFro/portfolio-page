import React from "react";
import { NavHashLink } from "react-router-hash-link";
import {
  StyledNav,
  StyledNavContainer,
  StyledButton,
} from "../style/StyledNav";

export default function Nav() {
  return (
    <StyledNavContainer>
      <StyledNav>
        <NavHashLink smooth to="#home">
          <StyledButton Home> Home</StyledButton>
        </NavHashLink>
        <NavHashLink smooth to="#about">
          <StyledButton About> About</StyledButton>
        </NavHashLink>
        <NavHashLink smooth to="#skills">
          <StyledButton Skills> Skills</StyledButton>
        </NavHashLink>
        <NavHashLink smooth to="#projects">
          <StyledButton Projects> Projects</StyledButton>
        </NavHashLink>
        <NavHashLink smooth to="#footer">
          <StyledButton Contact> Contact</StyledButton>
        </NavHashLink>
      </StyledNav>
    </StyledNavContainer>
  );
}
