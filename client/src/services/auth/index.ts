import { serverRequest } from '../api';

export const refreshAccessToken = async (
  refreshToken: string,
): Promise<string> => {
  const endpoint = `/refresh_token?refresh_token=${refreshToken}`;
  const accessToken = await serverRequest
    .get(endpoint, { withCredentials: true })
    .then(res => res.data);
  return accessToken;
};
