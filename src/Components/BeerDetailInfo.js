import React from "react";
import { Divider, Modal } from "antd";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BeerInfoTree from "./BeerInfoTree";

const BeerDetailWrapper = styled.section`
  display: flex;

  img {
    width: 10%;
    height: 10%;
    margin-left: 40px;
    margin-top: 20px;
  }
`;

const BeerDetail = styled.div`
  margin-left: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: 30px;
  }
  h2 {
    color: #8c8c8c;
  }
  h4 {
    font-size: 20px;
    color: #8c8c8c;
  }
  p {
    font-size: 15px;
    text-align: left;
    padding-right: 30px;
    font-style: italic;
  }

  .specifications {
    display: flex;

    div {
      margin-right: 20px;
    }
  }
`;

export const treeType = {
  METHOD: "METHOD",
  INGREDIENTES: "INGREDIENTES",
};

const BeerDetailInfo = ({ isModalVisible, handleChangeVisible, target }) => {
  const targetBeer = useSelector((state) =>
    state.beers.beerList.find((v) => v.name === target)
  );

  const handleCancel = () => {
    handleChangeVisible(false);
  };

  const degrees = ["ABV", "IBU", "EBC", "SRM", "PH"];

  return (
    <Modal
      title={`Detail info of ${targetBeer.name}`}
      visible={isModalVisible}
      onCancel={handleCancel}
      width={1000}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
    >
      <BeerDetailWrapper>
        <img src={targetBeer.image_url} alt={targetBeer.tagline} />
        <BeerDetail>
          <h1>{targetBeer.name}</h1>
          <h4>{targetBeer.tagline}</h4>
          <p>{targetBeer.description}</p>
          <Divider />
          <h2>Degrees:</h2>
          <div className="specifications degree">
            {degrees.map((degree) => (
              <div key={degree}>
                <b>{`${degree}: `}</b>
                {targetBeer[degree.toLowerCase()]}
              </div>
            ))}
            <div>
              <b>ATTENUATION LEVEL: </b>
              {targetBeer.attenuation_level}
            </div>
          </div>
          <div />
          <Divider />
          <h2>Volumes:</h2>
          <div className="specifications volume">
            <div>
              <b>Volume: </b>
              {`${targetBeer.volume.value}L`}
            </div>
            <div>
              <b>Boil Volume: </b>
              {`${targetBeer.boil_volume.value}L`}
            </div>
          </div>
          <Divider />
          <h2>Method:</h2>
          <div>
            <b>Twist: </b>
            {`${targetBeer.method.twist}`}
          </div>
          <br />
          <div className="specifications method">
            <div>
              <b>Fermentation: </b>
              {`${targetBeer.method.fermentation.temp.value}℃`}
            </div>
            <BeerInfoTree type={treeType.METHOD} element={targetBeer.method} />
          </div>
          <Divider />
          <h2>Ingredients:</h2>
          <div className="specifications ingredients">
            <div>
              <b>Yeast: </b>
              {`${targetBeer.ingredients.yeast}`}
            </div>
            <BeerInfoTree
              type={treeType.INGREDIENTES}
              element={targetBeer.ingredients}
            />
          </div>
          <Divider />
          <h2>Food Pairing: </h2>
          <div>
            {targetBeer.food_pairing.map((v) => (
              <div key={v}>{`- ${v}`}</div>
            ))}
          </div>
          <Divider />
          <h2>Brewers tips: </h2>
          <p>{targetBeer.brewers_tips}</p>
          <Divider />
          <h2>Contributed by: </h2>
          <p>{targetBeer.contributed_by}</p>
        </BeerDetail>
      </BeerDetailWrapper>
    </Modal>
  );
};

export default BeerDetailInfo;
