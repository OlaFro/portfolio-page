import React from "react";
import { StyledH1 } from "../style/StyledCard";
import {
  StyledFooter,
  StyledContactContainer,
  StyledContact,
} from "../style/StyledFooter";
import { StyledGithub } from "../style/StyledProjects";
import { StyledLinkedIn } from "../style/StyledFooter";
export default function Footer() {
  return (
    <div id="footer">
      <StyledFooter height="40vh" color="#772F1A" zIndex="2">
        {/* <StyledH1>Contact</StyledH1> */}
        <StyledContactContainer>
          <StyledContact>Ola Frost</StyledContact>
          <StyledContact>hello@olafrost.com</StyledContact>
          <StyledContact>+49 (0) 17627962504</StyledContact>
          <StyledContact>04177 Leipzig, Germany</StyledContact>
          <a href="https://github.com/OlaFro/">
            <StyledGithub footer />
          </a>
          <a href="https://www.linkedin.com/in/ola-frost/">
            <StyledLinkedIn />
          </a>
        </StyledContactContainer>
      </StyledFooter>
    </div>
  );
}
