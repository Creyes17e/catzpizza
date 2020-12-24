import React from "react";
import {
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SideBtnWrap,
  SidebarRoute,
  Icon,
  CloseIcon,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Pizza's</SidebarLink>
        <SidebarLink to="/">Desserts</SidebarLink>
        <SidebarLink to="/">Full Menu</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute>Order Now!</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
