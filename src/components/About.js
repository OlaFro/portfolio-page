import React from "react";
import {
  StyledCard,
  ArrowDown,
  StyledH3,
  StyledBody,
  StyledText,
} from "../style/StyledCard";
import {
  StyledAboutContainer,
  StyledAboutGrid,
  StyledPortrait,
  StyledAboutText1,
  StyledAboutText2,
} from "../style/StyledAbout";

export default function About() {
  return (
    <div id="about">
      <StyledCard height="100vh" color="#EEC170" zIndex="5" about>
        <StyledAboutContainer>
          <StyledAboutGrid>
            <StyledPortrait />
            <StyledAboutText1>
              <StyledH3>Hi, my name is Ola</StyledH3>
              <StyledBody>
                and I'm passionate nad certified Full-Stack Web Developer. I
                work in MERN stack, but I'm eager to learn other technologies.
              </StyledBody>
              <StyledH3>Background</StyledH3>
              <StyledBody>
                As a graduate photographer and journalist I have several Years
                of experience in the creative field. So on the top of the
                programming skills I'm adding graphic skills and an eye for the
                smallest visual detail. My natural curiosity makes me getting to
                the bottom of things and left no question without an answer.
              </StyledBody>
              <StyledH3>Creativity</StyledH3>
              <StyledBody>
                I have an experience of being a founder my own brand{" "}
                <a href="http://www.etsy.com/faltblatt"> and </a>
              </StyledBody>
            </StyledAboutText1>
            <StyledAboutText2>
              <StyledBody>
                About about about about about, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum. About about about about about, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. About about about about about,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. About about
                about about about, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                About about about about about, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </StyledBody>
            </StyledAboutText2>
          </StyledAboutGrid>
        </StyledAboutContainer>
        <ArrowDown about />
      </StyledCard>
    </div>
  );
}
