// create violation function
import api from "..";

export const storeViolationType = async (data) => {
    try {
        const res = await api.post(`/violType/store`,data);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}

export const findViolationType = async (id) => {
    try {
        const res = await api.get(`/violType/find/${id}`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}

export const findAllViolationType = async () => {
    try {
        const res = await api.get(`/violType/find`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}

export const findOwnViolationType = async () => {
    try {
        const res = await api.get(`/violType/findOwn`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}

export const updateViolationType = async (data) => {
    try {
        const res = await api.patch(`/violType/update/${data.id}`,data);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}

export const deleteViolationType = async (id) => {
    try {
        const res = await api.delete(`/violType/delete/${id}`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}
