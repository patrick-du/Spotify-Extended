import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { spotifyRequest } from '../services/api';

interface IInitialAuthState {
  accessToken: string;
  refreshToken: string;
}

const initialState: IInitialAuthState = {
  accessToken: '',
  refreshToken: '',
};

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      spotifyRequest.defaults.headers.common.Authorization = `Bearer ${action.payload}`;
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
    resetAuthState: () => initialState,
  },
});

export const {
  setAccessToken,
  setRefreshToken,
  resetAuthState,
} = slice.actions;

export default slice.reducer;
