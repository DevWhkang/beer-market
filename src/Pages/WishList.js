import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../Components/Layout";
import WishCard from "../Components/WishCard";
import { useSelector } from "react-redux";
import { Empty } from "antd";

const WishListWrapper = styled.section`
  margin: 5% 20% 5% 20%;
  h1 {
    font-size: 30px;
    font-weight: bolder;
  }
`;

const WishCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const EmptyWishList = styled(Empty)`
  margin-top: 150px;
`;

const WishList = () => {
  const wishList = useSelector((state) => state.beers.wishList);
  const beerList = useSelector((state) => state.beers.beerList);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <Layout>
      <WishListWrapper>
        <h1>🛒 Wish List:</h1>
        {wishList.length ? (
          <WishCards>
            {wishList.map((id) => {
              const cardInfo = beerList.find((v) => v.id === id);
              return (
                <WishCard
                  key={id + Math.random()}
                  cardInfo={cardInfo}
                  isModalVisible={isModalVisible}
                  handleChangeVisible={setIsModalVisible}
                />
              );
            })}
          </WishCards>
        ) : (
          <EmptyWishList />
        )}
      </WishListWrapper>
    </Layout>
  );
};

export default WishList;
