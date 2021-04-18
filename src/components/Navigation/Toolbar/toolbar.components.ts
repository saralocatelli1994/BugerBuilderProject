import styled from "styled-components";

export const ToolbarStyled = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703b09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`;

export const Navigation = styled.nav`
  height: 100%;
`;

export const ToolbarLogoWrapper = styled.nav`
  height: 80%;
`;

export const DesktopyOnly = styled.nav`
  @media (max-width: 499px) {
    display: none;
  }
`;
