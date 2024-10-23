import express from 'express'
import { createReservation, getReservations } from './reservation.controller.js'

const router = express.Router()

router.post('/reservations', createReservation)

router.get('/reservations', getReservations)

export default router
