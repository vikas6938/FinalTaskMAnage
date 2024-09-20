const Event = require('../models/Event');

// Create a new event
exports.createEvent = async (req, res) => {
    const { title, description, date, location, maxAttendees } = req.body;

    try {
        const newEvent = new Event({
            title,
            description,
            date,
            location,
            maxAttendees,
            image: req.file ? req.file.path : null
        });

        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all events
exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get events created by the logged-in user
exports.getMyEvents = async (req, res) => {
    try {
        const events = await Event.find({ createdBy: req.user.id });
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Edit an event
exports.editEvent = async (req, res) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete an event
exports.deleteEvent = async (req, res) => {
    try {
        await Event.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
