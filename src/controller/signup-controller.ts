import { Request, Response } from "express";
import { signUpService } from "@/services/signUp-services";
import httpStatus, { HttpStatus } from "http-status";

const getUser = async (req: Request, res: Response) => {
  try {
    const result = await signUpService.getUser();
    console.log("RESULT", result);
    return res.status(httpStatus.OK).send(result.rows);
  } catch (error) {
    console.log("ERRO", error);
    return res.status(httpStatus.BAD_REQUEST);
  }
};

const postUser = async (req: Request, res: Response) => {
  try {
    const result = await signUpService.createUser(req.body);
    console.log("RESULT", result);
    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    console.log("ERRO", error);
    return res.status(httpStatus.BAD_REQUEST);
  }
};

export const signUpController = {
  getUser,
  postUser,
};
