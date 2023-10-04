import Joi from "joi";
import { Child } from "../Utils/Models/models";

export const childSchema = Joi.object<Child>({
    name:Joi.string().required(),
    birthday:Joi.date().required(),
    customer_id:Joi.number().required()
})