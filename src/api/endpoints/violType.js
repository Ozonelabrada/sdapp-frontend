// create violation function
import api from "..";

export const storeViolationType = async (data) => {
    try {
        const res = await api.post(`/violation/type/store`,data);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}

export const findViolationType = async (id) => {
    try {
        const res = await api.get(`/violation/type/find/${id}`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}

export const findAllViolationType = async () => {
    try {
        const res = await api.get(`/violation/type/find`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}

export const findOwnViolationType = async () => {
    try {
        const res = await api.get(`/violation/type/findOwn`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}

export const updateViolationType = async (data) => {
    try {
        const res = await api.patch(`/violation/type/update/${data.id}`,data);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}

export const deleteViolationType = async (id) => {
    try {
        const res = await api.delete(`/violation/type/delete/${id}`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}
