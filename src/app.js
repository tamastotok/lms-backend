require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const mongoose = require('mongoose');
const log = require('./utils/logger');

// --- Server setup ---
const PORT = process.env.PORT || 5000;
const URI = process.env.URI;

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.ORIGIN || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }),
);

// --- Connect database ---
mongoose
  .connect(URI)
  .then(() => log.info('[DATABASE] Connected to database!'))
  .catch((error) => log.info('[DATABASE] DB Connection Error:', error));

// --- REST API endpoints ---

app.get('/', (req, res) => {
  res.status(200).json({ message: 'LMS API is running...' });
});

// --- Start server ---
app.listen(PORT, () => {
  log.server(`Szerver elindult a ${PORT}-es porton`);
});

module.exports = app;
