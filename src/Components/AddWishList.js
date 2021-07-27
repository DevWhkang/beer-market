import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ShoppingCartOutlined, CheckCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { setWishList } from "../Modules/Reducers/beers";

const WishListIcon = styled(ShoppingCartOutlined)`
  font-size: 20px;
  margin-left: 30px;

  :hover {
    color: #ffab00;
  }
`;

const CheckWishListIcon = styled(CheckCircleOutlined)`
  font-size: 20px;
  margin-left: 30px;
  color: #c8c8c8;
`;

const AddWishList = ({ row }) => {
  const wishList = useSelector((state) => state.beers.wishList);
  const dispatch = useDispatch();

  const handleClickAddWishList = useCallback(
    (id) => {
      dispatch(setWishList(id));
    },
    [dispatch]
  );
  return (
    <>
      {wishList.includes(row.id) ? (
        <CheckWishListIcon />
      ) : (
        <WishListIcon onClick={() => handleClickAddWishList(row.id)} />
      )}
    </>
  );
};

export default AddWishList;
