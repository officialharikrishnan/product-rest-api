import mongoose from "mongoose";
import { schema } from "../../database/index.js";

const {Product} = schema

export default {
    insert:(data)=>{
        return Product.create(data)
    },
    getAll:()=>{
        return Product.find()
    },
    getById:(data)=>{
        console.log(data);
        return Product.findOne({_id:new mongoose.Types.ObjectId(data)})
    }
}