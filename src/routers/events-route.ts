import { Router } from "express";
import { eventsController } from "@/controller";
import { specialDateSchema } from "../schemas/specialdate-schema";
import { validateBody } from "../middleware/validateBody-middleware";
const eventsRoute = Router();

eventsRoute.get("/", eventsController.getEvents);
eventsRoute.post("/", validateBody(specialDateSchema) , eventsController.postEvents);


export {eventsRoute}
