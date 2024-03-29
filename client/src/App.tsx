import * as React from 'react';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { Switch, Route, Redirect } from 'react-router-dom';

import theme from './theme';
import { useAppSelector, useAppDispatch } from './store/hooks';
import {
  fetchAccessToken,
  setAccessToken,
  setRefreshToken,
} from './store/features/authSlice';
import { authSelector } from './store/selectors';
import { Home, Landing, User, Playlists } from './pages';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const dispatch = useAppDispatch();
  const [cookies] = useCookies();
  const isAuthenticated = useAppSelector(authSelector.selectAccessToken);

  const getAuthTokens = async () => {
    const { accessToken, refreshToken } = cookies;
    if (accessToken && refreshToken) dispatch(setAccessToken(accessToken));
    if (!accessToken && refreshToken) dispatch(fetchAccessToken(refreshToken));
    if (refreshToken) dispatch(setRefreshToken(refreshToken));
  };

  useEffect(() => {
    getAuthTokens();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl" p={30} maxW="1440px" mx="auto">
        <Switch>
          <ProtectedRoute path="/home" component={Home} />
          <ProtectedRoute path="/user" component={User} />
          <ProtectedRoute path="/playlists" component={Playlists} />
          <Route exact path="/">
            {isAuthenticated ? <Redirect to="/home" /> : <Landing />}
          </Route>
        </Switch>
      </Box>
    </ChakraProvider>
  );
};

export default App;
