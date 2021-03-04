import { configureStore } from '@reduxjs/toolkit';
import { authReducer, userReducer, playlistsReducer } from '../features';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    playlists: playlistsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
