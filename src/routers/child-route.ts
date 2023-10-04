import { Router } from "express";
import { childController } from "../controller/childs-controller";
import { validateBody } from "../middleware/validateBody-middleware";
import { childSchema } from "@/schemas/child-schema";


const childsRoute = Router();

childsRoute.post("/", validateBody(childSchema), childController.postChild);
childsRoute.get("/", childController.getAllChildrens);
childsRoute.get("/:id", childController.getChildrensByCustomerId);


export {childsRoute}