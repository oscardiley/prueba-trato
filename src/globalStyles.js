import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1240px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 40px;
`;
export const ContentDash = styled.div`
  background-color: #f5f5f5;
  z-index: 1;
  width: 100%;
  height: 100vh;
`;

export const Button = styled.button`
  border-radius: 10px;
  width: 286px;
  height: 66px;
  background: ${({ primary }) => (primary ? "#f37b33" : "#1d3744")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "19px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "24px" : "24px")};
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.4s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? "#1d3744" : "#1d3744")};
    box-shadow: 0 16px 32px 0 rgba(96, 97, 112, 0.32);
  }
`;

export const ButtonCreate = styled.button`
  height: 66px;
  padding: 10px 60px;
  border-radius: 10px;
  background-color: #f37b33;
  width: 100%;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  text-align: center;
  cursor: pointer;

  &:hover {
    transition: all 0.4s ease-out;
    background-color: #f37b33;
    box-shadow: 0 16px 32px 0 rgba(96, 97, 112, 0.32);
  }
`;

export const ButtonInvite = styled.button`
  height: 66px;
  padding: 12px 60px;
  margin: 30px 0;
  border-radius: 10px;
  background-color: #fff;
  width: 100%;
  color: #f37b33;
  font-size: 20px;
  font-weight: 500;
  outline: none;
  border: solid 1px #f37b33;
  cursor: pointer;

  &:hover {
    transition: all 0.4s ease-out;
    background-color: #f37b33;
    color: #fff;
    box-shadow: 0 16px 32px 0 rgba(96, 97, 112, 0.32);
  }
`;

export default GlobalStyle;
