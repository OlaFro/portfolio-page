import styled from "styled-components";
import { Linkedin } from "styled-icons/feather";

export const StyledFooter = styled.div`
  background-color: ${(props) => props.theme.theme4.footer};
  width: 100%;
  height: ${(props) => props.height};
  z-index: ${(props) => props.zIndex};
  color: white;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export const StyledContactContainer = styled.div`
  height: 40%;
  width: 80%;
  border: 1px solid white;
  margin: auto;
`;

export const StyledContact = styled.div``;

export const StyledLinkedIn = styled(Linkedin)`
  color: ${(props) => props.theme.theme4.about};
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.theme4.projects};
  }
`;
