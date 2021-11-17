import React from "react";
import { Link } from "react-router-dom";
import {
  SidebarSec,
  SidebarItems,
  SidebarWrapper,
  ItemWrapper,
  ItemIcon,
  SidebarLi
} from "./Sidebar.elements.js";

const Sidebar = () => {
  return (
    <SidebarSec>
      <SidebarWrapper>
        <SidebarItems>
          <SidebarLi>
            <ItemWrapper>
              <ItemIcon></ItemIcon>
              <Link to="inicio">Inicio</Link>
            </ItemWrapper>
          </SidebarLi>
          <SidebarLi>
            <Link to="plantillas">Mis Plantillas</Link>
          </SidebarLi>
          <SidebarLi>
            <Link to="">Settings</Link>
          </SidebarLi>
          <SidebarLi>
            <Link to="">Plantillas Vendidas</Link>
          </SidebarLi>
        </SidebarItems>
      </SidebarWrapper>
    </SidebarSec>
  );
};

export default Sidebar;
