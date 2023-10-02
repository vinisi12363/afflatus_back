import { customersRepository } from "../repositories/customers-repository";
import { Customer } from "../Utils/Models/models";


const insertCustomer = async(customer:Customer) => {
    console.log('customer dentro da função :  ', customer);
    try {
        const { id }= await customersRepository.insertCustomer(customer)
        return id;
    } catch (error) {
        throw error;
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