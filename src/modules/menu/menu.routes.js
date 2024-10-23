import express from 'express'
import { addMenuItem, getMenu } from './menu.controller.js'

const menuRouter = express.Router()

menuRouter.post('/menu', addMenuItem)

menuRouter.get('/menu', getMenu)

export default menuRouter
