const express = require("express");
const {
  createBooking,
  getBookings,
  deleteBookings,
  updateBookings,
} = require("../controllers/bookingController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.use(validateToken);
router.route("/").get(getBookings).post(createBooking);
router.route("/:id").delete(deleteBookings).patch(updateBookings);

module.exports = router;
