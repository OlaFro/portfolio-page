import React from "react";
import {
  StyledCard,
  ArrowDown,
  StyledH2,
  StyledText,
} from "../style/StyledCard";
import {
  StyledAboutContainer,
  StyledAboutFlex,
  StyledBrackets,
} from "../style/StyledAbout";

export default function About() {
  return (
    <div id="about">
      <StyledCard color="#EEC170" zIndex="5" about>
        <StyledAboutContainer>
          <StyledH2 about>About</StyledH2>
          <StyledAboutFlex>
            <StyledBrackets>
              {String.fromCharCode(123)}
              {String.fromCharCode(125)}
            </StyledBrackets>
            <StyledText>
              <strong>Hi, my name is Ola.</strong> At the beginning of 2020,
              I've decided to switch the career to programming and started one
              year intensive <strong>Full-Stack Web Developer</strong> training
              at{" "}
              <a href="https://digitalcareerinstitute.org/">
                Digital Career Institute
              </a>
              . Due to the COVID-19 pandemic, the course was moved from the
              classroom entirely to remote, which was a completely new
              experience, but has taught me how to work in this environment.
              <br></br>
              <br></br>
              Our full-time course has started with teaching us basics about the{" "}
              <strong>Command-Line</strong> and <strong>Git</strong>. Then we've
              spent three months in the Graphical User Interface module
              practicing <strong>HTML5</strong> and <strong>CSS3</strong>. After
              that, we were ready to dive into programming basics and have spent
              the whole Summer learning <strong>Vanilla JavaScript</strong>.
              Getting to know <strong>node.js</strong> was then the first step
              to the Back-End and gave us the foundations to understand{" "}
              <strong>Express.js</strong>. In the Front-End we've learned{" "}
              <strong>React.js</strong> and spent six weeks practicing{" "}
              <strong>Class Components</strong>, <strong>Hooks</strong>,{" "}
              <strong>React Router</strong>,<strong>Context API</strong>, and
              finally <strong>Redux</strong>. Adding <strong>MySQL</strong> and{" "}
              <strong>MongoDB</strong> with <strong>Mongoose</strong> was the
              last step to completing our stack of skills. Eventually, we were
              ready to work in groups on our Final Project: during seven weeks
              we will develop a WebApp that helps supporting local gastronomy
              during the COVID-19 lock-down limitations.
              <br></br>
              <br></br>
              My background is studies in <strong>photography</strong> and{" "}
              <strong>journalism</strong>. I have several years of experience in
              the new-media and e-commerce field. On top of the programming
              competencies, I'm adding <strong>graphic skills</strong> and an
              eye for the smallest visual detail. My natural curiosity makes me
              getting to the bottom of things and left no question unanswered.
              I'm passionate about technology and programming and its creative
              potential.
              <br></br>
              <br></br>I’m looking for a job where I will apply and develop my
              skills and contribute to creating an extraordinary user
              experience.{" "}
              <a href="www.linkedin.com/in/ola-frost">
                {" "}
                Don't hesitate to visit my LinkedIn profile.{" "}
              </a>
              I'm available from <strong>April 2021</strong>.
            </StyledText>
          </StyledAboutFlex>
        </StyledAboutContainer>
        <ArrowDown about />
      </StyledCard>
    </div>
  );
}
