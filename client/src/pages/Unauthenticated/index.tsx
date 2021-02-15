import * as React from 'react';
import { useContext } from 'react';
import { VStack, Button } from '@chakra-ui/react';
import NavigationBar from '../../components/NavigationBar';
import { GlobalContext } from '../../store';
import {
  incrementCounter,
} from '../../store/actions';

const Unauthenticated = () => {
  const { state, dispatch } = useContext(GlobalContext);
  return (
    <VStack spacing={8}>
      <NavigationBar />
      <Button as="a" variant="outline" href="http://localhost:8000/login">
        Link Spotify
      </Button>
      <Button onClick={() => dispatch(incrementCounter(5))}>
        Increment
      </Button>
      <text>{state.count}</text>
    </VStack>
  );
};

export default Unauthenticated;
