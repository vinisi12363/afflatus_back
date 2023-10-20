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

async function postEvents(body: any) {
    return await db.query(`INSERT INTO "SpecialDate" (child_id, description, special_date) VALUES ($1, $2, $3)`, [body.child_id, body.description, body.special_date]);
}



export const eventsRepository = {
    getEvents, postEvents
}