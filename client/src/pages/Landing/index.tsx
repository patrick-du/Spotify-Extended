import * as React from 'react';
import { VStack, Heading, Button } from '@chakra-ui/react';

const Landing = () => (
  <VStack spacing={8}>
    <Heading as="h1">Spotify Extended</Heading>
    <Button as="a" variant="outline" href="http://localhost:8000/login">
      Link Spotify
    </Button>
  </VStack>
);

export default Landing;
