import express from "express";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";


//app config
const app = express();
const port = process.env.PORT || 5000;
connectDB ();
connectCloudinary ();

//middleware
app.use(express.json());
app.use(cors());

// API endpoints
app.use('/api/user', userRoute);
app.use('/api/product', productRoute);

app.get('/', (req, res) => {
    res.send("Hello from the backend");
})

//listen
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})