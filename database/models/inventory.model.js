import mongoose from 'mongoose'

const inventorySchema = new mongoose.Schema({
itemName: { 
    type: String, 
    required: true 
},
quantity: { 
    type: Number, 
    required: true 
},
unit: { 
    type: String, 
    required: true 
},
createdAt: { 
    type: Date, 
    default: Date.now 
}
})

const Inventory = mongoose.model('Inventory', inventorySchema)
export default Inventory;
