import { Request , Response } from "express"
import { userService } from "@/services/user-services"

const getUser = async (req:Request , res:Response) => {


    try {
        const result = await  userService.getUser()
        console.log("RESULT", result)
        return res.status(200).send(result.rows[0]) 
    } catch (error) {
        console.log("ERRO", error )
        return res.status(400) 
        
    }

}


export const userController = {
    getUser

}