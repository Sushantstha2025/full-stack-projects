import express from 'express'

import { getAllNotes, createNote, updateNote, getANote, deleteNote } from '../controllers/notes.controller.js'

const router = express.Router()

router.get("/", getAllNotes)
router.post("/", createNote)
router.get("/:id", getANote)
router.patch("/:id", updateNote)
router.delete("/:id", deleteNote)

export default router