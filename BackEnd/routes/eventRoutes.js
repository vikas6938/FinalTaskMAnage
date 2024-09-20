const express = require('express');
const { createEvent, getAllEvents, editEvent, deleteEvent, getMyEvents } = require('../controllers/eventController');
const upload = require('../middleware/upload'); // Multer for file uploads
const authMiddleware = require('../middleware/authMiddleware'); // Authentication middleware

const router = express.Router();

// Route to create an event (with image upload)
router.post('/create', authMiddleware, upload.single('image'), createEvent);

// Route to get all events (public route)
router.get('/', getAllEvents);

// Route to get events created by the logged-in user (authenticated route)
router.get('/my-events', authMiddleware, getMyEvents);

// Route to edit an event (with image upload)
router.put('/:id', authMiddleware, upload.single('image'), editEvent);

// Route to delete an event
router.delete('/:id', authMiddleware, deleteEvent);

module.exports = router;
