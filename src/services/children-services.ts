
import { Child } from "../Utils/Models/models";
import { childRepository } from "../repositories/child-repository";


const insertChildren = async (child: Child) => {
  console.log("children dentro da função :  ", child);
  try {
    const promise = await childRepository.insertChild(child);
    return promise;
  } catch (error) {
    throw error;
  }
};
const findAll = async () => {
    try {
        return await childRepository.getAllChildrens();
    } catch (error) {
        throw error;
    }

}
const findChildByParentId = async (id:number)=>{
    try {
        const result  = await childRepository.getChildrenByCustomerId(id)
        return result
    } catch (error) {
        throw error
    }


}






 export const childService = {
   insertChildren,
   findChildByParentId,
   findAll,
 };