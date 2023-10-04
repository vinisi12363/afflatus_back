import { db } from "../config";

import { Child} from "../Utils/Models/models";


const insertChild = async(child :Child) =>{

    const childInsert = await db.query (`insert into "child" (name , birthday, customer_id) values ($1, $2,$3) returning id`,[child.name, child.birthday, child.customer_id])

    return childInsert

}

const getAllChildrens = async () => {
    try {
        return await db.query(`SELECT * FROM "child"`)
    } catch (error) {
        throw error;
    }
}
const getChildrenByCustomerId = async (customer_id:number) => {
    try {
        return await db.query(`SELECT * FROM "child" WHERE customer_id = $1`,[customer_id])
    } catch (error) {
        throw error;
    }
}

export const childRepository = {
    insertChild,
    getAllChildrens,
    getChildrenByCustomerId,
} 