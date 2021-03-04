import axios from 'axios';
// import { useAppSelector } from '../store/hooks';

// const headers =
//   process.env.NODE_ENV === 'production'
//     ? {}
//     : { 'Access-Control-Allow-Origin': 'http://localhost:3000' };

const serverRequest = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://google.com'
      : 'http://localhost:8000',
  timeout: 1000,
  // headers,
});

const spotifyRequest = axios.create({
  baseURL: 'https://api.spotify.com',
  timeout: 1000,
  // headers: {
  //   Authorization: `Bearer ${useAppSelector(state => state.auth.accessToken)}`,
  // },
  // headers,
});

export { serverRequest, spotifyRequest };
