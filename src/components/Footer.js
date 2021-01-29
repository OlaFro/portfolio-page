import React from "react";
import { StyledCard, ArrowDown, StyledH1 } from "../style/StyledCard";

export default function Footer() {
  return (
    <div id="footer">
      <StyledCard height="25vh" color="#772F1A" zIndex="2" footer="true">
        <StyledH1>footer</StyledH1>
        <ArrowDown />
      </StyledCard>
    </div>
  );
}
