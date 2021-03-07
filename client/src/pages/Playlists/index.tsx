import * as React from 'react';
import { useEffect } from 'react';
import {
  Box,
  Heading,
  VStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from '@chakra-ui/react';
import { getCurrentUserPlaylists } from '../../services/spotify';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  IInitialPlaylistsState,
  setPlaylists,
} from '../../store/features/playlistsSlice';

const Playlists = () => {
  const dispatch = useAppDispatch();

  const playlists = useAppSelector(state => state.playlists);

  const fetchPlaylists = async () => {
    const userPlaylists = await getCurrentUserPlaylists();
    if (userPlaylists) {
      const { items, total } = userPlaylists;
      const payload: IInitialPlaylistsState = {
        items,
        total,
      };
      await dispatch(setPlaylists(payload));
    }
  };

  useEffect(() => {
    fetchPlaylists();
  }, []);

  return (
    <Box w="100%">
      <Heading as="h1" borderBottom="1px">
        Playlists
      </Heading>
      <VStack spacing={3} alignItems="flex-start">
        <p>You have {playlists.total} playlists.</p>
        {playlists.items &&
          playlists.items.map(({ description, name, owner, tracks }) => (
            <Stat>
              <StatLabel>{`${tracks?.total} tracks`}</StatLabel>
              <StatNumber>{`${name} by ${owner.display_name}`}</StatNumber>
              <StatHelpText>{description}</StatHelpText>
            </Stat>
          ))}
      </VStack>
    </Box>
  );
};

export default Playlists;
