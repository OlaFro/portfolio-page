import React from "react";
import {
  StyledCard,
  ArrowDown,
  StyledH2,
  StyledText,
} from "../style/StyledCard";
import {
  StyledSkillsContainer,
  IconStyleWrapper,
  StyledSkill,
} from "../style/StyledSkills";
import {
  Html5,
  Css3,
  Sass,
  Javascript,
  ReactLogo,
  Redux,
  Nodejs,
  Git,
} from "styled-icons/boxicons-logos/";
import {
  StyledComponents,
  Express,
  Mongodb,
  Adobecreativecloud,
} from "styled-icons/simple-icons";

export default function Skills() {
  return (
    <div id="skills">
      <StyledCard color="#F2A65A" zIndex="4" skills>
        <StyledSkillsContainer>
          <StyledH2>skills</StyledH2>
          <IconStyleWrapper>
            <StyledSkill>
              <Html5 title="html5" />
              <p>HTML 5</p>
            </StyledSkill>
            <StyledSkill>
              <Css3 title="css3" />
              <p>CSS</p>
            </StyledSkill>
            <StyledSkill>
              <Sass title="sass" />
              <p>Sass</p>
            </StyledSkill>
            <StyledSkill>
              <Javascript title="javascript" />
              <p>JavaScript</p>
            </StyledSkill>
            <StyledSkill>
              <ReactLogo title="react" />
              <p>React</p>
            </StyledSkill>
            <StyledSkill>
              <Redux title="redux" />
              <p>Redux</p>
            </StyledSkill>
            <StyledSkill>
              <StyledComponents title="styled-components" />
              <p>Styled-components</p>
            </StyledSkill>
            <StyledSkill>
              <Nodejs title="node.js" />
              <p>Node.js</p>
            </StyledSkill>
            <StyledSkill>
              <Express title="express" />
              <p>Express</p>
            </StyledSkill>
            <StyledSkill>
              <Mongodb title="mongoDB" />
              <p>MongoDB</p>
            </StyledSkill>
            <StyledSkill>
              <Git title="git" />
              <p>Git</p>
            </StyledSkill>
            <StyledSkill>
              <Adobecreativecloud title="adobe CC" />
              <p>Adobe CC</p>
            </StyledSkill>
          </IconStyleWrapper>
          <StyledText skills>
            Fluent in speaking and writing in <strong>English</strong>,{" "}
            <strong>German</strong> & <strong>Polish</strong>.
          </StyledText>
        </StyledSkillsContainer>
        <ArrowDown />
      </StyledCard>
    </div>
  );
}
