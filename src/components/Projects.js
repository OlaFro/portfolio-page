import React from "react";
import { StyledCard, ArrowDown, StyledH1 } from "../style/StyledCard";
import {
  StyledProjectsContainer,
  StyledFlex,
  StyledProject,
  StyledPic,
  StyledDescription,
  StyledTitle,
  StyledBody,
  StyledIconContainer,
  StyledCodepen,
  StyledDeploy,
  StyledGithub,
  StyledTagContainer,
  StyledTag,
} from "../style/StyledProjects";

export default function Projects(props) {
  return (
    <div id="projects">
      <StyledCard height="210vh" color="#F58549" zIndex="3" projects>
        <StyledProjectsContainer>
          <StyledH1>projects</StyledH1>
          <StyledFlex>
            <StyledProject>
              <StyledPic project1 />
              <StyledDescription>
                <StyledTitle>Toggle button</StyledTitle>
                <StyledBody>
                  This is a toggle button that I've styled in CSS. Visit my
                  CodePen to see the project!
                </StyledBody>
                <StyledTagContainer>
                  <StyledTag>HTML5</StyledTag>
                  <StyledTag>CSS3</StyledTag>
                </StyledTagContainer>
                <StyledIconContainer>
                  <a href="https://codepen.io/olafro/pen/RwWXzob">
                    <StyledCodepen />
                  </a>
                </StyledIconContainer>
              </StyledDescription>
            </StyledProject>
            <StyledProject>
              <StyledPic project2 />
              <StyledDescription>
                <StyledTitle>Pomodoro Timer</StyledTitle>
                <StyledBody>Pomodoro Timer in Vanilla JavaScript</StyledBody>
                <StyledTagContainer>
                  <StyledTag>HTML5</StyledTag>
                  <StyledTag>CSS3</StyledTag>
                  <StyledTag>Vanila JS</StyledTag>
                </StyledTagContainer>
                <StyledIconContainer>
                  <a href="https://github.com/OlaFro/Pomodoro-Timer">
                    <StyledGithub />
                  </a>

                  <a href="https://olafro.github.io/Pomodoro-Timer/">
                    <StyledDeploy />
                  </a>
                </StyledIconContainer>
              </StyledDescription>
            </StyledProject>
            <StyledProject>
              <StyledPic project3 />
              <StyledDescription>
                <StyledTitle>To-do App</StyledTitle>
                <StyledBody>Done with ReactJS and class components</StyledBody>
                <StyledTagContainer>
                  <StyledTag>HTML5</StyledTag>
                  <StyledTag>CSS3</StyledTag>
                  <StyledTag>ReactJS</StyledTag>
                  <StyledTag>Class Components</StyledTag>
                </StyledTagContainer>
                <StyledIconContainer>
                  <a href="https://github.com/OlaFro/React-to-do">
                    <StyledGithub />
                  </a>

                  <a href="https://olafro.github.io/React-to-do/">
                    <StyledDeploy />
                  </a>
                </StyledIconContainer>
              </StyledDescription>
            </StyledProject>
            <StyledProject>
              <StyledPic project4 />
              <StyledDescription>
                <StyledTitle>Palette Generator</StyledTitle>
                <StyledBody>
                  Color palette generator done with ReactJS and hooks. Many
                  features like for example drag&drop and automatically
                  generated shades
                </StyledBody>
                <StyledTagContainer>
                  <StyledTag>HTML5</StyledTag>
                  <StyledTag>CSS3</StyledTag>
                  <StyledTag>ReactJS</StyledTag>
                  <StyledTag>Hooks</StyledTag>
                  <StyledTag>chroma.js</StyledTag>
                  <StyledTag>withStyles</StyledTag>
                </StyledTagContainer>
                <StyledIconContainer>
                  <a href="https://github.com/OlaFro/React-color-palette-generator">
                    <StyledGithub />
                  </a>

                  <a href="https://palette-generator.vercel.app/">
                    <StyledDeploy />
                  </a>
                </StyledIconContainer>
              </StyledDescription>
            </StyledProject>
            <StyledProject>
              <StyledPic project5 />
              <StyledDescription>
                <StyledTitle>Music recommendation app</StyledTitle>
                <StyledBody>
                  By consuming Spotify API this app will recommends songs based
                  on given factors like danceability or mood. Done with ReactJS
                  and Redux.
                </StyledBody>
                <StyledTagContainer>
                  <StyledTag>HTML5</StyledTag>
                  <StyledTag>CSS3</StyledTag>
                  <StyledTag>ReactJS</StyledTag>
                  <StyledTag>Hooks</StyledTag>
                  <StyledTag>Redux</StyledTag>
                  <StyledTag>Styled-Components</StyledTag>
                  <StyledTag>API</StyledTag>
                </StyledTagContainer>
                <StyledIconContainer>
                  <a href="https://github.com/OlaFro/SpotifyAPI">
                    <StyledGithub />
                  </a>

                  <a href="https://choosify.herokuapp.com/">
                    <StyledDeploy />
                  </a>
                </StyledIconContainer>
              </StyledDescription>
            </StyledProject>
            <StyledProject>
              <StyledPic project6 />
              <StyledDescription>
                <StyledTitle>Portfolio Page</StyledTitle>
                <StyledBody>
                  This site designed and built from scratch
                </StyledBody>
                <StyledTagContainer>
                  <StyledTag>HTML5</StyledTag>
                  <StyledTag>CSS3</StyledTag>
                  <StyledTag>ReactJS</StyledTag>
                  <StyledTag>Hooks</StyledTag>
                  <StyledTag>Styled-Components</StyledTag>
                </StyledTagContainer>
                <StyledIconContainer>
                  <a href="https://github.com/OlaFro/portfolio-page">
                    <StyledGithub />
                  </a>
                </StyledIconContainer>
              </StyledDescription>
            </StyledProject>
          </StyledFlex>
          <ArrowDown />
        </StyledProjectsContainer>
      </StyledCard>
    </div>
  );
}
