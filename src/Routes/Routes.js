import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//layout
import MainLayout from "../Layout/MainLayout";
//page
import Admin from "../Page/Admin";
import Dashboard from "../Page/Dashboard";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route
          exact
          path="/"
          render={() => (
            <MainLayout>
              <Dashboard />
            </MainLayout>
          )}
        />
        <Route
          exact
          path="/admin"
          render={() => (
            <MainLayout>
              <Admin />
            </MainLayout>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
;