import Joi from "joi";
import { SpecialDate } from "../Utils/Models/models";

export const specialDateSchema = Joi.object<SpecialDate>({
    description:Joi.string().required(),
    special_date:Joi.string().required(),
    child_id:Joi.number().required()
})