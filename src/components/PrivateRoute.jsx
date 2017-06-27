import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivatRoute({ component: Component, data, user, ...rest}) {
  return (
    <Route
      {...rest}
      render={props => (
        user ?
          <Component data={data} {...props} />
          :
          <Redirect to="/login" />
      )}
    />
  );
}

export default PrivatRoute;
