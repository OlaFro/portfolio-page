import React from "react";
import { StyledCard, ArrowDown, StyledH1 } from "../style/StyledCard";
import {
  StyledProjectsContainer,
  StyledFlex,
  StyledProject,
} from "../style/StyledProjects";

export default function Projects() {
  return (
    <div id="projects">
      <StyledCard height="150vh" color="#F58549" zIndex="3" projects>
        <StyledProjectsContainer>
          <StyledH1>projects</StyledH1>
          <StyledFlex>
            <StyledProject>
              <div style={{ backgroundColor: "white" }}></div>
              <div style={{ backgroundColor: "black" }}></div>
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
