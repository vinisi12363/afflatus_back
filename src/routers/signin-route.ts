import { Router } from "express";


const signinRoute = Router()

signinRoute.get('/', (req , res)=>{res.status(200).send({message:"i'm alive!"})})

export {signinRoute}