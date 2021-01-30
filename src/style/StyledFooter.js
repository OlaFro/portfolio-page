import styled from "styled-components";
import { Linkedin, MapPin } from "styled-icons/feather";

export const StyledFooter = styled.div`
  background: linear-gradient(${(props) => props.theme.theme4.footer}, black);
  width: 100%;
  height: ${(props) => props.height};
  z-index: ${(props) => props.zIndex};
  color: white;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledFooterContainer = styled.div`
  height: 60%;
  width: 80%;
  margin: auto;
`;

export const StyledContact = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: auto;
  a {
    text-decoration: none;
  }
`;

export const StyledLinkedIn = styled(Linkedin)`
  color: ${(props) => props.theme.theme4.about};
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.theme4.projects};
  }
`;
export const StyledPin = styled(MapPin)`
  color: ${(props) => props.theme.theme4.about};
  height: 2rem;
  width: 2rem;
`;
