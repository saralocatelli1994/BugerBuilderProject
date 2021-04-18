import styled from "styled-components";

export const NavigationItemStyled = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;
  @media (min-width: 500px) {
    margin: 0;
    display: flex;
    height: 100%;
    width: auto;
    align-items: center;
  }
`;
interface Props {
  active?: boolean;
}
export const NavigationA = styled.a<Props>`
  color: #8f5c2c;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  display: block;
  @media (min-width: 500px) {
    color: white;
    height: 100%;
    padding: 16px 10px;
    border-bottom: 4px solid transparent;
    :hover {
      background-color: #8f5c2c;
      border-bottom: 4px solid #40a4cb;
      color: white;
    }

    ${({ active }) =>
      active &&
      `
    background-color: #8f5c2c;
    border-bottom: 4px solid #40a4cb;
    color: white;
  `}
  }
  :hover {
    color: #40a4cb;
  }

  ${({ active }) =>
    active &&
    `
    color: #40a4cb;
  `}
`;
