import { Router } from "express";
import { signInController } from "../controller/signin-controller";
import { validateBody } from "../middleware/validateBody-middleware";
import { userLoginSchema } from "../schemas/user-login-schema";



const signInRoute = Router()

signInRoute.post('/',validateBody(userLoginSchema) , signInController.postLogin );

export {signInRoute}