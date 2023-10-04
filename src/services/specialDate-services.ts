import { specialDateRepository } from "@/repositories/specialDate-repository";
import { SpecialDate } from "@/Utils/Models/models";

export const saveSpecialDate = async (data:SpecialDate) => {
        try {
             return await specialDateRepository.insertSpecialDate(data);
        } catch (error) {
            throw error;
        }
}

export const findAll = async () => {
    try {
        return await specialDateRepository.getAllSpecialDates();
    } catch (error) {
        throw error;
    }
}

export const specialDateService = {
    saveSpecialDate,
    findAll
}