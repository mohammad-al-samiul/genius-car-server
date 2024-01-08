const asyncHandler = require("express-async-handler");
const Booking = require("../models/bookingModel");

//@desc create booking
//@route POST '/api/bookings'
//@access public
const createBooking = asyncHandler(async (req, res) => {
  const { service_id, service_name, img, price, date } = req.body;
  if (!service_id || !service_name || !img || !price || !date) {
    res.status(400);
    throw new Error("All feilds are mandatory!");
  }
  const bookings = await Booking.create(req.body);
  res.json(201).json(bookings);
});
