import React from "react";
import { StyledH2, StyledH3, StyledBody } from "../style/StyledCard";
import {
  StyledFooter,
  StyledFooterContainer,
  StyledContact,
} from "../style/StyledFooter";
import { StyledGithub } from "../style/StyledProjects";
import { StyledLinkedIn, StyledPin } from "../style/StyledFooter";
export default function Footer() {
  return (
    <div id="footer">
      <StyledFooter color="#772F1A" zIndex="2">
        <StyledFooterContainer>
          <StyledH2>Contact</StyledH2>
          <StyledContact>
            <div>
              <StyledH3 footer>Ola Frost</StyledH3>
              <a href="mailto:hello@olafrost.com">
                <StyledBody footer>hello@olafrost.com</StyledBody>
              </a>
              <StyledBody footer>+49 (0) 17627962504</StyledBody>
            </div>
            <div>
              <StyledPin />{" "}
              <StyledBody footer pin>
                Leipzig, Germany
              </StyledBody>
            </div>
            <div>
              <a href="https://github.com/OlaFro/">
                <StyledGithub footer />
              </a>
              <a href="https://www.linkedin.com/in/ola-frost/">
                <StyledLinkedIn />
              </a>
            </div>
          </StyledContact>
        </StyledFooterContainer>
      </StyledFooter>
    </div>
  );
}
