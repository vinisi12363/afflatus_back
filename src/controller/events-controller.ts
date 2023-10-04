import { Request, Response } from "express";
import httpStatus from "http-status";


export const getEvents = async (req: Request, res: Response) => {
    try {
        //get events here

        return res.status(httpStatus.OK).send("events");
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

export const eventsController = {
    getEvents
}