const asyncHandler = require("express-async-handler");
//@desc Register the user
//route POST /api/user/register
//@access public

const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register the user" });
});

//@desc Register the user
//route POST /api/user/register
//@access public

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "login the user" });
});

//@desc Register the user
//route POST /api/user/register
//@access public

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "current the user" });
});

module.exports = { registerUser, loginUser, currentUser };
