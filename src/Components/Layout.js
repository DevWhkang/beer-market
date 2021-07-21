import React from "react";
import Navigation from "./Navigation";
import styled from "styled-components";

const LayoutWrapper = styled.section`
  padding-top: 100px;
`;

const Footer = styled.section`
  height: 2vh;
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navigation />
      {children}
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
