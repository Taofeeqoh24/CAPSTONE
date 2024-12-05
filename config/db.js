//importing packages
require('dotenv').config(); //for environment variables
const mongoose = require('mongoose');

//create connection pool
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected Successfully......');
    } catch (err) {
        console.error('MongoDb Connection failed:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
