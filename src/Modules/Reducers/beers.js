const initialState = {
  isLoading: false,
  beerList: [],
  beerTableColumns: [],
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
    default:
      return state;
  }
};

export default reducer;
