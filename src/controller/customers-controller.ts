import { Request , Response } from "express"



import { customerService } from "../services"
import httpStatus from "http-status"

const getCustomersAndChild = async (req:Request , res:Response) => {


    try {
        const result = await  customerService.findCustomersAndChildById(Number(req.params.id))
        console.log("RESULT", result)
        return res.status(httpStatus.OK).send(result) 
    } catch (error) {
        console.log("ERRO", error )
        return res.status(httpStatus.BAD_REQUEST) 
    }

}

const postCustomer = async(req:Request, res:Response) => {

    try {
        const result = await customerService.insertCustomer(req.body)
        console.log("RESULT", result)
        return res.status(httpStatus.OK).send(result) 
    } catch (error) {
        console.log("ERRO", error )
        return res.status(httpStatus.BAD_REQUEST) 
    }

}


export const customerController = {
    getCustomersAndChild,
    postCustomer
}