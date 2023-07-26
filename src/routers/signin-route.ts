import { Router } from "express";
import { userController } from "../controller/signin-controller";

const signinRoute = Router()

signinRoute.get('/', userController.getUser)


export {signinRoute}