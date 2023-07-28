import { db } from "../config";

import { Child} from "../Utils/Models/models";


const insertChild = async(child :Child , customer_id:number) =>{

    const childInsert = await db.query (`insert into "child" (name , birthday, customer_id) values ($1, $2,$3) returning id`,[child.name, child.birthday, customer_id])

    return childInsert

}

export const childRepository = {
    insertChild
} 