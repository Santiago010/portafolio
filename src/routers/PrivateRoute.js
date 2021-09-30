import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/lock" />
      }
    />
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
