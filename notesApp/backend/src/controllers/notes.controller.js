import notesModel from "../model/notes.model.js"

export const getAllNotes = async (req, res) => {
    try {
        const notes = await notesModel.find().sort({createdAt: -1})
        res.status(200).json({
            message: "Successfully fetched all notes", 
            notes
        })
        
    } catch (error) {
        console.log("Error when fetching notes: ", error.message)
    }
}

export const getNoteById = async (req, res) => {
    try {
        const note = await notesModel.findById(req.params.id)
        if(!note){
            return res.status(404).json({
                message: "Note not found"
            })
        }

        res.status(200).json({
            message: "Successfully fetched", 
            note
        })
    } catch (error) {
        console.log("Error when fetching a note", error.message)
    }
}

export const createNote = async (req, res) => {
    try {
        const {title, content} = req.body
        if(!title){
            return res.status(404).json({
                message: "Title is required"
            })
        }
    
        const note = await notesModel.create({
            title, 
            content
        })
    
        if(!note){
            res.status(404).json({
                message: "Cannot create the note"
            })
        }
    
        res.status(200).json({
            message: "Successfully created a note"
        })
        
    } catch (error) {
        console.log("Error when creating a note: ", error.message)
    }
}

export const updateNote = async (req, res) => {
    try {
        const {title, content} = req.body
        const note = await notesModel.findByIdAndUpdate(req.params.id, {title, content}, {returnDocument: "after"})
    
        if(!note){
            return res.status(404).json({
                message: "Note cannot be found"
            })
        }
    
        res.status(200).json({
            message: "Successfully updated a notes"
        })
        
    } catch (error) {
        console.log("Error when updating a note: ", error.message)
    }
}

export const deleteNote = async (req, res) => {
    try {
        const note = await notesModel.findByIdAndDelete(req.params.id)
        if(!note){
            return res.status(404).json({
                message: "Note not found"
            })
        }
        res.status(200).json({
            message: "Successfully deleted a notes"
        })
        
    } catch (error) {
        console.log("Error when deleting a note: ", error.message)
    }
}