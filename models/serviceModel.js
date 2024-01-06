const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    service_id: String,
    title: String,
    img: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    facility: [
      {
        name: {
          type: String,
          required: true,
        },
        details: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Service", serviceSchema);
