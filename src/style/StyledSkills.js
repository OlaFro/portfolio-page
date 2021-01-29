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

    :hover {
      color: ${(props) => props.theme.theme4.projects};
    }
  }

  display: flex;

  justify-content: space-evenly;
`;
