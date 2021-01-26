import styled from "styled-components";

export const StyledCard = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  z-index: ${(props) => props.zIndex};
  color: white;
  position: relative;
  ::after {
    background-color: ${(props) => props.color};
    height: 3rem;
    width: 3rem;
    position: absolute;
    bottom: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 9999px;
    ${(props) => {
      if (!props.footer) {
        return `content: ""`;
      }
    }}
`;
