import React from "react";
import { StyledCard, ArrowDown } from "../style/StyledCard";

export default function About() {
  return (
    <div id="hero">
      <StyledCard title="about" height="85vh" color="#EEC170" zIndex="4">
        <ArrowDown />
      </StyledCard>
    </div>
  );
}
