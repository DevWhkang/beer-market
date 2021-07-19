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
        <Item>
          <Link to="/home">Home</Link>
        </Item>
        <Item>
          <Link to="/beer-list">Beer List</Link>
        </Item>
        <Item>
          <Link to="/wish-list">Wish List</Link>
        </Item>
      </MenuList>
    </NavigationWrapper>
  );
};

export default Navigation;
