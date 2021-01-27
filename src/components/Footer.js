import React from "react";
import { StyledCard, ArrowDown, StyledTitle } from "../style/StyledCard";

export default function Footer() {
  return (
    <div id="footer">
      <StyledCard height="75vh" color="#772F1A" zIndex="5" footer="true">
        <StyledTitle>Footer</StyledTitle>
        <ArrowDown />
      </StyledCard>
    </div>
  );
}
