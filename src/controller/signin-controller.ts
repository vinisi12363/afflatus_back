import { Request , Response } from "express"
import { loginService } from "@/services/signIn-services"
import httpStatus, { HttpStatus } from "http-status" 


const postLogin = async(req:Request, res:Response) => {

    try {
        const result = await  loginService.postLogin(req.body)
        if (result === null) {
            return res.status(httpStatus.BAD_REQUEST).send("Usuário ou senha inválidos");
        }
        return res.status(httpStatus.OK).send(result) 
    } catch (error) {
        console.log("ERRO", error )
        return res.status(httpStatus.BAD_REQUEST)
    }

}


export const signInController = {
    postLogin
}