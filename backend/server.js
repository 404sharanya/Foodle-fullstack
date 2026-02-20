import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import recipeRoutes from './routes/recipeRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/recipes", recipeRoutes);

console.log("ENV VALUE:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI) 
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('MongoDB connection error:', err));

app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));