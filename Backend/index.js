import express from 'express';
const app = express()
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoutes from "./route/book.route.js";
import userRoutes from "./route/user.route.js";
import cors from 'cors';
app.use(cors());

app.use(express.json());

dotenv.config();
const PORT=process.env.PORT ||4000;
const URL=process.env.MongoDBURL

//connection of mongoDB
try {
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    });
    console.log('MongoDB connected successfully');   
} catch (error) {
    console.log('Error : ', error); 
}

//defining routes
app.use('/book',bookRoutes);
app.use('/user',userRoutes);

app.listen(PORT, () => {
  console.log(` Server is listing on on port ${PORT}`)
})