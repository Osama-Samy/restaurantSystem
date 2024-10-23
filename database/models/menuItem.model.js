import mongoose from 'mongoose'

const menuItemSchema = new mongoose.Schema({
name: { 
    type: String, 
    required: true,
    unique: true,
    min: 3
},
price: { 
    type: Number, 
    required: true 
},
description: { 
    type: String 
},
available: { 
    type: Boolean,
    required: true,
    default: true 
},
createdAt: { 
    type: Date, 
    default: Date.now 
}
})

export const MenuItem = mongoose.model('MenuItem', menuItemSchema)