const mongoose = require('mongoose');
require('dotenv').config()


const connectDB = async () => {
    try {
        await mongoose
            .connect(process.env.MONGO_URL)
        console.log('CONNECTED TO MONGODB ^_^');
    } catch (error) {
        console.error(`ERROR TRYING CONNECT TO DATABASE: ${error}`);
        process.exit(1); // Exit process with failure
    }
};


module.exports = connectDB;