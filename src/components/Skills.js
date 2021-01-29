import React from "react";
import { StyledCard, ArrowDown, StyledH1 } from "../style/StyledCard";
import { StyledSkillsContainer, IconStyleWrapper } from "../style/StyledSkills";
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
      <StyledCard height="75vh" color="#F2A65A" zIndex="4" skills>
        <StyledSkillsContainer>
          <StyledH1>skills</StyledH1>

          <IconStyleWrapper>
            <Html5 title="html5" />
            <Css3 title="css3" />
            <Sass title="sass" />
            <Javascript title="javascript" />
            <ReactLogo title="react" />
            <Redux title="redux" />
            <StyledComponents title="styled-components" />
            <Nodejs title="node.js" />
            <Express title="express" />
            <Mongodb title="mongoDB" />
            <Git title="git" />
            <Adobecreativecloud title="adobe CC" />
          </IconStyleWrapper>
        </StyledSkillsContainer>
        <ArrowDown />
      </StyledCard>
    </div>
  );
}
