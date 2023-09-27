import {db} from '@/config/connectdb'
import { User } from "../Utils/Models/models";
import { number } from 'joi';

const getUserById = async (id:number)=> {

    return await db.query(`SELECT user.id from "user" where id = $1 `, [id])


}
const getUser = async  () =>   {
   
    return  await db.query (`SELECT * FROM "user"`);

}

const createUser = async(newUser:User)=>{

     return await db.query (`INSERT INTO "user" (username , password , user_admin) VALUES ($1 , $2 , $3) RETURNING id` , [newUser.username , newUser.password , newUser.user_admin])
   
}
const getUserByUsername = async (username:string)=>{
    try {
              const user = await db.query(
                `SELECT * FROM "user" WHERE username = $1`,
                [username]
              );
              return {
                id: user.rows[0].id,
                username: user.rows[0].username,
                password: user.rows[0].password,
              };
    } catch (error) {
        console.error("Erro ao procurar o usuário no banco de dados:", error);
        return null;
    }
  
}


export const  userRepository  = {
    getUser,
    createUser,
    getUserByUsername,
    getUserById
}