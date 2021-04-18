import styled from "styled-components";

export const NavigationItemsStyled = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  flex-flow: column;
  height: 100%;
  @media (min-width: 500px) {
    flex-flow: row;
  }
`;
