import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeScreen from "../screens/HomeScreen";
import { LookScreen } from "../screens/LookScreen";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  const { id } = useSelector((state) => state.authReducer);
  return (
    <Router>
      <Switch>
        <PublicRoute
          isAuthenticated={!!id}
          component={LookScreen}
          path="/lock"
        />
        <PrivateRoute isAuthenticated={!!id} component={HomeScreen} path="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
