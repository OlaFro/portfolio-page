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
  StyledTag,
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
                  This is a toggle button that I've styled in CSS. Visit my
                  CodePen to see the project!
                </StyledBody>
                <a href="https://codepen.io/olafro/pen/RwWXzob">
                  <StyledIconContainer>
                    <StyledCodepen />
                  </StyledIconContainer>
                </a>
                <div>
                  <StyledTag>HTML5</StyledTag>
                  <StyledTag>CSS3</StyledTag>
                </div>
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
