import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL).then(()=>{
            console.log("connection sucessfull...");
        });
    } catch (error) {
        console.log("error fro DB")
    } 
}
export default DB;