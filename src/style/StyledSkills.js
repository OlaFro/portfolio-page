import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";

export const StyledSkillsContainer = styled.div`
  padding: 7rem 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%;
  height: 80%;
`;

export const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    height: 4rem;
    width: 4rem;
    padding: 5rem 1rem 0rem 1rem;
    cursor: pointer;
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
  flex-wrap: wrap;
`;

export const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledAddition = styled.div`
  display: flex;
  justify-content: center;
`;
