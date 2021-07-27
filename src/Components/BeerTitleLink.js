import React, { useState } from "react";
import BeerDetailInfo from "./BeerDetailInfo";

const BeerTitleLink = ({ row }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTarget, setModalTarget] = useState("");

  const showModal = (e) => {
    setIsModalVisible(true);
    setModalTarget(e.target.text);
  };
  return (
    <>
      {isModalVisible && (
        <BeerDetailInfo
          isModalVisible={isModalVisible}
          handleChangeVisible={setIsModalVisible}
          target={modalTarget}
        />
      )}
      <a href="#!" onClick={showModal}>
        {row.name}
      </a>
    </>
  );
};

export default BeerTitleLink;
