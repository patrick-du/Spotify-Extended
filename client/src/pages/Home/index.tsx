import * as React from 'react';
import { useEffect } from 'react';
import { VStack, Heading, Text, Image } from '@chakra-ui/react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { userSelector } from '../../store/selectors';
import DispatchStatus from '../../store/constants';
import { fetchUser } from '../../store/features/userSlice';

const Home = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector.selectUser);
  const userStatus = useAppSelector(userSelector.selectUserStatus);
  const { name, image } = user;

  useEffect(() => {
    if (userStatus === DispatchStatus.idle) {
      dispatch(fetchUser());
    }
  }, [userStatus, dispatch]);

  return (
    <VStack p="3">
      <Heading as="h5">Dashboard</Heading>
      <Text>Welcome {name} - you&apos;re logged in!</Text>
      <Image borderRadius="full" boxSize="150px" src={image} alt={name} />
    </VStack>
  );
};

export default Home;
