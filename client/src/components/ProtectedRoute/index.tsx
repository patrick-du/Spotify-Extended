import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { useAppSelector } from '../../store/hooks';
import NavigationDrawer from '../NavigationDrawer';

const ProtectedRoute = ({ component: Component, path }: RouteProps) => {
  const isAuthenticated = useAppSelector(state => state.auth.accessToken);
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
