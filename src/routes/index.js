import React from "react";
import { Route, Switch } from "react-router-dom";
import { Cart } from "../views/Cart";
import Main from "../views/Main";
const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Main />
      </Route>
      <Route path='/cart'>
        <Cart />
      </Route>
    </Switch>
  );
};

export default Routes;
