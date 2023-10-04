import { Router } from "express";
import { eventsController } from "@/controller";

const eventsRoute = Router();

eventsRoute.get("/", eventsController.getEvents);


export {eventsRoute}
