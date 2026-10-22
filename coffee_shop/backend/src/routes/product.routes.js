import express from 'express'
import { createProduct, deleteProduct, getAllProducts, updateProduct } from '../controllers/product.controller.js'
import upload from '../middlewares/upload.middleware.js'


const router = express.Router()

router.get("/", getAllProducts)
router.post("/", upload.single("image"), createProduct)
router.patch("/:id", updateProduct)
router.delete("/:id", deleteProduct)

export default router