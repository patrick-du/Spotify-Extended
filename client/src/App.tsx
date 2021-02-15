import * as React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from './theme';
import Unauthenticated from './pages/Unauthenticated';
import Store from './store';

const App = () => {
  const hi = 'asd';

  return (
    <ChakraProvider theme={theme}>
      <Store>
        <Box textAlign="center" fontSize="xl" p={20} maxW="1440px" mx="auto">
          <Unauthenticated />
          {hi}
        </Box>
      </Store>
    </ChakraProvider>
  );
};

export default App;
