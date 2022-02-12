// create violation function
import api from "..";
// create register function

export const findEvent = async (id) => {
    try {
        const res = await api.get(`/event/find/${id}`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}

export const findAllEvent = async () => {
    try {
        const res = await api.get(`/event/find`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}

export const findOwnEvent= async () => {
    try {
        const res = await api.get(`/event/findOwn`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}

