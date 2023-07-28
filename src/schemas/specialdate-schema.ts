import Joi from "joi";
import { SpecialDate } from "../Utils/Models/models";

const specialDateSchema = Joi.object<SpecialDate>({
    description:Joi.string().required(),
    specialDate:Joi.string().required()
})