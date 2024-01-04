//@desc Get all services
//@route GET /api/services
//access public
const getAllServices = (req, res) => {
  res.send("Get All Services");
};

//@desc create a service
//@route POST /api/services
//access public
const createService = (req, res) => {
  res.send("Create a services");
};

//@desc Get single service
//@route GET /api/services/:id
//access public
const getSingleService = (req, res) => {
  res.send(`Get a service by id ${req.params.id}`);
};

//@desc Update a service
//@route PUT /api/services/:id
//access public
const updateService = (req, res) => {
  res.send(`Update a service id ${req.params.id}`);
};

//@desc Delete a service
//@route DELETE /api/services/:id
//access public
const deleteService = (req, res) => {
  res.send(`delete a service id ${req.params.id}`);
};

module.exports = {
  getAllServices,
  getSingleService,
  createService,
  updateService,
  deleteService,
};
