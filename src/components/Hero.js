import React from "react";
import { StyledCard, ArrowDown, StyledH1 } from "../style/StyledCard";
import { StyledHeroContainer, StyledCursor } from "../style/StyledHero";

export default function Hero(props) {
  return (
    <div id="home">
      <StyledCard zIndex="6" hero>
        <StyledHeroContainer>
          <StyledH1>{String.fromCharCode(123)}</StyledH1>
          <StyledH1>
            ola frost<br></br>full stack web developer
          </StyledH1>

          <StyledH1>{String.fromCharCode(125)}</StyledH1>
          <StyledCursor />
        </StyledHeroContainer>
        <ArrowDown />
      </StyledCard>
    </div>
  );
}
