import Joi from "joi";
import { User } from "@/Utils/Models/models";

export const userSchema = Joi.object<User>({
    username: Joi.string().required(),
    password: Joi.string().min(6).required(),
    user_admin: Joi.boolean().required()
 });
  