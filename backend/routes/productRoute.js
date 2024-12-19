import express from 'express';
import { addProduct, listProduct, singleProduct, removeProduct } from '../controllers/productController.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const productRouter = express.Router();

productRouter.post('/add',adminAuth,upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]), addProduct); // Corrected: removed parentheses
productRouter.get('/list', listProduct); // Corrected: removed parentheses
productRouter.post('/remove',adminAuth, removeProduct); // Corrected: removed parentheses
productRouter.post('/single', singleProduct); // Corrected: removed parentheses

export default productRouter;