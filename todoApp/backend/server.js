const express = require("express")
const cors = require("cors")

const app = express()


app.use(
    cors({
        origin: 'http://localhost:5173' // origin matlab kata bata request aauxa? that is frontend which is in port: 5173
    })
)

app.use(express.json())

let notes = []

// GET all notes
app.get('/api/notes', (req, res)=>{
    res.json(notes)
})


// POST a note 
app.post('/api/note', (req, res)=>{
    const {title, content} = req.body

    if(!title || !content){
        res.status(404).json({
            message: "Title and content both required!"
        })
    }

    const newNote = {
        id: notes.length + 1, 
        title, 
        content
    }


    notes.push(newNote)
    res.status(201).json(newNote)
})

app.listen(3000, ()=>{
    console.log(`Server is running on port: 3000`)
})