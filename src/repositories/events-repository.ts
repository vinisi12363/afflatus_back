import { db } from "@/config";

export const getEvents = async () => {
    return await db.query(`SELECT 		
            cus.name,
            cus.birthday,
            chil.name AS child_name,
            chil.birthday AS child_birthday,
            spd.description AS description,
            spd.special_date AS special_date
        FROM "customers" AS cus 
        INNER JOIN "child" AS chil ON cus.id = chil.customer_id
        LEFT JOIN "SpecialDate" AS spd ON chil.id = spd.child_id;
    `);

};


export const eventsRepository = {
    getEvents
}