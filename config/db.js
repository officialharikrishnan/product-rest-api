import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
export const dbConnect = async () => {
    try{
        await mongoose.connect(`mongodb+srv://harikrishnanpnr001:${process.env.MONGO}@cluster0.wcvrk4h.mongodb.net/rest-api`)
        .then(()=>console.log("DB connected"))
        .catch((err)=>console.log("db connection error",err))
    }
    catch(err){
        throw new Error('mongodb connection error')
    }
}