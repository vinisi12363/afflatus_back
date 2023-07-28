import { db } from "../config";
import { Customer } from "../Utils/Models/models";
import { Child } from "../Utils/Models/models";
//TODO fazer o get customers  com join depois ... 

const getCustomersAndChildById = async()=>{

    return await db.query(`select customers.name , customers.birthday , child.name , child.birthday from "customers" INNER JOIN "child" ON child.customer_id = customers.id`)

}

const getCustomers = async ()=> {

    return await db.query(`SELECT * FROM "customers"`)

 }

 const insertCustomer = async (customer: Customer)=> {

    const customerInsert = await db.query(`insert into "customers" (name, email, address, phone, instagram , birthday) 
    values ($1 , $2,$3 , $4 , $5 , $5) RETURNING id`, [customer.name, customer.email, customer.address, customer.phone, customer.instagram, customer.birthday])

    return customerInsert.rows[0].id


}


export const customersRepository = {
    getCustomers,
    getCustomersAndChildById,
    insertCustomer
}