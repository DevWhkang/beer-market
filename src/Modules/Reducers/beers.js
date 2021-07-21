const initialState = {
  isLoading: false,
  beerList: [],
  beerTableColumns: [],
  wishList: [],
};

// action creator
export const getBeerList = () => {
  return {
    type: "GET_BEER_LIST_REQUEST",
  };
};

export const setBeerTableColumns = (data) => {
  return {
    type: "SET_BEER_TABLE_COLUMN",
    data,
  };
};

export const changeBeerTableColumn = (data) => {
  return {
    type: "CHANGE_BEER_TABLE_COLUMN",
    data,
  };
};

export const setWishList = (data) => {
  return {
    type: "SET_WISH_LIST",
    data,
  };
};

export const removeWishList = (data) => {
  return {
    type: "REMOVE_WISH_LIST",
    data,
  };
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BEER_LIST_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_BEER_LIST_SUCCESS":
      return {
        ...state,
        isLoading: false,
        beerList: action.data,
      };
    case "GET_BEER_LIST_FAILURE":
      return {
        ...state,
        isLoading: false,
        beerList: action.data,
      };
    case "SET_BEER_TABLE_COLUMN":
      return {
        ...state,
        beerTableColumns: action.data,
      };
    case "CHANGE_BEER_TABLE_COLUMN":
      const [sourceIndex, destinationIndex] = action.data;

      const beerTableColumns = state.beerTableColumns;
      const temp = beerTableColumns[sourceIndex];
      beerTableColumns[sourceIndex] = beerTableColumns[destinationIndex];
      beerTableColumns[destinationIndex] = temp;

      return {
        ...state,
        beerTableColumns: [...state.beerTableColumns],
      };
    case "SET_WISH_LIST":
      return {
        ...state,
        wishList: [...state.wishList, action.data],
      };
    case "REMOVE_WISH_LIST":
      const removeIdx = state.wishList.findIndex((v) => v === action.data);
      state.wishList.splice(removeIdx, 1);
      return {
        ...state,
        wishList: [...state.wishList],
      };
    default:
      return state;
  }
};

export default reducer;
