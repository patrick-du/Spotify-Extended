import { authService, spotifyService } from '../api';
import { PrivateUserObject } from './interfaces';

export const refreshAccessToken = async (
  refreshToken: string,
): Promise<string> => {
  const endpoint = `/refresh_token?refresh_token=${refreshToken}`;
  const accessToken = await authService
    .get(endpoint, { withCredentials: true })
    .then(res => res.data);
  return accessToken;
};

export const getCurrentUserPlaylists = async () => {
  const endpoint = `/v1/me/playlists`;
  const userPlaylists = await spotifyService
    .get(endpoint)
    .then(res => res.data);
  return userPlaylists;
};

export const getCurrentUserProfile = async () => {
  const endpoint = `v1/me`;
  const userProfile = await spotifyService
    .get<PrivateUserObject>(endpoint)
    .then(res => res.data)
    .catch(err => console.log(err));
  return userProfile;
};
