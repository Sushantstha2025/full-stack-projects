import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: {
        type: "String", 
        required: [true, "Title is required"]
    },

    content: {
        type: "String", 
    },
},
    {timestamps: true}
)

export default mongoose.model("notes", noteSchema)