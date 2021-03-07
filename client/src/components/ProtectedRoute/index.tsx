import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { useAppSelector } from '../../store/hooks';
import { authSelector } from '../../store/selectors';
import NavigationDrawer from '../NavigationDrawer';

const ProtectedRoute = ({ component: Component, path }: RouteProps) => {
  const isAuthenticated = useAppSelector(authSelector.selectAccessToken);
  return isAuthenticated ? (
    <>
      <NavigationDrawer />
      <Route component={Component} path={path} />
    </>
  ) : (
    <Redirect to="/" />
  );
};

export default ProtectedRoute;
