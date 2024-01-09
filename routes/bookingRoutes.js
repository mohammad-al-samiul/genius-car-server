const express = require("express");
const { createBooking, getBookings, deleteBookings, updateBookings } = require("../controllers/bookingController");
const router = express.Router();

router.route("/").get(getBookings).post(createBooking);
router.route("/:id").delete(deleteBookings).patch(updateBookings);

module.exports = router;
