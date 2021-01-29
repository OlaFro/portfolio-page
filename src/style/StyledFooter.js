import styled from "styled-components";

export const StyledFooter = styled.div`
  background-color: ${(props) => props.theme.theme4.footer};
  width: 100%;
  height: ${(props) => props.height};
  z-index: ${(props) => props.zIndex};
  color: white;
  margin-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;