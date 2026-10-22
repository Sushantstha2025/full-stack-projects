import productModel from "../models/product.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import uploadImage from '../services/imageKitService.js'

export const getAllProducts = asyncHandler(async (req, res) => {
    const products = await productModel.find()
        if(!products){
            return res.json({
                message: "Cannot fetch the notes"
            })
        }

        res.status(200).json({
            message: "All notes: ", 
            products
        })
})

export const createProduct = asyncHandler(async(req, res)=>{
    const {productName, ingredients, price} = req.body

    if(!Number.isFinite(Number(price)) || Number(price)<0){
        const error = new Error("Price should be finite and not less than 0.")
        error.statusCode = 403
        throw error
    }

    if(!req.file){
        const error = new Error("Please select an image")
        error.statusCode = 404
        throw error
    }

    const {url, fileId} = await uploadImage(req.file)  // gives the file information to the uploadImage service, which returns url and fileId which is then stored in the url and fileId variables

    const product = await productModel.create({
        productName, 
        ingredients, 
        price, 
        imageURL: url, 
        imageFileId: fileId
    })

    if(!product){
        const error = new Error("Product cannot be created")
        error.statusCode = 400
        throw error
    }

    res.status(201).json({
        message: "Product added successfully", 
        name: product.name
    })
})

export const updateProduct = asyncHandler(async(req, res)=>{
    const allowedFields = [
        "productName", 
        "price", 
        "ingredients", 
        "imageURL"
    ]

    const updates = {}

    for(const field of allowedFields){
        if(req.body[field] !== undefined){
            updates[field] = req.body[field]
        }
    }

    const product = await productModel.findByIdAndUpdate(
        req.params.id, 
        {$set: updates}, 
        {
            returnDocument: "after", 
            runValidators: true
        }
    )

    if(!product){
        const error = new Error("Product not found")
        error.statusCode = 404
        throw error
    }

    res.status(200).json({
        success: true, 
        message: "Successfully updated the product", 
        product
    })
})

export const deleteProduct = asyncHandler(async(req, res) => {
    const product = await productModel.findByIdAndDelete(req.params.id)
    if(!product){
        const error = new Error("Product not found")
        error.statusCode = 404
        throw error
    }

    res.status(200).json({
        success: true, 
        message: "Successfully deleted the product"
    })
})
