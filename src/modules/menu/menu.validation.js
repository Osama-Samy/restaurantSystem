import Joi from "joi"

const menuValidation = Joi.object({
    name: Joi.string().required().min(3),
    price: Joi.number().required(),
    description: Joi.string(),
    available: Joi.boolean()
})

export default menuValidation