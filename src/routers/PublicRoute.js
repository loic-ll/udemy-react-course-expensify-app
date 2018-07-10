import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...props
}) => (
  <Route
    component={props =>
      isAuthenticated ? <Redirect to="/dashboard" /> : <Component {...props} />
    }
  />
);

const mapStateToProps = ({auth: {uid}}) => ({
  isAuthenticated: !!uid,
});

export default connect(mapStateToProps)(PublicRoute);
