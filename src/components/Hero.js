import React from "react";
import { StyledCard, ArrowDown, StyledH1, StyledH2 } from "../style/StyledCard";
import { StyledHeroContainer } from "../style/StyledHero";

export default function Hero() {
  return (
    <div id="home">
      <StyledCard height="85vh" color="#585123" zIndex="6">
        <StyledHeroContainer>
          <StyledH1> &lt; Hej /&gt;</StyledH1>
          <StyledH2 title="hero">
            My name is Ola and I'm certified <br></br>Full-Stack Web Developer.
          </StyledH2>
          <ArrowDown />
        </StyledHeroContainer>
      </StyledCard>
    </div>
  );
}
