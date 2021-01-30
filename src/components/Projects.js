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
      <StyledCard height="180vh" color="#F58549" zIndex="3" projects>
        <StyledProjectsContainer>
          <StyledH1>projects</StyledH1>
          <StyledFlex>
            <StyledProject>
              <StyledPic project1 />
              <StyledDescription>
                <StyledTitle>Toggle button</StyledTitle>
                <StyledBody>
                  Custom toggle button made with psuedo-elements and styled in
                  CSS.
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
                <StyledBody>
                  A tool counting down a time amount given by the user in
                  multiple sessions. Done in Vanilla JavaScript.
                </StyledBody>
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
                <StyledBody>
                  An app to keep track on task. An option to edit and set task
                  as done. Made with ReactJS and class components.
                </StyledBody>
                <StyledTagContainer>
                  <StyledTag>JSX</StyledTag>
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
                  Color palette generator made with ReactJS and Hooks. Many
                  different features: drag&drop or automatically generated
                  shades.
                </StyledBody>
                <StyledTagContainer>
                  <StyledTag>JSX</StyledTag>
                  <StyledTag>withStyles</StyledTag>
                  <StyledTag>ReactJS</StyledTag>
                  <StyledTag>Hooks</StyledTag>
                  <StyledTag>chroma.js</StyledTag>
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
                  on given factors like danceability or mood. Done with ReactJS,
                  Redux and Express.js.
                </StyledBody>
                <StyledTagContainer>
                  <StyledTag>JSX</StyledTag>
                  <StyledTag>Styled-Components</StyledTag>
                  <StyledTag>ReactJS</StyledTag>
                  <StyledTag>Hooks</StyledTag>
                  <StyledTag>Redux</StyledTag>
                  <StyledTag>API</StyledTag>
                  <StyledTag>Express.js</StyledTag>
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
                  This website built from scratch with ReactJS.
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
