import { userRepository } from "@/repositories/user-repository";
import { User } from "../Utils/Models/models";

const getUser = async ()=>{

        return  await userRepository.getUser()

}
const createUser = async (newUser:User) => {
        return await userRepository.createUser(newUser)
}

 export const userService = {
    getUser,
    createUser
}

