import React, { useEffect } from "react";
import Layout from "../Components/Layout";
import { getBeerList } from "../Modules/Reducers/beers";
import { useDispatch, useSelector } from "react-redux";
import MaterialTable from "material-table";

const BeerList = () => {
  const dispatch = useDispatch();
  const beerList = useSelector((state) => state.beers.beerList);
  console.log(beerList);
  useEffect(() => {
    dispatch(getBeerList());
  }, [dispatch]);

  return (
    <Layout>
      <MaterialTable
        columns={beerList.map((v) => {
          return {
            title: v.name,
          };
        })}
        data={[
          { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
        ]}
        title="Demo Title"
      />
    </Layout>
  );
};

export default BeerList;
