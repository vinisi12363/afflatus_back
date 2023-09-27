import { Router } from "express";
import { signUpController } from "@/controller/signup-controller";
import { validateBody } from "../middleware/validateBody-middleware";
import { userSchema } from "../schemas/user-schema";

const signUpRoute = Router()

signUpRoute.get('/', signUpController.getUser);
signUpRoute.post('/',validateBody(userSchema) , signUpController.postUser );

export {signUpRoute}