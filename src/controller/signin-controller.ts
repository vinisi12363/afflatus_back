import { Request , Response } from "express"
import { userService } from "@/services/user-services"

const getUser = async (req:Request , res:Response) => {


    try {
        const result = await  userService.getUser()
        console.log("RESULT", result)
        return res.status(200).send(result.rows) 
    } catch (error) {
        console.log("ERRO", error )
        return res.status(400) 
    }

}

const postUser = async(req:Request, res:Response) => {

    try {
        const result = await  userService.createUser(req.body)
        console.log("RESULT", result)
        return res.status(200).send(result) 
    } catch (error) {
        console.log("ERRO", error )
        return res.status(400) 
    }

}


export const userController = {
    getUser,
    postUser
}