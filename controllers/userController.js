const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
//@desc register user info
//route POST /api/user/register
//@access private
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All feilds are mandatory!");
  }
  const availableUser = await User.findOne({ email });
  if (availableUser) {
    res.status(400);
    throw new Error("email already taken");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    password: hashPassword,
  });

  if (user) {
    res.status(201).json({ _id: user._id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
  res.json({ message: "Register the user" });
});

//@desc login user info
//route POST /api/user/login
//@access private
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "login the user" });
});

//@desc current user info
//route GET /api/user/currentUser
//@access public
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "current the user" });
});

module.exports = { registerUser, loginUser, currentUser };
