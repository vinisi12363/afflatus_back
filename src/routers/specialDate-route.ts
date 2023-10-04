import { Router } from "express";
import { specialDateController } from "@/controller";
import { validateBody } from "@/middleware/validateBody-middleware";
import { specialDateSchema } from "@/schemas/specialdate-schema";
const specialDateRoute = Router();

specialDateRoute.post("/", validateBody(specialDateSchema),specialDateController.postSpecialDate);
specialDateRoute.get("/", specialDateController.getSpecialDate);


export {specialDateRoute}