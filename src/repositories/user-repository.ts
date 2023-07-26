import {db} from '@/config/connectdb'

const getUser = async  () =>   {
   
    return  await db.query (`SELECT * FROM "user"`);

}


export const  userRepository  = {
    getUser
}