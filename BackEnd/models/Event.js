const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  maxAttendees: { type: Number, required: true },
  image: { type: String }, // Image URL for the event
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Event creator (linked to User schema)
  },
  attendees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

module.exports = mongoose.model('Event', eventSchema);
