import express from 'express'
import { addInventoryItem, getInventory } from './inventory.controller.js'

const inventoryRouter = express.Router()

inventoryRouter.post('/inventory', addInventoryItem)

inventoryRouter.get('/inventory', getInventory)

export default  inventoryRouter
