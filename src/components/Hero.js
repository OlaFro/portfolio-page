import React from "react";
import { StyledCard, ArrowDown, StyledTitle } from "../style/StyledCard";

export default function Hero() {
  return (
    <div id="home">
      <StyledCard height="85vh" color="#585123" zIndex="6">
        <StyledTitle>Oh, hi!</StyledTitle>
        <ArrowDown />
      </StyledCard>
    </div>
  );
}
