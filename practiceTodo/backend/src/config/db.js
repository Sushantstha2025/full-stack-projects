import mongoose from "mongoose";
import config from "./config.js";

const connectDB = async () => {
    try {
        await mongoose.connect(`${config.mongo_uri}`)
        console.log("Connected to database")
        
    } catch (error) {
        console.log("Error connecting to database", error)
    }
}


export default connectDB