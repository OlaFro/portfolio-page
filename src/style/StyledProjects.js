import styled from "styled-components";
import project1 from "../img/project1.png";
import project2 from "../img/project2.png";
import project3 from "../img/project3.png";
import { Codepen, Github, ExternalLink } from "styled-icons/feather";

export const StyledProjectsContainer = styled.div`
  display: grid;
  grid-template-rows: 15% auto;
  width: 80%;
  height: 80%;
`;

export const StyledFlex = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 3rem;
  justify-content: space-evenly;
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
    } else {
      return `url(${project3});
      background-size: cover;
      background-position: 40% 0%`;
    }
  }};

  border: 10px solid white;
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
  grid-template-rows: 3rem 1fr auto 3rem;
`;

export const StyledTitle = styled.h3`
  color: ${(props) => props.theme.theme4.footer};
  font-family: "Raleway", sans-serif;
  font-weight: 900;
  margin: 10px 0;
`;

export const StyledBody = styled.div`
  color: ${(props) => props.theme.theme4.footer};
`;

export const StyledIconContainer = styled.div`
  padding: 0.5rem 0;
  margin: 10px 0;
`;

export const StyledCodepen = styled(Codepen)`
  color: ${(props) => props.theme.theme4.footer};
  height: 2rem;
  width: 2rem;
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
  color: ${(props) => props.theme.theme4.footer};
  height: 2rem;
  width: 2rem;
  margin-right: 10px;
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.theme4.projects};
  }
`;

export const StyledTag = styled.span`
  background-color: ${(props) => props.theme.theme4.footer};
  padding: 5px 10px;
  margin-right: 5px;
`;
