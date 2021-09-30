import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import { LookScreen } from "../screens/LookScreen";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute
          isAuthenticated={false}
          component={LookScreen}
          path="/lock"
        />
        <PrivateRoute isAuthenticated={false} component={HomeScreen} path="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
