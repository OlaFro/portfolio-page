import React from "react";
import { StyledH1 } from "../style/StyledCard";
import { StyledFooter } from "../style/StyledFooter";
export default function Footer() {
  return (
    <div id="footer">
      <StyledFooter height="40vh" color="#772F1A" zIndex="2">
        <StyledH1>footer</StyledH1>
      </StyledFooter>
    </div>
  );
}
