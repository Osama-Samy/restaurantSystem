import mongoose from 'mongoose'

export const connectDB = mongoose.connect('mongodb://localhost:27017/restaurantSystem').then(() => {
    console.log('Connected successfully to MongoDB')
}).catch(() => {
    console.log('Error connecting to MongoDB')
})