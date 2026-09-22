import express from "express"
import cors from 'cors'

const app = express()

app.use(
    cors({
        origin: `http://localhost:5173`
    })
)

app.use(express.json())

let products = [
    {
        title: "glasses", 
        description: "Premium marble leather chilli glasses"
    }, 
    {
        title: "guitar", 
        description: "Premium fan laptop charger mobile phone guitar"
    }
]

// get route
app.get("/api/products", (req, res)=>{
    res.json(products)
})


// create route
app.post("/api/product", (req, res)=>{
    const {title, description} = req.body

    if(!title || !description){
        return res.status(404).json({
            message: "Both title and description are required"
        })
    }

    const newProduct = {
        title,
        description
    }

    products.push(newProduct)

    res.status(201).json(newProduct)
})


export default app
