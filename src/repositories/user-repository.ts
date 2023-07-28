import {db} from '@/config/connectdb'
import { User } from "../Utils/Models/models";

const findUserById = async (id:number)=> {

    return await db.query(`SELECT user.id from "user" where id = $1 `, [id])


}
const getUser = async  () =>   {
   
    return  await db.query (`SELECT * FROM "user"`);

}

const createUser = async(newUser:User)=>{

     return await db.query (`INSERT INTO "user" (username , password , user_admin) VALUES ($1 , $2 , $3) RETURNING id` , [newUser.username , newUser.password , newUser.user_admin])
   
}


export const  userRepository  = {
    getUser,
    createUser,
    findUserById
}