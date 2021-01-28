import React from "react";
import { StyledCard, ArrowDown, StyledTitle } from "../style/StyledCard";

export default function About() {
  return (
    <div id="about">
      <StyledCard height="85vh" color="#EEC170" zIndex="4">
        <StyledTitle>about</StyledTitle>
        <ArrowDown />
      </StyledCard>
    </div>
  );
}
