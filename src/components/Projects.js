import React from "react";
import { StyledCard, ArrowDown, StyledH1 } from "../style/StyledCard";

export default function Projects() {
  return (
    <div id="projects">
      <StyledCard height="25vh" color="#F58549" zIndex="3" projects>
        <StyledH1>projects</StyledH1>
        <ArrowDown />
      </StyledCard>
    </div>
  );
}
