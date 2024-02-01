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
  //{ ...req.body, user_id: req.user._id }
  res.json({ booking, insertedId: true });
});

//@desc Get all booking using email
//@route GET '/api/bookings'
//@access public
const getBookings = asyncHandler(async (req, res) => {
  const { email } = req.query;
  if (email !== req.user.email) {
    res.status(401);
    throw new Error("User is not authorized");
  }
  const bookings = await Booking.find({ user_id : req.user._id });
  res.send(bookings);
});

//@desc DELETE booking
//@route DELETE '/api/bookings/:id'
//@access public
const deleteBookings = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const booking = await Booking.findById(id);
  if (!booking) {
    res.status(404);
    throw new Error("Booking not found");
  }
  if (booking.user_id.toString() !== req.user._id) {
    res.status(403);
    throw new Error("User don't have permission to update the bookings");
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
  if (booking.user_id.toString() !== req.user._id) {
    res.status(403);
    throw new Error("User don't have to delete the bookings");
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
