import { db } from "@/config";


const createSession =  async (userId: number, token: string) => {
    return await db.query(
      `INSERT INTO "session" (user_id , token) VALUES ($1 , $2) RETURNING id`,
      [userId, token]
    );
  }
const getSessionByToken =  async (token: string) => {
    return await db.query(`SELECT * FROM "session" WHERE token = $1`, [token]);
  }
const deleteSession = async (token: string) => {
    return await db.query(`DELETE FROM "session" WHERE token = $1`, [token]);
  }
export const sessionRepository = {
    createSession, 
    getSessionByToken,
    deleteSession
};