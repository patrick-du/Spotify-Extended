import * as React from 'react';
import { Box, Flex, Spacer, Heading } from '@chakra-ui/react';
import ColorModeSwitcher from '../ColorModeSwitcher';

const NavigationBar = () => {
  const APP = 'Spotify Extended';
  return (
    <Box w="100%">
      <Flex>
        <Heading>{APP}</Heading>
        <Spacer />
        <ColorModeSwitcher />
      </Flex>
    </Box>
  );
};

export default NavigationBar;
