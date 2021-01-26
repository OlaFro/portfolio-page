import styled from "styled-components";

export const StyledCard = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  z-index: ${(props) => props.zIndex};
  color: white;
  position: relative;

  ::before {
    content: "";
    background-color: ${(props) => props.color};
    height: 4rem;
    width: 4rem;
    position: absolute;
    bottom: -2rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 9999px;
    /* ${(props) => {
      if (!props.footer) {
        return `content: ""`;
      }
    }} */
  }

  ::after {
    content: ">";
    position: absolute;
    color: white;
    font-size: 1.5rem;
    bottom: -1.5rem;
    left: 50%;
    transform: translateX(-50%) rotate(90deg);
  }
`;
