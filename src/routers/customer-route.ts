import { Router } from "express";
import { customerController } from "../controller";
import { validateBody } from "../middleware/validateBody-middleware";
import { customerSchema } from "../schemas/customer-schema";


const customersRoute = Router()

customersRoute.post('/' , validateBody(customerSchema), customerController.postCustomer)
customersRoute.get('/' , customerController.getAllCustomers)
customersRoute.get('/:id', customerController.getCustomersAndChild)


export {customersRoute}