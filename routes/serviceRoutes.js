const express = require("express");
const {
  getAllServices,
  createService,
  updateService,
  deleteService,
  getSingleService,
} = require("../controllers/serviceController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.route("/").get(getAllServices).post(createService);
router
  .route("/:id")
  .get(getSingleService)
  .put(updateService)
  .delete(deleteService);

module.exports = router;
