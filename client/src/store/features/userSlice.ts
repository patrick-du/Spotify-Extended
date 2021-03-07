import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCurrentUser } from '../../services/spotify';
import { IUserState } from './interfaces';
import DispatchStatus from '../constants';

const initialState: IUserState = {
  user: {},
  status: DispatchStatus.idle,
  error: null,
};

export const fetchUser = createAsyncThunk('user/fetchCurrentUser', async () => {
  const response = await getCurrentUser();
  return response;
});

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<IUserState>) => action.payload,
  },
  extraReducers: builder => {
    builder.addCase(fetchUser.fulfilled, (state, { payload }) => {
      const { id, display_name: name, email, followers, images } = payload;
      state.status = DispatchStatus.succeeded;
      state.user = {
        id,
        name,
        email,
        followers: followers.total,
        image: images[0].url,
      };
    });
  },
});

const { actions, reducer } = slice;

export const { setUserInfo } = actions;

export default reducer;
