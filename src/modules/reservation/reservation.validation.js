import joi from "joi"

export const reservationValidation = joi.object({
    customerName: joi.string().required(),
    date: joi.date().required(),
    time: joi.string().required(),
    numberOfPeople: joi.number().required(),
    tableNumber: joi.number().required()
})