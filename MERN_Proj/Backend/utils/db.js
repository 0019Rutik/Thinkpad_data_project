const mongoose = require('mongoose');
// RCPcAcXeYbJM9OLF
const dotenv = require("dotenv");

dotenv.config();

//const URI = process.env.MONGO_URI;
//const URI = "mongodb://0.0.0.0:0/Mern_Admin";
const connectDB = async () =>{

    try { 
        await mongoose.connect(process.env.MONGO_URI);
        console.log('connected to the database');
        
    } catch (error) {
        console.log('connection failed to db');
        console.log(error);
        process.exit(0);
    }

}
module.exports  = connectDB;