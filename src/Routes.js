import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./Pages/Home";
import BeerList from "./Pages/BeerList";
import WishList from "./Pages/WishList";

const Routes = () => {
  useEffect(() => {
    document.title = "Beer Market";
    const head = document.querySelector("head > link");

    head.setAttribute(
      "href",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL_zDkAYNSDKcMrH49z9dMI3Otj7sxSZ6jMw&usqp=CAU"
    );
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/beer-list" component={BeerList} />
        <Route path="/wish-list" component={WishList} />
        <Redirect path="*" to="/home" />
      </Switch>
    </Router>
  );
};

export default Routes;
