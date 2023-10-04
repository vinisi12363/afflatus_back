import { db } from "../config";
import { Customer } from "../Utils/Models/models";
import { Child } from "../Utils/Models/models";
//TODO fazer o get customers  com join depois ... 

const getCustomersAndChildById = async (customer_id: number) => {

    return await db.query(` SELECT customers.name AS customer_name, customers.birthday AS customer_birthday,
    child.name AS child_name, child.birthday AS child_birthday
    FROM customers
LEFT JOIN child ON child.customer_id = customers.id
WHERE customers.id = $1;`, [customer_id])

}

const getCustomers = async () => {

      try {
        return await db.query(`SELECT * FROM "customers"`);
      } catch (error) {
        throw error;
      }

}
const findAll = async () => {
    try {
        return await db.query(`SELECT * FROM "customers"`)
    } catch (error) {
        throw error;
    }
}
const insertCustomer = async (customer: Customer) => {

    const customerInsert = await db.query(`insert into "customers" (name, cpf, address, phone, instagram , birthday) 
    values ($1 , $2, $3 , $4 , $5, $6 ) RETURNING id`, [customer.name, customer.cpf, customer.address, customer.phone, customer.instagram, customer.birthday])
    return customerInsert.rows[0].id


}


export const customersRepository = {
    getCustomers,
    getCustomersAndChildById,
    insertCustomer,
    findAll 
}