import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";

export const StyledSkillsContainer = styled.div`
  display: grid;
  width: 80%;
  height: 80%;
`;

export const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    height: 4rem;
    width: 4rem;
    + p {
      opacity: 0;
    }
    :hover {
      color: ${(props) => props.theme.theme4.projects};
      + p {
        opacity: 1;
      }
    }
  }

  display: flex;
  justify-content: space-evenly;
`;

export const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
