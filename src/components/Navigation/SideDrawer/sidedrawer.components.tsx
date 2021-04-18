import styled from "styled-components";

interface Props {
  open: boolean;
}
export const StyledDrawer = styled.div<Props>`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;

  ${(p) =>
    p.open ? `transform: translateX(0);` : ` transform: translateX(-100%);`}

  @media (min-width: 500px) {
    display: none;
  }
`;

export const LogoWarpper = styled.div`
  height: 11%;
  margin-bottom: 32px;
`;

export const DrawerToggleStyled = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;
  @media (min-width: 500px) {
      display: none;
    }
}`;

export const SingleMenuLine = styled.div`
  width: 90%;
  height: 3px;
  background-color: white;
`;
