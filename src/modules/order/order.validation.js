import Joi from "joi"

export const orderValidation = Joi.object({
    tableNumber: Joi.number().required(),
    items: Joi.array().required()
})