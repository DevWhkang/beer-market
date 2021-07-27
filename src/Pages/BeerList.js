import React, { useEffect, useState, useMemo } from "react";
import Layout from "../Components/Layout";
import {
  getBeerList,
  setBeerTableColumns,
  changeBeerTableColumn,
} from "../Modules/Reducers/beers";
import { useDispatch, useSelector } from "react-redux";
import MaterialTable from "material-table";
import styled from "styled-components";
import { Spin, Select } from "antd";
import BeerTitleLink from "../Components/BeerTitleLink";
import AddWishList from "../Components/AddWishList";

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

  const [selectedAdv, setSelectedAdv] = useState("All");
  const [filteredData, setFilteredData] = useState([]);

  const data = useMemo(
    () =>
      beerList.map((info) => {
        return {
          id: info.id,
          name: info.name,
          abv: info.abv,
          summary: info.tagline,
          img: info.image_url,
        };
      }),
    [beerList]
  );

  const columns = useMemo(() => {
    return beerTableColumns.length
      ? beerTableColumns.map((v) => {
          return {
            ...v,
            tableData: {
              ...v.tableData,
              width: null, // If you drag and drop a column and then route, it is calculate cumulatively
            },
          };
        })
      : [
          {
            id: 1,
            title: "BEER",
            field: "name",
            render: (row) => <BeerTitleLink row={row} />,
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
          {
            id: 4,
            title: "Add Wish List",
            render: (row) => <AddWishList row={row} />,
          },
        ];
  }, [beerTableColumns]);

  const customIcons = [
    {
      onClick: () => {}, // Handle error: Invalid prop `actions[0]` supplied to `MaterialTable`
      isFreeAction: true,
      tooltip: "Filter by abv",
      icon: () => (
        <Select
          defaultValue="All"
          style={{ width: 100 }}
          onChange={handleChangeSelectedAdv}
        >
          {["All", 1, 2, 3, 4, 5, 6, 7].map((v) => (
            <Select.Option
              key={v}
              value={v === "All" ? "All" : `${v}~${v + 1}`}
            >
              {v === "All" ? "All" : `${v}~${v + 1}`}
            </Select.Option>
          ))}
        </Select>
      ),
    },
  ];

  useEffect(() => {
    dispatch(getBeerList());
  }, [dispatch]);

  useEffect(() => {
    const [start, end] = selectedAdv.split("~");

    setFilteredData(
      selectedAdv === "All"
        ? data
        : data.filter((v) => start <= v.abv && v.abv < end)
    );
  }, [selectedAdv, data]);

  const handleChangeSelectedAdv = (value) => {
    setSelectedAdv(value);
  };

  const handleColumnDragged = (sourceIndex, destinationIndex) => {
    dispatch(setBeerTableColumns(columns));
    dispatch(changeBeerTableColumn([sourceIndex, destinationIndex]));
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
            columns={columns}
            data={filteredData.length ? filteredData : data}
            title="Beer List: Click! on a beer name to see details🍺"
            options={{ paging: false }}
            onColumnDragged={handleColumnDragged}
            actions={customIcons}
          />
        )}
      </BeerListTableWrapper>
    </Layout>
  );
};

export default BeerList;
