import React from "react";
import Navigation from "./Navigation";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  padding-top: 100px;
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navigation />
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
