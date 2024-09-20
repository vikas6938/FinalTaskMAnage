const express = require('express');
const { createEvent, getAllEvents, editEvent, deleteEvent, getMyEvents } = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware'); // JWT authentication middleware

const router = express.Router();

// Create an event (requires authentication)
router.post('/create', authMiddleware, createEvent);

// Get all events (public route)
router.get('/', getAllEvents);

// Get events created by the logged-in user (requires authentication)
router.get('/my-events', authMiddleware, getMyEvents);

// Edit an event (requires authentication)
router.put('/:id', authMiddleware, editEvent);

// Delete an event (requires authentication)
router.delete('/:id', authMiddleware, deleteEvent);

module.exports = router;
