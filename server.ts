// Imports
import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

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
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
