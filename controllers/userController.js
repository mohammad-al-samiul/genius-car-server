const asyncHandler = require("express-async-handler");
//@desc register user info
//route POST /api/user/register
//@access private

const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register the user" });
});

//@desc login user info
//route POST /api/user/login
//@access private

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "login the user" });
});

//@desc current user info
//route POST /api/user/currentUser
//@access public

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "current the user" });
});

module.exports = { registerUser, loginUser, currentUser };
