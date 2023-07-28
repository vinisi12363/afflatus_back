import { db } from "../config";
import { SpecialDate } from "../Utils/Models/models";


const insertSpecialDate = async (date: SpecialDate , child_id:number)=>{

    const specialDateId = await db.query (`INSERT INTO "SpecialDate" (description , specialDate, child_id) VALUES ($1 , $2)  RETURNING id`,[date.description , date.specialDate, child_id] )

    return specialDateId.rows[0].id


}


export const specialDateRepository = {
    insertSpecialDate
} 