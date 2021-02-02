import React from "react";
import { StyledCard, ArrowDown, StyledH1, StyledH2 } from "../style/StyledCard";
import { StyledHeroContainer } from "../style/StyledHero";
import olafrost from "../img/olafrost.svg";

export default function Hero(props) {
  return (
    <div id="home">
      <StyledCard height="75vh" zIndex="6" hero>
        <StyledHeroContainer>
          <img src={olafrost} alt="logo" width="700" />
        </StyledHeroContainer>
        <ArrowDown />
      </StyledCard>
    </div>
  );
}
