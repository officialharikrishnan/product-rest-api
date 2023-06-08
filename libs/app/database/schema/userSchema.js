import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    productName:String,
    description:String,
    price:Number,
    company:String,
    storage:String,
    ram:String
},{versionKey: false})

const Product = mongoose.model('products',productSchema)

export {
    Product
}