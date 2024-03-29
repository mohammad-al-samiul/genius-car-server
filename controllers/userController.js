const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

//@desc register user info
//route POST /api/user/register
//@access private
const registerUser = asyncHandler(async (req, res) => {
  const { displayName, email, password } = req.body;
  if (!displayName || !email || !password) {
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
    displayName,
    email,
    password: hashPassword,
  });

  if (user) {
    const accessToken = jwt.sign(
      {
        user: {
          displayName: user.displayName,
          email: user.email,
          _id: user._id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    //console.log({accessToken});
    // res.status(200).json({ accessToken });
    res.status(201).json({ _id: user._id, email: user.email, accessToken });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
});

//@desc login user info
//route POST /api/user/login
//@access private
const loginUser = asyncHandler(async (req, res) => {
  const { email, password} = req.body;
  //console.log(email);
  if (!email || !password) {
    res.status(400);
    throw new Error("All feilds are mandatory!");
  }
  const user = await User.findOne({ email });
  //console.log(user);

  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          displayName: user.displayName,
          email: user.email,
          _id: user._id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    //console.log({accessToken});
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email or Password is not valid");
  }
});

//@desc current user info
//route GET /api/user/currentUser
//@access public
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
