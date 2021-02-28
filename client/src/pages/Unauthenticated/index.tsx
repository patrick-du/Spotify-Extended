import * as React from 'react';
import { Heading, VStack, Button } from '@chakra-ui/react';

const Unauthenticated = () => (
  <VStack spacing={8}>
    <Heading as="h1">
      Spotify Extended
    </Heading>
    <Button as="a" variant="outline" href="http://localhost:8000/login">
      Link Spotify
    </Button>
  </VStack>
);

export default Unauthenticated;
