import { Reservation } from "../../../database/models/reservation.model.js"
import { reservationValidation } from "./reservation.validation.js"

// create new reservation
const createReservation = async (req, res) => {
    const {error} = reservationValidation.validate(req.body)
    if (error) {
        return res.status(400).json({message: error.details[0].message})
    }
try {
    const { customerName, date, time, numberOfPeople, tableNumber } = req.body
    const newReservation = new Reservation({ customerName, date, time, numberOfPeople, tableNumber })
    await newReservation.save()
    res.status(201).json(newReservation)
} catch (error) {
    res.status(500).json({ message: error.message })
}
}

// get all reservations
const getReservations = async (req, res) => {
try {
    const reservations = await Reservation.find()
    res.json(reservations)
} catch (error) {
    res.status(500).json({ message: error.message })
}
}

export { 
    createReservation, 
    getReservations 
}