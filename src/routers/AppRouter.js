import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import DashboardPage from '../pages/DashboardPage';
import BoardPage from '../pages/BoardPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import NotFoundPage from '../pages/NotFoundPage';

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  try {
    jwtDecode(token);
  } catch (err) {
    return false;
  }
  return true;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
      />
    ))
    }
  />
);

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" exact component={LoginPage} />
      <Route path="/register" exact component={RegisterPage} />
      <PrivateRoute path="/boards" exact component={DashboardPage} />
      <PrivateRoute path="/boards/:id" exact component={BoardPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);
