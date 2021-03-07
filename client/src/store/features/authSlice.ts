import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { spotifyRequest } from '../../services/api';
import refreshAccessToken from '../../services/auth';
import DispatchStatus from '../constants';
import { IAuthState } from './interfaces';

const initialState: IAuthState = {
  tokens: {},
  status: DispatchStatus.idle,
  error: null,
};

export const fetchAccessToken = createAsyncThunk(
  'auth/fetchAccessToken',
  async (refreshToken: string) => {
    const response = await refreshAccessToken(refreshToken);
    return response;
  },
);

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      spotifyRequest.defaults.headers.common.Authorization = `Bearer ${action.payload}`;
      state.tokens.accessToken = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.tokens.refreshToken = action.payload;
    },
    resetAuthState: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(fetchAccessToken.fulfilled, (state, { payload }) => {
      state.status = DispatchStatus.succeeded;
      state.tokens.accessToken = payload;
    });
  },
});

const { actions, reducer } = slice;

export const { setAccessToken, setRefreshToken, resetAuthState } = actions;

export default reducer;
