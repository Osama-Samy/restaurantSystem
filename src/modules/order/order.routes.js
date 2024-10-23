import express from 'express'
import { createOrder, getOrders } from './order.controller.js'
const orderRouter = express.Router()

orderRouter.post('/orders', createOrder)

orderRouter.get('/orders', getOrders)

export default orderRouter