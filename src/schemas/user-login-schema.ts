import Joi from "joi";
import { User } from "@/Utils/Models/models";

export const userLoginSchema = Joi.object<User>({
    username: Joi.string().required(),
    password: Joi.string().min(6).required(),
 });
  