import React from "react";
import { StyledCard, ArrowDown, StyledTitle } from "../style/StyledCard";

export default function Projects() {
  return (
    <div id="hero">
      <StyledCard height="75vh" color="#F58549" zIndex="2">
        <StyledTitle>projects</StyledTitle>
        <ArrowDown />
      </StyledCard>
    </div>
  );
}
