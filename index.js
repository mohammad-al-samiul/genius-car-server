const express = require("express");
const cors = require("cors");
require('dotenv').config()

const Port = process.env.Port || 8001;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send('server running')
})

app.listen(Port,() => {
    console.log(`Server running on Port ${Port}`);
})