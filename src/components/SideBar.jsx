import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import SubMenu from "./SubMenu";
import { SideBarData } from "../data/sidebarData";

const SideBar = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => {
    setSideBar(!sideBar);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSideBar} />
          </NavIcon>
        </Nav>
        <SideBarNav sidebar={sideBar}>
          <SideBarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSideBar} />
            </NavIcon>
            {SideBarData.map((item, index) => (
              <SubMenu key={index} item={item} />
            ))}
          </SideBarWrap>
        </SideBarNav>
      </IconContext.Provider>
    </>
  );
};

const Nav = styled.div`
  background-color: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SideBarNav = styled.nav`
  background-color: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SideBarWrap = styled.div`
  width: 100%;
`;

export default SideBar;
