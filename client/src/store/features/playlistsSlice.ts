import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplifiedPlaylistObject } from '../../services/spotify/interfaces';

export interface IInitialPlaylistsState {
  items?: [SimplifiedPlaylistObject];
  total?: number;
}

const initialState: IInitialPlaylistsState = {};

export const slice = createSlice({
  name: 'playlists',
  initialState,
  reducers: {
    setPlaylists: (state, action: PayloadAction<IInitialPlaylistsState>) =>
      action.payload,
  },
});

export const { setPlaylists } = slice.actions;

export default slice.reducer;
