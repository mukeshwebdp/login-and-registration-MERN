import mongoose from "mongoose";

const URL = process.env.MONGOURL;

const connectDB = async(req,res)=>{
    try {
        const connectionInstance = await mongoose.connect(URL);
        console.log(`monogoDB connected : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`MongoDB connection error: ${error}`);
        console.log('Retrying connection in 5 seconds...');
        setTimeout(connectDB,5000)
    }
}

export default connectDB;