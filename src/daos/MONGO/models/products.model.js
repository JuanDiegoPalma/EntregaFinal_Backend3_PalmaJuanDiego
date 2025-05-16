import { Schema, model } from 'mongoose'

const productSchema = new Schema({
    title: String,
    code: {
        type: String,
        unique: true,
        required: true
    },
    category: String,
    price: Number
})

const productModel = model('products', productSchema)

export {
    productModel
}