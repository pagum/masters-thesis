import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthConsumer } from "./AuthContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <AuthConsumer>
      {({ isAuth }) => {
        return (
          <Route
            render={props => {
              return isAuth ? <Component {...props} /> : <Redirect to="/" />;
            }}
            {...rest}
          />
        );
      }}
    </AuthConsumer>
  );
};

export default ProtectedRoute;
