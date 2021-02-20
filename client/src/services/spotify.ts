import getCookie from '../utils/cookie';
import api from './api';

interface IGetAuthTokens {
  accessToken?: string;
  refreshToken?: string;
}

export const refreshAccessToken = async (
  refreshToken: string,
): Promise<string> => {
  const endpoint = `/refresh_token?refresh_token=${refreshToken}`;
  const accessToken = await api
    .get(endpoint, { withCredentials: true })
    .then(res => res.data);
  return accessToken;
};

export const getAuthTokens = async (): Promise<IGetAuthTokens> => {
  const accessToken = getCookie('accessToken');
  const refreshToken = getCookie('refreshToken');
  if (!accessToken && refreshToken) {
    return {
      accessToken: await refreshAccessToken(refreshToken),
      refreshToken,
    };
  }
  return { accessToken, refreshToken };
};
