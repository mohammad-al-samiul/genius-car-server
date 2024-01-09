const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true,
  },
  service_id: {
    type: String,
    required: true,
  },
  service_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
