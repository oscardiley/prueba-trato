import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #1d3744;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 70px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const Img = styled.div`
  width: 112px;
  height: 27px;
`;
