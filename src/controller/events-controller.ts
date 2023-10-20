import { Request, Response } from "express";
import httpStatus from "http-status";
import { eventsService } from "@/services";


export const getEvents = async (req: Request, res: Response) => {
    try {
        const result = await eventsService.getEvents();
        console.log("RESULT", result);
        return res.status(httpStatus.OK).send(result.rows);
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
};
export const postEvents = async (req: Request, res: Response) => {
    try {
        const result = await eventsService.postEvents(req.body);
        console.log("RESULT", result);
        res.status(httpStatus.OK).send(result.rows);
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }

}
export const eventsController = {
  getEvents,
  postEvents
};