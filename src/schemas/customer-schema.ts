import Joi from "joi";
import { Customer } from "@/Utils/Models/models";

export const customerSchema = Joi.object<Customer>({
   name:Joi.string().required(),
   email:Joi.string(),
   address:Joi.string(),
   phone:Joi.string().required().min(11),
   instagram:Joi.string(),
   birthday:Joi.date()
 });
  