import { userRepository } from "@/repositories/user-repository";
import { sessionRepository } from "@/repositories/session-repository";
import jwt from 'jsonwebtoken';
import { User } from "../Utils/Models/models";


const secretKey = process.env.JWT_SECRET as string;
type UserWithoutAdmin = Omit<User, 'user_admin'>;

const getUserByUsername = async (userdata:UserWithoutAdmin)=>{

        return  await userRepository.getUserByUsername(userdata.username)

}
const postLogin = async (userData:UserWithoutAdmin) => {
        console.log("userData dentro do postlogin", userData);
        const user = await getUserByUsername(userData);
         console.log("user dentro do postlogin", user);
        if (!user) {
        return null;
        }
        const token = generateWebToken(userData);
        if (!token) {
        return null;
        }
        const session = await sessionRepository.createSession(Number(user.id), token);
        console.log ("session dentro do postlogin" , session);
        
        if (!session) {
        return null;
        }

        return {
        token,
        user,
        };
  
}
const generateWebToken = (userData:UserWithoutAdmin) => {
 
  const payload = {
    username: userData.username,
  };

  const options = {
    expiresIn: '24h',
  };

  try {
    const token = jwt.sign(payload, secretKey, options);
    return token;
  } catch (error) {
    console.error('Erro ao gerar o token:', error);
    return null;
  }
}



 export const loginService = {
    getUserByUsername,
    postLogin
}

