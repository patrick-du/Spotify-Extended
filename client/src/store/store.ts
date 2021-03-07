import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import userReducer from './features/userSlice';
import playlistsReducer from './features/playlistsSlice';

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
