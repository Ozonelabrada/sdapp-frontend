// create violation function
import api from "..";

export const storeViolation = async (data) => {
    try {
        const res = await api.post(`/violation/store`,data);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}

export const findViolation = async (id) => {
    try {
        const res = await api.get(`/violation/find/${id}`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}

export const findAllViolation = async () => {
    try {
        const res = await api.get(`/violation/find`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}

export const findOwnViolation = async () => {
    try {
        const res = await api.get(`/violation/findOwn`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}

export const updateViolation = async (data) => {
    try {
        const res = await api.patch(`/violation/update/${data.id}`,data);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}

export const deleteViolation = async (id) => {
    try {
        const res = await api.delete(`/violation/delete/${id}`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}
