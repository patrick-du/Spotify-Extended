import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IInitialUserState {
  name?: string;
  id?: string;
  email?: string;
  followers?: number;
  image?: string;
}

const initialState: IInitialUserState = {};

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<IInitialUserState>) =>
      action.payload,
  },
});

export const { setUserInfo } = slice.actions;

export default slice.reducer;
