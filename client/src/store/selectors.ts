import { RootState } from './store';

export const authSelector = {
  selectAccessToken: (state: RootState) => state.auth.tokens.accessToken,
};

export const userSelector = {
  selectUserStatus: (state: RootState) => state.user.status,
  selectUser: (state: RootState) => state.user.user,
};
