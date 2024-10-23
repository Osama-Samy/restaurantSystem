import mongoose from 'mongoose'

const reservationSchema = new mongoose.Schema({
customerName: { 
    type: String, 
    required: true 
},
date: { 
    type: Date, 
    required: true 
},
time: { 
    type: String, 
    required: true 
},
numberOfPeople: { 
    type: Number, 
    required: true 
},
tableNumber: { 
    type: Number, 
    required: true 
},
createdAt: { 
    type: Date, 
    default: Date.now 
}
})

export const Reservation = mongoose.model('Reservation', reservationSchema)