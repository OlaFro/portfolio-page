import React from "react";
import { StyledCard, ArrowDown, StyledH1 } from "../style/StyledCard";
import {
  StyledProjectsContainer,
  StyledFlex,
  StyledProject,
  StyledPic,
  StyledDescription,
  StyledTitle,
  StyledBody,
  StyledIconContainer,
  StyledCodepen,
} from "../style/StyledProjects";

export default function Projects() {
  return (
    <div id="projects">
      <StyledCard height="200vh" color="#F58549" zIndex="3" projects>
        <StyledProjectsContainer>
          <StyledH1>projects</StyledH1>
          <StyledFlex>
            <StyledProject>
              <StyledPic project1 />
              <StyledDescription>
                <StyledTitle>Toggle button</StyledTitle>
                <StyledBody>
                  This is toggle button that I styled in CSS. Visit my CodePen
                  to see the project!
                </StyledBody>
                <StyledIconContainer>
                  <StyledCodepen />
                </StyledIconContainer>
              </StyledDescription>
            </StyledProject>
            <StyledProject />
            <StyledProject />
            <StyledProject />
            <StyledProject />
            <StyledProject />
          </StyledFlex>
          <ArrowDown />
        </StyledProjectsContainer>
      </StyledCard>
    </div>
  );
}
