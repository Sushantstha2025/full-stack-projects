import mongoose from "mongoose";
import config from "./config.js";

const connectDB = async () => {
    try {
        await mongoose.connect(`${config.mongodb_uri}`)
        console.log("Connected to mongodb")
    } catch (error) {
        console.log("Error on mongodb", error)
        process.exit(1)  // exit with failure, 1 means failure, 0 means success
    }
}


export default connectDB