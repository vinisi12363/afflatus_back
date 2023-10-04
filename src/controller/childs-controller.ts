import { Request, Response } from "express";
import  httpStatus from "http-status";
import { childService } from "@/services/children-services";

export async function getAllChildrens(req: Request, res: Response) {
  try {
    const result = await childService.findAll();
    console.log("RESULT", result);
    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    console.log("ERRO", error);
    return res.status(httpStatus.BAD_REQUEST);
  }
}

export async function postChild(req: Request, res: Response) {
    console.log("REQ", {name: req.body.name, age: req.body.birthday, parentId: req.body.parentId});
  try {
    const result = await childService.insertChildren(req.body);
    console.log("RESULT", result);
    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    console.log("ERRO", error);
    return res.status(httpStatus.BAD_REQUEST);
  }
}

export async function getChildrensByCustomerId(req: Request, res: Response) {
   try {
     const result = await childService.findChildByParentId(Number(req.body));
     console.log("RESULT", result);
     return res.status(httpStatus.OK).send(result);
   } catch (error) {
     console.log("ERRO", error);
     return res.status(httpStatus.BAD_REQUEST);
   } 
}

export const childController = {
    getAllChildrens,
    postChild,
    getChildrensByCustomerId,
}