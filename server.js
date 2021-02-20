// Imports
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

// Config
dotenv.config();

// Environment Variables
const PORT = process.env.PORT || 5000;
const FRONTEND_URI = process.env.FRONTEND_URI || 'https://localhost:3000';

// Initialize Express App
const app = express();

// Middleware
app.use(cors({ origin: FRONTEND_URI, credentials: true }));
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use(require('./routes'));

// Server
/* eslint-disable no-console */
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
