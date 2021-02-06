import React from "react";
import { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import {
  StyledNavLinks,
  StyledNav,
  StyledNavContainer,
  StyledMenu,
  StyledExit,
} from "../style/StyledNav";
import { StyledButton } from "../style/StyledCard";

export default function Nav(props) {
  const [open, setOpen] = useState(0);

  const handleOpen = () => {
    setOpen(1);
  };

  const handleClose = () => {
    setOpen(0);
  };

  return (
    <StyledNav>
      <StyledNavContainer>
        <StyledExit onClick={handleClose} display={open} />
        <StyledMenu onClick={handleOpen} display={open} />
        <StyledNavLinks display={open}>
          <NavHashLink smooth to="#home">
            <StyledButton Home onClick={handleClose} display={open}>
              {" "}
              Home
            </StyledButton>
          </NavHashLink>
          <NavHashLink smooth to="#about">
            <StyledButton About onClick={handleClose} display={open}>
              {" "}
              About
            </StyledButton>
          </NavHashLink>
          <NavHashLink smooth to="#skills">
            <StyledButton Skills onClick={handleClose} display={open}>
              {" "}
              Skills
            </StyledButton>
          </NavHashLink>
          <NavHashLink smooth to="#projects">
            <StyledButton Projects onClick={handleClose} display={open}>
              {" "}
              Projects
            </StyledButton>
          </NavHashLink>
          <NavHashLink smooth to="#footer">
            <StyledButton Contact onClick={handleClose} display={open}>
              {" "}
              Contact
            </StyledButton>
          </NavHashLink>
        </StyledNavLinks>
      </StyledNavContainer>
    </StyledNav>
  );
}
