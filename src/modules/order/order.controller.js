import { Order } from "../../../database/models/order.model.js"
import { orderValidation } from "./order.validation.js"

// create new order
const createOrder = async (req, res) => {
    const {error} = orderValidation.validate(req.body)
    if (error) {
        return res.status(400).json({message: error.details[0].message})
    }
try {
    const { tableNumber, items, totalAmount } = req.body
    const newOrder = new Order({ tableNumber, items, totalAmount })
    await newOrder.save()
    res.status(201).json(newOrder)
} catch (error) {
    res.status(500).json({ message: error.message })
}
}

// get all orders
const getOrders = async (req, res) => {
try {
    const orders = await Order.find().populate('items.menuItem')
    res.json(orders)
} catch (error) {
    res.status(500).json({ message: error.message })
}
}

export { 
    createOrder, 
    getOrders 
}
