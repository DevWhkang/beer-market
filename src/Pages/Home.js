import React from "react";
import Layout from "../Components/Layout";
import styled, { css } from "styled-components";

const HomeWrapper = styled.main`
  text-align: center;
  margin-top: 200px;
  font-size: 30px;
`;

const Home = () => {
  return (
    <Layout>
      <HomeWrapper>
        <h1>Beer market 🍻</h1>
        <p>Fresh beer is available.</p>
        <p>Click on the beer list to purchase the desired beer.</p>
      </HomeWrapper>
    </Layout>
  );
};

export default Home;
