import { MenuItem } from "../../../database/models/menuItem.model.js"
import menuValidation from "./menu.validation.js"

// add new menu
const addMenuItem = async (req, res) => {
    const {error} = menuValidation.validate(req.body)
    if (error) {
        return res.status(400).json({message: error.details[0].message})
    }
try {
    const { name, price, description } = req.body
    const newMenuItem = new MenuItem({ name, price, description })
    await newMenuItem.save()
    res.status(201).json(newMenuItem)
} catch (error) {
    res.status(500).json({ message: error.message })
}
}

// get all menu
const getMenu = async (req, res) => {
try {
    const menu = await MenuItem.find()
    res.json(menu)
} catch (error) {
    res.status(500).json({ message: error.message })
}
}

export { 
    addMenuItem, 
    getMenu 
}