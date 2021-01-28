import React from "react";
import { StyledCard, ArrowDown, StyledH1 } from "../style/StyledCard";

export default function Projects() {
  return (
    <div id="projects">
      <StyledCard height="75vh" color="#F58549" zIndex="3">
        <StyledH1>projects</StyledH1>
        <ArrowDown />
      </StyledCard>
    </div>
  );
}
