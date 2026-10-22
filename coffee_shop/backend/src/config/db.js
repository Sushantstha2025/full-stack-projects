import mongoose from "mongoose";
import {config} from "./config.js";

const connectDB = async () => {
    await mongoose.connect(`${config.mongodb_uri}`)
    .then(()=> console.log("DB connected successfully"))
    .catch((error)=>console.log("Error connecting to DB", error))
}

export default connectDB