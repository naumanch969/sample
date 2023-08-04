import { Schema, model } from 'mongoose'

const userSchema = Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    avatar: { type: String, default: '' },
    password: { type: String },
}, { timestamps: true })

const userModel = model('User', userSchema)
export default userModel