const express = require('express');
const cors = require('cors');
const eventRoutes = require('./routes/eventRoutes');

const app = express(); // Initialize the Express application

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Routes
app.use('/api/events', eventRoutes);

module.exports = app; // Export the Express application
