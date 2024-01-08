const express = require("express");
const cors = require("cors");
const connectDb = require("./config/dbConnection");
const servicesRoute = require("./routes/serviceRoutes");
const errorHandler = require("./middleware/errorHandle");
const bookingRoute = require("./routes/bookingRoutes");
require("dotenv").config();

const Port = process.env.Port || 8001;

connectDb();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/services", servicesRoute);
app.use("/api/bookings", bookingRoute);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("genius car running");
});

app.listen(Port, () => {
  console.log(`Server running on Port ${Port}`);
});
