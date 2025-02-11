import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path'
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
// import morgan from 'morgan';

// app config 
const app = express();
const PORT = 4000;
dotenv.config();

//Middlewares
app.use(express.json());
app.use(cors());
// app.use(morgan('dev'));

//DB Config
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);




app.get('/', (req, res) => {
    res.send("API Working")
});

// Serve static files from the Vite frontend build
const __dirname = path.resolve();
const frontendPath = path.join(__dirname, 'frontend', 'dist');
app.use(express.static(frontendPath));

// Catch-all handler to serve the index.html file for other requests
app.get('*', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});


app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
});


//import routes from './routes';
