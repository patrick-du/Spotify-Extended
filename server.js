// Imports
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

// Config
dotenv.config();

// Environment Variables
const PORT = process.env.PORT || 5000;

// Initialize Express App
const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use(require('./routes'));

// Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
