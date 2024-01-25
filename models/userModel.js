const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      required: [true, "Please add your username"],
    },
    email: {
      type: String,
      required: [true, "Please add your email"],
    },
    password: {
      type: String,
      required: [true, "Please add your password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
