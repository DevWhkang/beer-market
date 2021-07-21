import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import beers from "./Reducers/beers";
import beerSaga from "./Sagas/beers";

// watcher saga -> actions -> worker saga
// import loading from "./loading";
import { enableES5 } from "immer";

enableES5();

const rootReducer = combineReducers({ beers });

// export default rootReducer;
export default rootReducer;

//watcher saga
export function* rootSaga() {
  yield all([fork(beerSaga)]);
}
