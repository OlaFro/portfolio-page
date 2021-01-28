import React from "react";
import { StyledCard, ArrowDown, StyledH1 } from "../style/StyledCard";

export default function Skills() {
  return (
    <div id="skills">
      <StyledCard height="125vh" color="#F2A65A" zIndex="4">
        <StyledH1>skills</StyledH1>
        <ArrowDown />
      </StyledCard>
    </div>
  );
}
