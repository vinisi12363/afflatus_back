import { userRepository } from "@/repositories/user-repository";


const getUser = async ()=>{

        return  await userRepository.getUser()

}

 export const userService = {
    getUser 

}

