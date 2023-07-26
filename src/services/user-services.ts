import { userRepository } from "@/repositories/user-repository";


const getUser = async ()=>{

        return  await userRepository.getUser()

}
const createUser = async (newUser:any) => {
        return await userRepository.createUser(newUser)
}

 export const userService = {
    getUser,
    createUser
}

