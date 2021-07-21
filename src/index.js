import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { Provider } from "react-redux";
import rootReducer from "./Modules";
import { rootSaga } from "./Modules";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import "antd/dist/antd.css";

const sagaMiddleware = createSagaMiddleware();
const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(sagaMiddleware))
    : composeWithDevTools(applyMiddleware(sagaMiddleware));

export const store = createStore(rootReducer, enhancer);
store.sagaTask = sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
