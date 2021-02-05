import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";

export const StyledSkillsContainer = styled.div`
  padding: 7rem 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%;
  height: 80%;
`;

export const IconStyleWrapper = styled.div`
  /* icons style */
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
  /* container style */

  display: grid;
  grid-template-columns: repeat(3, auto);

  @media (max-width: 404px) {
    grid-template-columns: repeat(2, auto);
  }

  @media (min-width: 768px) and (max-width: 1440px) {
    grid-template-columns: repeat(6, auto);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(12, auto);
  }
`;

export const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
