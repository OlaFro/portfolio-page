import React from "react";
import {
  StyledCard,
  ArrowDown,
  StyledH2,
  StyledH3,
  StyledBody,
} from "../style/StyledCard";
import {
  StyledProjectsContainer,
  StyledGrid,
  StyledProject,
  StyledPic,
  StyledDescription,
  StyledIconContainer,
  StyledCodepen,
  StyledDeploy,
  StyledGithub,
  StyledTagContainer,
  StyledTag,
} from "../style/StyledProjects";
import { NavHashLink } from "react-router-hash-link";

export default function Projects(props) {
  return (
    <div id="projects">
      <StyledCard color="#F58549" zIndex="3" projects>
        <StyledProjectsContainer>
          <StyledH2>projects</StyledH2>
          <StyledGrid>
            <StyledProject>
              <StyledPic project1 />
              <StyledDescription>
                <StyledH3>Toggle button</StyledH3>
                <StyledBody>
                  Custom toggle button made with psuedo-elements and styled in
                  CSS.
                </StyledBody>
                <StyledTagContainer>
                  <StyledTag>HTML5</StyledTag>
                  <StyledTag>CSS3</StyledTag>
                </StyledTagContainer>
                <StyledIconContainer>
                  <a
                    href="https://codepen.io/olafro/pen/RwWXzob"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <StyledCodepen />
                  </a>
                </StyledIconContainer>
              </StyledDescription>
            </StyledProject>
            <StyledProject>
              <StyledPic project2 />
              <StyledDescription>
                <StyledH3>Pomodoro Timer</StyledH3>
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
                  <a
                    href="https://github.com/OlaFro/Pomodoro-Timer"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <StyledGithub />
                  </a>

                  <a
                    href="https://olafro.github.io/Pomodoro-Timer/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <StyledDeploy />
                  </a>
                </StyledIconContainer>
              </StyledDescription>
            </StyledProject>
            <StyledProject>
              <StyledPic project3 />
              <StyledDescription>
                <StyledH3>To-do App</StyledH3>
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
                  <a
                    href="https://github.com/OlaFro/React-to-do"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <StyledGithub />
                  </a>

                  <a
                    href="https://olafro.github.io/React-to-do/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <StyledDeploy />
                  </a>
                </StyledIconContainer>
              </StyledDescription>
            </StyledProject>
            <StyledProject>
              <StyledPic project4 />
              <StyledDescription>
                <StyledH3>Palette Generator</StyledH3>
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
                  <a
                    href="https://github.com/OlaFro/React-color-palette-generator"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <StyledGithub />
                  </a>

                  <a
                    href="https://palette-generator.vercel.app/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <StyledDeploy />
                  </a>
                </StyledIconContainer>
              </StyledDescription>
            </StyledProject>
            <StyledProject>
              <StyledPic project5 />
              <StyledDescription>
                <StyledH3>Music recommendation app</StyledH3>
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
                  <a
                    href="https://github.com/OlaFro/SpotifyAPI"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <StyledGithub />
                  </a>

                  <a
                    href="https://choosify.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <StyledDeploy />
                  </a>
                </StyledIconContainer>
              </StyledDescription>
            </StyledProject>
            <StyledProject>
              <StyledPic project6 />
              <StyledDescription>
                <StyledH3>Portfolio Page</StyledH3>
                <StyledBody>
                  This website built from scratch with ReactJS.
                </StyledBody>
                <StyledTagContainer>
                  <StyledTag>JSX</StyledTag>
                  <StyledTag>Styled-Components</StyledTag>
                  <StyledTag>ReactJS</StyledTag>
                  <StyledTag>Hooks</StyledTag>
                </StyledTagContainer>
                <StyledIconContainer>
                  <a
                    href="https://github.com/OlaFro/portfolio-page"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <StyledGithub />
                  </a>
                </StyledIconContainer>
              </StyledDescription>
            </StyledProject>
          </StyledGrid>
          <NavHashLink smooth to="#footer">
            <ArrowDown projects />
          </NavHashLink>
        </StyledProjectsContainer>
      </StyledCard>
    </div>
  );
}
