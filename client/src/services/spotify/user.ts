import { spotifyRequest } from '../api';
import { PrivateUserObject } from './interfaces';

export const getCurrentUserProfile = async () => {
  const endpoint = `v1/me`;
  const userProfile = await spotifyRequest
    .get<PrivateUserObject>(endpoint)
    .then(res => res.data)
    .catch(err => console.log(err));
  console.log(userProfile);
  return userProfile;
};

export const palceHolder = () => true;
