const express = require('express');
const queryString = require('querystring');
const request = require('request');

const router = express.Router();

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, FRONTEND_URI } = process.env;

// Login Route
router.get('/login', (req, res) => {
  const scopes =
    'user-read-private user-read-email user-read-recently-played user-top-read user-follow-read user-follow-modify user-library-read playlist-read-private playlist-read-collaborative playlist-modify-public';
  const queryRoute = queryString.stringify({
    response_type: 'code',
    client_id: CLIENT_ID,
    scope: scopes,
    redirect_uri: REDIRECT_URI,
  });
  res.redirect(`https://accounts.spotify.com/authorize?${queryRoute}`);
});

// Callback Route
router.get('/callback', (req, res) => {
  const { code } = req.query;
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code,
      redirect_uri: REDIRECT_URI,
      grant_type: 'authorization_code',
    },
    headers: {
      Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
    },
    json: true,
  };

  request.post(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const expiresIn = body.expires_in * 1000;
      res.cookie('accessToken', body.access_token, { expires: new Date(Date.now() + expiresIn) });
      res.cookie('refreshToken', body.refresh_token);
      res.redirect(`${FRONTEND_URI}`);
    } else {
      const queryRoute = queryString.stringify({ error: 'invalid_token' });
      res.redirect(`${FRONTEND_URI}/#${queryRoute}`);
    }
  });
});

// Refresh Token Route
router.get('/refresh_token', (req, res) => {
  const refreshToken = req.query.refresh_token;
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    },
    headers: {
      Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
    },
    json: true,
  };

  request.post(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const accessToken = body.access_token;
      const expiresIn = body.expires_in * 1000;
      res.cookie('accessToken', accessToken, { expires: new Date(Date.now() + expiresIn) });
      res.send(accessToken);
    }
  });
});

module.exports = router;
