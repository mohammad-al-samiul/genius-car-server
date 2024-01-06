const asyncHandler = require("express-async-handler");
const Service = require("../models/serviceModel");
//@desc Get all services
//@route GET /api/services
//access public
const getAllServices = asyncHandler(async (req, res) => {
  const services = await Service.find({});
  res.status(200).json(services);
});

//@desc create a service
//@route POST /api/services
//access public
const createService = asyncHandler(async (req, res) => {
  const { name, phone } = req.body;
  if (!name || !phone) {
    res.status(400);
    throw new Error("All feilds are mandatory!");
  }
  res.send("Create a services");
});

//@desc Get single service
//@route GET /api/services/:id
//access public
const getSingleService = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (!service) {
    res.status(404);
    throw new Error("Service Not found!");
  }
  res.status(200).json(service);
});

//@desc Update a service
//@route PUT /api/services/:id
//access public
const updateService = asyncHandler(async (req, res) => {
  res.send(`Update a service id ${req.params.id}`);
});

//@desc Delete a service
//@route DELETE /api/services/:id
//access public
const deleteService = asyncHandler(async (req, res) => {
  res.send(`delete a service id ${req.params.id}`);
});

module.exports = {
  getAllServices,
  getSingleService,
  createService,
  updateService,
  deleteService,
};
