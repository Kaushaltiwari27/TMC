import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoutes.js';
import orderRouter from './routes/orderRoutes.js';


// App Config
const app = express();
const port = process.env.PORT || 4000;

connectDB().catch(err => console.error('Database connection error:', err));
connectCloudinary().catch(err => console.error('Cloudinary connection error:', err));

// Middleware
app.use(express.json());
app.use(cors());

// API endpoints
app.use('/api/user', userRouter);
app.use('/api/product',productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order',orderRouter)

app.get('/', (req, res) => {
    res.send("API WORKING");
});

// // Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

app.listen(port, () => console.log('Server started on PORT:' + port));