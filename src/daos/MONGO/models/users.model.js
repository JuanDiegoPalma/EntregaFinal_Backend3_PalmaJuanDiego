import { Schema, model } from 'mongoose'

const usersCollection = 'users'
const usersSchema = new Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ['user', 'admin'], 
        default: 'user'
    }
     
})

export const userModel = model(usersCollection, usersSchema)

