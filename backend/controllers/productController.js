import { v2 as cloudinary } from 'cloudinary';
import productModel from '../models/productModel.js';

// function for add product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

        let imagesUrl = [];
        if (images.length > 0) {
            imagesUrl = await Promise.all(
                images.map(async (item) => {
                    let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                    return result.secure_url;
                })
            );
        }

        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestSeller: bestSeller === "true",
            sizes: sizes ? JSON.parse(sizes) : [], // Ensure sizes is an array
            image: imagesUrl,
            date: Date.now()
        };

        const product = new productModel(productData);
        await product.save();
        
        // Send success response
        res.status(201).json({ success: true, message: "Product added", product: productData });
        
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ success: false, message: error.message });
    }
}

// function for list product
const listProduct = async (req, res) => {
   try {
        const products = await productModel.find({});
        res.status(200).json({ success: true, products });
   } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ success: false, message: error.message });
   }
}

// function for remove product
const removeProduct = async (req, res) => {
    try {
        const { id } = req.body;
        const product = await productModel.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, message: "Product Removed" });

    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ success: false, message: error.message });
    }
}

// function for single product
const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body;
        const product = await productModel.findById(productId);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, product });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ success: false, message: error.message });
    }
}

export { addProduct, listProduct, removeProduct, singleProduct };