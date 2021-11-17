import styled from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";

export const SidebarSec = styled.div`
  width: 255px;
  margin-top: 40px;
`;

export const SidebarWrapper = styled.div`
  width: 255px;
  background-color: #ffffff;
  border-radius: 6px;
`;

export const SidebarItems = styled.ul`
  
`
  

export const SidebarLi = styled.li`
  font-size: 20px;
  
  height: 48px;
  background-color: #ffffff;
  list-style: none;
  
  &:active{
      background-color:#f37b33;
      color: #ffffff;
  }
`

export const ItemWrapper = styled.div`
margin: 20px;
  display: flex;
  flex-direction: row;
  text-decoration: none;
`;

export const ItemIcon = styled(AiFillCheckCircle)`
  color: #969696;
`;

export const ItemText = styled.h2``;
