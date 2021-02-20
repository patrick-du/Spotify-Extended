import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://google.com'
    : 'http://localhost:8000';

const headers =
  process.env.NODE_ENV === 'production'
    ? {}
    : { 'Access-Control-Allow-Origin': 'http://localhost:3000' };

const instance = axios.create({
  baseURL,
  timeout: 1000,
  headers,
});

export default instance;
