import { spotifyRequest } from '../api';
import { PrivateUserObject } from './interfaces';

export const getCurrentUser = async () => {
  const endpoint = `v1/me`;
  const user = await spotifyRequest
    .get<PrivateUserObject>(endpoint)
    .then(res => res.data);
  return user;
};

export const palceHolder = () => true;
