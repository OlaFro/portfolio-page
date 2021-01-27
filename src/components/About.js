import React from "react";
import { StyledCard, ArrowDown, StyledTitle } from "../style/StyledCard";
import { HashLink } from "react-router-hash-link";

export default function About() {
  return (
    <div id="about">
      <StyledCard height="85vh" color="#EEC170" zIndex="4">
        <HashLink to="/about">
          <StyledTitle>about</StyledTitle>
        </HashLink>
        <ArrowDown />
      </StyledCard>
    </div>
  );
}
