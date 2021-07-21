import React, { useEffect, useMemo, useState } from "react";
import Layout from "../Components/Layout";
import {
  getBeerList,
  setBeerTableColumns,
  changeBeerTableColumn,
} from "../Modules/Reducers/beers";
import { useDispatch, useSelector } from "react-redux";
import MaterialTable from "material-table";
import styled from "styled-components";
import BeerDetailInfo from "../Components/BeerDetailInfo";
import { Spin } from "antd";

const BeerListTableWrapper = styled.div`
  margin: 5% 20% 5% 20%;
`;

const Loading = styled(Spin)`
  width: 100%;
  margin-top: 250px;
`;

const BeerList = () => {
  const dispatch = useDispatch();
  const beerList = useSelector((state) => state.beers.beerList);
  const beerTableColumns = useSelector((state) => state.beers.beerTableColumns);
  const isLoading = useSelector((state) => state.beers.isLoading);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTarget, setModalTarget] = useState("");

  const data = beerList.map((info) => {
    return {
      name: info.name,
      abv: info.abv,
      summary: info.tagline,
      img: info.image_url,
    };
  });

  const columns = [
    {
      id: 1,
      title: "BEER",
      field: "name",
      render: (row) => (
        <a href={() => false} onClick={showModal}>
          {row.name}
        </a>
      ),
    },
    {
      id: 2,
      title: "ABV",
      field: "abv",
    },
    {
      id: 3,
      title: "SUMMARY",
      field: "summary",
    },
  ];

  useEffect(() => {
    dispatch(getBeerList());
  }, [dispatch]);

  const handleColumnDragged = (sourceIndex, destinationIndex) => {
    if (!beerTableColumns.length) {
      dispatch(setBeerTableColumns(columns));
    }
    dispatch(changeBeerTableColumn([sourceIndex, destinationIndex]));
  };

  const showModal = (e) => {
    setIsModalVisible(true);
    setModalTarget(e.target.text);
  };

  return (
    <Layout>
      <BeerListTableWrapper>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        {isLoading ? (
          <Loading tip="Loading..." />
        ) : (
          <MaterialTable
            columns={beerTableColumns.length ? beerTableColumns : columns}
            data={data}
            title="Beer List"
            options={{ paging: false }}
            onColumnDragged={handleColumnDragged}
          />
        )}
        {isModalVisible && (
          <BeerDetailInfo
            isModalVisible={isModalVisible}
            handleChangeVisible={setIsModalVisible}
            target={modalTarget}
          />
        )}
      </BeerListTableWrapper>
    </Layout>
  );
};

export default BeerList;
