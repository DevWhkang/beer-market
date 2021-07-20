import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Menu } from "antd";

const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
`;

const MenuList = styled(Menu)`
  border-bottom: none;
`;

const Item = styled(Menu.Item)`
  font-size: 30px;
`;

const Navigation = () => {
  return (
    <NavigationWrapper>
      <MenuList mode="horizontal">
        <Item key="home">
          <Link to="/home">Home</Link>
        </Item>
        <Item key="beer-list">
          <Link to="/beer-list">Beer List</Link>
        </Item>
        <Item key="wish-list">
          <Link to="/wish-list">Wish List</Link>
        </Item>
      </MenuList>
    </NavigationWrapper>
  );
};

export default Navigation;
