import styled from "styled-components";

export const StyledNavContainer = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: #585123;
  padding: 1rem 0;
  z-index: 10;
  box-shadow: 1px 1px 5px black;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: auto;
  font-size: 1.5rem;
  a {
    text-decoration: none;
    color: white;
  }
`;