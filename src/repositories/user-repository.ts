import {db} from '@/config/connectdb'



const getUser = async  () =>   {
   
    return  await db.query (`SELECT * FROM "user"`);

}

const createUser = async(newUser:any)=>{
    try {
        return await db.query (`INSERT INTO "user" (username , password , user_admin) VALUES ($1 , $2 , $3) RETURNING id` , [newUser.username , newUser.password , newUser.user_admin])
    } catch (error:any) {
         return error.message       
    }
}

export const  userRepository  = {
    getUser,
    createUser
}