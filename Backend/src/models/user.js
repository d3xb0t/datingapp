import mongoose from 'mongoose'

const usersCollection = "users"
const subSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
})
const userSchema = mongoose.Schema({
    name: String,
    imgUrl: String,
    likes: Number,
    dislikes: Number,
    platonic: [subSchema],
    admirers: [subSchema],
    matchs: [subSchema]
})

export const userModel = mongoose.model(usersCollection, userSchema)

