import * as React from 'react';
import { useEffect } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';

import theme from './theme';
import { useAppDispatch, useAppSelector } from './store/hooks';
import Authenticated from './pages/Authenticated';
import Unauthenticated from './pages/Unauthenticated';
import NavigationBar from './components/NavigationBar';

const App = () => {
  const isAuthenticated = useAppSelector(state => state.auth.accessToken);


  return (
    <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl" p={20} maxW="1440px" mx="auto">
        <NavigationBar />
        {isAuthenticated ? <Authenticated /> : <Unauthenticated />}
        </Box>
    </ChakraProvider>
  );
};

export default App;
