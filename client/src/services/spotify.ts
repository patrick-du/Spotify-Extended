import { authService, spotifyService } from './api';

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
  console.log(userPlaylists);
  return userPlaylists;
};

