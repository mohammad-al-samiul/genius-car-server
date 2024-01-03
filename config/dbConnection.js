const mongoose = require("mongoose");

const connectDb = async(req,res) => {
    const connect = await mongoose.connect(process.env.DB_URL);
    console.log(connect.connection.name);
    console.log(connect.connection.host);
}

module.exports = connectDb;