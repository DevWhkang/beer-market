import { all, put, call, fork, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";

function beerListAPI() {
  const url = "https://api.punkapi.com/v2/beers";
  return axios.get(url);
}

function* getBeerList() {
  try {
    const result = yield call(beerListAPI);
    yield put({
      type: "GET_BEER_LIST_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "GET_BEER_LIST_FAILURE",
      data: err.response.data,
    });
  }
}

function* watchGetBeerList() {
  yield takeLatest("GET_BEER_LIST_REQUEST", getBeerList);
}

export default function* beerSaga() {
  yield all([fork(watchGetBeerList)]);
}
