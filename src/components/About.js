import React from "react";
import {
  StyledCard,
  ArrowDown,
  StyledH2,
  StyledH3,
  StyledBody,
  StyledText,
  StyledButton,
} from "../style/StyledCard";
import { StyledAboutContainer } from "../style/StyledAbout";

export default function About() {
  return (
    <div id="about">
      <StyledCard height="100vh" color="#EEC170" zIndex="5" about>
        <StyledAboutContainer>
          <StyledH2>About</StyledH2>
          <StyledH3>About me</StyledH3>
          <StyledBody>
            I'm a passionate certified Full-Stack Web Developer. I work mostly
            in the MERN stack, but I'm eager to learn new technologies.
            <br></br>
            <br></br>
            My background is studies in photography and journalism. I have
            several years of experience in the new-media and e-commerce field.
            On top of the programming competencies, I'm adding graphic skills
            and an eye for the smallest visual detail. My natural curiosity
            makes me getting to the bottom of things and left no question
            unanswered. I'm passionate about technology and programming and its
            creative potential.
            <br></br>
            <br></br>I’m looking for a job where I will apply and develop my
            skills and contribute to creating an extraordinary user experience.
          </StyledBody>
          <StyledH3>About my programming education</StyledH3>
          <StyledBody>
            At the beginning of 2020, I've decided to switch the career to
            programming and started one year of intensive Full-Stack Web
            Developer training at{" "}
            <a href="https://digitalcareerinstitute.org/">
              Digital Career Institute
            </a>
            .Due to the COVID-19 pandemic, the lessons were moved from the
            classroom entirely to remote, which was a challenge but has taught
            me how to work in this environment.
            <br></br>
            <br></br>
            Our full-time course has started with teaching us basics about the
            Command-Line and Git. Then we've spent three months in the Graphical
            User Interface module practicing HTML5 and CSS3. After that, we were
            ready to dive into programming basics and have spent the whole
            Summer learning Vanilla JavaScript. Getting to know node.js was then
            the first step to the Back-End and gave us the foundations to
            understand Express.js. In the Front-End we've learned React.js and
            spent six weeks practicing Class Components, Hooks, React Router,
            Context API, and finally Redux. Adding MySQL and MongoDB with
            Mongoose was the last step to completing our stack of skills.
            Eventually, we were ready to work in groups on our Final Project.
            During seven weeks we will develop a WebApp that helps supporting
            local gastronomy during the COVID-19 lock-down limitations.
            <br></br>
            <br></br>
            Besides learning how to code, the course has allowed me to cooperate
            project-based with other students and practice an agile way of
            working. Yes, coding can be frustrating, but at the same time also
            rewarding and extremely creative!
          </StyledBody>
        </StyledAboutContainer>
        <ArrowDown about />
      </StyledCard>
    </div>
  );
}
