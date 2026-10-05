import express from 'express'
import notesRouter from '../src/routes/notes.routes.js'
import rateLimiter from './middleware/rateLimit.js'
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(rateLimiter)

app.use('/api/notes', notesRouter)

export default app