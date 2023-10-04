import { db } from "../config";
import { SpecialDate } from "../Utils/Models/models";


const insertSpecialDate = async (data:SpecialDate)=>{

    const specialDateId = await db.query(
      `INSERT INTO "SpecialDate" (description , specialDate, child_id) VALUES ($1 , $2)  RETURNING id`,
      [data.description, data.specialDate, data.child_id]
    );

    return specialDateId.rows[0].id
}

const getAllSpecialDates = async ()=>{
    const specialDates = await db.query(`SELECT * FROM "SpecialDate"`)
    return specialDates.rows
}

export const specialDateRepository = {
    insertSpecialDate,
    getAllSpecialDates
} 