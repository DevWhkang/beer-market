import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { removeWishList } from "../Modules/Reducers/beers";
import BeerDetailInfo from "./BeerDetailInfo";

const WishCardWrapper = styled.div`
  margin: 10px;
  text-align: center;
`;

const BeerCard = styled(Card)`
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  margin-top: 50px;
`;

const Image = styled.img`
  width: 25%;
  height: 25%;
`;

const RemoveIcon = styled(DeleteOutlined)`
  margin-top: 20px;
  font-size: 20px;

  :hover {
    color: #b71c1c;
  }
`;

const WishCard = ({ cardInfo, isModalVisible, handleChangeVisible }) => {
  const dispatch = useDispatch();

  const handleClickRemove = (id) => {
    dispatch(removeWishList(id));
  };

  const handleClickMore = () => {
    handleChangeVisible(true);
  };

  return (
    <WishCardWrapper>
      <BeerDetailInfo
        isModalVisible={isModalVisible}
        handleChangeVisible={handleChangeVisible}
        target={cardInfo.name}
      />
      <BeerCard
        hoverable
        extra={
          <a onClick={handleClickMore} href="#!">
            More
          </a>
        }
        cover={
          <ImageWrapper>
            <Image alt={cardInfo.tagline} src={cardInfo.image_url} />
          </ImageWrapper>
        }
      >
        <Card.Meta title={cardInfo.name} description={cardInfo.tagline} />
        <RemoveIcon onClick={() => handleClickRemove(cardInfo.id)} />
      </BeerCard>
    </WishCardWrapper>
  );
};

export default WishCard;
