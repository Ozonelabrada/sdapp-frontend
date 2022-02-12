// create violation function
import api from "..";
// create register function

export const findViolator = async (id) => {
    try {
        const res = await api.get(`/violator/find/${id}`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}

export const findAllViolator = async () => {
    try {
        const res = await api.get(`/violator/find`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}

export const findOwnViolator= async () => {
    try {
        const res = await api.get(`/violator/findOwn`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}
export const deleteViolator = async (id) => {
    try {
        const res = await api.delete(`/violator/delete/${id}`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}

