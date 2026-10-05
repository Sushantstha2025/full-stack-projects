import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: [true, "Title of the note is required"], 
    },

    content: {
        type: String, 
        required: [true, "Content of the note is required"], 
    },
}, 
{
    timestamps:true
}
)

export default mongoose.model("notes", notesSchema)