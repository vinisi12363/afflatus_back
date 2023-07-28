import { customersRepository } from "../repositories/customers-repository";
import { Customer } from "../Utils/Models/models";


const insertCustomer = async(customer:Customer) => {
    try {
        const customer_id = await customersRepository.insertCustomer(customer)
        return customer_id
    } catch (error) {
        throw error
    }
}

const findCustomersAndChildById = async (id:number)=>{
    try {
        const result  = await customersRepository.getCustomersAndChildById(id)
        return result
    } catch (error) {
        throw error
    }


}






 export const customerService = {
    insertCustomer,
    findCustomersAndChildById


}