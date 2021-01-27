import React from "react";
import { StyledCard, ArrowDown } from "../style/StyledCard";

export default function Hero() {
  return (
    <div id="about">
      <StyledCard title="hero" height="85vh" color="#585123" zIndex="5">
        <ArrowDown />
      </StyledCard>
    </div>
  );
}
