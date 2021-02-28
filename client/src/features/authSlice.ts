import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  accessToken: string;
  refreshToken: string;
}

const initialState: IInitialState = {
  accessToken: '',
  refreshToken: '',
};

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
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
