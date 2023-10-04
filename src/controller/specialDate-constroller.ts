import { Request, Response } from "express";
import httpStatus from "http-status";
import { specialDateService } from "@/services/specialDate-services";


export const getSpecialDate = async (req: Request, res: Response) => {
    try {
      const result = await specialDateService.saveSpecialDate(req.body);
      res.status(httpStatus.OK).send(result);
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
   
};

export const postSpecialDate = async (req: Request, res: Response) => {
      try {
        const result = await specialDateService.findAll();
        res.status(httpStatus.OK).send(result);
      } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
      }
};

export const specialDateController = {
    getSpecialDate,
    postSpecialDate
}
