import notesModel from "../models/notes.model.js"

export const getAllNotes = async (req, res) => {
    const notes = await notesModel.find()
    res.status(200).json({
        message: "Notes fetched", 
        notes
    })
}


export const getANote = async (req, res) => {
    const note = await notesModel.findById(req.params.id)
    if(!note){
        return res.status(404).json({
            message: "Note not found"
        })
    }
    res.status(200).json({
        message: "Note fetched", 
        note
    })
}


export const createNote = async (req, res) => {
    const {title, content} = req.body
    const note = await notesModel.create({
        title, content
    })

    if(!note){
        return res.status(400).json({
            message: "Note failed to create"
        })
    }

    res.status(201).json({
        message: "Note created successfully", 
        note
    })
}


export const updateNote = async (req, res) => {
    const allowedFiels = ["title", "content"]
    const updates = {}

    for(const field of allowedFiels){
        if(field in req.body){
            updates[field] = req.body[field]
        }
    }

    const note = await notesModel.findOneAndUpdate({_id: req.params.id}, updates, {returnDocument: 'after', runValidators: true})
    if(!note){
        return res.status(404).json({
            message: "Note not found"
        })
    }
    res.status(200).json({
        message: "Note successfully updated"
    })
}


export const deleteNote = async (req, res) => {
    const note = await notesModel.findByIdAndDelete(req.params.id)
    if(!note){
        return res.status(404).json({
            message: "Note not found"
        })

    }

    res.status(200).json({
        message: "Note deleted successfully"
    })
}