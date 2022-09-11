import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SubMenu = ({ item }) => {
  const [subnav, setSubNav] = useState(false);

  const showSubNav = () => setSubNav(!subnav);
  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubNav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((subitem, index) => (
          <DropdownLink key={index} to={subitem.path}>
            {subitem.icon}
            <SidebarLabel>{subitem.title}</SidebarLabel>
          </DropdownLink>
        ))}
    </>
  );
};

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background-color: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const DropdownLink = styled(Link)`
  background-color: #414757;
  height: 50px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background-color: #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

export default SubMenu;
