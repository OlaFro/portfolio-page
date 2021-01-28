import React from "react";
import { StyledCard, ArrowDown, StyledH1 } from "../style/StyledCard";

export default function Hero() {
  return (
    <div id="home">
      <StyledCard height="85vh" color="#585123" zIndex="6">
        <StyledH1>Hello, I'm Full-Stack h1</StyledH1>
        <ArrowDown />
      </StyledCard>
    </div>
  );
}
