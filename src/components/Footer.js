import React from "react";
import { StyledCard, ArrowDown } from "../style/StyledCard";

export default function Footer() {
  return (
    <div id="hero">
      <StyledCard
        title="footer"
        height="25vh"
        color="#772F1A"
        zIndex="5"
        footer="true"
      >
        <ArrowDown />
      </StyledCard>
    </div>
  );
}
