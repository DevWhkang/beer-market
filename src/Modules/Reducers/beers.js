const initialState = {
  isLoading: false,
  beerList: null,
};

// action creator
export const getBeerList = () => {
  return {
    type: "GET_BEER_LIST_REQUEST",
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BEER_LIST_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_BEER_LIST_SUCCESS":
      return {
        isLoading: false,
        beerList: action.data,
      };
    case "GET_BEER_LIST_FAILURE":
      return {
        isLoading: false,
        beerList: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
