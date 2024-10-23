import Inventory from "../../../database/models/inventory.model.js"
import { inventoryValidation } from "./inventory.vaidation.js"

// add new inventory
const addInventoryItem = async (req, res) => {

    const {error} = inventoryValidation.validate(req.body)
    if (error) {
        return res.status(400).json({message: error.details[0].message})
    }
try {
    const { itemName, quantity, unit } = req.body
    const newItem = new Inventory({ itemName, quantity, unit })
    await newItem.save()
    res.status(201).json(newItem)
} catch (error) {
    res.status(500).json({ message: error.message })
}
}

// get all inventory
const getInventory = async (req, res) => {
try {
    const inventory = await Inventory.find()
    res.json(inventory)
} catch (error) {
    res.status(500).json({ message: error.message })
}
}

export { addInventoryItem, 
    getInventory 
}