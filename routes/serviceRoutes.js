const express = require("express");
const { getAllServices, createService, updateService, deleteService } = require("../controllers/serviceController");
const router = express.Router();

router.route('/').get(getAllServices).post(createService);
router.route('/:id').get(getSelection).put(updateService).delete(deleteService);

module.exports = router;