import React from "react";
import { StyledCard, ArrowDown, StyledH1 } from "../style/StyledCard";

export default function About() {
  return (
    <div id="about">
      <StyledCard height="85vh" color="#EEC170" zIndex="5">
        <StyledH1>about</StyledH1>
        <ArrowDown />
      </StyledCard>
    </div>
  );
}
