import styled from "styled-components";
import project1 from "../img/project1.png";
import project2 from "../img/project2.png";
import project3 from "../img/project3.png";
import project4 from "../img/project4.png";
import project5 from "../img/project5.png";
import project6 from "../img/project6.png";
import { Codepen, Github, ExternalLink } from "styled-icons/feather";

export const StyledProjectsContainer = styled.div`
  padding: 7rem 0rem;
  margin-bottom: 7rem;
  display: grid;
  grid-template-rows: auto auto;
  width: 80%;
  height: 80%;
`;

export const StyledGrid = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-rows: repeat(6, auto);
  grid-row-gap: 3rem;
  justify-content: center;

  @media (min-width: 950px) and (max-width: 1440px) {
    grid-template-columns: repeat(2, auto);
    grid-row-gap: 3rem;
    justify-content: space-evenly;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, auto);
    grid-row-gap: 3rem;
    justify-content: space-evenly;
  }
`;

export const StyledProject = styled.div`
  height: 40rem;
  width: 20rem;
  background-color: grey;
  display: grid;
  grid-template-rows: repeat(2, 50%);
`;

export const StyledPic = styled.div`
  background-image: ${(props) => {
    if (props.project1) {
      return `url(${project1});
      background-position: center;`;
    } else if (props.project2) {
      return `url(${project2});
      background-size: cover;
      background-position: 70% 30%`;
    } else if (props.project3) {
      return `url(${project3});
      background-size: cover;
      background-position: 40% 0%`;
    } else if (props.project4) {
      return `url(${project4});
      background-size: cover;
      background-position: 40% 0%`;
    } else if (props.project5) {
      return `url(${project5});
      background-size: cover;
      background-position: 33% 0%`;
    } else {
      return `url(${project6});
      background-size: cover;
      background-position: 40% 0%`;
    }
  }};

  border: 10px solid ${(props) => props.theme.theme4.about};
  filter: saturate(0);
  transition: filter 250ms ease-in-out;
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  :hover {
    filter: saturate(100%);
    box-shadow: none;
  }
`;

export const StyledDescription = styled.div`
  background-color: ${(props) => props.theme.theme4.about};
  padding: 20px;
  display: grid;
  grid-template-rows: 2rem auto 5rem 3rem;
`;

export const StyledIconContainer = styled.div`
  padding: 0.5rem 0;
  margin: 10px 0;
`;

export const StyledCodepen = styled(Codepen)`
  color: ${(props) => props.theme.theme4.footer};
  height: 2.3rem;
  width: 2.3rem;
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.theme4.projects};
  }
`;
export const StyledDeploy = styled(ExternalLink)`
  color: ${(props) => props.theme.theme4.footer};
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.theme4.projects};
  }
`;
export const StyledGithub = styled(Github)`
  color: ${(props) => {
    if (props.footer) {
      return props.theme.theme4.about;
    } else {
      return props.theme.theme4.footer;
    }
  }};
  height: 2rem;
  width: 2rem;
  margin-right: ${(props) => {
    if (props.footer) {
      return `15px`;
    } else {
      return `10px;`;
    }
  }};

  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.theme4.projects};
  }
`;

export const StyledTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-end;
  height: 5rem;
`;

export const StyledTag = styled.span`
  background-color: ${(props) => props.theme.theme4.hero};
  font-size: 0.8rem;
  padding: 3px 5px;
  height: 1.5rem;
  margin: 0 10px 0px 0;
  display: flex;
  align-items: center;
`;
