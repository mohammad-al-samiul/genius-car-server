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
  const booking = await Booking.create(req.body);
  res.json({ booking, insertedId: true });
});

//@desc Get all booking using email
//@route GET '/api/bookings'
//@access public
const getBookings = asyncHandler(async (req, res) => {
  const { email } = req.query;
  const bookings = await Booking.find({ email });
  res.send(bookings);
});

//@desc DELETE a booking
//@route DELETE '/api/bookings/:id'
//@access public
const deleteBookings = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const booking = await Booking.findById(id);
  if (!booking) {
    res.status(404);
    throw new Error("Booking not found");
  }
  await Booking.findByIdAndDelete({ _id: id });
  res.send({ success: true });
});

//@desc UPDATE bookings
//@route PUT '/api/bookings'
//@access public
const updateBookings = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const booking = await Booking.findById(id);
  if (!booking) {
    res.status(404);
    throw new Error("Booking not found");
  }
  const bookings = await Booking.findByIdAndUpdate(
    id,
    { status },
    {
      new: true,
    }
  );
  res.send({ bookings, success: true });
});

module.exports = {
  createBooking,
  getBookings,
  deleteBookings,
  updateBookings,
};
