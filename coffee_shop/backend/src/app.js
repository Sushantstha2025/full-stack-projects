import express from "express"
import morgan from "morgan"
import productRouter from '../src/routes/product.routes.js'
import errorMiddleware from "./middlewares/error.middleware.js"
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(cors({
    origin: "http://localhost:5173"
}))

app.use('/api/products', productRouter) // configure routes
app.use(errorMiddleware)

export default app