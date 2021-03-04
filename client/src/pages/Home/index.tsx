import * as React from 'react';
import { useEffect } from 'react';
import { VStack, Heading, Text, Image } from '@chakra-ui/react';
import { getCurrentUserProfile } from '../../services/spotify';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { IInitialUserState, setUserInfo } from '../../features/userSlice';

const Home = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(state => state.user);
  const { name, image } = user;

  const fetchUser = async () => {
    const userDetails = await getCurrentUserProfile();
    console.log(userDetails);
    if (userDetails) {
      const { id, email, followers, images } = userDetails;
      const payload: IInitialUserState = {
        name: userDetails.display_name,
        id,
        email,
        followers: followers.total,
        image: images[0].url,
      };
      await dispatch(setUserInfo(payload));
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <VStack p="3">
      <Heading as="h5">Dashboard</Heading>
      <Text>Welcome {name} - you&apos;re logged in!</Text>
      <Image borderRadius="full" boxSize="150px" src={image} alt={name} />
    </VStack>
  );
};

export default Home;
