import { Router } from "express";
import { userController } from "../controller/signin-controller";
import { validateBody } from "../middleware/validateBody-middleware";
import { userSchema } from "../schemas/user-schema";

const signinRoute = Router()

signinRoute.get('/', userController.getUser);
signinRoute.post('/',validateBody(userSchema) , userController.postUser );

export {signinRoute}