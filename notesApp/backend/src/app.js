import express from 'express'
import cors from 'cors'
import notesRoute from '../src/routes/notes.routes.js'
import rateLimiter from './middleware/rateLimit.js'

const app = express()

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173"
}))

app.use(rateLimiter)
app.use((req, res, next)=>{
    console.log(`Req method is: ${req.method} and Req URL is: ${req.url}`)
    next()
})

app.use('/api/notes', notesRoute)

export default app