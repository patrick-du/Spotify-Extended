import * as React from 'react';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { ChakraProvider, Box } from '@chakra-ui/react';

import theme from './theme';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { setAccessToken, setRefreshToken } from './features/authSlice';
import { refreshAccessToken } from './services/spotify';
import Authenticated from './pages/Authenticated';
import Unauthenticated from './pages/Unauthenticated';

const App = () => {
  const dispatch = useAppDispatch();
  const [cookies] = useCookies();

  const isAuthenticated = useAppSelector(state => state.auth.accessToken);

  const getAuthTokens = async () => {
    const { accessToken, refreshToken } = cookies;
    if (accessToken && refreshToken) dispatch(setAccessToken(accessToken));
    if (!accessToken && refreshToken)
      dispatch(setAccessToken(await refreshAccessToken(refreshToken)));
    if (refreshToken) dispatch(setRefreshToken(refreshToken));
  };

  useEffect(() => {
    getAuthTokens();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl" p={30} maxW="1440px" mx="auto">
        {isAuthenticated ? <Authenticated /> : <Unauthenticated />}
      </Box>
    </ChakraProvider>
  );
};

export default App;
