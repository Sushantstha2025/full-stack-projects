import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    productName: {
        type: String, 
        required: true
    },

    ingredients: {
        type: [String], 
        required: true
    }, 

    price: {
        type: Number, 
        required: true
    }, 

    imageURL: {
        type: String, 
        required: true, 
        default: ""
    }, 
    
    imageFileId: {
        type: String, 
        required: true
    }
}, 
{
    timestamps: true
}

)

export default mongoose.model("product", productModel)