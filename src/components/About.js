import React from "react";
import { StyledCard, ArrowDown, StyledText } from "../style/StyledCard";

export default function About() {
  return (
    <div id="about">
      <StyledCard height="125vh" color="#EEC170" zIndex="5" about>
        <StyledText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </StyledText>
        <ArrowDown />
      </StyledCard>
    </div>
  );
}
