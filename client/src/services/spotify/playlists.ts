import { spotifyRequest } from '../api';
import { PagingObject } from './interfaces';

export const getCurrentUserPlaylists = async () => {
  const endpoint = `/v1/me/playlists?limit=50`;
  const userPlaylists = await spotifyRequest
    .get<PagingObject>(endpoint)
    .then(res => res.data);
  return userPlaylists;
};
