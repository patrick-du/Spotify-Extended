import * as React from 'react';
import { VStack, Heading, Text } from '@chakra-ui/react';

const Dashboard = () => (
  <VStack spacing={8}>
    <Heading as="h1">Dashboard</Heading>
    <Text>You&apos;re logged in!</Text>
  </VStack>
);

export default Dashboard;
