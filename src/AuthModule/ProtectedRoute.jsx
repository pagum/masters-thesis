import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import StorageService from '../utils/StorageService';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  console.log(
    StorageService.get({
      key: 'auth-token',
    }),
  );
  return (
    <Route
      {...rest}
      render={props =>
        StorageService.get({
          key: 'auth-token',
        }) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
