import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import loadable from "@loadable/component";

import { routes } from "../shared/utils/constants";

const List = loadable(() => import("../pages/list"));
const Detail = loadable(() => import("../pages/detail"));
const NoMatch = loadable(() => import("../pages/noMatch"));

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to={routes.LIST} />
      </Route>
      <Route path={routes.COMICS} component={NoMatch} />
      <Route path={routes.EVENTS} component={NoMatch} />
      <Route path={routes.SERIES} component={NoMatch} />
      <Route path={routes.STORIES} component={NoMatch} />
      <Route path={routes.DETAIL} component={Detail} />
      <Route path={routes.LIST} component={List} />
    </Switch>
  </Router>
);

export default Routes;
