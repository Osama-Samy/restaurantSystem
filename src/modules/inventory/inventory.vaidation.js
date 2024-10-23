import Joi from "joi"

export const inventoryValidation = Joi.object({
    itemName: Joi.string().required(),
    quantity: Joi.number().required(),
    unit: Joi.string().required()
})