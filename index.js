const express = require("express");
const cors = require("cors");
const connectDb = require("./config/dbConnection");
require('dotenv').config()

const Port = process.env.Port || 8001;

connectDb();

const app = express();

app.use(express.json());
app.use(cors());

//console.log(process.env.DB_URL);


app.get("/", (req, res) => {
    res.send('server running')
})

app.listen(Port,() => {
    console.log(`Server running on Port ${Port}`);
})