import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
tableNumber: {
    type: Number, 
    required: true
},

items: [
    {
    menuItem: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'MenuItem' 
    },
    quantity: { 
        type: Number, 
        required: true 
    },
    },
],
status: { 
    type: String, 
    default: 'pending' 
}, 
totalAmount: { 
    type: Number, 
    required: true 
},
createdAt: { type: Date, 
    default: Date.now 
},
})

export const Order = mongoose.model('Order', orderSchema)