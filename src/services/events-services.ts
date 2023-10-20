import { eventsRepository } from '../repositories/events-repository';


const getEvents = async () => {
    try {
        return await eventsRepository.getEvents();
    } catch (error) {
        throw error;
    }
}
const postEvents = async (body: any) => {
    try {
        return await eventsRepository.postEvents(body);
    } catch (error) {
        throw error;
    }
}


export const eventsService = {
    getEvents, 
    postEvents,
};