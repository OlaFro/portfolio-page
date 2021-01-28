import React from "react";
import { StyledCard, ArrowDown, StyledTitle } from "../style/StyledCard";

export default function Footer() {
  return (
    <div id="footer">
      <StyledCard height="75vh" color="#772F1A" zIndex="2" footer="true">
        <StyledTitle>footer</StyledTitle>
        <ArrowDown />
      </StyledCard>
    </div>
  );
}
